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

  return (
    <section className="page-section">
      <div className="site-shell">
        <div className="page-heading">
          <p className="eyebrow">{dictionary.bookingPage.eyebrow}</p>
          <h1>{dictionary.bookingPage.title}</h1>
          <p>{dictionary.bookingPage.description}</p>
        </div>

        <div className="booking-layout">
          <AvailabilityCalendar
            dictionary={dictionary}
            houses={houses}
            locale={locale}
          />

          <aside className="booking-aside">
            <p className="eyebrow">{dictionary.common.availabilityGuide}</p>

            <h2>{dictionary.bookingPage.inquiryTitle}</h2>
            <p>{dictionary.bookingPage.inquiryDescription}</p>

            <div className="booking-steps">
              <span>1. {dictionary.bookingPage.calendarTitle}</span>
              <span>2. {dictionary.bookingPage.selectedHouse}</span>
              <span>3. {dictionary.bookingPage.sendWhatsapp}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
