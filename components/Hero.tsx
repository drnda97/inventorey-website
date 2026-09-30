import Link from "next/link";
import { locales, type Content, type Locale } from "@/i18n/content";
import Photo from "./Photo";

export default function Hero({ t, locale }: { t: Content; locale: Locale }) {
  const navLink = "whitespace-nowrap px-[14px] py-[9px] text-sm font-medium text-[#E7ECF1] hover:text-white";
  return (
    <section id="top" className="relative flex min-h-[720px] flex-col overflow-hidden rounded-[26px]">
      <div className="absolute inset-0">
        <Photo label={t.hero.photo} src="/photos/hero-gradiliste.jpg" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,50,0.72)_0%,rgba(15,32,50,0.42)_45%,rgba(15,32,50,0.78)_100%)]" />

      <div className="relative flex flex-wrap items-center gap-5 px-[34px] py-[26px]">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <span className="h-[15px] w-[15px] border-2 border-ochre" />
          <span className="text-[19px] font-bold tracking-[0.04em] text-white">INVENTOREY</span>
        </a>
        <nav className="mx-auto hidden min-w-0 shrink items-center gap-0.5 overflow-hidden rounded-full bg-white/10 p-[5px] lg:flex">
          <a href="#top" className="whitespace-nowrap rounded-full bg-white px-5 py-[9px] text-sm font-medium text-ink">{t.nav.home}</a>
          <a href="#how" className={navLink}>{t.nav.how}</a>
          <a href="#features" className={navLink}>{t.nav.features}</a>
          <a href="#says" className={navLink}>{t.nav.says}</a>
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
          <a href="#cta" className="whitespace-nowrap rounded-full bg-white px-[22px] py-3 text-sm font-semibold text-ink">
            {t.nav.get}
          </a>
        </div>
      </div>

      <div className="relative mt-auto flex items-end justify-between gap-10 px-[34px] pb-14">
        <div className="max-w-[720px]">
          <h1 className="mb-[22px] text-[clamp(36px,5.4vw,62px)] font-bold leading-[1.02] tracking-[-0.035em] text-white">
            {t.hero.title}
          </h1>
          <p className="mb-[30px] max-w-[470px] text-[16.5px] leading-relaxed text-[#D3DBE3]">{t.hero.body}</p>
          <div className="flex flex-wrap gap-3">
            <a href="#cta" className="rounded-full bg-accent px-[26px] py-3.5 text-[15px] font-semibold text-white hover:bg-accentDark">
              {t.nav.get}
            </a>
            <a href="#how" className="rounded-full border border-white/45 px-[26px] py-3.5 text-[15px] font-medium text-white hover:border-white">
              {t.nav.learn}
            </a>
          </div>
        </div>
        <a href="#how" className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-white/45 text-xl text-white">
          ↓
        </a>
      </div>

      <div className="absolute right-[34px] top-[104px] hidden max-w-[300px] items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.14] p-2.5 backdrop-blur md:flex">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/shots/panel.png" alt="" className="block w-[62px] rounded-[10px]" />
        <div>
          <div className="text-sm font-semibold text-white">{t.hero.badgeN}</div>
          <div className="text-[12.5px] leading-snug text-[#D3DBE3]">{t.hero.badgeLabel}</div>
        </div>
      </div>
    </section>
  );
}
