import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HouseCard } from "@/components/sections/HouseCard";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();

  return (
    <>
      <section className="hero-section greenhouse-home-hero">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{dictionary.home.eyebrow}</p>
            <h1>{dictionary.home.title}</h1>
            <p>{dictionary.home.description}</p>

            <div className="hero-actions">
              <LocalizedLink
                className="button button-primary"
                href="/booking"
                locale={locale}
              >
                {dictionary.home.primaryCta}
              </LocalizedLink>

              <LocalizedLink
                className="button button-ghost"
                href="/houses"
                locale={locale}
              >
                {dictionary.home.secondaryCta}
              </LocalizedLink>
            </div>

            <div className="hero-badges">
              <span>{dictionary.home.heroBadgeOne}</span>
              <span>{dictionary.home.heroBadgeTwo}</span>
              <span>{dictionary.home.heroBadgeThree}</span>
            </div>
          </div>

          <div className="hero-visual home-photo-hero" aria-hidden="true">
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 1060px) 100vw, 48vw"
              src="/images/fern-house/fern-exterior-01.webp"
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
            />

            <span className="home-hero-shade" />

            <div className="home-hero-mini home-hero-mini-top">
              <Image
                alt=""
                fill
                sizes="260px"
                src="/images/olive-house/olive-exterior-01.webp"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="home-hero-mini home-hero-mini-bottom">
              <Image
                alt=""
                fill
                sizes="230px"
                src="/images/fern-house/fern-bedroom-01.webp"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="hero-card hero-card-main home-hero-card">
              <span>Greenhouse</span>
              <strong>House Rental</strong>
            </div>

            <div className="hero-card hero-card-floating home-hero-rating">
              <span>★★★★★</span>
              <strong>Guest-loved stays</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{dictionary.housesPage.eyebrow}</p>
              <h2>{dictionary.home.housesTitle}</h2>
              <p>{dictionary.home.housesDescription}</p>
            </div>

            <LocalizedLink
              className="button button-secondary"
              href="/houses"
              locale={locale}
            >
              {dictionary.common.viewHouses}
            </LocalizedLink>
          </div>

          <div className="houses-grid">
            {houses.map((house) => (
              <HouseCard
                dictionary={dictionary}
                house={house}
                key={house.id}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-split">
        <div className="site-shell split-card">
          <div>
            <p className="eyebrow">{dictionary.bookingPage.eyebrow}</p>
            <h2>{dictionary.home.bookingTitle}</h2>
            <p>{dictionary.home.bookingDescription}</p>
          </div>

          <LocalizedLink
            className="button button-primary"
            href="/booking"
            locale={locale}
          >
            {dictionary.common.bookNow}
          </LocalizedLink>
        </div>
      </section>

      <GalleryPreview dictionary={dictionary} locale={locale} />

      <ReviewsSection dictionary={dictionary} locale={locale} />

      <section className="section">
        <div className="site-shell final-cta">
          <p className="eyebrow">Greenhouse House Rental</p>
          <h2>{dictionary.home.ctaTitle}</h2>
          <p>{dictionary.home.ctaDescription}</p>

          <LocalizedLink
            className="button button-primary"
            href="/contact"
            locale={locale}
          >
            {dictionary.common.contactUs}
          </LocalizedLink>
        </div>
      </section>

      <style>{`
        .greenhouse-home-hero {
          position: relative;
          overflow: hidden;
        }

        .greenhouse-home-hero::before {
          position: absolute;
          top: 12%;
          right: -14rem;
          width: 34rem;
          height: 34rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          pointer-events: none;
        }

        .home-photo-hero {
          background: none;
        }

        .home-photo-hero::before,
        .home-photo-hero::after {
          display: none;
        }

        .home-hero-shade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.22), transparent 20rem),
            linear-gradient(135deg, rgba(12, 24, 16, 0.12), rgba(12, 24, 16, 0.66));
        }

        .home-hero-mini {
          position: absolute;
          z-index: 3;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.42);
          border-radius: 28px;
          box-shadow: 0 24px 70px rgba(0,0,0,0.24);
        }

        .home-hero-mini-top {
          top: 30px;
          right: 30px;
          width: min(42%, 270px);
          aspect-ratio: 4 / 3;
        }

        .home-hero-mini-bottom {
          right: 52px;
          bottom: 150px;
          width: min(34%, 230px);
          aspect-ratio: 4 / 3;
        }

        .home-hero-card {
          z-index: 4;
        }

        .home-hero-rating {
          left: 30px;
          right: auto;
          top: 30px;
          z-index: 4;
        }

        @media (max-width: 760px) {
          .home-hero-mini-top {
            top: 18px;
            right: 18px;
            width: 42%;
          }

          .home-hero-mini-bottom {
            display: none;
          }

          .home-hero-rating {
            left: 18px;
            top: 18px;
          }
        }
      `}</style>
    </>
  );
}
