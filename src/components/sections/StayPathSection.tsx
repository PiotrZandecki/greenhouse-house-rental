import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type StayPathSectionProps = {
  dictionary: Dictionary;
  locale: Locale;
};

type StayPathCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  steps: {
    number: string;
    title: string;
    description: string;
    href: string;
  }[];
};

const stayPathCopy: Record<Locale, StayPathCopy> = {
  en: {
    eyebrow: "Stay path",
    title: "From first look to booking request in a few calm steps.",
    description:
      "Explore the houses, compare the atmosphere, open the gallery and move into booking only when the stay feels right.",
    primaryCta: "Start booking",
    secondaryCta: "Compare houses",
    steps: [
      {
        number: "01",
        title: "Choose the mood",
        description:
          "Fern House is softer and garden-oriented. Olive House is brighter and better for families or longer stays.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Open the gallery",
        description:
          "Move through the rooms, outdoor spaces and details before deciding which stay fits your plans.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Read the guide",
        description:
          "Check local tips, house rules and practical information before preparing your request.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Request your stay",
        description:
          "Select dates, add guest details and review the stay summary before confirmation.",
        href: "/booking",
      },
    ],
  },
  ceb: {
    eyebrow: "Stay path",
    title: "From first look to booking request in a few calm steps.",
    description:
      "Explore the houses, compare the atmosphere, open the gallery and move into booking only when the stay feels right.",
    primaryCta: "Start booking",
    secondaryCta: "Compare houses",
    steps: [
      {
        number: "01",
        title: "Choose the mood",
        description:
          "Fern House mas soft ug garden-oriented. Olive House mas bright ug bagay sa families o longer stays.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Open the gallery",
        description:
          "Tan-awa ang rooms, outdoor spaces ug details before deciding which stay fits your plans.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Read the guide",
        description:
          "Check local tips, house rules ug practical information before preparing your request.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Request your stay",
        description:
          "Select dates, add guest details ug review stay summary before confirmation.",
        href: "/booking",
      },
    ],
  },
  tl: {
    eyebrow: "Stay path",
    title: "From first look to booking request in a few calm steps.",
    description:
      "Explore the houses, compare the atmosphere, open the gallery and move into booking only when the stay feels right.",
    primaryCta: "Start booking",
    secondaryCta: "Compare houses",
    steps: [
      {
        number: "01",
        title: "Choose the mood",
        description:
          "Fern House is softer and garden-oriented. Olive House is brighter and better for families or longer stays.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Open the gallery",
        description:
          "Move through the rooms, outdoor spaces and details before deciding which stay fits your plans.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Read the guide",
        description:
          "Check local tips, house rules and practical information before preparing your request.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Request your stay",
        description:
          "Select dates, add guest details and review the stay summary before confirmation.",
        href: "/booking",
      },
    ],
  },
  ko: {
    eyebrow: "숙박 흐름",
    title: "첫 인상부터 예약 요청까지 차분하게 이어집니다.",
    description:
      "숙소를 둘러보고 분위기를 비교한 뒤, 갤러리와 가이드를 확인하고 마음에 맞을 때 예약으로 이동하세요.",
    primaryCta: "예약 시작",
    secondaryCta: "숙소 비교",
    steps: [
      {
        number: "01",
        title: "분위기 선택",
        description:
          "Fern House는 더 부드럽고 정원 중심입니다. Olive House는 더 밝고 가족 또는 장기 숙박에 좋습니다.",
        href: "/houses",
      },
      {
        number: "02",
        title: "갤러리 보기",
        description:
          "객실, 야외 공간과 디테일을 확인하며 여행에 맞는 숙소를 선택하세요.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "가이드 읽기",
        description:
          "지역 팁, 숙소 규칙과 실용 정보를 확인한 뒤 요청을 준비하세요.",
        href: "/guide",
      },
      {
        number: "04",
        title: "숙박 요청",
        description: "날짜와 게스트 정보를 입력하고 확인 전 요약을 검토하세요.",
        href: "/booking",
      },
    ],
  },
  es: {
    eyebrow: "Ruta de estancia",
    title: "Del primer vistazo a la solicitud en pocos pasos tranquilos.",
    description:
      "Explora las casas, compara la atmósfera, abre la galería y avanza a la reserva cuando el lugar encaje.",
    primaryCta: "Empezar reserva",
    secondaryCta: "Comparar casas",
    steps: [
      {
        number: "01",
        title: "Elige el ambiente",
        description:
          "Fern House es más suave y orientada al jardín. Olive House es más luminosa y mejor para familias o estancias largas.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Abre la galería",
        description:
          "Recorre habitaciones, espacios exteriores y detalles antes de elegir.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Lee la guía",
        description:
          "Consulta consejos locales, normas y detalles prácticos antes de preparar tu solicitud.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Solicita tu estancia",
        description:
          "Selecciona fechas, añade datos y revisa el resumen antes de confirmar.",
        href: "/booking",
      },
    ],
  },
  fr: {
    eyebrow: "Parcours séjour",
    title: "Du premier aperçu à la demande en quelques étapes calmes.",
    description:
      "Explorez les maisons, comparez l’atmosphère, ouvrez la galerie puis passez à la réservation quand le séjour vous convient.",
    primaryCta: "Commencer la réservation",
    secondaryCta: "Comparer les maisons",
    steps: [
      {
        number: "01",
        title: "Choisir l’ambiance",
        description:
          "Fern House est plus douce et orientée jardin. Olive House est plus lumineuse et adaptée aux familles ou longs séjours.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Ouvrir la galerie",
        description:
          "Parcourez les chambres, extérieurs et détails avant de choisir.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Lire le guide",
        description:
          "Consultez conseils locaux, règles et informations pratiques avant la demande.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Demander le séjour",
        description:
          "Sélectionnez les dates, ajoutez les informations et vérifiez le résumé.",
        href: "/booking",
      },
    ],
  },
  de: {
    eyebrow: "Aufenthaltsweg",
    title: "Vom ersten Eindruck zur Anfrage in wenigen ruhigen Schritten.",
    description:
      "Entdecke die Häuser, vergleiche die Atmosphäre, öffne die Galerie und gehe zur Buchung, wenn es passt.",
    primaryCta: "Buchung starten",
    secondaryCta: "Häuser vergleichen",
    steps: [
      {
        number: "01",
        title: "Stimmung wählen",
        description:
          "Fern House ist ruhiger und gartenorientiert. Olive House ist heller und besser für Familien oder längere Aufenthalte.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Galerie öffnen",
        description:
          "Sieh dir Räume, Außenbereiche und Details an, bevor du entscheidest.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Guide lesen",
        description:
          "Prüfe lokale Tipps, Hausregeln und praktische Informationen vor der Anfrage.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Aufenthalt anfragen",
        description:
          "Wähle Daten, füge Gästedaten hinzu und prüfe die Übersicht.",
        href: "/booking",
      },
    ],
  },
  pl: {
    eyebrow: "Ścieżka pobytu",
    title: "Od pierwszego wrażenia do zapytania w kilku spokojnych krokach.",
    description:
      "Poznaj domy, porównaj klimat, otwórz galerię i przejdź do rezerwacji dopiero wtedy, gdy pobyt będzie pasował do Twoich planów.",
    primaryCta: "Rozpocznij rezerwację",
    secondaryCta: "Porównaj domy",
    steps: [
      {
        number: "01",
        title: "Wybierz klimat",
        description:
          "Fern House jest spokojniejszy i bardziej ogrodowy. Olive House jest jaśniejszy i lepszy dla rodzin lub dłuższych pobytów.",
        href: "/houses",
      },
      {
        number: "02",
        title: "Otwórz galerię",
        description:
          "Przejdź przez pokoje, przestrzenie zewnętrzne i detale przed wyborem domu.",
        href: "/gallery",
      },
      {
        number: "03",
        title: "Przeczytaj przewodnik",
        description:
          "Sprawdź lokalne wskazówki, zasady domu i praktyczne informacje przed przygotowaniem zapytania.",
        href: "/guide",
      },
      {
        number: "04",
        title: "Wyślij zapytanie",
        description:
          "Wybierz daty, dodaj dane gościa i sprawdź podsumowanie przed potwierdzeniem.",
        href: "/booking",
      },
    ],
  },
};

