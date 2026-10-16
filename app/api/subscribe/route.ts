import nodemailer, { type Transporter } from "nodemailer";
import { NextResponse, type NextRequest } from "next/server";
import { content, locales, type Locale } from "@/i18n/content";

// Early-access signup. Sends one email to the team (MAIL_TO) and a confirmation to the subscriber.
// SMTP settings come from the environment — see .env.example.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Best-effort limit per IP: 5 signups per 10 minutes, per server instance.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

let transporter: Transporter | null = null;
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;
  const port = Number(SMTP_PORT || 465);
  transporter ??= nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
  return transporter;
}

export async function POST(request: NextRequest) {
  let body: { email?: unknown; locale?: unknown; company?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }

  // Honeypot: the "company" field is hidden from people, so only bots fill it. Pretend it worked.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const locale: Locale = locales.includes(body.locale as Locale) ? (body.locale as Locale) : "en";

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.ip || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate" }, { status: 429 });
  }

  const mailer = getTransporter();
  const from = process.env.MAIL_FROM || process.env.SMTP_USER;
  const to = process.env.MAIL_TO || process.env.SMTP_USER;
  if (!mailer || !from || !to) {
    console.error("[subscribe] SMTP is not configured — set SMTP_HOST, SMTP_USER and SMTP_PASS in .env.local");
    return NextResponse.json({ error: "server" }, { status: 500 });
  }

  try {
    await mailer.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Inventorey rani pristup: ${email}`,
      text: `Nova prijava za rani pristup.\n\nEmail: ${email}\nJezik: ${locale}\nVreme: ${new Date().toISOString()}\n`,
    });
  } catch (err) {
    console.error("[subscribe] could not send the team notification", err);
    return NextResponse.json({ error: "server" }, { status: 502 });
  }

  // The signup is already recorded in the team inbox, so a failed confirmation is logged, not shown.
  const t = content[locale].signup;
  try {
    await mailer.sendMail({ from, to: email, replyTo: to, subject: t.mailSubject, text: t.mailBody });
  } catch (err) {
    console.error("[subscribe] could not send the confirmation to", email, err);
  }

  return NextResponse.json({ ok: true });
}
