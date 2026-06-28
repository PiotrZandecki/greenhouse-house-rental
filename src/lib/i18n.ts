import type { Locale } from "@/types/site";

export const locales: Locale[] = ["pl", "en", "fr", "es", "ko", "tl"];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  fr: "Français",
  es: "Español",
  ko: "한국어",
  tl: "Tagalog",
};

export const localeShortLabels: Record<Locale, string> = {
  pl: "PL",
  en: "EN",
  fr: "FR",
  es: "ES",
  ko: "KR",
  tl: "TL",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path: string): string {
  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export function replaceLocaleInPath(
  pathname: string,
  nextLocale: Locale,
): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}`;
  }

  return `/${nextLocale}/${segments.join("/")}`;
}
