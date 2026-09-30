import { notFound } from "next/navigation";
import { locales, type Locale, content } from "@/i18n/content";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Why from "@/components/Why";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import CtaFooter from "@/components/CtaFooter";

export default function Page({ params }: { params: { locale: Locale } }) {
  if (!locales.includes(params.locale)) notFound();
  const t = content[params.locale];

  return (
    <div className="p-[18px]">
      <Hero t={t} locale={params.locale} />
      <Intro t={t} />
      <Clients t={t} />
      <Features t={t} />
      <Why t={t} />
      <Testimonial t={t} />
      <Faq t={t} />
      <CtaFooter t={t} />
    </div>
  );
}
