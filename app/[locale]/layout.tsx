import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { locales, type Locale, content } from "@/i18n/content";
import "../globals.css";

const dmSans = DM_Sans({ subsets: ["latin", "latin-ext"], weight: ["400", "500", "600", "700"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = content[params.locale] ?? content.en;
  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: { languages: { en: "/en", sr: "/sr" } },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  return (
    <html lang={params.locale}>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
