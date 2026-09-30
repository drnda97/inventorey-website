import type { Content } from "@/i18n/content";

export default function Intro({ t }: { t: Content }) {
  return (
    <section id="how" className="px-[34px] pt-[78px]">
      <div className="mb-11 flex flex-wrap items-start justify-between gap-x-16 gap-y-10">
        <h2 className="m-0 max-w-[420px] text-[38px] font-semibold leading-[1.12] tracking-[-0.03em]">{t.intro.title}</h2>
        <div className="flex gap-16">
          {t.intro.stats.map((s) => (
            <div key={s.n}>
              <div className="text-3xl font-semibold tracking-[-0.02em]">{s.n}</div>
              <div className="mt-1.5 text-[13px] text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.intro.steps.map((s) => (
          <div key={s.n} className="rounded-2xl bg-white p-[26px]">
            <div className="mb-11 flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-accent text-[12.5px] font-semibold text-white">
              {s.n}
            </div>
            <h3 className="mb-2.5 text-[17.5px] font-semibold tracking-[-0.015em]">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
