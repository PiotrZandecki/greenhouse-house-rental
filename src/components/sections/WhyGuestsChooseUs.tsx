import type { House, Locale } from "@/types/site";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type WhyGuestsChooseUsProps = {
  houses: House[];
  locale: Locale;
};

type WhyCopy = {
  eyebrow: string;
  title: string;
  description: string;
  cards: {
    title: string;
    description: string;
  }[];
  compareEyebrow: string;
  compareTitle: string;
  compareDescription: string;
  fernNote: string;
  oliveNote: string;
  bookFern: string;
  bookOlive: string;
};

const whyCopy: Record<Locale, WhyCopy> = {
  en: {
    eyebrow: "Why guests choose us",
    title: "A stay designed around clarity, comfort and easy planning.",
    description:
      "The site gives guests enough context to choose confidently before they send a booking request.",
    cards: [
      {
        title: "Clear house identity",
        description:
          "Each house has a distinct mood, location, gallery and booking path.",
      },
      {
        title: "Visual decision-making",
        description:
          "Large galleries, house details and immersive sections help guests understand the stay before arrival.",
      },
      {
        title: "Simple request flow",
        description:
          "Guests can move from house details directly into booking with the right house already selected.",
      },
    ],
    compareEyebrow: "Quick comparison",
    compareTitle: "Two houses, two different stay styles.",
    compareDescription:
      "Choose Fern House for a softer garden stay or Olive House for a brighter family-friendly base.",
    fernNote: "Calm, garden-focused, intimate.",
    oliveNote: "Larger, brighter, family-friendly.",
    bookFern: "Book Fern House",
    bookOlive: "Book Olive House",
  },
  ceb: {
    eyebrow: "Why guests choose us",
    title: "A stay designed around clarity, comfort ug easy planning.",
    description:
      "The site gives guests enough context to choose confidently before sending a booking request.",
    cards: [
      {
        title: "Clear house identity",
        description:
          "Each house has its own mood, location, gallery ug booking path.",
      },
      {
        title: "Visual decision-making",
        description:
          "Large galleries, house details ug immersive sections help guests understand the stay.",
      },
      {
        title: "Simple request flow",
        description:
          "Guests can move from house details directly into booking with the right house selected.",
      },
    ],
    compareEyebrow: "Quick comparison",
    compareTitle: "Two houses, two different stay styles.",
    compareDescription:
      "Choose Fern House for a softer garden stay or Olive House for a brighter family-friendly base.",
    fernNote: "Calm, garden-focused, intimate.",
    oliveNote: "Larger, brighter, family-friendly.",
    bookFern: "Book Fern House",
    bookOlive: "Book Olive House",
  },
  tl: {
    eyebrow: "Why guests choose us",
    title: "A stay designed around clarity, comfort and easy planning.",
    description:
      "The site gives guests enough context to choose confidently before they send a booking request.",
    cards: [
      {
        title: "Clear house identity",
        description:
          "Each house has a distinct mood, location, gallery and booking path.",
      },
      {
        title: "Visual decision-making",
        description:
          "Large galleries, house details and immersive sections help guests understand the stay before arrival.",
      },
      {
        title: "Simple request flow",
        description:
          "Guests can move from house details directly into booking with the right house already selected.",
      },
    ],
    compareEyebrow: "Quick comparison",
    compareTitle: "Two houses, two different stay styles.",
    compareDescription:
      "Choose Fern House for a softer garden stay or Olive House for a brighter family-friendly base.",
    fernNote: "Calm, garden-focused, intimate.",
    oliveNote: "Larger, brighter, family-friendly.",
    bookFern: "Book Fern House",
    bookOlive: "Book Olive House",
  },
  ko: {
    eyebrow: "선택받는 이유",
    title: "명확함, 편안함, 쉬운 계획을 중심으로 만든 숙박 경험.",
    description:
      "게스트가 예약 요청 전 충분히 비교하고 자신 있게 선택할 수 있도록 구성했습니다.",
    cards: [
      {
        title: "명확한 숙소 개성",
        description:
          "각 숙소는 고유한 분위기, 위치, 갤러리와 예약 흐름을 가지고 있습니다.",
      },
      {
        title: "시각적 선택",
        description:
          "큰 갤러리와 상세 섹션이 도착 전 숙박 경험을 더 쉽게 이해하게 합니다.",
      },
      {
        title: "간단한 요청 흐름",
        description:
          "숙소 상세에서 선택한 숙소가 유지된 채 예약으로 바로 이동할 수 있습니다.",
      },
    ],
    compareEyebrow: "빠른 비교",
    compareTitle: "두 숙소, 두 가지 다른 숙박 스타일.",
    compareDescription:
      "더 조용한 정원 숙박은 Fern House, 더 밝고 가족 친화적인 거점은 Olive House를 선택하세요.",
    fernNote: "조용함, 정원 중심, 아늑함.",
    oliveNote: "더 넓고 밝으며 가족 친화적.",
    bookFern: "Fern House 예약",
    bookOlive: "Olive House 예약",
  },
  es: {
    eyebrow: "Por qué nos eligen",
    title:
      "Una estancia pensada para claridad, comodidad y planificación fácil.",
    description:
      "La página da suficiente contexto para elegir con confianza antes de enviar una solicitud.",
    cards: [
      {
        title: "Identidad clara",
        description:
          "Cada casa tiene ambiente, ubicación, galería y ruta de reserva propios.",
      },
      {
        title: "Decisión visual",
        description:
          "Galerías amplias y detalles ayudan a entender la estancia antes de llegar.",
      },
      {
        title: "Flujo simple",
        description:
          "El huésped pasa del detalle de la casa a la reserva con la casa correcta seleccionada.",
      },
    ],
    compareEyebrow: "Comparación rápida",
    compareTitle: "Dos casas, dos estilos de estancia.",
    compareDescription:
      "Elige Fern House para un ambiente más tranquilo o Olive House para una base familiar más luminosa.",
    fernNote: "Tranquila, jardín, íntima.",
    oliveNote: "Más amplia, luminosa, familiar.",
    bookFern: "Reservar Fern House",
    bookOlive: "Reservar Olive House",
  },
  fr: {
    eyebrow: "Pourquoi les voyageurs choisissent",
    title: "Un séjour pensé pour la clarté, le confort et la simplicité.",
    description:
      "Le site donne assez de contexte pour choisir avec confiance avant la demande.",
    cards: [
      {
        title: "Identité claire",
        description:
          "Chaque maison a son ambiance, emplacement, galerie et parcours de réservation.",
      },
      {
        title: "Décision visuelle",
        description:
          "Grandes galeries et détails aident à comprendre le séjour avant l’arrivée.",
      },
      {
        title: "Parcours simple",
        description:
          "Le voyageur passe des détails de maison à la réservation avec la maison déjà sélectionnée.",
      },
    ],
    compareEyebrow: "Comparaison rapide",
    compareTitle: "Deux maisons, deux styles de séjour.",
    compareDescription:
      "Choisissez Fern House pour un séjour jardin plus calme ou Olive House pour une base familiale plus lumineuse.",
    fernNote: "Calme, jardin, intime.",
    oliveNote: "Plus grande, lumineuse, familiale.",
    bookFern: "Réserver Fern House",
    bookOlive: "Réserver Olive House",
  },
  de: {
    eyebrow: "Warum Gäste uns wählen",
    title: "Ein Aufenthalt mit Klarheit, Komfort und einfacher Planung.",
    description:
      "Die Seite gibt Gästen genug Kontext, um vor der Anfrage sicher zu wählen.",
    cards: [
      {
        title: "Klare Hausidentität",
        description:
          "Jedes Haus hat eigene Stimmung, Lage, Galerie und Buchungsweg.",
      },
      {
        title: "Visuelle Entscheidung",
        description:
          "Große Galerien und Details helfen, den Aufenthalt vor Ankunft zu verstehen.",
      },
      {
        title: "Einfacher Ablauf",
        description:
          "Gäste gelangen direkt von den Hausdetails zur Buchung mit dem passenden Haus.",
      },
    ],
    compareEyebrow: "Schneller Vergleich",
    compareTitle: "Zwei Häuser, zwei Aufenthaltsstile.",
    compareDescription:
      "Fern House für einen ruhigeren Gartenaufenthalt, Olive House für eine hellere familienfreundliche Basis.",
    fernNote: "Ruhig, gartenorientiert, intim.",
    oliveNote: "Größer, heller, familienfreundlich.",
    bookFern: "Fern House buchen",
    bookOlive: "Olive House buchen",
  },
  pl: {
    eyebrow: "Dlaczego goście nas wybierają",
    title:
      "Pobyt zaprojektowany wokół czytelności, komfortu i prostego planowania.",
    description:
      "Strona daje gościom wystarczająco dużo kontekstu, żeby świadomie wybrać dom przed wysłaniem zapytania.",
    cards: [
      {
        title: "Wyraźna tożsamość domów",
        description:
          "Każdy dom ma własny klimat, lokalizację, galerię i ścieżkę rezerwacji.",
      },
      {
        title: "Decyzja przez obraz",
        description:
          "Duże galerie, szczegóły domów i immersyjne sekcje pomagają zrozumieć pobyt przed przyjazdem.",
      },
      {
        title: "Prosty proces zapytania",
        description:
          "Gość może przejść ze szczegółów domu prosto do rezerwacji z wybranym domem.",
      },
    ],
    compareEyebrow: "Szybkie porównanie",
    compareTitle: "Dwa domy, dwa różne style pobytu.",
    compareDescription:
      "Wybierz Fern House dla spokojniejszego ogrodowego klimatu albo Olive House jako jaśniejszą, rodzinną bazę.",
    fernNote: "Spokojny, ogrodowy, kameralny.",
    oliveNote: "Większy, jaśniejszy, rodzinny.",
    bookFern: "Zarezerwuj Fern House",
    bookOlive: "Zarezerwuj Olive House",
  },
};

