import type { Content } from "@/i18n/content";
import Icon, { type IconName } from "./Icon";
import Photo from "./Photo";
import { delay } from "./delay";

// One per card in t.why.cards, same order.
const icons: IconName[] = ["users", "building", "badge"];

export default function Why({ t }: { t: Content }) {
  return (
    <section className="px-[34px] pb-[78px]">
      <div data-reveal className="relative flex min-h-[480px] items-center overflow-hidden rounded-[26px]">
        <div className="absolute inset-0">
          <Photo alt="" src="/photos/zasto-kran.jpg" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(15,32,50,0.86)_0%,rgba(15,32,50,0.55)_100%)]" />
        <div className="relative grid w-full grid-cols-1 items-center gap-[60px] px-10 py-12 lg:grid-cols-2">
          <div data-reveal>
            <h2 className="mb-4 text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white">{t.why.title}</h2>
            <p className="mb-[30px] max-w-[380px] text-base leading-relaxed text-onDark">{t.why.body}</p>
            <a href="#signup" className="btn-arrow inline-flex items-center gap-2 rounded-full bg-accent px-[26px] py-3.5 text-[15px] font-semibold text-white hover:bg-accentDark">
              {t.nav.get} <span aria-hidden>→</span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {t.why.cards.map((c, i) => (
              <div key={c.title} data-reveal="right" style={delay(i + 1, 120)}>
                <div className="group flex items-start gap-5 rounded-2xl bg-white px-6 py-[22px] transition-transform duration-300 hover:-translate-x-1.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon name={icons[i]} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 text-[17px] font-semibold">{c.title}</h3>
                    <p className="text-[13.5px] leading-relaxed text-muted">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
