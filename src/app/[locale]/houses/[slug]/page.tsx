import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { galleryItems } from "@/data/gallery";
import { getDictionary } from "@/data/dictionaries";
import { getHouseBySlug, getHouses } from "@/data/houses";
import { isLocale, locales } from "@/lib/i18n";
import { getHouseCanonicalUrl } from "@/lib/seo";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import type { GalleryItem, Locale } from "@/types/site";

type HouseDetailsPageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

type HouseDetailsCopy = {
  overview: string;
  stayHighlights: string;
  amenities: string;
  gallery: string;
  location: string;
  houseRules: string;
  goodToKnow: string;
  bestFor: string;
  included: string;
  bookThisHouse: string;
  backToHouses: string;
  viewFullGallery: string;
  openMap: string;
  rules: string[];
  goodToKnowItems: string[];
  bestForItems: string[];
  includedItems: string[];
};

const houseDetailsCopy: Record<Locale, HouseDetailsCopy> = {
  en: {
    overview: "House overview",
    stayHighlights: "Stay highlights",
    amenities: "Amenities",
    gallery: "House gallery",
    location: "Location",
    houseRules: "House rules",
    goodToKnow: "Good to know",
    bestFor: "Best for",
    included: "Included in your stay",
    bookThisHouse: "Book this house",
    backToHouses: "Back to houses",
    viewFullGallery: "View full gallery",
    openMap: "Open map",
    rules: [
      "Check-in from 2:00 PM",
      "Check-out until 11:00 AM",
      "Quiet hours after 10:00 PM",
      "Smoking is allowed only in outdoor areas",
      "Guests are asked to keep shared outdoor spaces tidy",
    ],
    goodToKnowItems: [
      "The map opens the surrounding barangay area.",
      "Final availability is confirmed after the booking request.",
      "Longer stays can be arranged depending on the calendar.",
      "Guest count should match the selected house capacity.",
    ],
    bestForItems: [
      "Private tropical stays",
      "Slow mornings",
      "Couples, families and small groups",
      "Guests who prefer direct planning before arrival",
    ],
    includedItems: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Fresh linens",
      "Kitchen essentials",
      "Direct guest support",
    ],
  },
  ceb: {
    overview: "House overview",
    stayHighlights: "Stay highlights",
    amenities: "Amenities",
    gallery: "House gallery",
    location: "Location",
    houseRules: "House rules",
    goodToKnow: "Good to know",
    bestFor: "Best for",
    included: "Included in your stay",
    bookThisHouse: "Book this house",
    backToHouses: "Balik sa mga balay",
    viewFullGallery: "Tan-awa ang full gallery",
    openMap: "Ablihi ang map",
    rules: [
      "Check-in from 2:00 PM",
      "Check-out until 11:00 AM",
      "Quiet hours after 10:00 PM",
      "Smoking allowed only sa outdoor areas",
      "Palihug keep tidy ang shared outdoor spaces",
    ],
    goodToKnowItems: [
      "Ang map nagpakita sa surrounding barangay area.",
      "Final availability ma-confirm after sa booking request.",
      "Longer stays possible depende sa calendar.",
      "Guest count dapat sakto sa capacity sa balay.",
    ],
    bestForItems: [
      "Private tropical stays",
      "Hinay nga buntag",
      "Couples, families ug small groups",
      "Guests nga ganahan og direct planning before arrival",
    ],
    includedItems: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Fresh linens",
      "Kitchen essentials",
      "Direct guest support",
    ],
  },
  tl: {
    overview: "House overview",
    stayHighlights: "Stay highlights",
    amenities: "Amenities",
    gallery: "House gallery",
    location: "Location",
    houseRules: "House rules",
    goodToKnow: "Good to know",
    bestFor: "Best for",
    included: "Included in your stay",
    bookThisHouse: "Book this house",
    backToHouses: "Back to houses",
    viewFullGallery: "View full gallery",
    openMap: "Open map",
    rules: [
      "Check-in from 2:00 PM",
      "Check-out until 11:00 AM",
      "Quiet hours after 10:00 PM",
      "Smoking is allowed only in outdoor areas",
      "Please keep shared outdoor spaces tidy",
    ],
    goodToKnowItems: [
      "The map opens the surrounding barangay area.",
      "Final availability is confirmed after the booking request.",
      "Longer stays can be arranged depending on the calendar.",
      "Guest count should match the selected house capacity.",
    ],
    bestForItems: [
      "Private tropical stays",
      "Slow mornings",
      "Couples, families and small groups",
      "Guests who prefer direct planning before arrival",
    ],
    includedItems: [
      "Fast Wi-Fi",
      "Air conditioning",
      "Fresh linens",
      "Kitchen essentials",
      "Direct guest support",
    ],
  },
  ko: {
    overview: "숙소 개요",
    stayHighlights: "숙박 하이라이트",
    amenities: "편의시설",
    gallery: "숙소 갤러리",
    location: "위치",
    houseRules: "숙소 규칙",
    goodToKnow: "알아두면 좋은 점",
    bestFor: "추천 대상",
    included: "숙박 포함 사항",
    bookThisHouse: "이 숙소 예약하기",
    backToHouses: "숙소 목록으로 돌아가기",
    viewFullGallery: "전체 갤러리 보기",
    openMap: "지도 열기",
    rules: [
      "체크인은 오후 2시부터 가능합니다",
      "체크아웃은 오전 11시까지입니다",
      "오후 10시 이후에는 조용히 이용해 주세요",
      "흡연은 야외 공간에서만 가능합니다",
      "공용 야외 공간은 깨끗하게 이용해 주세요",
    ],
    goodToKnowItems: [
      "지도는 주변 barangay 지역을 보여줍니다.",
      "최종 가능 여부는 예약 요청 후 확인됩니다.",
      "장기 숙박은 캘린더 상황에 따라 조율할 수 있습니다.",
      "게스트 수는 숙소 정원과 맞아야 합니다.",
    ],
    bestForItems: [
      "프라이빗 열대 숙박",
      "느린 아침",
      "커플, 가족, 소규모 그룹",
      "도착 전 직접 계획을 선호하는 게스트",
    ],
    includedItems: [
      "빠른 Wi-Fi",
      "에어컨",
      "깨끗한 침구",
      "주방 기본 용품",
      "직접 게스트 지원",
    ],
  },
  es: {
    overview: "Resumen de la casa",
    stayHighlights: "Puntos destacados",
    amenities: "Servicios",
    gallery: "Galería de la casa",
    location: "Ubicación",
    houseRules: "Normas de la casa",
    goodToKnow: "Información útil",
    bestFor: "Ideal para",
    included: "Incluido en tu estancia",
    bookThisHouse: "Reservar esta casa",
    backToHouses: "Volver a casas",
    viewFullGallery: "Ver galería completa",
    openMap: "Abrir mapa",
    rules: [
      "Check-in desde las 2:00 PM",
      "Check-out hasta las 11:00 AM",
      "Horario de silencio después de las 10:00 PM",
      "Fumar solo en zonas exteriores",
      "Mantén ordenadas las zonas exteriores compartidas",
    ],
    goodToKnowItems: [
      "El mapa abre la zona barangay cercana.",
      "La disponibilidad final se confirma después de la solicitud.",
      "Las estancias largas pueden organizarse según el calendario.",
      "El número de huéspedes debe coincidir con la capacidad de la casa.",
    ],
    bestForItems: [
      "Estancias tropicales privadas",
      "Mañanas tranquilas",
      "Parejas, familias y grupos pequeños",
      "Huéspedes que prefieren planificar antes de llegar",
    ],
    includedItems: [
      "Wi-Fi rápido",
      "Aire acondicionado",
      "Ropa de cama limpia",
      "Esenciales de cocina",
      "Atención directa al huésped",
    ],
  },
  fr: {
    overview: "Aperçu de la maison",
    stayHighlights: "Points forts du séjour",
    amenities: "Équipements",
    gallery: "Galerie de la maison",
    location: "Emplacement",
    houseRules: "Règles de la maison",
    goodToKnow: "Bon à savoir",
    bestFor: "Idéal pour",
    included: "Inclus dans le séjour",
    bookThisHouse: "Réserver cette maison",
    backToHouses: "Retour aux maisons",
    viewFullGallery: "Voir toute la galerie",
    openMap: "Ouvrir la carte",
    rules: [
      "Arrivée à partir de 14h00",
      "Départ jusqu’à 11h00",
      "Heures calmes après 22h00",
      "Fumer uniquement dans les espaces extérieurs",
      "Merci de garder les espaces extérieurs partagés propres",
    ],
    goodToKnowItems: [
      "La carte ouvre le secteur barangay environnant.",
      "La disponibilité finale est confirmée après la demande.",
      "Les longs séjours peuvent être organisés selon le calendrier.",
      "Le nombre de voyageurs doit respecter la capacité de la maison.",
    ],
    bestForItems: [
      "Séjours tropicaux privés",
      "Matins lents",
      "Couples, familles et petits groupes",
      "Voyageurs préférant organiser leur arrivée en direct",
    ],
    includedItems: [
      "Wi-Fi rapide",
      "Climatisation",
      "Linge propre",
      "Essentiels de cuisine",
      "Support direct voyageur",
    ],
  },
  de: {
    overview: "Hausübersicht",
    stayHighlights: "Highlights",
    amenities: "Ausstattung",
    gallery: "Hausgalerie",
    location: "Standort",
    houseRules: "Hausregeln",
    goodToKnow: "Gut zu wissen",
    bestFor: "Ideal für",
    included: "Im Aufenthalt enthalten",
    bookThisHouse: "Dieses Haus buchen",
    backToHouses: "Zurück zu Häusern",
    viewFullGallery: "Ganze Galerie ansehen",
    openMap: "Karte öffnen",
    rules: [
      "Check-in ab 14:00 Uhr",
      "Check-out bis 11:00 Uhr",
      "Ruhezeiten nach 22:00 Uhr",
      "Rauchen nur in Außenbereichen",
      "Gemeinsam genutzte Außenbereiche bitte ordentlich halten",
    ],
    goodToKnowItems: [
      "Die Karte öffnet die umliegende Barangay-Region.",
      "Die finale Verfügbarkeit wird nach der Anfrage bestätigt.",
      "Längere Aufenthalte können je nach Kalender abgestimmt werden.",
      "Die Gästezahl sollte zur Kapazität des Hauses passen.",
    ],
    bestForItems: [
      "Private tropische Aufenthalte",
      "Langsame Morgen",
      "Paare, Familien und kleine Gruppen",
      "Gäste, die vor Ankunft direkt planen möchten",
    ],
    includedItems: [
      "Schnelles WLAN",
      "Klimaanlage",
      "Frische Bettwäsche",
      "Küchengrundausstattung",
      "Direkter Gästesupport",
    ],
  },
  pl: {
    overview: "Opis domu",
    stayHighlights: "Najważniejsze cechy pobytu",
    amenities: "Udogodnienia",
    gallery: "Galeria domu",
    location: "Lokalizacja",
    houseRules: "Zasady domu",
    goodToKnow: "Warto wiedzieć",
    bestFor: "Najlepszy wybór dla",
    included: "W cenie pobytu",
    bookThisHouse: "Zarezerwuj ten dom",
    backToHouses: "Wróć do domów",
    viewFullGallery: "Zobacz pełną galerię",
    openMap: "Otwórz mapę",
    rules: [
      "Zameldowanie od 14:00",
      "Wymeldowanie do 11:00",
      "Cisza nocna po 22:00",
      "Palenie wyłącznie w przestrzeniach zewnętrznych",
      "Prosimy o utrzymywanie porządku w częściach wspólnych na zewnątrz",
    ],
    goodToKnowItems: [
      "Mapa otwiera okoliczny rejon barangay.",
      "Ostateczna dostępność jest potwierdzana po zapytaniu rezerwacyjnym.",
      "Dłuższe pobyty można ustalić zależnie od kalendarza.",
      "Liczba gości powinna odpowiadać pojemności wybranego domu.",
    ],
    bestForItems: [
      "Prywatne tropikalne pobyty",
      "Wolne poranki",
      "Pary, rodziny i małe grupy",
      "Goście preferujący bezpośrednie planowanie przed przyjazdem",
    ],
    includedItems: [
      "Szybkie Wi-Fi",
      "Klimatyzacja",
      "Świeża pościel",
      "Podstawowe wyposażenie kuchni",
      "Bezpośrednie wsparcie dla gości",
    ],
  },
};

