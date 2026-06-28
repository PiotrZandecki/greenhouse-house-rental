import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HouseCard } from "@/components/sections/HouseCard";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

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

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-card hero-card-main">
              <span>Greenhouse</span>
              <strong>House Rental</strong>
            </div>
            <div className="hero-card hero-card-floating">
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
          <p className="eyebrow">{dictionary.common.portfolioDemo}</p>
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
