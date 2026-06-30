import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import type { Locale } from "@/types/site";

type HousesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type HousesCopy = {
  viewDetails: string;
  mapPreview: string;
};

const housesCopy: Record<Locale, HousesCopy> = {
  en: {
    viewDetails: "View house details",
    mapPreview: "Location preview",
  },
  ceb: {
    viewDetails: "Tan-awa ang house details",
    mapPreview: "Location preview",
  },
  tl: {
    viewDetails: "Tingnan ang house details",
    mapPreview: "Location preview",
  },
  ko: {
    viewDetails: "숙소 상세 보기",
    mapPreview: "위치 미리보기",
  },
  es: {
    viewDetails: "Ver detalles de la casa",
    mapPreview: "Vista de ubicación",
  },
  fr: {
    viewDetails: "Voir les détails de la maison",
    mapPreview: "Aperçu de l’emplacement",
  },
  de: {
    viewDetails: "Hausdetails ansehen",
    mapPreview: "Standortvorschau",
  },
  pl: {
    viewDetails: "Zobacz szczegóły domu",
    mapPreview: "Podgląd lokalizacji",
  },
};

export default async function HousesPage({ params }: HousesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();
  const copy = housesCopy[locale];

  return (
    <section className="page-section houses-page-enhanced">
      <div className="site-shell">
        <div className="page-heading">
          <p className="eyebrow">{dictionary.housesPage.eyebrow}</p>
          <h1>{dictionary.housesPage.title}</h1>
          <p>{dictionary.housesPage.description}</p>
        </div>

        <div className="property-list">
          {houses.map((house, index) => (
            <article
              className={`property-panel property-panel-${house.id} enhanced-property-panel ${
                index % 2 === 1 ? "enhanced-property-panel-reversed" : ""
              }`}
              key={house.id}
            >
              <div className="enhanced-property-media">
                <Image
                  alt={house.subtitle[locale]}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1180px) 100vw, 42vw"
                  src={house.coverImage}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <span className="enhanced-property-overlay" />

                <div className="enhanced-property-media-copy">
                  <span>{house.location[locale]}</span>
                  <strong>{house.name}</strong>
                </div>
              </div>

              <div className="property-content enhanced-property-content">
                <p className="eyebrow">{house.location[locale]}</p>
                <h2>{house.name}</h2>
                <p>{house.description[locale]}</p>

                <div className="house-facts house-facts-large">
                  <span>
                    {house.capacity} {dictionary.common.guests}
                  </span>
                  <span>
                    {house.bedrooms} {dictionary.common.bedrooms}
                  </span>
                  <span>
                    {house.bathrooms} {dictionary.common.bathrooms}
                  </span>
                  <span>
                    {dictionary.common.area}: {house.area}
                  </span>
                  <span>
                    {dictionary.common.from} {house.priceFrom}/
                    {dictionary.common.night}
                  </span>
                </div>

                <div className="enhanced-map-card">
                  <iframe
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={house.mapEmbedUrl}
                    title={`${house.name} map`}
                  />

                  <div>
                    <p className="eyebrow">{copy.mapPreview}</p>
                    <p>{house.address[locale]}</p>
                    <a
                      className="button button-secondary"
                      href={house.mapUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {house.mapCta[locale]}
                    </a>
                  </div>
                </div>

                <div className="property-columns">
                  <div>
                    <h3>{dictionary.housesPage.highlights}</h3>
                    <ul className="check-list">
                      {house.highlights[locale].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3>{dictionary.housesPage.amenities}</h3>
                    <ul className="check-list">
                      {house.amenities[locale].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="eyebrow enhanced-platform-eyebrow">
                    {dictionary.housesPage.platforms}
                  </p>
                  <div className="platform-row">
                    {house.platforms.map((platform) => (
                      <a
                        href={platform.href}
                        key={platform.label}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {platform.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="property-actions">
                  <LocalizedLink
                    className="button button-primary"
                    href={`/houses/${house.slug}`}
                    locale={locale}
                  >
                    {copy.viewDetails}
                  </LocalizedLink>

                  <LocalizedLink
                    className="button button-secondary"
                    href="/booking"
                    locale={locale}
                  >
                    {dictionary.common.bookNow}
                  </LocalizedLink>

                  <LocalizedLink
                    className="button button-secondary"
                    href="/gallery"
                    locale={locale}
                  >
                    {dictionary.common.viewGallery}
                  </LocalizedLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .houses-page-enhanced {
          position: relative;
          overflow: hidden;
        }

        .houses-page-enhanced::before {
          position: absolute;
          top: 8rem;
          right: -20rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.86;
          pointer-events: none;
        }

        .enhanced-property-panel {
          position: relative;
          z-index: 1;
          grid-template-columns: minmax(420px, 0.92fr) minmax(0, 1.08fr);
        }

        .enhanced-property-panel-reversed {
          grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
        }

        .enhanced-property-panel-reversed .enhanced-property-media {
          order: 2;
        }

        .enhanced-property-media {
          position: relative;
          min-height: 100%;
          overflow: hidden;
          isolation: isolate;
        }

        .enhanced-property-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 18rem),
            linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62));
        }

        .enhanced-property-media-copy {
          position: absolute;
          left: 30px;
          right: 30px;
          bottom: 30px;
          z-index: 2;
          display: grid;
          gap: 8px;
          color: white;
        }

        .enhanced-property-media-copy span {
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .enhanced-property-media-copy strong {
          font-size: clamp(2.4rem, 4vw, 4.4rem);
          letter-spacing: -0.08em;
          line-height: 0.92;
        }

        .enhanced-property-content h2 {
          font-size: clamp(2.2rem, 4vw, 4.8rem);
          letter-spacing: -0.08em;
          line-height: 0.94;
        }

        .enhanced-map-card {
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.76fr);
          gap: 0;
          margin-top: 26px;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          background: var(--surface-strong);
        }

        .enhanced-map-card iframe {
          width: 100%;
          min-height: 320px;
          border: 0;
          display: block;
          filter: saturate(0.9) contrast(0.94);
        }

        .enhanced-map-card > div {
          padding: 22px;
        }

        .enhanced-map-card > div p {
          margin-top: 0;
        }

        .enhanced-platform-eyebrow {
          margin-top: 28px;
          margin-bottom: 0;
        }

        @media (max-width: 1180px) {
          .enhanced-property-panel,
          .enhanced-property-panel-reversed {
            grid-template-columns: 1fr;
          }

          .enhanced-property-panel-reversed .enhanced-property-media {
            order: initial;
          }

          .enhanced-property-media {
            min-height: 460px;
          }
        }

        @media (max-width: 760px) {
          .enhanced-property-media {
            min-height: 360px;
          }

          .enhanced-property-media-copy {
            left: 20px;
            right: 20px;
            bottom: 20px;
          }

          .enhanced-map-card {
            grid-template-columns: 1fr;
          }

          .enhanced-map-card iframe {
            min-height: 260px;
          }
        }
      `}</style>
    </section>
  );
}
