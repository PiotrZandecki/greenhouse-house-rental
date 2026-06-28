import { notFound } from "next/navigation";

import { galleryItems } from "@/data/gallery";
import { getDictionary } from "@/data/dictionaries";
import { isLocale } from "@/lib/i18n";

type GalleryPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  const categories = [
    "all",
    "exterior",
    "interior",
    "bedroom",
    "kitchen",
    "bathroom",
    "terrace",
    "details",
  ] as const;

  return (
    <section className="page-section">
      <div className="site-shell">
        <div className="page-heading">
          <p className="eyebrow">{dictionary.galleryPage.eyebrow}</p>
          <h1>{dictionary.galleryPage.title}</h1>
          <p>{dictionary.galleryPage.description}</p>
        </div>

        <div className="filter-pills">
          {categories.map((category) => (
            <a
              href={category === "all" ? "#gallery" : `#${category}`}
              key={category}
            >
              {dictionary.galleryPage[category]}
            </a>
          ))}
        </div>

        <div className="gallery-group" id="gallery">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article
                className="gallery-card gallery-card-large"
                id={item.category}
                key={item.id}
              >
                <div className={`gallery-placeholder gallery-${item.houseId}`}>
                  <span>{item.imagePlaceholder}</span>
                </div>
                <div>
                  <p className="eyebrow">
                    {item.houseId.replace("-", " ")} /{" "}
                    {dictionary.galleryPage[item.category]}
                  </p>
                  <h2>{item.title[locale]}</h2>
                  <p>{item.description[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
