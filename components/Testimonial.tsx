import type { Content } from "@/i18n/content";
import Photo from "./Photo";

export default function Testimonial({ t }: { t: Content }) {
  return (
    <section id="says" className="px-[34px] pb-[78px]">
      <h2 className="mx-auto mb-11 max-w-[480px] text-center text-[38px] font-semibold leading-[1.15] tracking-[-0.03em]">
        {t.says.title}
      </h2>
      <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
        <div>
          <p className="mb-[26px] text-[17px] italic leading-[1.7] text-[#2A3B4C]">{t.says.quote}</p>
          <div className="text-[15.5px] font-semibold">{t.says.name}</div>
          <div className="mt-1 text-[13.5px] text-muted">{t.says.role}</div>
          <div className="mt-7 flex gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6D3CC] text-muted">←</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white">→</span>
          </div>
        </div>
        <div className="flex items-end gap-3">
          <div className="h-[300px] flex-1 overflow-hidden rounded-2xl">
            <Photo label={t.says.photo} src="/photos/iskustvo-magacioner.jpg" />
          </div>
          <div className="h-[92px] w-[92px] overflow-hidden rounded-[14px]">
            <Photo label="Portrait" src="/photos/portret-1.jpg" />
          </div>
          <div className="h-[92px] w-[92px] overflow-hidden rounded-[14px]">
            <Photo label="Portrait" src="/photos/portret-2.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
}
