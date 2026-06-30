import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { HouseCard } from "@/components/sections/HouseCard";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { StayPathSection } from "@/components/sections/StayPathSection";
import { WhyGuestsChooseUs } from "@/components/sections/WhyGuestsChooseUs";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import type { Locale } from "@/types/site";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type HomeGuideCopy = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  cards: {
    title: string;
    description: string;
  }[];
};

const homeGuideCopy: Record<Locale, HomeGuideCopy> = {
  en: {
    eyebrow: "Guest guide",
    title: "Everything guests need before arriving.",
    description:
      "Explore local tips, house rules, stay information and answers to common questions before planning your visit.",
    cta: "Open guest guide",
    cards: [
      {
        title: "Local orientation",
        description:
          "General Santos City, Calumpang and Dadiangas North in one easy guide.",
      },
      {
        title: "House rules",
        description: "Clear check-in, check-out and stay expectations.",
      },
      {
        title: "FAQ",
        description: "Fast answers for guests before booking.",
      },
    ],
  },
  ceb: {
    eyebrow: "Guest guide",
    title: "Tanang importanteng info before moabot ang guests.",
    description:
      "Tan-awa ang local tips, house rules, stay information ug answers sa common questions before mag-plan sa visit.",
    cta: "Open guest guide",
    cards: [
      {
        title: "Local orientation",
        description:
          "General Santos City, Calumpang ug Dadiangas North in one easy guide.",
      },
      {
        title: "House rules",
        description: "Clear check-in, check-out ug stay expectations.",
      },
      {
        title: "FAQ",
        description: "Fast answers para sa guests before booking.",
      },
    ],
  },
  tl: {
    eyebrow: "Guest guide",
    title: "Lahat ng kailangan ng guests bago dumating.",
    description:
      "Explore local tips, house rules, stay information at answers sa common questions bago mag-plan ng visit.",
    cta: "Open guest guide",
    cards: [
      {
        title: "Local orientation",
        description:
          "General Santos City, Calumpang at Dadiangas North in one easy guide.",
      },
      {
        title: "House rules",
        description: "Clear check-in, check-out at stay expectations.",
      },
      {
        title: "FAQ",
        description: "Fast answers for guests before booking.",
      },
    ],
  },
  ko: {
    eyebrow: "게스트 가이드",
    title: "도착 전 필요한 모든 정보.",
    description:
      "방문을 계획하기 전에 지역 팁, 숙소 규칙, 숙박 정보와 자주 묻는 질문을 확인하세요.",
    cta: "게스트 가이드 열기",
    cards: [
      {
        title: "지역 안내",
        description:
          "General Santos City, Calumpang, Dadiangas North를 쉽게 확인하세요.",
      },
      {
        title: "숙소 규칙",
        description: "체크인, 체크아웃, 숙박 안내를 명확하게 정리했습니다.",
      },
      {
        title: "FAQ",
        description: "예약 전 자주 묻는 질문에 빠르게 답합니다.",
      },
    ],
  },
  es: {
    eyebrow: "Guía para huéspedes",
    title: "Todo lo que necesitas antes de llegar.",
    description:
      "Explora consejos locales, normas de la casa, información de estancia y respuestas a preguntas frecuentes.",
    cta: "Abrir guía",
    cards: [
      {
        title: "Orientación local",
        description:
          "General Santos City, Calumpang y Dadiangas North en una guía sencilla.",
      },
      {
        title: "Normas de la casa",
        description: "Check-in, check-out y expectativas claras.",
      },
      {
        title: "FAQ",
        description: "Respuestas rápidas antes de reservar.",
      },
    ],
  },
  fr: {
    eyebrow: "Guide voyageur",
    title: "Tout ce qu’il faut savoir avant d’arriver.",
    description:
      "Consultez les conseils locaux, règles de la maison, informations de séjour et réponses aux questions fréquentes.",
    cta: "Ouvrir le guide",
    cards: [
      {
        title: "Orientation locale",
        description:
          "General Santos City, Calumpang et Dadiangas North dans un guide simple.",
      },
      {
        title: "Règles de la maison",
        description:
          "Arrivée, départ et attentes de séjour clairement expliqués.",
      },
      {
        title: "FAQ",
        description: "Réponses rapides avant de réserver.",
      },
    ],
  },
  de: {
    eyebrow: "Gästeguide",
    title: "Alles, was Gäste vor der Ankunft wissen sollten.",
    description:
      "Entdecke lokale Tipps, Hausregeln, Aufenthaltsinformationen und Antworten auf häufige Fragen.",
    cta: "Guide öffnen",
    cards: [
      {
        title: "Lokale Orientierung",
        description:
          "General Santos City, Calumpang und Dadiangas North in einem einfachen Guide.",
      },
      {
        title: "Hausregeln",
        description:
          "Klare Informationen zu Check-in, Check-out und Aufenthalt.",
      },
      {
        title: "FAQ",
        description: "Schnelle Antworten vor der Buchung.",
      },
    ],
  },
  pl: {
    eyebrow: "Przewodnik dla gości",
    title: "Wszystko, czego goście potrzebują przed przyjazdem.",
    description:
      "Poznaj lokalne wskazówki, zasady domu, informacje o pobycie i odpowiedzi na najczęstsze pytania przed zaplanowaniem wizyty.",
    cta: "Otwórz przewodnik",
    cards: [
      {
        title: "Orientacja lokalna",
        description:
          "General Santos City, Calumpang i Dadiangas North w jednym prostym przewodniku.",
      },
      {
        title: "Zasady domu",
        description:
          "Czytelne informacje o zameldowaniu, wymeldowaniu i pobycie.",
      },
      {
        title: "FAQ",
        description: "Szybkie odpowiedzi dla gości przed rezerwacją.",
      },
    ],
  },
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();
  const guideCopy = homeGuideCopy[locale];

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

      <StayPathSection dictionary={dictionary} locale={locale} />

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

      <WhyGuestsChooseUs houses={houses} locale={locale} />

      <section className="section section-split">
        <div className="site-shell split-card split-card-polished">
          <div>
            <p className="eyebrow">{dictionary.bookingPage.eyebrow}</p>
            <h2>{dictionary.home.bookingTitle}</h2>
            <p>{dictionary.home.bookingDescription}</p>
          </div>

          <div className="split-card-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking?house=fern-house"
              locale={locale}
            >
              Fern House
            </LocalizedLink>

            <LocalizedLink
              className="button button-secondary"
              href="/booking?house=olive-house"
              locale={locale}
            >
              Olive House
            </LocalizedLink>
          </div>
        </div>
      </section>

      <GalleryPreview dictionary={dictionary} locale={locale} />

      <ReviewsSection dictionary={dictionary} locale={locale} />

      <section className="section guide-preview-section">
        <div className="site-shell guide-preview-card">
          <div>
            <p className="eyebrow">{guideCopy.eyebrow}</p>
            <h2>{guideCopy.title}</h2>
            <p>{guideCopy.description}</p>

            <LocalizedLink
              className="button button-primary"
              href="/guide"
              locale={locale}
            >
              {guideCopy.cta}
            </LocalizedLink>
          </div>

          <div className="guide-preview-grid">
            {guideCopy.cards.map((card) => (
              <article key={card.title}>
                <span>✓</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-shell final-cta final-cta-home-polished">
          <p className="eyebrow">Greenhouse House Rental</p>
          <h2>{dictionary.home.ctaTitle}</h2>
          <p>{dictionary.home.ctaDescription}</p>

          <div className="hero-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking"
              locale={locale}
            >
              {dictionary.common.bookNow}
            </LocalizedLink>

            <LocalizedLink
              className="button button-secondary"
              href="/contact"
              locale={locale}
            >
              {dictionary.common.contactUs}
            </LocalizedLink>
          </div>
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

        .greenhouse-home-hero::after {
          position: absolute;
          bottom: 4%;
          left: -18rem;
          width: 34rem;
          height: 34rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-soft), transparent 70%);
          opacity: 0.62;
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

        .split-card-polished {
          align-items: center;
        }

        .split-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .guide-preview-section {
          position: relative;
          overflow: hidden;
        }

        .guide-preview-card {
          display: grid;
          align-items: center;
          gap: clamp(28px, 5vw, 70px);
          grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 96%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 68px);
        }

        .guide-preview-card h2 {
          margin: 0;
          font-size: clamp(2.4rem, 4.8vw, 5.2rem);
          line-height: 1.04;
          letter-spacing: -0.075em;
        }

        .guide-preview-card p {
          color: var(--muted);
          line-height: 1.75;
        }

        .guide-preview-grid {
          display: grid;
          gap: 16px;
        }

        .guide-preview-grid article {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: var(--surface);
          padding: 24px;
        }

        .guide-preview-grid span {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border-radius: 16px;
          background: var(--primary);
          color: white;
          font-weight: 950;
        }

        .guide-preview-grid h3 {
          margin: 6px 0 0;
          font-size: 1.28rem;
          letter-spacing: -0.04em;
        }

        .guide-preview-grid p {
          margin: 0;
        }

        .final-cta-home-polished {
          position: relative;
          overflow: hidden;
        }

        .final-cta-home-polished::before {
          position: absolute;
          top: -14rem;
          right: -14rem;
          width: 32rem;
          height: 32rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          pointer-events: none;
        }

        .final-cta-home-polished > * {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 980px) {
          .guide-preview-card {
            grid-template-columns: 1fr;
          }

          .split-card-actions {
            justify-content: flex-start;
          }
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

          .guide-preview-card {
            border-radius: 32px;
            padding: 26px;
          }

          .split-card-actions,
          .split-card-actions .button,
          .final-cta-home-polished .button {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
