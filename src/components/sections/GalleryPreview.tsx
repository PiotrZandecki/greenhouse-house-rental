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
  "olive-interior-01",
  "olive-details-01",
];

export function GalleryPreview({ dictionary, locale }: GalleryPreviewProps) {
  const items = galleryItems.filter((item) => previewItems.includes(item.id));

  return (
    <section className="section section-muted">
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

        <div className="gallery-grid">
          {items.map((item, index) => (
            <article
              className={`gallery-card ${
                index === 0 ? "gallery-card-large" : ""
              }`}
              key={item.id}
            >
              <div
                className={`gallery-placeholder gallery-${item.houseId}`}
                style={{
                  position: "relative",
                }}
              >
                <Image
                  alt={item.title[locale]}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 760px) 100vw, 40vw"
                      : "(max-width: 760px) 100vw, 30vw"
                  }
                  src={item.imageSrc}
                  style={{
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.5))",
                  }}
                />

                <span
                  style={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {item.title[locale]}
                </span>
              </div>

              <div>
                <h3>{item.title[locale]}</h3>
                <p>{item.description[locale]}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