export function WhyGuestsChooseUs({ houses, locale }: WhyGuestsChooseUsProps) {
  const copy = whyCopy[locale];
  const fernHouse = houses.find((house) => house.id === "fern-house");
  const oliveHouse = houses.find((house) => house.id === "olive-house");

  return (
    <section className="section why-guests-section">
      <div className="site-shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
            <p>{copy.description}</p>
          </div>
        </div>

        <div className="why-guests-grid">
          {copy.cards.map((card, index) => (
            <article className="why-guests-card" key={card.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="why-compare-panel">
          <div>
            <p className="eyebrow">{copy.compareEyebrow}</p>
            <h2>{copy.compareTitle}</h2>
            <p>{copy.compareDescription}</p>
          </div>

          <div className="why-compare-houses">
            {fernHouse ? (
              <article>
                <span>{fernHouse.location[locale]}</span>
                <h3>{fernHouse.name}</h3>
                <p>{copy.fernNote}</p>
                <LocalizedLink
                  className="button button-secondary"
                  href={`/booking?house=${fernHouse.id}`}
                  locale={locale}
                >
                  {copy.bookFern}
                </LocalizedLink>
              </article>
            ) : null}

            {oliveHouse ? (
              <article>
                <span>{oliveHouse.location[locale]}</span>
                <h3>{oliveHouse.name}</h3>
                <p>{copy.oliveNote}</p>
                <LocalizedLink
                  className="button button-secondary"
                  href={`/booking?house=${oliveHouse.id}`}
                  locale={locale}
                >
                  {copy.bookOlive}
                </LocalizedLink>
              </article>
            ) : null}
          </div>
        </div>
      </div>

      <style>{`
        .why-guests-section {
          position: relative;
          overflow: hidden;
        }

        .why-guests-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-bottom: 28px;
        }

        .why-guests-card,
        .why-compare-panel,
        .why-compare-houses article {
          border: 1px solid var(--border);
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 96%, transparent);
          box-shadow: var(--shadow-soft);
        }

        .why-guests-card {
          display: grid;
          gap: 12px;
          border-radius: 28px;
          padding: 28px;
        }

        .why-guests-card span {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 17px;
          background: var(--primary);
          color: white;
          font-size: 0.82rem;
          font-weight: 950;
        }

        .why-guests-card h3 {
          margin: 8px 0 0;
          font-size: 1.4rem;
          letter-spacing: -0.045em;
        }

        .why-guests-card p,
        .why-compare-panel p,
        .why-compare-houses p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .why-compare-panel {
          display: grid;
          align-items: center;
          gap: clamp(28px, 5vw, 64px);
          grid-template-columns: minmax(0, 0.82fr) minmax(460px, 1.18fr);
          border-radius: var(--radius-xl);
          padding: clamp(30px, 5vw, 64px);
        }

        .why-compare-panel h2 {
          margin: 0;
          font-size: clamp(2.2rem, 4vw, 4.8rem);
          line-height: 1.04;
          letter-spacing: -0.075em;
        }

        .why-compare-houses {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .why-compare-houses article {
          display: grid;
          gap: 12px;
          border-radius: 28px;
          padding: 24px;
        }

        .why-compare-houses span {
          color: var(--primary);
          font-size: 0.74rem;
          font-weight: 950;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .why-compare-houses h3 {
          margin: 0;
          font-size: 1.55rem;
          letter-spacing: -0.05em;
        }

        @media (max-width: 1180px) {
          .why-guests-grid,
          .why-compare-panel,
          .why-compare-houses {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .why-guests-card,
          .why-compare-panel {
            border-radius: 30px;
            padding: 24px;
          }

          .why-compare-houses .button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
