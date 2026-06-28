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
};

const storyCopy: Record<Locale, StoryCopy> = {
  en: {
    eyebrow: "Before you enter",
    title:
      "A small dream between two homes, two cultures and one quiet garden.",
    body: "Greenhouse House Rental grew from the shared dream of an international couple: a Filipina who carries the warmth of Mindanao hospitality and a Polish husband who fell in love with calm mornings, tropical gardens and the feeling of being welcomed far from home. The two houses were shaped around that idea — a place where cultures meet gently, where guests can slow down, breathe and feel cared for.",
    cta: "Start",
  },
  ceb: {
    eyebrow: "Sa dili pa ka mosulod",
    title:
      "Usa ka gamay nga damgo tali sa duha ka balay, duha ka kultura ug usa ka malinawon nga garden.",
    body: "Ang Greenhouse House Rental nagsugod sa shared dream sa international couple: usa ka Filipina nga nagdala sa kainit sa Mindanao hospitality ug usa ka Polish husband nga nahigugma sa hilom nga buntag, tropical gardens ug sa feeling nga gi-welcome bisan layo sa balay. Ang duha ka balay gihimo palibot ana nga idea — usa ka lugar diin magtagbo ang kultura, makapahinay ang guests, makaginhawa ug mobati nga giatiman sila.",
    cta: "Start",
  },
  tl: {
    eyebrow: "Bago ka pumasok",
    title:
      "Isang maliit na pangarap sa pagitan ng dalawang bahay, dalawang kultura at isang tahimik na garden.",
    body: "Nagsimula ang Greenhouse House Rental sa shared dream ng isang international couple: isang Filipina na dala ang init ng Mindanao hospitality at isang Polish husband na na-in love sa tahimik na umaga, tropical gardens at pakiramdam ng pagiging welcome kahit malayo sa bahay. Ang dalawang bahay ay binuo sa ideyang iyon — isang lugar kung saan gentle na nagtatagpo ang kultura, at kung saan puwedeng mag-slow down, huminga at maramdaman ng guests na inaalagaan sila.",
    cta: "Start",
  },
  ko: {
    eyebrow: "들어가기 전에",
    title: "두 집, 두 문화, 그리고 조용한 정원 사이에서 시작된 작은 꿈.",
    body: "Greenhouse House Rental은 한 국제 커플의 공통된 꿈에서 시작되었습니다. Mindanao의 따뜻한 환대를 품은 Filipina와, 조용한 아침과 열대 정원, 집에서 멀리 떨어져 있어도 환영받는 느낌을 사랑하게 된 Polish husband의 이야기입니다. 두 숙소는 그 생각을 바탕으로 만들어졌습니다. 서로 다른 문화가 부드럽게 만나고, 게스트가 천천히 쉬며 숨을 고르고 보살핌을 느낄 수 있는 공간입니다.",
    cta: "Start",
  },
  es: {
    eyebrow: "Antes de entrar",
    title:
      "Un pequeño sueño entre dos casas, dos culturas y un jardín tranquilo.",
    body: "Greenhouse House Rental nació del sueño compartido de una pareja internacional: una filipina que lleva consigo la calidez de la hospitalidad de Mindanao y un esposo polaco que se enamoró de las mañanas tranquilas, los jardines tropicales y la sensación de ser bienvenido lejos de casa. Las dos casas fueron creadas alrededor de esa idea: un lugar donde las culturas se encuentran suavemente y donde los huéspedes pueden bajar el ritmo, respirar y sentirse cuidados.",
    cta: "Empezar",
  },
  fr: {
    eyebrow: "Avant d’entrer",
    title:
      "Un petit rêve entre deux maisons, deux cultures et un jardin paisible.",
    body: "Greenhouse House Rental est né du rêve partagé d’un couple international : une Filipina portant la chaleur de l’hospitalité de Mindanao et un mari polonais tombé amoureux des matins calmes, des jardins tropicaux et du sentiment d’être accueilli loin de chez soi. Les deux maisons ont été pensées autour de cette idée : un lieu où les cultures se rencontrent en douceur, où les voyageurs peuvent ralentir, respirer et se sentir pris en soin.",
    cta: "Commencer",
  },
  de: {
    eyebrow: "Bevor du eintrittst",
    title:
      "Ein kleiner Traum zwischen zwei Häusern, zwei Kulturen und einem ruhigen Garten.",
    body: "Greenhouse House Rental entstand aus dem gemeinsamen Traum eines internationalen Paares: einer Filipina, die die Wärme der Mindanao-Gastfreundschaft mitbringt, und eines polnischen Ehemanns, der ruhige Morgen, tropische Gärten und das Gefühl liebgewonnen hat, fern von zu Hause willkommen zu sein. Die zwei Häuser wurden um diese Idee herum gestaltet — ein Ort, an dem Kulturen sanft zusammenkommen und Gäste langsamer werden, durchatmen und sich umsorgt fühlen können.",
    cta: "Start",
  },
  pl: {
    eyebrow: "Zanim wejdziesz",
    title:
      "Małe marzenie pomiędzy dwoma domami, dwiema kulturami i spokojnym ogrodem.",
    body: "Greenhouse House Rental wyrosło ze wspólnego marzenia międzynarodowego małżeństwa: Filipinki niosącej ciepło gościnności Mindanao i Polaka, który zakochał się w spokojnych porankach, tropikalnych ogrodach i poczuciu bycia mile widzianym daleko od domu. Dwa domy zostały stworzone wokół tej idei — jako miejsce, w którym kultury spotykają się łagodnie, a goście mogą zwolnić, odetchnąć i poczuć się zaopiekowani.",
    cta: "Start",
  },
};

export default async function LocaleStoryPage({ params }: StoryPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const copy = storyCopy[locale];

  return (
    <main
      className="page-section"
      style={{
        display: "grid",
        minHeight: "100vh",
        placeItems: "center",
      }}
    >
      <section
        className="site-shell final-cta"
        style={{
          maxWidth: "1080px",
          textAlign: "left",
        }}
      >
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1
          style={{
            maxWidth: "980px",
            margin: 0,
            fontSize: "clamp(2.8rem, 7vw, 6.8rem)",
            letterSpacing: "-0.08em",
            lineHeight: 0.92,
          }}
        >
          {copy.title}
        </h1>
        <p
          style={{
            maxWidth: "820px",
            fontSize: "1.08rem",
          }}
        >
          {copy.body}
        </p>

        <div className="hero-actions">
          <Link className="button button-primary" href={`/${locale}/home`}>
            {copy.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
