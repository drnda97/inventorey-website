import type { Content } from "@/i18n/content";
import Photo from "./Photo";

const photos = [
  "/photos/magacin-police.jpg",
  "/photos/gradiliste-ekipa.jpg",
  "/photos/trebovanje-teren.jpg",
  "/photos/izvestaji-kancelarija.jpg",
];

export default function Features({ t }: { t: Content }) {
  return (
    <section id="features" className="px-[34px] pb-[78px] pt-5">
      <h2 className="mx-auto mb-11 max-w-[620px] text-center text-[38px] font-semibold leading-[1.15] tracking-[-0.03em]">
        {t.features.title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {t.features.items.map((it, i) => (
          <div key={it.title} className="relative h-[300px] overflow-hidden rounded-[18px]">
            <Photo label={it.photo} src={photos[i]} />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,50,0)_45%,rgba(15,32,50,0.8)_100%)]" />
            <div className="pointer-events-none absolute bottom-6 left-[26px]">
              <div className="mb-[5px] text-xl font-semibold text-white">{it.title}</div>
              <div className="text-[13.5px] text-onDark">{it.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
