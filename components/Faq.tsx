import type { Content } from "@/i18n/content";
import Photo from "./Photo";

export default function Faq({ t }: { t: Content }) {
  return (
    <section id="faq" className="px-[34px] pb-[78px]">
      <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="mb-3.5 max-w-[380px] text-4xl font-semibold leading-[1.1] tracking-[-0.03em]">{t.faq.title}</h2>
          <p className="mb-8 max-w-[340px] text-[15px] leading-relaxed text-muted">{t.faq.note}</p>
          <div className="h-[260px] overflow-hidden rounded-[18px]">
            <Photo label={t.faq.photo} src="/photos/paleta-materijal.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {t.faq.items.map((item) => (
            <details
              key={item.q}
              open={item.open}
              className={"rounded-[14px] px-6 py-5 " + (item.open ? "bg-accent" : "bg-white")}
            >
              <summary className={"flex items-center justify-between gap-5 text-[15.5px] font-medium " + (item.open ? "text-white" : "")}>
                <span>{item.q}</span>
                <span className={"plus text-[19px] transition-transform " + (item.open ? "text-white" : "text-accent")}>+</span>
              </summary>
              <p className={"mt-3 max-w-[560px] text-sm leading-relaxed " + (item.open ? "text-accentSoft" : "text-muted")}>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
