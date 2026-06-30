"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

type LocaleChromeProps = {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function LocaleChrome({
  children,
  dictionary,
  locale,
}: LocaleChromeProps) {
  const pathname = usePathname();
  const normalizedPathname =
    pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  const isStoryScreen = normalizedPathname === `/${locale}`;

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  if (isStoryScreen) {
    return <>{children}</>;
  }

  return (
    <div className="app-frame">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <main id="main-content">{children}</main>
      <SiteFooter dictionary={dictionary} locale={locale} />
    </div>
  );
}
