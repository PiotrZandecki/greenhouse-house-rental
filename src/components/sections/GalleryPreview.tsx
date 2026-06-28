import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { galleryItems } from "@/data/gallery";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type GalleryPreviewProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function GalleryPreview({ locale, dictionary }: GalleryPreviewProps) {
  const previewItems = galleryItems.slice(0, 6);

  return (
    <section className="section">
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

        <div className="gallery-grid gallery-grid-preview">
          {previewItems.map((item) => (
            <article className="gallery-card" key={item.id}>
              <div className={`gallery-placeholder gallery-${item.houseId}`}>
                <span>{item.imagePlaceholder}</span>
              </div>
              <div>
                <p className="eyebrow">{item.category}</p>
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