export function StayPathSection({ dictionary, locale }: StayPathSectionProps) {
  const copy = stayPathCopy[locale];

  return (
    <section className="section stay-path-section">
      <div className="site-shell stay-path-card">
        <div className="section-heading section-heading-row stay-path-heading">
          <div>
            <p className="eyebrow">{copy.eyebrow}</p>
            <h2>{copy.title}</h2>
            <p>{copy.description}</p>
          </div>

          <div className="stay-path-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking"
              locale={locale}
            >
              {copy.primaryCta}
            </LocalizedLink>

            <LocalizedLink
              className="button button-secondary"
              href="/houses"
              locale={locale}
            >
              {copy.secondaryCta}
            </LocalizedLink>
          </div>
        </div>

        <div className="stay-path-grid">
          {copy.steps.map((step) => (
            <LocalizedLink
              className="stay-path-step"
              href={step.href}
              key={step.number}
              locale={locale}
            >
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <small>{dictionary.common.learnMore} →</small>
            </LocalizedLink>
          ))}
        </div>
      </div>

      <style>{`
        .stay-path-section {
          position: relative;
          overflow: hidden;
        }

        .stay-path-card {
          position: relative;
          overflow: hidden;
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          background:
            radial-gradient(circle at 12% 18%, var(--primary-soft), transparent 24rem),
            color-mix(in srgb, var(--surface) 96%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(28px, 5vw, 64px);
        }

        .stay-path-card::after {
          position: absolute;
          right: -12rem;
          bottom: -16rem;
          width: 34rem;
          height: 34rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-soft), transparent 70%);
          opacity: 0.72;
          pointer-events: none;
        }

        .stay-path-heading {
          position: relative;
          z-index: 1;
        }

        .stay-path-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: flex-end;
        }

        .stay-path-grid {
          position: relative;
          z-index: 1;
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 28px;
        }

        .stay-path-step {
          display: grid;
          align-content: start;
          gap: 12px;
          min-height: 100%;
          border: 1px solid var(--border);
          border-radius: 28px;
          background: var(--surface);
          padding: 24px;
          box-shadow: var(--shadow-soft);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .stay-path-step:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
          box-shadow: var(--shadow);
        }

        .stay-path-step span {
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

        .stay-path-step h3 {
          margin: 8px 0 0;
          font-size: 1.35rem;
          letter-spacing: -0.045em;
        }

        .stay-path-step p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .stay-path-step small {
          margin-top: auto;
          color: var(--primary);
          font-weight: 950;
        }

        @media (max-width: 1180px) {
          .stay-path-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stay-path-actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 760px) {
          .stay-path-card {
            border-radius: 32px;
            padding: 24px;
          }

          .stay-path-grid {
            grid-template-columns: 1fr;
          }

          .stay-path-actions,
          .stay-path-actions .button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
