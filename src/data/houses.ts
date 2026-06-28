import type { House } from "@/types/site";

export const houses: House[] = [
  {
    id: "fern-house",
    slug: "fern-house",
    name: "Fern House",
    subtitle: {
      en: "A calm garden home for couples and small families.",
      pl: "Spokojny dom ogrodowy dla par i małych rodzin.",
      fr: "Une maison-jardin calme pour couples et petites familles.",
      es: "Una casa-jardín tranquila para parejas y familias pequeñas.",
      ko: "커플과 소규모 가족을 위한 조용한 가든 하우스.",
      tl: "Tahimik na garden home para sa couples at small families.",
    },
    description: {
      en: "Fern House is designed around soft natural light, a private terrace and a slow-living atmosphere. It is the smaller, more intimate option.",
      pl: "Fern House opiera się na miękkim naturalnym świetle, prywatnym tarasie i klimacie slow-living. To mniejsza, bardziej kameralna opcja.",
      fr: "Fern House mise sur une lumière naturelle douce, une terrasse privée et une atmosphère slow-living.",
      es: "Fern House combina luz natural suave, terraza privada y una atmósfera slow-living.",
      ko: "Fern House는 부드러운 자연광, 프라이빗 테라스, 슬로우 리빙 분위기를 중심으로 설계되었습니다.",
      tl: "Ang Fern House ay may soft natural light, private terrace at slow-living atmosphere.",
    },
    location: {
      en: "Private tropical garden area",
      pl: "Prywatna okolica tropikalnego ogrodu",
      fr: "Zone de jardin tropical privé",
      es: "Zona privada de jardín tropical",
      ko: "프라이빗 트로피컬 가든 지역",
      tl: "Private tropical garden area",
    },
    capacity: 4,
    bedrooms: 2,
    bathrooms: 1,
    area: "72 m²",
    priceFrom: "€89",
    highlights: {
      en: [
        "Private terrace",
        "Garden view",
        "Work-friendly table",
        "Quiet mornings",
      ],
      pl: [
        "Prywatny taras",
        "Widok na ogród",
        "Miejsce do pracy",
        "Spokojne poranki",
      ],
      fr: [
        "Terrasse privée",
        "Vue jardin",
        "Espace de travail",
        "Matins calmes",
      ],
      es: [
        "Terraza privada",
        "Vista al jardín",
        "Espacio de trabajo",
        "Mañanas tranquilas",
      ],
      ko: ["프라이빗 테라스", "가든 뷰", "작업하기 좋은 테이블", "조용한 아침"],
      tl: [
        "Private terrace",
        "Garden view",
        "Work-friendly table",
        "Quiet mornings",
      ],
    },
    amenities: {
      en: [
        "Air conditioning",
        "Fast Wi-Fi",
        "Kitchenette",
        "Smart TV",
        "Coffee corner",
      ],
      pl: [
        "Klimatyzacja",
        "Szybkie Wi-Fi",
        "Aneks kuchenny",
        "Smart TV",
        "Kącik kawowy",
      ],
      fr: [
        "Climatisation",
        "Wi-Fi rapide",
        "Kitchenette",
        "Smart TV",
        "Coin café",
      ],
      es: [
        "Aire acondicionado",
        "Wi-Fi rápido",
        "Cocina pequeña",
        "Smart TV",
        "Rincón de café",
      ],
      ko: ["에어컨", "빠른 Wi-Fi", "간이 주방", "스마트 TV", "커피 코너"],
      tl: [
        "Air conditioning",
        "Fast Wi-Fi",
        "Kitchenette",
        "Smart TV",
        "Coffee corner",
      ],
    },
    platforms: [
      { label: "Booking.com", href: "https://www.booking.com" },
      { label: "Agoda", href: "https://www.agoda.com" },
      { label: "Airbnb", href: "https://www.airbnb.com" },
    ],
    whatsappUrl:
      "https://wa.me/48000000000?text=Hello%2C%20I%20am%20interested%20in%20Fern%20House.",
  },
  {
    id: "olive-house",
    slug: "olive-house",
    name: "Olive House",
    subtitle: {
      en: "A larger bright home for families, friends and longer stays.",
      pl: "Większy, jasny dom dla rodzin, znajomych i dłuższych pobytów.",
      fr: "Une maison plus grande et lumineuse pour familles, amis et longs séjours.",
      es: "Una casa más amplia y luminosa para familias, amigos y estancias largas.",
      ko: "가족, 친구, 장기 숙박을 위한 더 넓고 밝은 숙소.",
      tl: "Mas malaking bright home para sa families, friends at longer stays.",
    },
    description: {
      en: "Olive House offers more shared space, a bigger kitchen and a relaxed outdoor area. It works best for longer stays and family trips.",
      pl: "Olive House oferuje więcej przestrzeni wspólnej, większą kuchnię i swobodną strefę zewnętrzną. Najlepiej sprawdza się przy dłuższych pobytach i rodzinnych wyjazdach.",
      fr: "Olive House offre plus d’espace commun, une grande cuisine et un extérieur détendu.",
      es: "Olive House ofrece más espacio común, una cocina más grande y una zona exterior relajada.",
      ko: "Olive House는 넓은 공용 공간, 큰 주방, 편안한 야외 공간을 제공합니다.",
      tl: "Ang Olive House ay may mas malaking shared space, bigger kitchen at relaxed outdoor area.",
    },
    location: {
      en: "Near the main garden path",
      pl: "Blisko głównej ścieżki ogrodowej",
      fr: "Près de l’allée principale du jardin",
      es: "Cerca del camino principal del jardín",
      ko: "메인 가든 길 근처",
      tl: "Near the main garden path",
    },
    capacity: 6,
    bedrooms: 3,
    bathrooms: 2,
    area: "118 m²",
    priceFrom: "€139",
    highlights: {
      en: [
        "Large living room",
        "Family kitchen",
        "Outdoor lounge",
        "Long-stay comfort",
      ],
      pl: [
        "Duży salon",
        "Rodzinna kuchnia",
        "Zewnętrzny lounge",
        "Komfort na dłuższy pobyt",
      ],
      fr: [
        "Grand salon",
        "Cuisine familiale",
        "Lounge extérieur",
        "Confort longue durée",
      ],
      es: [
        "Sala amplia",
        "Cocina familiar",
        "Lounge exterior",
        "Comodidad para largas estancias",
      ],
      ko: ["넓은 거실", "패밀리 키친", "야외 라운지", "장기 숙박 편의"],
      tl: [
        "Large living room",
        "Family kitchen",
        "Outdoor lounge",
        "Long-stay comfort",
      ],
    },
    amenities: {
      en: [
        "Air conditioning",
        "Full kitchen",
        "Laundry area",
        "Fast Wi-Fi",
        "Outdoor dining",
      ],
      pl: [
        "Klimatyzacja",
        "Pełna kuchnia",
        "Pralnia",
        "Szybkie Wi-Fi",
        "Jadalnia zewnętrzna",
      ],
      fr: [
        "Climatisation",
        "Cuisine complète",
        "Buanderie",
        "Wi-Fi rapide",
        "Repas extérieur",
      ],
      es: [
        "Aire acondicionado",
        "Cocina completa",
        "Lavandería",
        "Wi-Fi rápido",
        "Comedor exterior",
      ],
      ko: ["에어컨", "풀 키친", "세탁 공간", "빠른 Wi-Fi", "야외 식사 공간"],
      tl: [
        "Air conditioning",
        "Full kitchen",
        "Laundry area",
        "Fast Wi-Fi",
        "Outdoor dining",
      ],
    },
    platforms: [
      { label: "Booking.com", href: "https://www.booking.com" },
      { label: "Agoda", href: "https://www.agoda.com" },
      { label: "Airbnb", href: "https://www.airbnb.com" },
    ],
    whatsappUrl:
      "https://wa.me/48000000000?text=Hello%2C%20I%20am%20interested%20in%20Olive%20House.",
  },
];

export function getHouses(): House[] {
  return houses;
}

export function getHouseBySlug(slug: string): House | undefined {
  return houses.find((house) => house.slug === slug);
}
