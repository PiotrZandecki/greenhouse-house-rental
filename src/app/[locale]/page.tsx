import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { Locale } from "@/types/site";
import { isLocale } from "@/lib/i18n";

type StoryPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type StoryCopy = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  signature: string;
};

const storyCopy: Record<Locale, StoryCopy> = {
  en: {
    eyebrow: "Before you enter",
    title:
      "A small dream between two homes, two cultures and one quiet garden.",
    body: "Greenhouse House Rental grew from the shared dream of an international couple: a Filipina who carries the warmth of Mindanao hospitality and a Polish husband who fell in love with calm mornings, tropical gardens and the feeling of being welcomed far from home. The two houses were shaped around that idea — a place where cultures meet gently, where guests can slow down, breathe and feel cared for.",
    cta: "Start",
    signature: "Welcome to Greenhouse House Rental",
  },
  ceb: {
    eyebrow: "Sa dili pa ka mosulod",
    title:
      "Usa ka gamay nga damgo tali sa duha ka balay, duha ka kultura ug usa ka malinawon nga garden.",
    body: "Ang Greenhouse House Rental nagsugod sa shared dream sa international couple: usa ka Filipina nga nagdala sa kainit sa Mindanao hospitality ug usa ka Polish husband nga nahigugma sa hilom nga buntag, tropical gardens ug sa feeling nga gi-welcome bisan layo sa balay. Ang duha ka balay gihimo palibot ana nga idea — usa ka lugar diin magtagbo ang kultura, makapahinay ang guests, makaginhawa ug mobati nga giatiman sila.",
    cta: "Start",
    signature: "Welcome sa Greenhouse House Rental",
  },
  tl: {
    eyebrow: "Bago ka pumasok",
    title:
      "Isang maliit na pangarap sa pagitan ng dalawang bahay, dalawang kultura at isang tahimik na garden.",
    body: "Nagsimula ang Greenhouse House Rental sa shared dream ng isang international couple: isang Filipina na dala ang init ng Mindanao hospitality at isang Polish husband na na-in love sa tahimik na umaga, tropical gardens at pakiramdam ng pagiging welcome kahit malayo sa bahay. Ang dalawang bahay ay binuo sa ideyang iyon — isang lugar kung saan gentle na nagtatagpo ang kultura, at kung saan puwedeng mag-slow down, huminga at maramdaman ng guests na inaalagaan sila.",
    cta: "Start",
    signature: "Welcome to Greenhouse House Rental",
  },
  ko: {
    eyebrow: "들어가기 전에",
    title: "두 집, 두 문화, 그리고 조용한 정원 사이에서 시작된 작은 꿈.",
    body: "Greenhouse House Rental은 한 국제 커플의 공통된 꿈에서 시작되었습니다. Mindanao의 따뜻한 환대를 품은 Filipina와, 조용한 아침과 열대 정원, 집에서 멀리 떨어져 있어도 환영받는 느낌을 사랑하게 된 Polish husband의 이야기입니다. 두 숙소는 그 생각을 바탕으로 만들어졌습니다. 서로 다른 문화가 부드럽게 만나고, 게스트가 천천히 쉬며 숨을 고르고 보살핌을 느낄 수 있는 공간입니다.",
    cta: "Start",
    signature: "Greenhouse House Rental에 오신 것을 환영합니다",
  },
  es: {
    eyebrow: "Antes de entrar",
    title:
      "Un pequeño sueño entre dos casas, dos culturas y un jardín tranquilo.",
    body: "Greenhouse House Rental nació del sueño compartido de una pareja internacional: una filipina que lleva consigo la calidez de la hospitalidad de Mindanao y un esposo polaco que se enamoró de las mañanas tranquilas, los jardines tropicales y la sensación de ser bienvenido lejos de casa. Las dos casas fueron creadas alrededor de esa idea: un lugar donde las culturas se encuentran suavemente y donde los huéspedes pueden bajar el ritmo, respirar y sentirse cuidados.",
    cta: "Empezar",
    signature: "Bienvenido a Greenhouse House Rental",
  },
  fr: {
    eyebrow: "Avant d’entrer",
    title:
      "Un petit rêve entre deux maisons, deux cultures et un jardin paisible.",
    body: "Greenhouse House Rental est né du rêve partagé d’un couple international : une Filipina portant la chaleur de l’hospitalité de Mindanao et un mari polonais tombé amoureux des matins calmes, des jardins tropicaux et du sentiment d’être accueilli loin de chez soi. Les deux maisons ont été pensées autour de cette idée : un lieu où les cultures se rencontrent en douceur, où les voyageurs peuvent ralentir, respirer et se sentir pris en soin.",
    cta: "Commencer",
    signature: "Bienvenue chez Greenhouse House Rental",
  },
  de: {
    eyebrow: "Bevor du eintrittst",
    title:
      "Ein kleiner Traum zwischen zwei Häusern, zwei Kulturen und einem ruhigen Garten.",
    body: "Greenhouse House Rental entstand aus dem gemeinsamen Traum eines internationalen Paares: einer Filipina, die die Wärme der Mindanao-Gastfreundschaft mitbringt, und eines polnischen Ehemanns, der ruhige Morgen, tropische Gärten und das Gefühl liebgewonnen hat, fern von zu Hause willkommen zu sein. Die zwei Häuser wurden um diese Idee herum gestaltet — ein Ort, an dem Kulturen sanft zusammenkommen und Gäste langsamer werden, durchatmen und sich umsorgt fühlen können.",
    cta: "Start",
    signature: "Willkommen bei Greenhouse House Rental",
  },
  pl: {
    eyebrow: "Zanim wejdziesz",
    title:
      "Małe marzenie pomiędzy dwoma domami, dwiema kulturami i spokojnym ogrodem.",
    body: "Greenhouse House Rental wyrosło ze wspólnego marzenia międzynarodowego małżeństwa: Filipinki niosącej ciepło gościnności Mindanao i Polaka, który zakochał się w spokojnych porankach, tropikalnych ogrodach i poczuciu bycia mile widzianym daleko od domu. Dwa domy zostały stworzone wokół tej idei — jako miejsce, w którym kultury spotykają się łagodnie, a goście mogą zwolnić, odetchnąć i poczuć się zaopiekowani.",
    cta: "Start",
    signature: "Witaj w Greenhouse House Rental",
  },
};

