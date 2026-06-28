"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types/site";
import {
  localeLabels,
  localeShortLabels,
  locales,
  replaceLocaleInPath,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div className="language-switcher" aria-label={label}>
      {locales.map((locale) => (
        <Link
          aria-label={localeLabels[locale]}
          className={`language-pill ${
            currentLocale === locale ? "language-pill-active" : ""
          }`}
          href={replaceLocaleInPath(pathname, locale)}
          key={locale}
        >
          {localeShortLabels[locale]}
        </Link>
      ))}
    </div>
  );
}
