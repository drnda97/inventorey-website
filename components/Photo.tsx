/**
 * Photo placeholder. Drop the real image into /public/photos and pass `src`,
 * or swap this component for next/image once the photography is final.
 */
export default function Photo({ label, src, className = "" }: { label: string; src?: string; className?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={label} className={"h-full w-full object-cover " + className} />;
  }
  return (
    <div
      className={"flex h-full w-full items-center justify-center bg-[repeating-linear-gradient(135deg,#DCDAD4_0_10px,#D4D2CB_10px_20px)] " + className}
    >
      <span className="px-4 text-center font-mono text-[11px] leading-relaxed text-[#7A8794]">{label}</span>
    </div>
  );
}
