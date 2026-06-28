import Image from "next/image";
import { notFound } from "next/navigation";

import type { GalleryItem, HouseId, Locale } from "@/types/site";
import { getDictionary } from "@/data/dictionaries";
import { galleryItems } from "@/data/gallery";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";

type GalleryPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

function getCategoryLabel(item: GalleryItem, locale: Locale): string {
  const dictionary = getDictionary(locale);

  return dictionary.galleryPage[item.category];
}

function getItemsByHouse(houseId: HouseId) {
  return galleryItems.filter((item) => item.houseId === houseId);
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();

  return (
    <section className="page-section gallery-page-enhanced">
      <div className="site-shell">
        <div className="gallery-page-hero">
          <div className="page-heading gallery-page-heading">
            <p className="eyebrow">{dictionary.galleryPage.eyebrow}</p>
            <h1>{dictionary.galleryPage.title}</h1>
            <p>{dictionary.galleryPage.description}</p>
          </div>

          <div className="gallery-hero-card">
            <span>{dictionary.common.viewGallery}</span>
            <strong>{galleryItems.length}</strong>
            <p>{dictionary.home.galleryDescription}</p>
          </div>
        </div>

        <div className="filter-pills gallery-filter-pills">
          <a href="#all">{dictionary.galleryPage.all}</a>
          {houses.map((house) => (
            <a href={`#${house.id}`} key={house.id}>
              {house.name}
            </a>
          ))}
          <a href="#exterior">{dictionary.galleryPage.exterior}</a>
          <a href="#interior">{dictionary.galleryPage.interior}</a>
          <a href="#bedroom">{dictionary.galleryPage.bedroom}</a>
          <a href="#kitchen">{dictionary.galleryPage.kitchen}</a>
          <a href="#bathroom">{dictionary.galleryPage.bathroom}</a>
          <a href="#terrace">{dictionary.galleryPage.terrace}</a>
          <a href="#details">{dictionary.galleryPage.details}</a>
        </div>

        <div className="gallery-featured-grid" id="all">
          {galleryItems.slice(0, 5).map((item, index) => {
            const house = houses.find((entry) => entry.id === item.houseId);
            const categoryLabel = getCategoryLabel(item, locale);

            return (
              <article
                className={`gallery-featured-card gallery-featured-card-${
                  index + 1
                }`}
                key={item.id}
              >
                <Image
                  alt={item.title[locale]}
                  fill
                  priority={index < 2}
                  sizes={
                    index === 0
                      ? "(max-width: 760px) 100vw, 50vw"
                      : "(max-width: 760px) 100vw, 24vw"
                  }
                  src={item.imageSrc}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <span className="gallery-image-overlay" />

                <div className="gallery-featured-copy">
                  <small>
                    {house?.name ?? "Greenhouse"} · {categoryLabel}
                  </small>
                  <strong>{item.title[locale]}</strong>
                  <p>{item.description[locale]}</p>
                </div>
              </article>
            );
          })}
        </div>

        {houses.map((house) => {
          const houseItems = getItemsByHouse(house.id);

          return (
            <section
              className="gallery-house-section"
              id={house.id}
              key={house.id}
            >
              <div className="section-heading section-heading-row">
                <div>
                  <p className="eyebrow">{house.location[locale]}</p>
                  <h2>{house.name}</h2>
                  <p>{house.description[locale]}</p>
                </div>
              </div>

              <div className="gallery-house-grid">
                {houseItems.map((item, index) => {
                  const categoryLabel = getCategoryLabel(item, locale);

                  return (
                    <article
                      className={`gallery-house-card ${
                        index === 0 ? "gallery-house-card-large" : ""
                      }`}
                      id={index === 0 ? item.category : item.id}
                      key={item.id}
                    >
                      <div className="gallery-house-image">
                        <Image
                          alt={item.title[locale]}
                          fill
                          sizes={
                            index === 0
                              ? "(max-width: 760px) 100vw, 48vw"
                              : "(max-width: 760px) 100vw, 30vw"
                          }
                          src={item.imageSrc}
                          style={{
                            objectFit: "cover",
                          }}
                        />
                        <span className="gallery-image-overlay" />
                      </div>

                      <div>
                        <p className="eyebrow">{categoryLabel}</p>
                        <h3>{item.title[locale]}</h3>
                        <p>{item.description[locale]}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <style>{`
        .gallery-page-enhanced {
          position: relative;
          overflow: hidden;
        }

        .gallery-page-enhanced::before {
          position: absolute;
          top: 8rem;
          right: -18rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.76;
          pointer-events: none;
        }

        .gallery-page-hero {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: end;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.34fr);
          margin-bottom: 28px;
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 64px);
        }

        .gallery-page-heading {
          margin-bottom: 0;
        }

        .gallery-hero-card {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 28px;
          background: var(--surface);
          padding: 24px;
        }

        .gallery-hero-card span {
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gallery-hero-card strong {
          font-size: clamp(3rem, 5vw, 5.5rem);
          letter-spacing: -0.08em;
          line-height: 0.9;
        }

        .gallery-hero-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .gallery-filter-pills {
          position: sticky;
          top: 96px;
          z-index: 20;
          margin-bottom: 34px;
          padding: 8px;
          border: 1px solid var(--border);
          border-radius: 28px;
          background: color-mix(in srgb, var(--background) 88%, transparent);
          backdrop-filter: blur(18px);
        }

        .gallery-featured-grid {
          position: relative;
          z-index: 1;
          display: grid;
          min-height: 720px;
          gap: 22px;
          grid-template-columns: 1.1fr 0.9fr 0.9fr;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          margin-bottom: 78px;
        }

        .gallery-featured-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 34px;
          background: var(--surface);
          box-shadow: var(--shadow-soft);
        }

        .gallery-featured-card-1 {
          grid-row: span 2;
        }

        .gallery-featured-card-4 {
          grid-column: span 2;
        }

        .gallery-image-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.24), transparent 18rem),
            linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.64));
          pointer-events: none;
        }

        .gallery-featured-copy {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          display: grid;
          gap: 8px;
          color: white;
        }

        .gallery-featured-copy small {
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gallery-featured-copy strong {
          font-size: clamp(1.4rem, 2vw, 2.4rem);
          letter-spacing: -0.05em;
          line-height: 1;
        }

        .gallery-featured-card-1 .gallery-featured-copy strong {
          font-size: clamp(2.4rem, 4vw, 4.8rem);
          letter-spacing: -0.08em;
          line-height: 0.92;
        }

        .gallery-featured-copy p {
          max-width: 560px;
          margin: 0;
          color: rgba(255,255,255,0.86);
          line-height: 1.55;
        }

        .gallery-house-section {
          position: relative;
          z-index: 1;
          padding-top: 34px;
          scroll-margin-top: 140px;
        }

        .gallery-house-section + .gallery-house-section {
          margin-top: 78px;
        }

        .gallery-house-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gallery-house-card {
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 30px;
          background: var(--surface);
          box-shadow: var(--shadow-soft);
        }

        .gallery-house-card-large {
          grid-column: span 2;
        }

        .gallery-house-image {
          position: relative;
          min-height: 330px;
          overflow: hidden;
        }

        .gallery-house-card-large .gallery-house-image {
          min-height: 430px;
        }

        .gallery-house-card > div:last-child {
          padding: 24px;
        }

        .gallery-house-card h3 {
          margin: 0 0 10px;
          font-size: 1.45rem;
          letter-spacing: -0.04em;
        }

        .gallery-house-card p:last-child {
          color: var(--muted);
          line-height: 1.65;
        }

        @media (max-width: 1180px) {
          .gallery-page-hero,
          .gallery-featured-grid {
            grid-template-columns: 1fr;
          }

          .gallery-featured-grid {
            min-height: auto;
          }

          .gallery-featured-card,
          .gallery-featured-card-1,
          .gallery-featured-card-4 {
            grid-column: auto;
            grid-row: auto;
            min-height: 390px;
          }

          .gallery-house-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .gallery-page-hero {
            border-radius: 32px;
            padding: 26px;
          }

          .gallery-filter-pills {
            position: relative;
            top: auto;
          }

          .gallery-featured-card,
          .gallery-featured-card-1,
          .gallery-featured-card-4 {
            min-height: 330px;
            border-radius: 26px;
          }

          .gallery-house-grid {
            grid-template-columns: 1fr;
          }

          .gallery-house-card-large {
            grid-column: auto;
          }

          .gallery-house-image,
          .gallery-house-card-large .gallery-house-image {
            min-height: 300px;
          }
        }
      `}</style>
    </section>
  );
}
