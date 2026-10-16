"use client";

import { useEffect, useRef, useState } from "react";
import type { Content, Locale } from "@/i18n/content";

type Status = "idle" | "sending" | "success" | "invalid" | "error";

export default function Signup({ t, locale }: { t: Content; locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const input = useRef<HTMLInputElement>(null);

  // Every "Get early access" button links to #signup; land with the cursor in the field.
  useEffect(() => {
    const focus = () => window.location.hash === "#signup" && input.current?.focus({ preventScroll: true });
    focus();
    window.addEventListener("hashchange", focus);
    return () => window.removeEventListener("hashchange", focus);
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return setStatus("invalid");

    setStatus("sending");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, locale, company: data.get("company") }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus(res.status === 400 ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  const s = t.signup;
  const message = status === "success" ? s.success : status === "invalid" ? s.invalid : status === "error" ? s.error : "";

  return (
    <form id="signup" onSubmit={onSubmit} noValidate className="w-full max-w-[460px] scroll-mt-24">
      <div className="flex flex-col gap-2.5 sm:flex-row">
        <label htmlFor="signup-email" className="sr-only">{s.label}</label>
        <input
          ref={input}
          id="signup-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder={s.placeholder}
          aria-invalid={status === "invalid"}
          aria-describedby="signup-message"
          disabled={status === "sending"}
          className="min-w-0 flex-1 rounded-full border border-white/25 bg-white/10 px-5 py-[14px] text-[15px] text-white placeholder:text-[#AFC0CF] focus:border-white focus:bg-white/15 focus:outline-none"
        />
        {/* Honeypot: hidden from people and screen readers, filled only by bots. */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-px w-px opacity-0" />
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-arrow flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-7 py-[14px] text-[15px] font-semibold text-white hover:bg-accentDark disabled:opacity-70"
        >
          {status === "sending" ? s.sending : s.button} <span aria-hidden>→</span>
        </button>
      </div>
      <p id="signup-message" aria-live="polite" className={"mt-3 min-h-[1.5em] text-sm " + (status === "success" ? "font-medium text-[#F3D58F]" : "text-[#F5B7AC]")}>
        {message}
      </p>
      <p className="text-[12.5px] leading-relaxed text-[#AFC0CF]">{s.consent}</p>
    </form>
  );
}
