import type { GalleryItem, Locale } from "@/types/site";

type GalleryItemInput = Omit<GalleryItem, "imagePlaceholder">;

function text(en: string, pl = en): Record<Locale, string> {
  return {
    en,
    ceb: en,
    tl: en,
    ko: en,
    es: en,
    fr: en,
    de: en,
    pl,
  };
}

function createSvgPlaceholder(colorA: string, colorB: string, colorC: string) {
  const svg = `
    <svg width="1200" height="900" viewBox="0 0 1200 900" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1200" height="900" fill="${colorA}"/>
      <circle cx="240" cy="180" r="360" fill="${colorB}" opacity="0.7"/>
      <circle cx="980" cy="720" r="420" fill="${colorC}" opacity="0.62"/>
      <rect x="0" y="0" width="1200" height="900" fill="url(#grain)" opacity="0.12"/>
      <defs>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
        </filter>
        <pattern id="grain" patternUnits="userSpaceOnUse" width="1200" height="900">
          <rect width="1200" height="900" filter="url(#noiseFilter)"/>
        </pattern>
      </defs>
    </svg>
  `.trim();

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const fernPlaceholder = createSvgPlaceholder("#294634", "#6f8f68", "#d8b36b");
const olivePlaceholder = createSvgPlaceholder("#3f4930", "#8d8150", "#d8c98a");

function withPlaceholder(item: GalleryItemInput): GalleryItem {
  return {
    ...item,
    imagePlaceholder:
      item.houseId === "fern-house" ? fernPlaceholder : olivePlaceholder,
  };
}

const items: GalleryItemInput[] = [
  {
    id: "fern-exterior-01",
    houseId: "fern-house",
    category: "exterior",
    imageSrc: "/images/fern-house/fern-exterior-01.webp",
    title: text("Fern House garden arrival", "Wejście do ogrodu Fern House"),
    description: text(
      "A calm tropical arrival framed by greenery, warm light and a private residential atmosphere.",
      "Spokojne tropikalne wejście otoczone zielenią, ciepłym światłem i prywatnym mieszkalnym klimatem.",
    ),
  },
  {
    id: "fern-exterior-02",
    houseId: "fern-house",
    category: "exterior",
    imageSrc: "/images/fern-house/fern-exterior-02.webp",
    title: text("Soft morning facade", "Delikatna poranna fasada"),
    description: text(
      "The front of Fern House in soft morning light, with garden textures and a quiet tropical street feel.",
      "Front Fern House w delikatnym porannym świetle, z ogrodową fakturą i spokojnym tropikalnym charakterem ulicy.",
    ),
  },
  {
    id: "fern-interior-01",
    houseId: "fern-house",
    category: "interior",
    imageSrc: "/images/fern-house/fern-interior-01.webp",
    title: text("Calm open living space", "Spokojna otwarta część dzienna"),
    description: text(
      "A bright living area designed for slow mornings, reading, planning the day and relaxing after exploring General Santos City.",
      "Jasna część dzienna zaprojektowana na wolne poranki, czytanie, planowanie dnia i odpoczynek po zwiedzaniu General Santos City.",
    ),
  },
  {
    id: "fern-living-01",
    houseId: "fern-house",
    category: "interior",
    imageSrc: "/images/fern-house/fern-living-01.webp",
    title: text("Garden-facing lounge", "Salon z widokiem na ogród"),
    description: text(
      "A cozy lounge corner with natural textures, soft seating and a direct visual connection to the tropical greenery outside.",
      "Przytulny narożnik wypoczynkowy z naturalnymi teksturami, miękkim siedziskiem i widokiem na tropikalną zieleń za oknem.",
    ),
  },
  {
    id: "fern-kitchen-01",
    houseId: "fern-house",
    category: "kitchen",
    imageSrc: "/images/fern-house/fern-kitchen-01.webp",
    title: text("Compact tropical kitchen", "Kompaktowa tropikalna kuchnia"),
    description: text(
      "A practical kitchen space prepared for simple breakfasts, fresh fruit, coffee and relaxed home-style meals.",
      "Praktyczna kuchnia przygotowana na proste śniadania, świeże owoce, kawę i spokojne domowe posiłki.",
    ),
  },
  {
    id: "fern-bedroom-01",
    houseId: "fern-house",
    category: "bedroom",
    imageSrc: "/images/fern-house/fern-bedroom-01.webp",
    title: text("Quiet bedroom retreat", "Cicha sypialnia do odpoczynku"),
    description: text(
      "A peaceful bedroom with warm natural tones, soft bedding and a restful atmosphere after a humid Mindanao day.",
      "Spokojna sypialnia w ciepłych naturalnych tonach, z miękką pościelą i atmosferą odpoczynku po wilgotnym dniu na Mindanao.",
    ),
  },
  {
    id: "fern-bedroom-02",
    houseId: "fern-house",
    category: "bedroom",
    imageSrc: "/images/fern-house/fern-bedroom-02.webp",
    title: text("Second bedroom detail", "Detal drugiej sypialni"),
    description: text(
      "A closer look at the guest bedroom styling, soft fabrics and practical storage for a longer stay.",
      "Bliższe spojrzenie na styl sypialni gościnnej, miękkie tkaniny i praktyczne miejsce do przechowywania przy dłuższym pobycie.",
    ),
  },
  {
    id: "fern-bathroom-01",
    houseId: "fern-house",
    category: "bathroom",
    imageSrc: "/images/fern-house/fern-bathroom-01.webp",
    title: text("Fresh bathroom corner", "Świeży narożnik łazienkowy"),
    description: text(
      "A clean bathroom space with simple finishes, warm light and practical daily comfort.",
      "Czysta łazienka z prostym wykończeniem, ciepłym światłem i praktycznym codziennym komfortem.",
    ),
  },
  {
    id: "fern-terrace-01",
    houseId: "fern-house",
    category: "terrace",
    imageSrc: "/images/fern-house/fern-terrace-01.webp",
    title: text("Private garden terrace", "Prywatny taras ogrodowy"),
    description: text(
      "A shaded terrace made for coffee, quiet conversations and slow evenings surrounded by tropical plants.",
      "Zacieniony taras stworzony do kawy, spokojnych rozmów i wolnych wieczorów wśród tropikalnych roślin.",
    ),
  },
  {
    id: "fern-terrace-02",
    houseId: "fern-house",
    category: "terrace",
    imageSrc: "/images/fern-house/fern-terrace-02.webp",
    title: text("Evening terrace glow", "Wieczorny blask tarasu"),
    description: text(
      "The terrace after sunset, with warm ambient lighting and a relaxed private garden mood.",
      "Taras po zachodzie słońca, z ciepłym nastrojowym światłem i prywatnym ogrodowym klimatem.",
    ),
  },
  {
    id: "fern-details-01",
    houseId: "fern-house",
    category: "details",
    imageSrc: "/images/fern-house/fern-details-01.webp",
    title: text("Natural material details", "Detale naturalnych materiałów"),
    description: text(
      "Small details of wood, woven textures and greenery that shape the calm identity of Fern House.",
      "Drobne detale drewna, plecionych faktur i zieleni, które budują spokojny charakter Fern House.",
    ),
  },
  {
    id: "fern-details-02",
    houseId: "fern-house",
    category: "details",
    imageSrc: "/images/fern-house/fern-details-02.webp",
    title: text("Guest-ready touches", "Detale przygotowane dla gości"),
    description: text(
      "A close-up of the welcoming details prepared for guests before arrival.",
      "Zbliżenie na gościnne detale przygotowane przed przyjazdem.",
    ),
  },

  {
    id: "olive-exterior-01",
    houseId: "olive-house",
    category: "exterior",
    imageSrc: "/images/olive-house/olive-exterior-01.webp",
    title: text(
      "Olive House street arrival",
      "Wejście do Olive House od strony ulicy",
    ),
    description: text(
      "A welcoming residential facade in Dadiangas North, designed for guests who prefer central convenience.",
      "Przyjazna fasada mieszkalna w Dadiangas North, zaprojektowana dla gości ceniących wygodę centralniejszej lokalizacji.",
    ),
  },
  {
    id: "olive-exterior-02",
    houseId: "olive-house",
    category: "exterior",
    imageSrc: "/images/olive-house/olive-exterior-02.webp",
    title: text("Bright tropical frontage", "Jasny tropikalny front"),
    description: text(
      "A brighter view of Olive House with tropical planting, clean lines and a friendly family-stay character.",
      "Jaśniejsze ujęcie Olive House z tropikalnymi roślinami, czystymi liniami i przyjaznym rodzinnym charakterem.",
    ),
  },
  {
    id: "olive-interior-01",
    houseId: "olive-house",
    category: "interior",
    imageSrc: "/images/olive-house/olive-interior-01.webp",
    title: text("Warm central living room", "Ciepły centralny salon"),
    description: text(
      "A comfortable living room arranged for families, longer stays and relaxed evenings indoors.",
      "Wygodny salon przygotowany dla rodzin, dłuższych pobytów i spokojnych wieczorów wewnątrz.",
    ),
  },
  {
    id: "olive-living-01",
    houseId: "olive-house",
    category: "interior",
    imageSrc: "/images/olive-house/olive-living-01.webp",
    title: text("Family lounge setup", "Rodzinny układ wypoczynkowy"),
    description: text(
      "A practical lounge arrangement with comfortable seating, warm finishes and space for shared time.",
      "Praktyczny układ salonu z wygodnym siedziskiem, ciepłym wykończeniem i miejscem na wspólne spędzanie czasu.",
    ),
  },
  {
    id: "olive-dining-01",
    houseId: "olive-house",
    category: "interior",
    imageSrc: "/images/olive-house/olive-dining-01.webp",
    title: text("Dining and daily planning", "Jadalnia i planowanie dnia"),
    description: text(
      "A dining corner made for breakfast, laptop planning, travel notes and casual family meals.",
      "Kącik jadalniany na śniadanie, planowanie z laptopem, notatki z podróży i swobodne rodzinne posiłki.",
    ),
  },
  {
    id: "olive-kitchen-01",
    houseId: "olive-house",
    category: "kitchen",
    imageSrc: "/images/olive-house/olive-kitchen-01.webp",
    title: text("Olive House kitchen", "Kuchnia Olive House"),
    description: text(
      "A practical kitchen for everyday meals, simple cooking and longer guest stays.",
      "Praktyczna kuchnia do codziennych posiłków, prostego gotowania i dłuższych pobytów.",
    ),
  },
  {
    id: "olive-bedroom-01",
    houseId: "olive-house",
    category: "bedroom",
    imageSrc: "/images/olive-house/olive-bedroom-01.webp",
    title: text("Main bedroom calm", "Spokój głównej sypialni"),
    description: text(
      "A restful bedroom with warm light, simple comfort and a calm atmosphere for longer stays.",
      "Sypialnia do odpoczynku z ciepłym światłem, prostym komfortem i spokojną atmosferą na dłuższy pobyt.",
    ),
  },
  {
    id: "olive-bedroom-02",
    houseId: "olive-house",
    category: "bedroom",
    imageSrc: "/images/olive-house/olive-bedroom-02.webp",
    title: text("Flexible guest bedroom", "Elastyczna sypialnia gościnna"),
    description: text(
      "A second bedroom prepared for families, friends or guests who need a bit more privacy.",
      "Druga sypialnia przygotowana dla rodzin, znajomych albo gości potrzebujących więcej prywatności.",
    ),
  },
  {
    id: "olive-bathroom-01",
    houseId: "olive-house",
    category: "bathroom",
    imageSrc: "/images/olive-house/olive-bathroom-01.webp",
    title: text("Clean bathroom space", "Czysta przestrzeń łazienkowa"),
    description: text(
      "A simple, bright bathroom space focused on daily comfort and easy use.",
      "Prosta, jasna łazienka skupiona na codziennym komforcie i wygodzie użytkowania.",
    ),
  },
  {
    id: "olive-terrace-01",
    houseId: "olive-house",
    category: "terrace",
    imageSrc: "/images/olive-house/olive-terrace-01.webp",
    title: text("Outdoor sitting area", "Zewnętrzna przestrzeń do siedzenia"),
    description: text(
      "A casual outdoor spot for morning coffee, evening air and relaxed conversations.",
      "Swobodne miejsce na zewnątrz na poranną kawę, wieczorne powietrze i spokojne rozmowy.",
    ),
  },
  {
    id: "olive-terrace-02",
    houseId: "olive-house",
    category: "terrace",
    imageSrc: "/images/olive-house/olive-terrace-02.webp",
    title: text("Evening outdoor corner", "Wieczorny narożnik na zewnątrz"),
    description: text(
      "A warmer evening view of the outdoor area with soft light and a quiet residential mood.",
      "Cieplejsze wieczorne ujęcie przestrzeni zewnętrznej z miękkim światłem i spokojnym mieszkalnym klimatem.",
    ),
  },
  {
    id: "olive-details-01",
    houseId: "olive-house",
    category: "details",
    imageSrc: "/images/olive-house/olive-details-01.webp",
    title: text("Olive House details", "Detale Olive House"),
    description: text(
      "Decorative textures, soft natural accents and small guest-ready touches around the house.",
      "Dekoracyjne faktury, miękkie naturalne akcenty i drobne detale przygotowane dla gości.",
    ),
  },
];

export const galleryItems: GalleryItem[] = items.map(withPlaceholder);
