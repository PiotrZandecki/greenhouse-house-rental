import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SkipToContent } from "@/components/a11y/SkipToContent";
import { LocaleChrome } from "@/components/layout/LocaleChrome";
import { ProductionPolish } from "@/components/layout/ProductionPolish";
import { getDictionary } from "@/data/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildMetadata(locale, "story");
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
    <>
      <SkipToContent />
      <ProductionPolish />

      <LocaleChrome dictionary={dictionary} locale={locale}>
        <main id="main-content">{children}</main>
      </LocaleChrome>
    </>
  );
}
