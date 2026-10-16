import { contactEmail, type Content, type Locale } from "@/i18n/content";
import Photo from "./Photo";
import Signup from "./Signup";

export default function CtaFooter({ t, locale }: { t: Content; locale: Locale }) {
  return (
    <footer id="cta" className="pb-[18px]">
      <div data-reveal className="relative overflow-hidden rounded-[26px] px-10 pb-10 pt-[60px]">
        <div className="absolute inset-0">
          <Photo alt="" src="/photos/cta-gradiliste-sumrak.jpg" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[rgba(15,32,50,0.84)]" />

        <div className="relative mb-11 flex flex-wrap items-start justify-between gap-10">
          <div>
            <h2 className="mb-3 max-w-[420px] text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white">{t.cta.title}</h2>
            <p className="max-w-[460px] text-[15.5px] leading-relaxed text-onDark">{t.cta.body}</p>
          </div>
          <Signup t={t} locale={locale} />
        </div>

        <div className="relative grid grid-cols-1 gap-8 rounded-[20px] bg-white p-[30px] md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[14px] bg-accent p-[22px] text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/inventorey-logo-white.svg" alt="Inventorey" className="mb-3.5 block h-7 w-auto" />
            <p className="mb-[18px] text-[13px] leading-relaxed text-accentSoft">{t.cta.blurb}</p>
            <a
              href="#signup"
              className="block rounded-full bg-white px-4 py-2.5 text-center text-[12.5px] font-semibold text-accent hover:bg-accentSoft"
            >
              {t.nav.get} ↑
            </a>
          </div>
          {t.cta.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-3.5 text-[14.5px] font-semibold">{col.title}</div>
              <div className="flex flex-col gap-[9px] text-[13.5px] text-muted">
                {col.links.map((l) => (
                  <a key={l.label} href={l.href} className="text-muted hover:text-accent">{l.label}</a>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div className="mb-3.5 text-[14.5px] font-semibold">{t.cta.contact}</div>
            <div className="flex flex-col gap-[9px] text-[13.5px] text-muted">
              <span className="break-all select-all">{contactEmail}</span>
              <span>{t.cta.copyright}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
