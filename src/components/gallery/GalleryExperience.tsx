"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import type { Dictionary } from "@/data/dictionaries";
import type { GalleryItem, House, HouseId, Locale } from "@/types/site";

type GalleryExperienceProps = {
  dictionary: Dictionary;
  galleryItems: GalleryItem[];
  houses: House[];
  locale: Locale;
};

type GalleryCategory = GalleryItem["category"];
type GalleryFilter = "all" | HouseId | GalleryCategory;

type GalleryCopy = {
  photo: string;
  photos: string;
  allPhotos: string;
  previous: string;
  next: string;
  close: string;
  openPhoto: string;
  filterByHouse: string;
  filterBySpace: string;
  showing: string;
};

const galleryCopy: Record<Locale, GalleryCopy> = {
  en: {
    photo: "photo",
    photos: "photos",
    allPhotos: "All photos",
    previous: "Previous",
    next: "Next",
    close: "Close",
    openPhoto: "Open photo",
    filterByHouse: "Filter by house",
    filterBySpace: "Filter by space",
    showing: "Showing",
  },
  ceb: {
    photo: "photo",
    photos: "photos",
    allPhotos: "All photos",
    previous: "Previous",
    next: "Next",
    close: "Close",
    openPhoto: "Open photo",
    filterByHouse: "Filter by house",
    filterBySpace: "Filter by space",
    showing: "Showing",
  },
  tl: {
    photo: "photo",
    photos: "photos",
    allPhotos: "All photos",
    previous: "Previous",
    next: "Next",
    close: "Close",
    openPhoto: "Open photo",
    filterByHouse: "Filter by house",
    filterBySpace: "Filter by space",
    showing: "Showing",
  },
  ko: {
    photo: "사진",
    photos: "사진",
    allPhotos: "전체 사진",
    previous: "이전",
    next: "다음",
    close: "닫기",
    openPhoto: "사진 열기",
    filterByHouse: "숙소별 필터",
    filterBySpace: "공간별 필터",
    showing: "표시 중",
  },
  es: {
    photo: "foto",
    photos: "fotos",
    allPhotos: "Todas las fotos",
    previous: "Anterior",
    next: "Siguiente",
    close: "Cerrar",
    openPhoto: "Abrir foto",
    filterByHouse: "Filtrar por casa",
    filterBySpace: "Filtrar por espacio",
    showing: "Mostrando",
  },
  fr: {
    photo: "photo",
    photos: "photos",
    allPhotos: "Toutes les photos",
    previous: "Précédent",
    next: "Suivant",
    close: "Fermer",
    openPhoto: "Ouvrir la photo",
    filterByHouse: "Filtrer par maison",
    filterBySpace: "Filtrer par espace",
    showing: "Affichage",
  },
  de: {
    photo: "Foto",
    photos: "Fotos",
    allPhotos: "Alle Fotos",
    previous: "Zurück",
    next: "Weiter",
    close: "Schließen",
    openPhoto: "Foto öffnen",
    filterByHouse: "Nach Haus filtern",
    filterBySpace: "Nach Bereich filtern",
    showing: "Angezeigt",
  },
  pl: {
    photo: "zdjęcie",
    photos: "zdjęć",
    allPhotos: "Wszystkie zdjęcia",
    previous: "Poprzednie",
    next: "Następne",
    close: "Zamknij",
    openPhoto: "Otwórz zdjęcie",
    filterByHouse: "Filtruj według domu",
    filterBySpace: "Filtruj według przestrzeni",
    showing: "Wyświetlane",
  },
};

const categories: GalleryCategory[] = [
  "exterior",
  "interior",
  "bedroom",
  "kitchen",
  "bathroom",
  "terrace",
  "details",
];

function isCategoryFilter(filter: GalleryFilter): filter is GalleryCategory {
  return categories.includes(filter as GalleryCategory);
}

