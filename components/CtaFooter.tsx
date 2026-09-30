import type { Content } from "@/i18n/content";
import Photo from "./Photo";

export default function CtaFooter({ t }: { t: Content }) {
  return (
    <section id="cta" className="pb-[18px]">
      <div className="relative overflow-hidden rounded-[26px] px-10 pb-10 pt-[60px]">
        <div className="absolute inset-0">
          <Photo label={t.cta.photo} src="/photos/cta-gradiliste-sumrak.jpg" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[rgba(15,32,50,0.84)]" />

        <div className="relative mb-11 flex flex-wrap items-center justify-between gap-10">
          <div>
            <h2 className="mb-3 max-w-[420px] text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white">{t.cta.title}</h2>
            <p className="max-w-[420px] text-[15.5px] leading-relaxed text-onDark">{t.cta.body}</p>
          </div>
          <a href="#top" className="flex items-center gap-2.5 rounded-full bg-accent px-7 py-[15px] text-[15px] font-semibold text-white hover:bg-accentDark">
            {t.nav.get} ↗
          </a>
        </div>

        <div className="relative grid grid-cols-1 gap-8 rounded-[20px] bg-white p-[30px] md:grid-cols-3 lg:grid-cols-5">
          <div className="rounded-[14px] bg-accent p-[22px] text-white">
            <div className="mb-3.5 flex items-center gap-2.5">
              <span className="h-[13px] w-[13px] border-2 border-white" />
              <span className="text-[15.5px] font-bold tracking-[0.04em]">INVENTOREY</span>
            </div>
            <p className="mb-[18px] text-[13px] leading-relaxed text-accentSoft">{t.cta.blurb}</p>
            <div className="mb-2 rounded-full bg-white/[0.16] px-4 py-2.5 text-[12.5px] text-[#FBEAE7]">{t.cta.email}</div>
            <div className="rounded-full bg-white px-4 py-2.5 text-center text-[12.5px] font-semibold text-accent">{t.cta.subscribe}</div>
          </div>
          {t.cta.columns.map((col) => (
            <div key={col.title}>
              <div className="mb-3.5 text-[14.5px] font-semibold">{col.title}</div>
              <div className="flex flex-col gap-[9px] text-[13.5px] text-muted">
                {col.links.map((l) => (
                  <a key={l} href="#top" className="text-muted hover:text-accent">{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
