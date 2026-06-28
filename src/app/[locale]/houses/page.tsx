import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type HousesPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HousesPage({ params }: HousesPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();

  return (
    <section className="page-section">
      <div className="site-shell">
        <div className="page-heading">
          <p className="eyebrow">{dictionary.housesPage.eyebrow}</p>
          <h1>{dictionary.housesPage.title}</h1>
          <p>{dictionary.housesPage.description}</p>
        </div>

        <div className="property-list">
          {houses.map((house) => (
            <article
              className={`property-panel property-panel-${house.id}`}
              key={house.id}
            >
              <div className="property-image">
                <span>{house.name}</span>
              </div>

              <div className="property-content">
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

                <div
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--surface-strong)",
                    marginTop: "24px",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src={house.mapEmbedUrl}
                    style={{
                      border: 0,
                      display: "block",
                      minHeight: "280px",
                      width: "100%",
                    }}
                    title={`${house.name} map`}
                  />

                  <div style={{ padding: "18px" }}>
                    <p className="eyebrow" style={{ marginBottom: "8px" }}>
                      {house.location[locale]}
                    </p>
                    <p style={{ marginTop: 0 }}>{house.address[locale]}</p>
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

                <div className="property-actions">
                  <LocalizedLink
                    className="button button-primary"
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
    </section>
  );
}
