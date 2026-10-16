"use client";

import { useState } from "react";
import type { Content } from "@/i18n/content";
import Photo from "./Photo";
import { delay } from "./delay";

export default function Faq({ t }: { t: Content }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-[34px] pb-[78px]">
      <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <h2 className="mb-3.5 max-w-[380px] text-4xl font-semibold leading-[1.1] tracking-[-0.03em]">{t.faq.title}</h2>
          <p className="mb-8 max-w-[340px] text-[15px] leading-relaxed text-muted">
            {t.faq.note}
          </p>
          <div className="h-[260px] overflow-hidden rounded-[18px]">
            <Photo alt={t.faq.photo} src="/photos/paleta-materijal.jpg" />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} data-reveal style={delay(i, 70)}>
                <div className={"rounded-[14px] transition-colors duration-300 " + (isOpen ? "bg-accent" : "bg-white hover:bg-[#FBFAF8]")}>
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={"flex w-full items-center justify-between gap-5 px-6 py-5 text-left text-[15.5px] font-medium transition-colors " + (isOpen ? "text-white" : "")}
                    >
                      <span>{item.q}</span>
                      <span
                        aria-hidden
                        className={"text-[19px] transition-transform duration-300 " + (isOpen ? "rotate-45 text-white" : "text-accent")}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    aria-hidden={!isOpen}
                    className={"grid transition-[grid-template-rows,visibility] duration-300 ease-out " + (isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]")}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[560px] px-6 pb-5 text-sm leading-relaxed text-accentSoft">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
