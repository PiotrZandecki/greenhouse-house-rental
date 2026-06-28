import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ContactPage({ params }: ContactPageProps) {
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
          <p className="eyebrow">{dictionary.contactPage.eyebrow}</p>
          <h1>{dictionary.contactPage.title}</h1>
          <p>{dictionary.contactPage.description}</p>
        </div>

        <div className="contact-grid">
          <article className="contact-card contact-card-featured">
            <span className="contact-icon">☏</span>
            <h2>{dictionary.contactPage.whatsappTitle}</h2>
            <p>{dictionary.contactPage.whatsappDescription}</p>
            <div className="contact-actions">
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

          <article className="contact-card">
            <span className="contact-icon">f</span>
            <h2>{dictionary.contactPage.facebookTitle}</h2>
            <p>{dictionary.contactPage.facebookDescription}</p>
            <a
              className="button button-secondary"
              href="https://www.facebook.com"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </article>

          <article className="contact-card">
            <span className="contact-icon">★</span>
            <h2>{dictionary.contactPage.platformsTitle}</h2>
            <p>{dictionary.contactPage.platformsDescription}</p>
            <div className="platform-row platform-row-contact">
              <a
                href="https://www.booking.com"
                rel="noreferrer"
                target="_blank"
              >
                Booking.com
              </a>
              <a href="https://www.agoda.com" rel="noreferrer" target="_blank">
                Agoda
              </a>
              <a href="https://www.airbnb.com" rel="noreferrer" target="_blank">
                Airbnb
              </a>
            </div>
          </article>

          <article className="contact-card">
            <span className="contact-icon">✉</span>
            <h2>{dictionary.contactPage.directContactTitle}</h2>
            <p>{dictionary.contactPage.directContactDescription}</p>
            <a
              className="button button-secondary"
              href="mailto:hello@greenhouse-demo.com"
            >
              hello@greenhouse-demo.com
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
