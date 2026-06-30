import type { Metadata } from "next";

import type { Locale } from "@/types/site";
import { getDictionary } from "@/data/dictionaries";
import { locales } from "@/lib/i18n";

export type SeoPageKey =
  | "welcome"
  | "story"
  | "home"
  | "houses"
  | "gallery"
  | "booking"
  | "contact";

const siteName = "Greenhouse House Rental";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://greenhouse-house-rental.pages.dev";

const ogImage = "/images/fern-house/fern-exterior-01.webp";

const localeOgMap: Record<Locale, string> = {
  en: "en_GB",
  ceb: "ceb_PH",
  tl: "tl_PH",
  ko: "ko_KR",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  pl: "pl_PL",
};

const pagePaths: Record<SeoPageKey, string> = {
  welcome: "/",
  story: "",
  home: "/home",
  houses: "/houses",
  gallery: "/gallery",
  booking: "/booking",
  contact: "/contact",
};

function getBaseUrl() {
  return new URL(siteUrl);
}

export function getCanonicalUrl(locale: Locale | null, page: SeoPageKey) {
  const baseUrl = getBaseUrl();

  if (page === "welcome") {
    return new URL("/", baseUrl).toString();
  }

  const localePrefix = locale ? `/${locale}` : "";
  return new URL(`${localePrefix}${pagePaths[page]}`, baseUrl).toString();
}

function getLanguageAlternates(page: SeoPageKey) {
  if (page === "welcome") {
    return {
      "x-default": getCanonicalUrl(null, "welcome"),
      ...Object.fromEntries(
        locales.map((locale) => [locale, getCanonicalUrl(locale, "story")]),
      ),
    };
  }

  return {
    "x-default": getCanonicalUrl("en", page),
    ...Object.fromEntries(
      locales.map((locale) => [locale, getCanonicalUrl(locale, page)]),
    ),
  };
}

function getPageTitle(locale: Locale, page: SeoPageKey) {
  const dictionary = getDictionary(locale);

  const titles: Record<SeoPageKey, string> = {
    welcome: siteName,
    story: `${siteName} | ${dictionary.common.stayTagline}`,
    home: `${dictionary.nav.home} | ${siteName}`,
    houses: `${dictionary.nav.houses} | ${siteName}`,
    gallery: `${dictionary.nav.gallery} | ${siteName}`,
    booking: `${dictionary.nav.booking} | ${siteName}`,
    contact: `${dictionary.nav.contact} | ${siteName}`,
  };

  return titles[page];
}

function getPageDescription(locale: Locale, page: SeoPageKey) {
  const dictionary = getDictionary(locale);

  const descriptions: Record<SeoPageKey, string> = {
    welcome: dictionary.meta.description,
    story: dictionary.footer.description,
    home: dictionary.home.description,
    houses: dictionary.housesPage.description,
    gallery: dictionary.galleryPage.description,
    booking: dictionary.bookingPage.description,
    contact: dictionary.contactPage.description,
  };

  return descriptions[page];
}

export function buildMetadata(locale: Locale, page: SeoPageKey): Metadata {
  const title = getPageTitle(locale, page);
  const description = getPageDescription(locale, page);
  const canonical = getCanonicalUrl(locale, page);
  const imageUrl = new URL(ogImage, getBaseUrl()).toString();

  return {
    title,
    description,
    applicationName: siteName,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical,
      languages: getLanguageAlternates(page),
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: canonical,
      locale: localeOgMap[locale],
      alternateLocale: locales
        .filter((entry) => entry !== locale)
        .map((entry) => localeOgMap[entry]),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: `${siteName} in General Santos City`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildWelcomeMetadata(): Metadata {
  const locale: Locale = "en";
  const title = `${siteName} | General Santos City stays`;
  const description = getDictionary(locale).meta.description;
  const canonical = getCanonicalUrl(null, "welcome");
  const imageUrl = new URL(ogImage, getBaseUrl()).toString();

  return {
    title,
    description,
    applicationName: siteName,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    alternates: {
      canonical,
      languages: getLanguageAlternates("welcome"),
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: canonical,
      locale: localeOgMap.en,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: `${siteName} in General Santos City`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function getSitemapEntries() {
  const pages: SeoPageKey[] = [
    "story",
    "home",
    "houses",
    "gallery",
    "booking",
    "contact",
  ];

  return [
    getCanonicalUrl(null, "welcome"),
    ...locales.flatMap((locale) =>
      pages.map((page) => getCanonicalUrl(locale, page)),
    ),
  ];
}
