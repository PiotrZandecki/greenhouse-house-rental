import type { Locale } from "@/types/site";

export const locales: Locale[] = [
  "en",
  "ceb",
  "tl",
  "ko",
  "es",
  "fr",
  "de",
  "pl",
];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ceb: "Bisaya",
  tl: "Tagalog",
  ko: "한국어",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pl: "Polski",
};

export const localeShortLabels: Record<Locale, string> = {
  en: "EN",
  ceb: "CEB",
  tl: "TL",
  ko: "KR",
  es: "ES",
  fr: "FR",
  de: "DE",
  pl: "PL",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇬🇧",
  ceb: "🇵🇭",
  tl: "🇵🇭",
  ko: "🇰🇷",
  es: "🇪🇸",
  fr: "🇫🇷",
  de: "🇩🇪",
  pl: "🇵🇱",
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

export function getLocaleFromBrowserLanguage(language?: string): Locale {
  if (!language) {
    return defaultLocale;
  }

  const normalizedLanguage = language.toLowerCase();
  const baseLanguage = normalizedLanguage.split("-")[0];

  if (
    baseLanguage === "ceb" ||
    baseLanguage === "bis" ||
    baseLanguage === "vis"
  ) {
    return "ceb";
  }

  if (baseLanguage === "fil" || baseLanguage === "tl") {
    return "tl";
  }

  if (baseLanguage === "ko") {
    return "ko";
  }

  if (baseLanguage === "es") {
    return "es";
  }

  if (baseLanguage === "fr") {
    return "fr";
  }

  if (baseLanguage === "de") {
    return "de";
  }

  if (baseLanguage === "pl") {
    return "pl";
  }

  if (isLocale(baseLanguage)) {
    return baseLanguage;
  }

  return defaultLocale;
}
