import type { Content } from "@/i18n/content";
import Photo from "./Photo";

export default function Why({ t }: { t: Content }) {
  return (
    <section className="px-[34px] pb-[78px]">
      <div className="relative flex min-h-[480px] items-center overflow-hidden rounded-[26px]">
        <div className="absolute inset-0">
          <Photo label={t.why.photo} src="/photos/zasto-kran.jpg" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,32,50,0.86)_0%,rgba(15,32,50,0.55)_100%)]" />
        <div className="relative grid w-full grid-cols-1 items-center gap-[60px] px-10 py-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white">{t.why.title}</h2>
            <p className="mb-[30px] max-w-[380px] text-base leading-relaxed text-onDark">{t.why.body}</p>
            <a href="#cta" className="inline-block rounded-full bg-accent px-[26px] py-3.5 text-[15px] font-semibold text-white hover:bg-accentDark">
              {t.nav.get}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {t.why.cards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white px-6 py-[22px]">
                <div className="mb-3.5 h-8 w-8 rounded-[9px] bg-accent" />
                <h3 className="mb-1.5 text-[17px] font-semibold">{c.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
