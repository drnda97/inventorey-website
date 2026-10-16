"use client";

import { useState } from "react";
import type { Content } from "@/i18n/content";
import Photo from "./Photo";

export default function Roles({ t }: { t: Content }) {
  const items = t.roles.items;
  const [index, setIndex] = useState(0);
  const go = (i: number) => setIndex((i + items.length) % items.length);
  const current = items[index];
  const upcoming = [1, 2].map((step) => (index + step) % items.length);

  return (
    <section id="roles" className="px-[34px] pb-[78px]" aria-roledescription="carousel">
      <h2 data-reveal className="mx-auto mb-11 max-w-[520px] text-center text-[38px] font-semibold leading-[1.15] tracking-[-0.03em]">
        {t.roles.title}
      </h2>
      <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2">
        <div
          data-reveal
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") go(index - 1);
            if (e.key === "ArrowRight") go(index + 1);
          }}
        >
          <div aria-live="polite" key={index} className="animate-[fade_.35s_ease]">
            <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.08em] text-accent">
              {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </div>
            <h3 className="mb-3 text-[26px] font-semibold tracking-[-0.02em]">{current.role}</h3>
            <p className="min-h-[87px] text-[17px] leading-[1.7] text-[#2A3B4C]">{current.body}</p>
          </div>
          <div className="mt-7 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label={t.roles.prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6D3CC] text-muted transition-all hover:-translate-x-0.5 hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label={t.roles.next}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white transition-all hover:translate-x-0.5 hover:bg-accentDark"
            >
              →
            </button>
            <div className="ml-4 flex gap-1.5" aria-hidden>
              {items.map((it, i) => (
                <span
                  key={it.role}
                  className={"h-1.5 rounded-full transition-all duration-500 " + (i === index ? "w-7 bg-accent" : "w-1.5 bg-[#D6D3CC]")}
                />
              ))}
            </div>
          </div>
        </div>
        <div data-reveal="right" className="flex items-end gap-3">
          <div key={index} className="h-[300px] flex-1 animate-[fade_.5s_ease] overflow-hidden rounded-2xl">
            <Photo alt={current.photo} src={current.src} />
          </div>
          {upcoming.map((i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={items[i].role}
              className="hidden h-[92px] w-[92px] shrink-0 overflow-hidden rounded-[14px] opacity-80 transition-opacity hover:opacity-100 sm:block"
            >
              <Photo alt="" src={items[i].src} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