export function generateStaticParams() {
  const houses = getHouses();

  return locales.flatMap((locale) =>
    houses.map((house) => ({
      locale,
      slug: house.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: HouseDetailsPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const house = getHouseBySlug(slug);

  if (!house) {
    return {};
  }

  const title = `${house.name} | Greenhouse House Rental`;
  const description = house.description[locale];
  const canonical = getHouseCanonicalUrl(locale, house.slug);
  const imageUrl = new URL(
    house.coverImage,
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://greenhouse-house-rental.pages.dev",
  ).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 900,
          alt: house.name,
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

function getCategoryLabel(item: GalleryItem, locale: Locale) {
  const dictionary = getDictionary(locale);

  return dictionary.galleryPage[item.category];
}

export default async function HouseDetailsPage({
  params,
}: HouseDetailsPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const house = getHouseBySlug(slug);

  if (!house) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const copy = houseDetailsCopy[locale];
  const houseGalleryItems = galleryItems.filter(
    (item) => item.houseId === house.id,
  );
  const featuredGalleryItems = houseGalleryItems.slice(0, 4);

  return (
    <section className={`house-detail-page house-detail-${house.id}`}>
      <div className="house-detail-hero">
        <Image
          alt={house.subtitle[locale]}
          fill
          priority
          sizes="100vw"
          src={house.coverImage}
          style={{
            objectFit: "cover",
          }}
        />

        <span className="house-detail-hero-overlay" />

        <div className="site-shell house-detail-hero-content">
          <LocalizedLink
            className="house-detail-back-link"
            href="/houses"
            locale={locale}
          >
            ← {copy.backToHouses}
          </LocalizedLink>

          <div>
            <p className="eyebrow">{house.location[locale]}</p>
            <h1>{house.name}</h1>
            <p>{house.subtitle[locale]}</p>
          </div>

          <div className="house-detail-hero-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking"
              locale={locale}
            >
              {copy.bookThisHouse}
            </LocalizedLink>

            <LocalizedLink
              className="button button-ghost"
              href="/gallery"
              locale={locale}
            >
              {copy.viewFullGallery}
            </LocalizedLink>
          </div>
        </div>
      </div>

      <div className="site-shell house-detail-content">
        <section className="house-detail-intro-grid">
          <article className="house-detail-main-card">
            <p className="eyebrow">{copy.overview}</p>
            <h2>{house.name}</h2>
            <p>{house.description[locale]}</p>

            <div className="house-detail-facts">
              <span>
                <strong>{house.capacity}</strong>
                {dictionary.common.guests}
              </span>
              <span>
                <strong>{house.bedrooms}</strong>
                {dictionary.common.bedrooms}
              </span>
              <span>
                <strong>{house.bathrooms}</strong>
                {dictionary.common.bathrooms}
              </span>
              <span>
                <strong>{house.area}</strong>
                {dictionary.common.area}
              </span>
              <span>
                <strong>{house.priceFrom}</strong>
                {dictionary.common.night}
              </span>
            </div>
          </article>

          <aside className="house-detail-side-card">
            <p className="eyebrow">{copy.bestFor}</p>
            <ul className="check-list">
              {copy.bestForItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="house-detail-columns">
          <article className="house-detail-card">
            <p className="eyebrow">{copy.stayHighlights}</p>
            <h2>{dictionary.housesPage.highlights}</h2>
            <ul className="check-list">
              {house.highlights[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="house-detail-card">
            <p className="eyebrow">{copy.amenities}</p>
            <h2>{dictionary.housesPage.amenities}</h2>
            <ul className="check-list">
              {house.amenities[locale].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="house-detail-card">
            <p className="eyebrow">{copy.included}</p>
            <h2>{copy.included}</h2>
            <ul className="check-list">
              {copy.includedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="house-detail-gallery-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{copy.gallery}</p>
              <h2>{copy.gallery}</h2>
              <p>{dictionary.galleryPage.description}</p>
            </div>

            <LocalizedLink
              className="button button-secondary"
              href="/gallery"
              locale={locale}
            >
              {copy.viewFullGallery}
            </LocalizedLink>
          </div>

          <div className="house-detail-gallery-grid">
            {featuredGalleryItems.map((item, index) => (
              <article
                className={`house-detail-gallery-card ${
                  index === 0 ? "house-detail-gallery-card-large" : ""
                }`}
                key={item.id}
              >
                <Image
                  alt={item.title[locale]}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 760px) 100vw, 48vw"
                      : "(max-width: 760px) 100vw, 28vw"
                  }
                  src={item.imageSrc}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <span className="house-detail-gallery-overlay" />

                <div>
                  <small>{getCategoryLabel(item, locale)}</small>
                  <strong>{item.title[locale]}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="house-detail-map-section">
          <div className="house-detail-map-copy">
            <p className="eyebrow">{copy.location}</p>
            <h2>{house.location[locale]}</h2>
            <p>{house.address[locale]}</p>

            <a
              className="button button-secondary"
              href={house.mapUrl}
              rel="noreferrer"
              target="_blank"
            >
              {copy.openMap}
            </a>
          </div>

          <iframe
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={house.mapEmbedUrl}
            title={`${house.name} map`}
          />
        </section>

        <section className="house-detail-columns">
          <article className="house-detail-card">
            <p className="eyebrow">{copy.houseRules}</p>
            <h2>{copy.houseRules}</h2>
            <ul className="check-list">
              {copy.rules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="house-detail-card house-detail-card-wide">
            <p className="eyebrow">{copy.goodToKnow}</p>
            <h2>{copy.goodToKnow}</h2>
            <ul className="check-list">
              {copy.goodToKnowItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="house-detail-final-cta">
          <p className="eyebrow">Greenhouse House Rental</p>
          <h2>{dictionary.home.ctaTitle}</h2>
          <p>{dictionary.home.ctaDescription}</p>

          <div className="hero-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking"
              locale={locale}
            >
              {copy.bookThisHouse}
            </LocalizedLink>

            <LocalizedLink
              className="button button-secondary"
              href="/contact"
              locale={locale}
            >
              {dictionary.common.contactUs}
            </LocalizedLink>
          </div>
        </section>
      </div>

      <style>{`
        .house-detail-page {
          position: relative;
          overflow: hidden;
        }

        .house-detail-hero {
          position: relative;
          min-height: min(820px, 86vh);
          display: grid;
          align-items: end;
          overflow: hidden;
          isolation: isolate;
        }

        .house-detail-hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 24% 20%, rgba(255,255,255,0.24), transparent 22rem),
            linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.74));
        }

        .house-detail-hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          gap: 28px;
          padding-top: clamp(90px, 12vw, 160px);
          padding-bottom: clamp(42px, 7vw, 96px);
          color: white;
        }

        .house-detail-hero-content h1 {
          max-width: 1180px;
          margin: 0;
          font-size: clamp(4rem, 11vw, 11rem);
          letter-spacing: -0.1em;
          line-height: 0.82;
        }

        .house-detail-hero-content p:not(.eyebrow) {
          max-width: 780px;
          color: rgba(255,255,255,0.84);
          font-size: clamp(1.05rem, 1.4vw, 1.35rem);
          line-height: 1.7;
        }

        .house-detail-back-link {
          width: fit-content;
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: var(--radius-pill);
          background: rgba(255,255,255,0.16);
          color: white;
          font-size: 0.86rem;
          font-weight: 950;
          padding: 12px 16px;
          backdrop-filter: blur(18px);
        }

        .house-detail-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .house-detail-content {
          display: grid;
          gap: 72px;
          padding-top: 72px;
          padding-bottom: 92px;
        }

        .house-detail-intro-grid {
          display: grid;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.36fr);
        }

        .house-detail-main-card,
        .house-detail-side-card,
        .house-detail-card,
        .house-detail-map-section,
        .house-detail-final-cta {
          border: 1px solid var(--border);
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 96%, transparent);
          box-shadow: var(--shadow-soft);
        }

        .house-detail-main-card,
        .house-detail-side-card,
        .house-detail-card {
          border-radius: var(--radius-xl);
          padding: clamp(24px, 4vw, 48px);
        }

        .house-detail-main-card h2,
        .house-detail-card h2,
        .house-detail-map-copy h2,
        .house-detail-final-cta h2 {
          margin: 0;
          font-size: clamp(2.2rem, 4.5vw, 5.2rem);
          letter-spacing: -0.08em;
          line-height: 0.94;
        }

        .house-detail-main-card p,
        .house-detail-card p,
        .house-detail-map-copy p,
        .house-detail-final-cta p {
          color: var(--muted);
          line-height: 1.75;
        }

        .house-detail-facts {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 34px;
        }

        .house-detail-facts span {
          display: grid;
          gap: 6px;
          border: 1px solid var(--border);
          border-radius: 22px;
          background: var(--surface-strong);
          color: var(--muted);
          font-weight: 850;
          padding: 18px;
        }

        .house-detail-facts strong {
          color: var(--text);
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        .house-detail-columns {
          display: grid;
          gap: 28px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .house-detail-card-wide {
          grid-column: span 2;
        }

        .house-detail-gallery-section {
          display: grid;
          gap: 24px;
        }

        .house-detail-gallery-grid {
          display: grid;
          min-height: 640px;
          gap: 22px;
          grid-template-columns: 1.1fr 0.9fr 0.9fr;
          grid-template-rows: repeat(2, minmax(0, 1fr));
        }

        .house-detail-gallery-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 34px;
          background: var(--surface);
          box-shadow: var(--shadow-soft);
        }

        .house-detail-gallery-card-large {
          grid-row: span 2;
        }

        .house-detail-gallery-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 18rem),
            linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62));
        }

        .house-detail-gallery-card div {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          display: grid;
          gap: 8px;
          color: white;
        }

        .house-detail-gallery-card small {
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .house-detail-gallery-card strong {
          font-size: clamp(1.35rem, 2vw, 2.35rem);
          letter-spacing: -0.05em;
          line-height: 1;
        }

        .house-detail-gallery-card-large strong {
          font-size: clamp(2rem, 3.4vw, 4.2rem);
          letter-spacing: -0.08em;
          line-height: 0.92;
        }

        .house-detail-map-section {
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(320px, 0.42fr) minmax(0, 1fr);
          border-radius: var(--radius-xl);
        }

        .house-detail-map-copy {
          padding: clamp(24px, 4vw, 48px);
        }

        .house-detail-map-section iframe {
          width: 100%;
          min-height: 520px;
          border: 0;
          display: block;
          filter: saturate(0.9) contrast(0.94);
        }

        .house-detail-final-cta {
          display: grid;
          justify-items: center;
          gap: 18px;
          border-radius: var(--radius-xl);
          padding: clamp(34px, 6vw, 78px);
          text-align: center;
        }

        .house-detail-final-cta p {
          max-width: 760px;
        }

        @media (max-width: 1180px) {
          .house-detail-intro-grid,
          .house-detail-map-section,
          .house-detail-columns {
            grid-template-columns: 1fr;
          }

          .house-detail-card-wide {
            grid-column: auto;
          }

          .house-detail-facts {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .house-detail-gallery-grid {
            min-height: auto;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .house-detail-gallery-card,
          .house-detail-gallery-card-large {
            min-height: 360px;
            grid-row: auto;
          }

          .house-detail-gallery-card-large {
            grid-column: span 2;
          }
        }

        @media (max-width: 760px) {
          .house-detail-hero {
            min-height: 760px;
          }

          .house-detail-hero-content h1 {
            font-size: clamp(4rem, 20vw, 6.4rem);
          }

          .house-detail-hero-actions .button {
            width: 100%;
          }

          .house-detail-content {
            gap: 44px;
            padding-top: 44px;
            padding-bottom: 60px;
          }

          .house-detail-facts,
          .house-detail-gallery-grid {
            grid-template-columns: 1fr;
          }

          .house-detail-gallery-card-large {
            grid-column: auto;
          }

          .house-detail-gallery-card,
          .house-detail-gallery-card-large {
            min-height: 310px;
            border-radius: 26px;
          }

          .house-detail-map-section iframe {
            min-height: 320px;
          }
        }
      `}</style>
    </section>
  );
}
