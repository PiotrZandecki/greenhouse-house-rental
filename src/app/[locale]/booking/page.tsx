import { notFound } from "next/navigation";

import { AvailabilityCalendar } from "@/components/booking/AvailabilityCalendar";
import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import type { Locale } from "@/types/site";

type BookingPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type BookingPageCopy = {
  stepOneTitle: string;
  stepOneDescription: string;
  stepTwoTitle: string;
  stepTwoDescription: string;
  stepThreeTitle: string;
  stepThreeDescription: string;
  stepFourTitle: string;
  stepFourDescription: string;
};

const bookingPageCopy: Record<Locale, BookingPageCopy> = {
  en: {
    stepOneTitle: "Choose your dates",
    stepOneDescription:
      "Select your preferred house, check-in date and check-out date from the availability calendar.",
    stepTwoTitle: "Add guest details",
    stepTwoDescription:
      "Enter the number of guests and the details needed to prepare your stay request.",
    stepThreeTitle: "Review request",
    stepThreeDescription:
      "Review the full stay summary, estimated total and guest information before confirming.",
    stepFourTitle: "Confirm request",
    stepFourDescription:
      "Receive a request code and keep the summary ready for final host confirmation.",
  },
  ceb: {
    stepOneTitle: "Pili-a ang dates",
    stepOneDescription:
      "Pili-a ang preferred house, check-in date ug check-out date gamit ang availability calendar.",
    stepTwoTitle: "Ibutang ang guest details",
    stepTwoDescription:
      "Ibutang ang number of guests ug details nga kinahanglan para ma-prepare ang stay request.",
    stepThreeTitle: "Review request",
    stepThreeDescription:
      "I-review ang full stay summary, estimated total ug guest information before i-confirm.",
    stepFourTitle: "Confirm request",
    stepFourDescription:
      "Makakuha og request code ug ready nga summary para sa final host confirmation.",
  },
  tl: {
    stepOneTitle: "Piliin ang dates",
    stepOneDescription:
      "Piliin ang preferred house, check-in date at check-out date mula sa availability calendar.",
    stepTwoTitle: "Ilagay ang guest details",
    stepTwoDescription:
      "Ilagay ang number of guests at details na kailangan para maihanda ang stay request.",
    stepThreeTitle: "Review request",
    stepThreeDescription:
      "I-review ang full stay summary, estimated total at guest information bago i-confirm.",
    stepFourTitle: "Confirm request",
    stepFourDescription:
      "Receive a request code and keep the summary ready for final host confirmation.",
  },
  ko: {
    stepOneTitle: "날짜 선택",
    stepOneDescription:
      "가능 일정 캘린더에서 원하는 숙소, 체크인 날짜, 체크아웃 날짜를 선택하세요.",
    stepTwoTitle: "게스트 정보 입력",
    stepTwoDescription:
      "숙박 요청을 준비하는 데 필요한 게스트 수와 정보를 입력하세요.",
    stepThreeTitle: "요청 검토",
    stepThreeDescription:
      "숙박 요약, 예상 합계, 게스트 정보를 확인한 뒤 요청을 확정하세요.",
    stepFourTitle: "요청 확인",
    stepFourDescription:
      "요청 코드를 받고 최종 호스트 확인을 위한 요약을 준비하세요.",
  },
  es: {
    stepOneTitle: "Elige tus fechas",
    stepOneDescription:
      "Selecciona la casa, fecha de llegada y fecha de salida en el calendario de disponibilidad.",
    stepTwoTitle: "Añade los datos del huésped",
    stepTwoDescription:
      "Indica el número de huéspedes y los datos necesarios para preparar tu solicitud de estancia.",
    stepThreeTitle: "Revisa la solicitud",
    stepThreeDescription:
      "Revisa el resumen de estancia, total estimado e información del huésped antes de confirmar.",
    stepFourTitle: "Confirma la solicitud",
    stepFourDescription:
      "Recibe un código de solicitud y conserva el resumen para la confirmación final.",
  },
  fr: {
    stepOneTitle: "Choisissez vos dates",
    stepOneDescription:
      "Sélectionnez la maison, la date d’arrivée et la date de départ dans le calendrier de disponibilité.",
    stepTwoTitle: "Ajoutez les informations voyageurs",
    stepTwoDescription:
      "Indiquez le nombre de voyageurs et les informations nécessaires pour préparer votre demande de séjour.",
    stepThreeTitle: "Vérifiez la demande",
    stepThreeDescription:
      "Vérifiez le résumé du séjour, le total estimé et les informations voyageurs avant confirmation.",
    stepFourTitle: "Confirmez la demande",
    stepFourDescription:
      "Recevez un code de demande et gardez le résumé prêt pour la confirmation finale.",
  },
  de: {
    stepOneTitle: "Daten auswählen",
    stepOneDescription:
      "Wähle dein bevorzugtes Haus, Check-in und Check-out im Verfügbarkeitskalender.",
    stepTwoTitle: "Gästedaten hinzufügen",
    stepTwoDescription:
      "Gib die Gästezahl und die Informationen ein, die zur Vorbereitung deiner Aufenthaltsanfrage benötigt werden.",
    stepThreeTitle: "Anfrage prüfen",
    stepThreeDescription:
      "Prüfe Aufenthaltsübersicht, geschätzten Gesamtpreis und Gästedaten vor der Bestätigung.",
    stepFourTitle: "Anfrage bestätigen",
    stepFourDescription:
      "Erhalte einen Anfragecode und halte die Übersicht für die finale Bestätigung bereit.",
  },
  pl: {
    stepOneTitle: "Wybierz daty",
    stepOneDescription:
      "Wybierz preferowany dom, datę zameldowania i datę wymeldowania w kalendarzu dostępności.",
    stepTwoTitle: "Dodaj dane gościa",
    stepTwoDescription:
      "Podaj liczbę gości oraz dane potrzebne do przygotowania zapytania o pobyt.",
    stepThreeTitle: "Sprawdź zapytanie",
    stepThreeDescription:
      "Sprawdź podsumowanie pobytu, szacowaną kwotę i dane gościa przed potwierdzeniem.",
    stepFourTitle: "Potwierdź zapytanie",
    stepFourDescription:
      "Otrzymaj kod zapytania i zachowaj podsumowanie do finalnego potwierdzenia.",
  },
};

export default async function BookingPage({ params }: BookingPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();
  const copy = bookingPageCopy[locale];

  const bookingSteps = [
    {
      number: "01",
      title: copy.stepOneTitle,
      description: copy.stepOneDescription,
    },
    {
      number: "02",
      title: copy.stepTwoTitle,
      description: copy.stepTwoDescription,
    },
    {
      number: "03",
      title: copy.stepThreeTitle,
      description: copy.stepThreeDescription,
    },
    {
      number: "04",
      title: copy.stepFourTitle,
      description: copy.stepFourDescription,
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

        <AvailabilityCalendar
          dictionary={dictionary}
          houses={houses}
          locale={locale}
        />
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
          grid-template-columns: repeat(4, minmax(0, 1fr));
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

        @media (max-width: 1280px) {
          .booking-flow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 1180px) {
          .booking-hero-panel {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .booking-hero-panel {
            border-radius: 32px;
            padding: 26px;
          }

          .booking-flow-grid {
            grid-template-columns: 1fr;
          }

          .booking-flow-card {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
}
