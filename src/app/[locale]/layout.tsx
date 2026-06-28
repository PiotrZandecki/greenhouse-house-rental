import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { LocaleChrome } from "@/components/layout/LocaleChrome";

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
    <LocaleChrome dictionary={dictionary} locale={locale}>
      {children}
    </LocaleChrome>
  );
}
