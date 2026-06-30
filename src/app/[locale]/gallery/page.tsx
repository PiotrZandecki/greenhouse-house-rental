import { notFound } from "next/navigation";

import { GalleryExperience } from "@/components/gallery/GalleryExperience";
import { getDictionary } from "@/data/dictionaries";
import { galleryItems } from "@/data/gallery";
import { getHouses } from "@/data/houses";
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

        <GalleryExperience
          dictionary={dictionary}
          galleryItems={galleryItems}
          houses={houses}
          locale={locale}
        />
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

        @media (max-width: 1180px) {
          .gallery-page-hero {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .gallery-page-hero {
            border-radius: 32px;
            padding: 26px;
          }
        }
      `}</style>
    </section>
  );
}
