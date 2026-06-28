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
      <section className="hero-section">
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

          <div
            className="hero-visual"
            aria-hidden="true"
            style={{
              background: "none",
            }}
          >
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

            <span
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background:
                  "linear-gradient(135deg, rgba(12, 24, 16, 0.18), rgba(12, 24, 16, 0.62))",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: "32px",
                right: "32px",
                zIndex: 3,
                width: "min(42%, 260px)",
                aspectRatio: "4 / 3",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.38)",
                borderRadius: "28px",
                boxShadow: "0 24px 70px rgba(0,0,0,0.24)",
              }}
            >
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

            <div
              className="hero-card hero-card-main"
              style={{
                zIndex: 4,
              }}
            >
              <span>Greenhouse</span>
              <strong>House Rental</strong>
            </div>

            <div
              className="hero-card hero-card-floating"
              style={{
                left: "32px",
                right: "auto",
                top: "32px",
                zIndex: 4,
              }}
            >
              <span>★★★★★</span>
              <strong>Review-ready</strong>
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
    </>
  );
}