function getHouseName(houses: House[], houseId: HouseId) {
  return houses.find((house) => house.id === houseId)?.name ?? "Greenhouse";
}

function getCategoryLabel(dictionary: Dictionary, category: GalleryCategory) {
  return dictionary.galleryPage[category];
}

export function GalleryExperience({
  dictionary,
  galleryItems,
  houses,
  locale,
}: GalleryExperienceProps) {
  const copy = galleryCopy[locale];

  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return galleryItems;
    }

    if (isCategoryFilter(activeFilter)) {
      return galleryItems.filter((item) => item.category === activeFilter);
    }

    return galleryItems.filter((item) => item.houseId === activeFilter);
  }, [activeFilter, galleryItems]);

  const activeItem =
    activeIndex !== null ? (filteredItems[activeIndex] ?? null) : null;

  const activeHouse = activeItem
    ? houses.find((house) => house.id === activeItem.houseId)
    : null;

  const currentNumber = activeIndex !== null ? activeIndex + 1 : 0;
  const totalNumber = filteredItems.length;

  function openLightbox(index: number) {
    setActiveIndex(index);
  }

  function closeLightbox() {
    setActiveIndex(null);
  }

  function showPrevious() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === 0 ? filteredItems.length - 1 : current - 1;
    });
  }

  function showNext() {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }

      return current === filteredItems.length - 1 ? 0 : current + 1;
    });
  }

  function selectFilter(filter: GalleryFilter) {
    setActiveFilter(filter);
    setActiveIndex(null);
  }

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, filteredItems.length]);

  return (
    <>
      <div className="gallery-controls-panel">
        <div>
          <p className="eyebrow">{copy.filterByHouse}</p>
          <div className="gallery-filter-row">
            <button
              className={activeFilter === "all" ? "gallery-filter-active" : ""}
              onClick={() => selectFilter("all")}
              type="button"
            >
              {copy.allPhotos}
            </button>

            {houses.map((house) => (
              <button
                className={
                  activeFilter === house.id ? "gallery-filter-active" : ""
                }
                key={house.id}
                onClick={() => selectFilter(house.id)}
                type="button"
              >
                {house.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">{copy.filterBySpace}</p>
          <div className="gallery-filter-row">
            {categories.map((category) => (
              <button
                className={
                  activeFilter === category ? "gallery-filter-active" : ""
                }
                key={category}
                onClick={() => selectFilter(category)}
                type="button"
              >
                {getCategoryLabel(dictionary, category)}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery-count-card">
          <span>{copy.showing}</span>
          <strong>{filteredItems.length}</strong>
          <small>{filteredItems.length === 1 ? copy.photo : copy.photos}</small>
        </div>
      </div>

      <div className="gallery-featured-grid" id="all">
        {filteredItems.slice(0, 5).map((item, index) => {
          const categoryLabel = getCategoryLabel(dictionary, item.category);
          const houseName = getHouseName(houses, item.houseId);

          return (
            <button
              aria-label={`${copy.openPhoto}: ${item.title[locale]}`}
              className={`gallery-featured-card gallery-featured-card-${
                index + 1
              }`}
              key={item.id}
              onClick={() => openLightbox(index)}
              type="button"
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
                  {houseName} · {categoryLabel}
                </small>
                <strong>{item.title[locale]}</strong>
                <p>{item.description[locale]}</p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="gallery-complete-grid">
        {filteredItems.map((item, index) => {
          const categoryLabel = getCategoryLabel(dictionary, item.category);
          const houseName = getHouseName(houses, item.houseId);

          return (
            <button
              aria-label={`${copy.openPhoto}: ${item.title[locale]}`}
              className="gallery-complete-card"
              key={item.id}
              onClick={() => openLightbox(index)}
              type="button"
            >
              <div className="gallery-complete-image">
                <Image
                  alt={item.title[locale]}
                  fill
                  sizes="(max-width: 760px) 100vw, 30vw"
                  src={item.imageSrc}
                  style={{
                    objectFit: "cover",
                  }}
                />

                <span className="gallery-image-overlay" />
              </div>

              <div className="gallery-complete-copy">
                <p className="eyebrow">{categoryLabel}</p>
                <h3>{item.title[locale]}</h3>
                <p>{item.description[locale]}</p>
                <span>{houseName}</span>
              </div>
            </button>
          );
        })}
      </div>

      {activeItem ? (
        <div
          aria-modal="true"
          className="gallery-lightbox"
          onClick={closeLightbox}
          role="dialog"
        >
          <div
            className="gallery-lightbox-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label={copy.close}
              className="gallery-lightbox-close"
              onClick={closeLightbox}
              type="button"
            >
              ×
            </button>

            <div className="gallery-lightbox-image">
              <Image
                alt={activeItem.title[locale]}
                fill
                priority
                sizes="100vw"
                src={activeItem.imageSrc}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="gallery-lightbox-content">
              <div>
                <p className="eyebrow">
                  {activeHouse?.name ?? "Greenhouse"} ·{" "}
                  {getCategoryLabel(dictionary, activeItem.category)}
                </p>
                <h2>{activeItem.title[locale]}</h2>
                <p>{activeItem.description[locale]}</p>
              </div>

              <div className="gallery-lightbox-meta">
                <span>
                  {currentNumber} / {totalNumber}
                </span>

                <div className="gallery-lightbox-actions">
                  <button onClick={showPrevious} type="button">
                    ← {copy.previous}
                  </button>
                  <button onClick={showNext} type="button">
                    {copy.next} →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        .gallery-controls-panel {
          position: sticky;
          top: 96px;
          z-index: 20;
          display: grid;
          align-items: end;
          gap: 18px;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(160px, 0.2fr);
          margin-bottom: 34px;
          border: 1px solid var(--border);
          border-radius: 34px;
          background: color-mix(in srgb, var(--background) 88%, transparent);
          padding: 16px;
          backdrop-filter: blur(18px);
          box-shadow: var(--shadow-soft);
        }

        .gallery-filter-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gallery-filter-row button {
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background: var(--surface);
          color: var(--muted);
          cursor: pointer;
          font-size: 0.82rem;
          font-weight: 950;
          padding: 10px 14px;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            color 180ms ease;
        }

        .gallery-filter-row button:hover {
          transform: translateY(-1px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
          color: var(--primary-strong);
        }

        .gallery-filter-row .gallery-filter-active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .gallery-count-card {
          display: grid;
          justify-items: center;
          gap: 2px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface);
          padding: 18px;
          text-align: center;
        }

        .gallery-count-card span,
        .gallery-count-card small {
          color: var(--muted);
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .gallery-count-card strong {
          font-size: 2.6rem;
          line-height: 0.95;
          letter-spacing: -0.08em;
        }

        .gallery-featured-grid {
          position: relative;
          z-index: 1;
          display: grid;
          min-height: 720px;
          gap: 22px;
          grid-template-columns: 1.1fr 0.9fr 0.9fr;
          grid-template-rows: repeat(2, minmax(0, 1fr));
          margin-bottom: 34px;
        }

        .gallery-featured-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 34px;
          background: var(--surface);
          box-shadow: var(--shadow-soft);
          cursor: zoom-in;
          padding: 0;
          text-align: left;
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
          font-size: clamp(2rem, 3.3vw, 3.8rem);
          letter-spacing: -0.07em;
          line-height: 1.02;
        }

        .gallery-featured-copy p {
          max-width: 560px;
          margin: 0;
          color: rgba(255,255,255,0.86);
          line-height: 1.55;
        }

        .gallery-complete-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .gallery-complete-card {
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: 30px;
          background: var(--surface);
          box-shadow: var(--shadow-soft);
          cursor: zoom-in;
          padding: 0;
          text-align: left;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .gallery-complete-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
          box-shadow: var(--shadow);
        }

        .gallery-complete-image {
          position: relative;
          min-height: 300px;
          overflow: hidden;
        }

        .gallery-complete-copy {
          display: grid;
          gap: 8px;
          padding: 22px;
        }

        .gallery-complete-copy h3 {
          margin: 0;
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        .gallery-complete-copy p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .gallery-complete-copy span {
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 950;
        }

        .gallery-lightbox {
          position: fixed;
          inset: 0;
          z-index: 9998;
          display: grid;
          place-items: center;
          background: rgba(7, 12, 9, 0.78);
          padding: clamp(14px, 3vw, 34px);
          backdrop-filter: blur(18px);
          animation: gallery-lightbox-fade 180ms ease both;
        }

        .gallery-lightbox-inner {
          position: relative;
          overflow: hidden;
          width: min(1380px, 100%);
          max-height: min(860px, 92vh);
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 0.34fr);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 38px;
          background: var(--surface);
          box-shadow: 0 30px 120px rgba(0,0,0,0.44);
        }

        .gallery-lightbox-close {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 4;
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.28);
          border-radius: 50%;
          background: rgba(0,0,0,0.24);
          color: white;
          cursor: pointer;
          font-size: 2rem;
          line-height: 1;
          backdrop-filter: blur(14px);
        }

        .gallery-lightbox-image {
          position: relative;
          min-height: min(860px, 92vh);
          background: #101810;
        }

        .gallery-lightbox-content {
          display: grid;
          align-content: space-between;
          gap: 28px;
          padding: clamp(24px, 4vw, 42px);
        }

        .gallery-lightbox-content h2 {
          margin: 0;
          font-size: clamp(2rem, 3vw, 3.8rem);
          line-height: 1.04;
          letter-spacing: -0.07em;
        }

        .gallery-lightbox-content p {
          color: var(--muted);
          line-height: 1.7;
        }

        .gallery-lightbox-meta {
          display: grid;
          gap: 18px;
        }

        .gallery-lightbox-meta > span {
          width: fit-content;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background: var(--surface-strong);
          color: var(--primary-strong);
          font-weight: 950;
          padding: 10px 14px;
        }

        .gallery-lightbox-actions {
          display: grid;
          gap: 10px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .gallery-lightbox-actions button {
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background: var(--surface-strong);
          color: var(--text);
          cursor: pointer;
          font-weight: 950;
          padding: 13px 16px;
        }

        @keyframes gallery-lightbox-fade {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @media (max-width: 1180px) {
          .gallery-controls-panel {
            position: relative;
            top: auto;
            grid-template-columns: 1fr;
          }

          .gallery-featured-grid {
            min-height: auto;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-template-rows: none;
          }

          .gallery-featured-card {
            min-height: 320px;
          }

          .gallery-featured-card-1,
          .gallery-featured-card-4 {
            grid-column: span 2;
            grid-row: auto;
            min-height: 420px;
          }

          .gallery-complete-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .gallery-lightbox-inner {
            grid-template-columns: 1fr;
            max-height: 94vh;
            overflow-y: auto;
          }

          .gallery-lightbox-image {
            min-height: 58vh;
          }
        }

        @media (max-width: 760px) {
          .gallery-controls-panel {
            border-radius: 28px;
            padding: 12px;
          }

          .gallery-featured-grid,
          .gallery-complete-grid {
            grid-template-columns: 1fr;
          }

          .gallery-featured-card,
          .gallery-featured-card-1,
          .gallery-featured-card-4 {
            grid-column: auto;
            min-height: 320px;
            border-radius: 26px;
          }

          .gallery-featured-copy {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }

          .gallery-complete-image {
            min-height: 260px;
          }

          .gallery-lightbox {
            padding: 10px;
          }

          .gallery-lightbox-inner {
            border-radius: 28px;
          }

          .gallery-lightbox-image {
            min-height: 48vh;
          }

          .gallery-lightbox-actions {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
