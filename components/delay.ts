import type { CSSProperties } from "react";

/** Stagger helper: style={delay(i)} on a [data-reveal] or .rise element. */
export function delay(i: number, step = 90): CSSProperties {
  return { "--d": `${i * step}ms` } as CSSProperties;
}
