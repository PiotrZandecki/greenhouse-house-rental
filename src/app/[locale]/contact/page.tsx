import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

const facebookUrl = "https://www.facebook.com";
const emailAddress = "hello@greenhousehouserental.com";

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();
  const featuredHouse = houses[0];

  const platformLinks = Array.from(
    new Map(
      houses
        .flatMap((house) => house.platforms)
        .map((platform) => [platform.label, platform]),
    ).values(),
  );

  return (
    <section className="page-section contact-page-enhanced">
      <div className="site-shell">
        <div className="contact-hero">
          <div className="page-heading contact-hero-copy">
            <p className="eyebrow">{dictionary.contactPage.eyebrow}</p>
            <h1>{dictionary.contactPage.title}</h1>
            <p>{dictionary.contactPage.description}</p>
          </div>

          <div className="contact-hero-card">
            <span>General Santos City</span>
            <strong>{dictionary.common.stayTagline}</strong>
            <p>{dictionary.footer.description}</p>
          </div>
        </div>

        <div className="contact-action-grid">
          <article className="contact-card contact-card-featured contact-action-primary">
            <span className="contact-icon">WA</span>
            <p className="eyebrow">{dictionary.contactPage.whatsappTitle}</p>
            <h2>{dictionary.bookingPage.inquiryTitle}</h2>
            <p>{dictionary.contactPage.whatsappDescription}</p>

            <div className="contact-house-actions">
              {houses.map((house) => (
                <a
                  className="button button-primary"
                  href={house.whatsappUrl}
                  key={house.id}
                  rel="noreferrer"
                  target="_blank"
                >
                  {house.name}
                </a>
              ))}
            </div>
          </article>

          <article className="contact-card contact-action-secondary">
            <span className="contact-icon">FB</span>
            <p className="eyebrow">{dictionary.contactPage.facebookTitle}</p>
            <h2>{dictionary.contactPage.facebookTitle}</h2>
            <p>{dictionary.contactPage.facebookDescription}</p>
            <a
              className="button button-secondary"
              href={facebookUrl}
              rel="noreferrer"
              target="_blank"
            >
              {dictionary.contactPage.facebookTitle}
            </a>
          </article>

          <article className="contact-card contact-action-secondary">
            <span className="contact-icon">@</span>
            <p className="eyebrow">
              {dictionary.contactPage.directContactTitle}
            </p>
            <h2>{dictionary.contactPage.directContactTitle}</h2>
            <p>{dictionary.contactPage.directContactDescription}</p>
            <a
              className="button button-secondary"
              href={`mailto:${emailAddress}?subject=Greenhouse%20House%20Rental%20inquiry`}
            >
              {emailAddress}
            </a>
          </article>
        </div>

        <div className="contact-platform-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{dictionary.contactPage.platformsTitle}</p>
              <h2>{dictionary.contactPage.platformsTitle}</h2>
              <p>{dictionary.contactPage.platformsDescription}</p>
            </div>
          </div>

          <div className="contact-platform-grid">
            {platformLinks.map((platform) => (
              <a
                className="contact-platform-card"
                href={platform.href}
                key={platform.label}
                rel="noreferrer"
                target="_blank"
              >
                <span>{platform.label.slice(0, 2).toUpperCase()}</span>
                <strong>{platform.label}</strong>
                <small>{dictionary.common.bookNow}</small>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-stay-panel">
          <div>
            <p className="eyebrow">{featuredHouse.location[locale]}</p>
            <h2>{dictionary.home.ctaTitle}</h2>
            <p>{dictionary.home.ctaDescription}</p>
          </div>

          <div className="contact-stay-houses">
            {houses.map((house) => (
              <a
                className="contact-stay-house"
                href={house.mapUrl}
                key={house.id}
                rel="noreferrer"
                target="_blank"
              >
                <strong>{house.name}</strong>
                <span>{house.location[locale]}</span>
                <small>
                  {dictionary.common.from} {house.priceFrom}/
                  {dictionary.common.night}
                </small>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .contact-page-enhanced {
          position: relative;
          overflow: hidden;
        }

        .contact-page-enhanced::before {
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

        .contact-hero {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: end;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.36fr);
          margin-bottom: 34px;
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 64px);
        }

        .contact-hero-copy {
          margin-bottom: 0;
        }

        .contact-hero-card {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 28px;
          background: var(--surface);
          padding: 24px;
        }

        .contact-hero-card span {
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .contact-hero-card strong {
          font-size: 1.45rem;
          letter-spacing: -0.04em;
        }

        .contact-hero-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .contact-action-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 28px;
          grid-template-columns: minmax(0, 1.2fr) repeat(2, minmax(0, 0.9fr));
          margin-bottom: 64px;
        }

        .contact-action-primary {
          min-height: 100%;
        }

        .contact-action-secondary {
          min-height: 100%;
        }

        .contact-house-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 16px;
        }

        .contact-platform-section {
          position: relative;
          z-index: 1;
          margin-bottom: 64px;
        }

        .contact-platform-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .contact-platform-card {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 26px;
          background: var(--surface);
          padding: 24px;
          box-shadow: var(--shadow-soft);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .contact-platform-card:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
          box-shadow: var(--shadow);
        }

        .contact-platform-card span {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 18px;
          background: var(--primary);
          color: white;
          font-weight: 950;
        }

        .contact-platform-card strong {
          font-size: 1.3rem;
          letter-spacing: -0.04em;
        }

        .contact-platform-card small {
          color: var(--muted);
          font-weight: 900;
        }

        .contact-stay-panel {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: center;
          gap: 30px;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.58fr);
          border: 1px solid var(--border);
          border-radius: 42px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 64px);
        }

        .contact-stay-panel h2 {
          margin: 0;
          font-size: clamp(2.2rem, 4.2vw, 4.8rem);
          letter-spacing: -0.07em;
          line-height: 0.96;
        }

        .contact-stay-panel p {
          color: var(--muted);
          line-height: 1.75;
        }

        .contact-stay-houses {
          display: grid;
          gap: 12px;
        }

        .contact-stay-house {
          display: grid;
          gap: 6px;
          border: 1px solid var(--border);
          border-radius: 22px;
          background: var(--surface-strong);
          padding: 18px;
          transition:
            transform 180ms ease,
            border-color 180ms ease;
        }

        .contact-stay-house:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
        }

        .contact-stay-house strong {
          font-size: 1.22rem;
          letter-spacing: -0.04em;
        }

        .contact-stay-house span,
        .contact-stay-house small {
          color: var(--muted);
          font-weight: 850;
        }

        @media (max-width: 1180px) {
          .contact-hero,
          .contact-action-grid,
          .contact-stay-panel {
            grid-template-columns: 1fr;
          }

          .contact-platform-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .contact-hero,
          .contact-stay-panel {
            border-radius: 32px;
            padding: 26px;
          }

          .contact-platform-grid {
            grid-template-columns: 1fr;
          }

          .contact-house-actions .button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
