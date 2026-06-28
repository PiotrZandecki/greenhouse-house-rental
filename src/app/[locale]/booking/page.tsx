import { notFound } from "next/navigation";

import { AvailabilityCalendar } from "@/components/booking/AvailabilityCalendar";
import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";

type BookingPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();

  const bookingSteps = [
    {
      number: "01",
      title: dictionary.bookingPage.calendarTitle,
      description: dictionary.bookingPage.calendarDescription,
    },
    {
      number: "02",
      title: dictionary.bookingPage.selectedHouse,
      description: dictionary.housesPage.description,
    },
    {
      number: "03",
      title: dictionary.bookingPage.sendWhatsapp,
      description: dictionary.bookingPage.inquiryDescription,
    },
  ];

  return (
    <section className="page-section booking-page-enhanced">
      <div className="site-shell">
        <div className="booking-hero-panel">
          <div className="page-heading booking-hero-copy">
            <p className="eyebrow">{dictionary.bookingPage.eyebrow}</p>
            <h1>{dictionary.bookingPage.title}</h1>
            <p>{dictionary.bookingPage.description}</p>
          </div>

          <div className="booking-hero-summary">
            <span>{dictionary.common.available}</span>
            <strong>{dictionary.common.availabilityGuide}</strong>
            <p>{dictionary.bookingPage.calendarDescription}</p>
          </div>
        </div>

        <div className="booking-flow-grid">
          {bookingSteps.map((step) => (
            <article className="booking-flow-card" key={step.number}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.description}</p>
            </article>
          ))}
        </div>

        <div className="booking-layout booking-layout-enhanced">
          <AvailabilityCalendar
            dictionary={dictionary}
            houses={houses}
            locale={locale}
          />

          <aside className="booking-aside booking-aside-enhanced">
            <div>
              <p className="eyebrow">{dictionary.common.availabilityGuide}</p>
              <h2>{dictionary.bookingPage.inquiryTitle}</h2>
              <p>{dictionary.bookingPage.inquiryDescription}</p>
            </div>

            <div className="booking-property-shortcuts">
              {houses.map((house) => (
                <a
                  className="booking-property-card"
                  href={house.whatsappUrl}
                  key={house.id}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{house.location[locale]}</span>
                  <strong>{house.name}</strong>
                  <small>
                    {dictionary.common.from} {house.priceFrom}/
                    {dictionary.common.night}
                  </small>
                </a>
              ))}
            </div>

            <div className="booking-direct-note">
              <span>WhatsApp</span>
              <p>{dictionary.contactPage.whatsappDescription}</p>
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        .booking-page-enhanced {
          position: relative;
          overflow: hidden;
        }

        .booking-page-enhanced::before {
          position: absolute;
          top: 10rem;
          left: -18rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.72;
          pointer-events: none;
        }

        .booking-hero-panel {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: end;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.34fr);
          margin-bottom: 34px;
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 64px);
        }

        .booking-hero-copy {
          margin-bottom: 0;
        }

        .booking-hero-copy h1 {
          max-width: 1080px;
        }

        .booking-hero-summary {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 28px;
          background: var(--surface);
          padding: 24px;
        }

        .booking-hero-summary span {
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .booking-hero-summary strong {
          font-size: 1.4rem;
          letter-spacing: -0.04em;
        }

        .booking-hero-summary p {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .booking-flow-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-bottom: 34px;
        }

        .booking-flow-card {
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          background: var(--surface);
          padding: 24px;
          box-shadow: var(--shadow-soft);
        }

        .booking-flow-card span {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border-radius: 16px;
          background: var(--primary);
          color: white;
          font-size: 0.82rem;
          font-weight: 950;
        }

        .booking-flow-card h2 {
          margin: 18px 0 8px;
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        .booking-flow-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .booking-layout-enhanced {
          position: relative;
          z-index: 1;
        }

        .booking-aside-enhanced {
          display: grid;
          gap: 22px;
        }

        .booking-property-shortcuts {
          display: grid;
          gap: 12px;
        }

        .booking-property-card {
          display: grid;
          gap: 6px;
          border: 1px solid var(--border);
          border-radius: 22px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
          padding: 18px;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .booking-property-card:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
          box-shadow: var(--shadow-soft);
        }

        .booking-property-card span {
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .booking-property-card strong {
          font-size: 1.25rem;
          letter-spacing: -0.04em;
        }

        .booking-property-card small {
          color: var(--muted);
          font-weight: 850;
        }

        .booking-direct-note {
          border: 1px solid var(--border);
          border-radius: 24px;
          background: var(--background-soft);
          padding: 20px;
        }

        .booking-direct-note span {
          display: inline-flex;
          margin-bottom: 8px;
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .booking-direct-note p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        @media (max-width: 1180px) {
          .booking-hero-panel,
          .booking-flow-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .booking-hero-panel {
            border-radius: 32px;
            padding: 26px;
          }

          .booking-flow-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
