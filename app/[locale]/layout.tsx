import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { locales, type Locale, content } from "@/i18n/content";
import ScrollReveal from "@/components/ScrollReveal";
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
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so scroll-reveal content only hides when it can reappear. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className={dmSans.className}>
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
