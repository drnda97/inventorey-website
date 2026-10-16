import Link from "next/link";
import { locales, type Content, type Locale } from "@/i18n/content";
import Photo from "./Photo";
import { delay } from "./delay";

export default function Hero({ t, locale }: { t: Content; locale: Locale }) {
  const navLink = "whitespace-nowrap px-[14px] py-[9px] text-sm font-medium text-[#E7ECF1] hover:text-white";
  return (
    <section id="top" className="relative flex min-h-[720px] flex-col overflow-hidden rounded-[26px]">
      <div className="kenburns absolute inset-0">
        <Photo alt="" src="/photos/hero-gradiliste.jpg" eager />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,50,0.72)_0%,rgba(15,32,50,0.42)_45%,rgba(15,32,50,0.78)_100%)]" />

      <div className="rise relative flex flex-wrap items-center gap-5 px-[34px] py-[26px]">
        <a href="#top" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/inventorey-logo-dark.svg" alt="Inventorey" className="block h-9 w-auto" />
        </a>
        <nav className="mx-auto hidden min-w-0 shrink items-center gap-0.5 overflow-hidden rounded-full bg-white/10 p-[5px] lg:flex">
          <a href="#top" className="whitespace-nowrap rounded-full bg-white px-5 py-[9px] text-sm font-medium text-ink">{t.nav.home}</a>
          <a href="#how" className={navLink}>{t.nav.how}</a>
          <a href="#features" className={navLink}>{t.nav.features}</a>
          <a href="#roles" className={navLink}>{t.nav.roles}</a>
          <a href="#faq" className={navLink}>{t.nav.faq}</a>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-3">
          <div className="flex gap-0.5 rounded-full border border-white/30 p-[3px] text-xs font-semibold">
            {locales.map((l) => (
              <Link
                key={l}
                href={"/" + l}
                className={"rounded-full px-[11px] py-1.5 " + (l === locale ? "bg-white text-ink" : "text-[#E7ECF1] hover:text-white")}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
          <a href="#signup" className="whitespace-nowrap rounded-full bg-white px-[22px] py-3 text-sm font-semibold text-ink">
            {t.nav.get}
          </a>
        </div>
      </div>

      <div className="relative mt-auto flex items-end justify-between gap-10 px-[34px] pb-14">
        <div className="max-w-[720px]">
          <h1 className="rise mb-[22px] text-[clamp(36px,5.4vw,62px)] font-bold leading-[1.02] tracking-[-0.035em] text-white" style={delay(1, 120)}>
            {t.hero.title}
          </h1>
          <p className="rise mb-[30px] max-w-[470px] text-[16.5px] leading-relaxed text-[#D3DBE3]" style={delay(2, 120)}>{t.hero.body}</p>
          <div className="rise flex flex-wrap gap-3" style={delay(3, 120)}>
            <a href="#signup" className="btn-arrow inline-flex items-center gap-2 rounded-full bg-accent px-[26px] py-3.5 text-[15px] font-semibold text-white hover:bg-accentDark">
              {t.nav.get} <span aria-hidden>→</span>
            </a>
            <a href="#how" className="rounded-full border border-white/45 px-[26px] py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white hover:bg-white/10">
              {t.nav.learn}
            </a>
          </div>
        </div>
        <a href="#how" aria-label={t.nav.learn} className="rise flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/45 text-xl text-white transition-colors hover:bg-white/10" style={delay(4, 120)}>
          <span className="bob">↓</span>
        </a>
      </div>

      <div className="rise absolute right-[34px] top-[104px] hidden max-w-[300px] items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.14] p-2.5 backdrop-blur md:flex" style={delay(5, 120)}>
        <span className="absolute -right-1 -top-1 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ochre opacity-70" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-ochre" />
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/shots/panel.png" alt={t.hero.shotAlt} className="block w-[62px] rounded-[10px]" />
        <div>
          <div className="text-sm font-semibold text-white">{t.hero.badgeN}</div>
          <div className="text-[12.5px] leading-snug text-[#D3DBE3]">{t.hero.badgeLabel}</div>
        </div>
      </div>
    </section>
  );
}