export default async function LocaleStoryPage({ params }: StoryPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = storyCopy[locale];

  return (
    <main className="story-screen">
      <section className="site-shell story-layout">
        <div className="story-visual" aria-hidden="true">
          <div className="story-photo story-photo-main">
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 46vw"
              src="/images/olive-house/olive-exterior-01.webp"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="story-photo story-photo-overlap">
            <Image
              alt=""
              fill
              sizes="260px"
              src="/images/fern-house/fern-terrace-01.webp"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="story-note">
            <span>Mindanao warmth</span>
            <strong>Polish calm</strong>
          </div>
        </div>

        <div className="story-card">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.body}</p>

          <div className="story-signature">{copy.signature}</div>

          <Link
            className="button button-primary story-action"
            href={`/${locale}/home`}
          >
            {copy.cta}
          </Link>
        </div>
      </section>

      <style>{`
        .story-screen {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: clamp(24px, 4vw, 56px) 0;
          overflow: hidden;
        }

        .story-layout {
          display: grid;
          align-items: center;
          gap: clamp(32px, 5vw, 78px);
          grid-template-columns: minmax(420px, 0.95fr) minmax(0, 1.05fr);
        }

        .story-visual {
          min-height: clamp(540px, 50vw, 740px);
          position: relative;
        }

        .story-photo {
          position: absolute;
          overflow: hidden;
          border: 1px solid var(--border);
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .story-photo::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.28));
        }

        .story-photo-main {
          inset: 0 10% 4% 0;
          border-radius: 52px;
        }

        .story-photo-overlap {
          right: 0;
          bottom: 0;
          width: min(42%, 270px);
          aspect-ratio: 4 / 3;
          border-radius: 30px;
          z-index: 2;
        }

        .story-note {
          position: absolute;
          left: 30px;
          bottom: 30px;
          z-index: 3;
          display: grid;
          gap: 4px;
          border: 1px solid rgba(255,255,255,0.32);
          border-radius: 24px;
          background: rgba(255,255,255,0.18);
          color: white;
          padding: 16px 18px;
          backdrop-filter: blur(18px);
        }

        .story-note span {
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .story-note strong {
          font-size: 1.25rem;
          letter-spacing: -0.04em;
        }

        .story-card {
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow);
          padding: clamp(32px, 5vw, 72px);
          backdrop-filter: blur(18px);
        }

        .story-card h1 {
          max-width: 1040px;
          margin: 0;
          font-size: clamp(2.8rem, 6.6vw, 6.4rem);
          letter-spacing: -0.08em;
          line-height: 0.92;
        }

        .story-card p {
          max-width: 850px;
          color: var(--muted);
          font-size: clamp(1rem, 1.1vw, 1.16rem);
          line-height: 1.85;
        }

        .story-signature {
          width: fit-content;
          margin-top: 26px;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background: var(--surface);
          color: var(--primary-strong);
          font-size: 0.86rem;
          font-weight: 950;
          letter-spacing: 0.08em;
          padding: 12px 16px;
          text-transform: uppercase;
        }

        .story-action {
          margin-top: 28px;
          min-width: 180px;
        }

        @media (max-width: 980px) {
          .story-layout {
            grid-template-columns: 1fr;
          }

          .story-visual {
            min-height: 520px;
          }
        }

        @media (max-width: 640px) {
          .story-screen {
            padding: 14px 0;
          }

          .story-visual {
            min-height: 410px;
          }

          .story-photo-main {
            inset: 0;
            border-radius: 32px;
          }

          .story-photo-overlap {
            right: 16px;
            bottom: 16px;
            width: 44%;
          }

          .story-note {
            left: 16px;
            bottom: 16px;
          }

          .story-card {
            border-radius: 32px;
            padding: 28px;
          }

          .story-card h1 {
            font-size: clamp(2.7rem, 14vw, 4.3rem);
          }

          .story-action {
            width: 100%;
          }
        }
      `}</style>
    </main>
  );
}
