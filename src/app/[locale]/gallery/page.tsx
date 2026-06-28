import Image from "next/image";
import { notFound } from "next/navigation";

import type { GalleryItem, Locale } from "@/types/site";
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

export default async function GalleryPage({ params }: GalleryPageProps) {
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
          <p className="eyebrow">{dictionary.galleryPage.eyebrow}</p>
          <h1>{dictionary.galleryPage.title}</h1>
          <p>{dictionary.galleryPage.description}</p>
        </div>

        <div className="filter-pills">
          <a href="#all">{dictionary.galleryPage.all}</a>
          <a href="#fern-house">Fern House</a>
          <a href="#olive-house">Olive House</a>
          <a href="#exterior">{dictionary.galleryPage.exterior}</a>
          <a href="#interior">{dictionary.galleryPage.interior}</a>
          <a href="#bedroom">{dictionary.galleryPage.bedroom}</a>
          <a href="#kitchen">{dictionary.galleryPage.kitchen}</a>
          <a href="#bathroom">{dictionary.galleryPage.bathroom}</a>
          <a href="#terrace">{dictionary.galleryPage.terrace}</a>
          <a href="#details">{dictionary.galleryPage.details}</a>
        </div>

        <div className="gallery-grid" id="all">
          {galleryItems.map((item, index) => {
            const house = houses.find((entry) => entry.id === item.houseId);
            const categoryLabel = getCategoryLabel(item, locale);

            return (
              <article
                className={`gallery-card ${
                  index % 4 === 0 ? "gallery-card-large" : ""
                }`}
                id={item.id}
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
                    priority={index < 2}
                    sizes={
                      index % 4 === 0
                        ? "(max-width: 760px) 100vw, 42vw"
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
                  <p className="eyebrow" id={item.category}>
                    {house?.name ?? "Greenhouse"} · {categoryLabel}
                  </p>
                  <h3>{item.title[locale]}</h3>
                  <p>{item.description[locale]}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
