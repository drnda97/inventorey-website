import type { Content } from "@/i18n/content";
import { delay } from "./delay";

export default function Intro({ t }: { t: Content }) {
  return (
    <section id="how" className="px-[34px] pt-[78px]">
      <div className="mb-11 flex flex-wrap items-start justify-between gap-x-16 gap-y-10">
        <h2 data-reveal className="m-0 max-w-[420px] text-[38px] font-semibold leading-[1.12] tracking-[-0.03em]">{t.intro.title}</h2>
        <div className="flex gap-16">
          {t.intro.stats.map((s, i) => (
            <div key={s.n} data-reveal style={delay(i + 1)}>
              <div className="text-3xl font-semibold tracking-[-0.02em]">{s.n}</div>
              <div className="mt-1.5 text-[13px] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.intro.steps.map((s, i) => (
          <div key={s.n} data-reveal style={delay(i)}>
            <div className="group h-full rounded-2xl bg-white p-[26px] transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_-20px_rgba(22,41,60,0.35)]">
              <div className="mb-11 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent text-[12.5px] font-semibold text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                {s.n}
              </div>
              <h3 className="mb-2.5 text-[17.5px] font-semibold tracking-[-0.015em]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
