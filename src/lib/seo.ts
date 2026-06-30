import type { Metadata } from "next";

import type { Locale } from "@/types/site";
import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { locales } from "@/lib/i18n";

export type SeoPageKey =
  | "welcome"
  | "story"
  | "home"
  | "houses"
  | "gallery"
  | "booking"
  | "contact"
  | "guide";

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
  guide: "/guide",
};

const guideSeoCopy: Record<
  Locale,
  {
    title: string;
    description: string;
  }
> = {
  en: {
    title: "Guide",
    description:
      "Guest guide for Greenhouse House Rental with local tips, house rules, FAQ and useful stay information for General Santos City.",
  },
  ceb: {
    title: "Guide",
    description:
      "Guest guide para sa Greenhouse House Rental with local tips, house rules, FAQ ug useful stay information sa General Santos City.",
  },
  tl: {
    title: "Guide",
    description:
      "Guest guide para sa Greenhouse House Rental with local tips, house rules, FAQ at useful stay information sa General Santos City.",
  },
  ko: {
    title: "가이드",
    description:
      "General Santos City에서의 숙박을 위한 Greenhouse House Rental 게스트 가이드, 지역 팁, 숙소 규칙, FAQ와 유용한 정보.",
  },
  es: {
    title: "Guía",
    description:
      "Guía para huéspedes de Greenhouse House Rental con consejos locales, normas de la casa, FAQ e información útil para General Santos City.",
  },
  fr: {
    title: "Guide",
    description:
      "Guide voyageur de Greenhouse House Rental avec conseils locaux, règles de la maison, FAQ et informations utiles pour General Santos City.",
  },
  de: {
    title: "Guide",
    description:
      "Gästeguide für Greenhouse House Rental mit lokalen Tipps, Hausregeln, FAQ und nützlichen Informationen für General Santos City.",
  },
  pl: {
    title: "Przewodnik",
    description:
      "Przewodnik dla gości Greenhouse House Rental z lokalnymi wskazówkami, zasadami domu, FAQ i informacjami o pobycie w General Santos City.",
  },
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

export function getHouseCanonicalUrl(locale: Locale, slug: string) {
  return new URL(`/${locale}/houses/${slug}`, getBaseUrl()).toString();
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
    guide: `${guideSeoCopy[locale].title} | ${siteName}`,
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
    guide: guideSeoCopy[locale].description,
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
    "guide",
  ];

  const houses = getHouses();

  return [
    getCanonicalUrl(null, "welcome"),
    ...locales.flatMap((locale) => [
      ...pages.map((page) => getCanonicalUrl(locale, page)),
      ...houses.map((house) => getHouseCanonicalUrl(locale, house.slug)),
    ]),
  ];
}
