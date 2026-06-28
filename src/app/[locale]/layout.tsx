import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <div className="app-frame">
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main>{children}</main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </div>
  );
}
