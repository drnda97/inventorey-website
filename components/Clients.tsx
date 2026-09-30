import type { Content } from "@/i18n/content";

export default function Clients({ t }: { t: Content }) {
  return (
    <section className="px-[34px] py-[62px]">
      <div className="flex flex-wrap items-center justify-between gap-10">
        {t.clients.map((c) => (
          <span key={c} className="text-[19px] font-semibold tracking-[-0.01em] text-[#A6ADB4]">{c}</span>
        ))}
      </div>
    </section>
  );
}
