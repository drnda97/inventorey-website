/** Cover-fit photo. Pass alt="" when the image is decorative (e.g. behind text). */
export default function Photo({ alt, src, eager = false }: { alt: string; src: string; eager?: boolean }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} className="h-full w-full object-cover" />;
}
