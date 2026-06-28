export type Locale = "en" | "ceb" | "tl" | "ko" | "es" | "fr" | "de" | "pl";

export type PlatformLink = {
  label: string;
  href: string;
};

export type HouseId = "fern-house" | "olive-house";

export type LocalizedString = Record<Locale, string>;

export type LocalizedStringArray = Record<Locale, string[]>;

export type House = {
  id: HouseId;
  slug: string;
  name: string;
  subtitle: LocalizedString;
  description: LocalizedString;
  location: LocalizedString;
  address: LocalizedString;
  mapCta: LocalizedString;
  mapUrl: string;
  mapEmbedUrl: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  priceFrom: string;
  highlights: LocalizedStringArray;
  amenities: LocalizedStringArray;
  platforms: PlatformLink[];
  whatsappUrl: string;
};

export type GalleryItem = {
  id: string;
  houseId: HouseId;
  category:
    | "exterior"
    | "interior"
    | "bedroom"
    | "kitchen"
    | "bathroom"
    | "terrace"
    | "details";
  title: LocalizedString;
  description: LocalizedString;
  imagePlaceholder: string;
};

export type ReviewSource = "google" | "facebook";

export type Review = {
  id: string;
  source: ReviewSource;
  author: string;
  rating: number;
  date: string;
  text: LocalizedString;
};
