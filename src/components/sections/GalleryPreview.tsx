import Image from "next/image";

import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { galleryItems } from "@/data/gallery";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type GalleryPreviewProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const previewItems = [
  "fern-exterior-01",
  "fern-bedroom-01",
  "olive-interior-01",
  "fern-terrace-01",
  "olive-details-01",
];

export function GalleryPreview({ dictionary, locale }: GalleryPreviewProps) {
  const items = galleryItems.filter((item) => previewItems.includes(item.id));

  return (
    <section className="section section-muted gallery-preview-enhanced">
      <div className="site-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">{dictionary.galleryPage.eyebrow}</p>
            <h2>{dictionary.home.galleryTitle}</h2>
            <p>{dictionary.home.galleryDescription}</p>
          </div>

          <LocalizedLink
            className="button button-secondary"
            href="/gallery"
            locale={locale}
          >
            {dictionary.common.viewGallery}
          </LocalizedLink>
        </div>

        <div className="gallery-preview-mosaic">
          {items.map((item, index) => (
            <article
              className={`gallery-preview-card gallery-preview-card-${index + 1}`}
              key={item.id}
            >
              <Image
                alt={item.title[locale]}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 760px) 100vw, 48vw"
                    : "(max-width: 760px) 100vw, 24vw"
                }
                src={item.imageSrc}
                style={{
                  objectFit: "cover",
                }}
              />

              <span className="gallery-preview-overlay" />

              <div className="gallery-preview-copy">
                <small>{item.title[locale]}</small>
                <strong>{item.description[locale]}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-preview-enhanced {
          position: relative;
          overflow: hidden;
        }

        .gallery-preview-enhanced::before {
          position: absolute;
          top: 6rem;
          right: -18rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.82;
          pointer-events: none;
        }

        .gallery-preview-mosaic {
          position: relative;
          z-index: 1;
          display: grid;
          min-height: 720px;
          gap: 22px;
          grid-template-columns: 1.15fr 0.85fr 0.85fr;
          grid-template-rows: repeat(2, minmax(0, 1fr));
        }

        .gallery-preview-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 34px;
          background: var(--surface);
          box-shadow: var(--shadow-soft);
          isolation: isolate;
        }

        .gallery-preview-card-1 {
          grid-row: span 2;
        }

        .gallery-preview-card-4 {
          grid-column: span 2;
        }

        .gallery-preview-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 18rem),
            linear-gradient(180deg, rgba(0,0,0,0.04), rgba(0,0,0,0.62));
          pointer-events: none;
        }

        .gallery-preview-copy {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
          z-index: 2;
          display: grid;
          gap: 8px;
          color: white;
        }

        .gallery-preview-copy small {
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .gallery-preview-copy strong {
          max-width: 540px;
          font-size: clamp(1.1rem, 1.5vw, 1.6rem);
          letter-spacing: -0.04em;
          line-height: 1.12;
        }

        .gallery-preview-card-1 .gallery-preview-copy strong {
          font-size: clamp(1.7rem, 3vw, 3.2rem);
          line-height: 0.98;
        }

        @media (max-width: 1180px) {
          .gallery-preview-mosaic {
            min-height: auto;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: none;
          }

          .gallery-preview-card {
            min-height: 320px;
          }

          .gallery-preview-card-1,
          .gallery-preview-card-4 {
            grid-column: span 2;
            grid-row: auto;
            min-height: 420px;
          }
        }

        @media (max-width: 760px) {
          .gallery-preview-mosaic {
            grid-template-columns: 1fr;
          }

          .gallery-preview-card,
          .gallery-preview-card-1,
          .gallery-preview-card-4 {
            grid-column: auto;
            min-height: 320px;
            border-radius: 26px;
          }

          .gallery-preview-copy {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }
        }
      `}</style>
    </section>
  );
}
