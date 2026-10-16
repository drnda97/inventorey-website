import type { Content } from "@/i18n/content";
import Photo from "./Photo";
import { delay } from "./delay";

const photos = [
  "/photos/magacin-police.jpg",
  "/photos/gradiliste-ekipa.jpg",
  "/photos/trebovanje-teren.jpg",
  "/photos/izvestaji-kancelarija.jpg",
];

export default function Features({ t }: { t: Content }) {
  return (
    <section id="features" className="px-[34px] pb-[78px] pt-[78px]">
      <h2 data-reveal className="mx-auto mb-11 max-w-[620px] text-center text-[38px] font-semibold leading-[1.15] tracking-[-0.03em]">
        {t.features.title}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {t.features.items.map((it, i) => (
          <div key={it.title} data-reveal="zoom" style={delay(i % 2)} className="group relative h-[300px] overflow-hidden rounded-[18px]">
            <div className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-105">
              <Photo alt={it.photo} src={photos[i]} />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,32,50,0)_45%,rgba(15,32,50,0.8)_100%)] transition-opacity duration-500 group-hover:opacity-90" />
            <div className="pointer-events-none absolute bottom-6 left-[26px] right-[26px] transition-transform duration-500 group-hover:-translate-y-1.5">
              <div className="mb-[5px] text-xl font-semibold text-white">{it.title}</div>
              <div className="text-[13.5px] text-onDark">{it.body}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
