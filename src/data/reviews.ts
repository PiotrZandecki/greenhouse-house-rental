import type { Review } from "@/types/site";

export const reviews: Review[] = [
  {
    id: "google-01",
    source: "google",
    author: "Marta K.",
    rating: 5,
    date: "2026-02-14",
    text: {
      en: "Beautifully designed, peaceful and very easy to book. The place felt private from the first moment.",
      pl: "Pięknie zaprojektowane, spokojne miejsce i bardzo łatwa rezerwacja. Od początku czuć było prywatność.",
      fr: "Très bien conçu, paisible et facile à réserver. L’endroit semblait privé dès le départ.",
      es: "Muy bien diseñado, tranquilo y fácil de reservar. El lugar se sintió privado desde el inicio.",
      ko: "아름답게 디자인되었고 조용하며 예약이 쉬웠습니다. 처음부터 프라이빗한 느낌이었습니다.",
      tl: "Beautifully designed, peaceful at madaling i-book. Private ang feeling from the first moment.",
    },
  },
  {
    id: "facebook-01",
    source: "facebook",
    author: "Daniel R.",
    rating: 5,
    date: "2026-03-02",
    text: {
      en: "The gallery helped us choose quickly. Everything was clear, especially the amenities and WhatsApp contact.",
      pl: "Galeria pomogła nam szybko wybrać. Wszystko było czytelne, szczególnie udogodnienia i kontakt przez WhatsApp.",
      fr: "La galerie nous a aidés à choisir rapidement. Tout était clair, surtout les équipements et WhatsApp.",
      es: "La galería nos ayudó a elegir rápido. Todo estaba claro, especialmente los servicios y WhatsApp.",
      ko: "갤러리 덕분에 빠르게 선택할 수 있었습니다. 편의시설과 WhatsApp 문의가 특히 명확했습니다.",
      tl: "The gallery helped us choose quickly. Clear ang amenities at WhatsApp contact.",
    },
  },
  {
    id: "google-02",
    source: "google",
    author: "Sophie L.",
    rating: 5,
    date: "2026-04-21",
    text: {
      en: "A premium-feeling stay with a very friendly direct booking experience.",
      pl: "Pobyt z wrażeniem premium i bardzo przyjaznym procesem bezpośredniej rezerwacji.",
      fr: "Un séjour avec une impression premium et une réservation directe très agréable.",
      es: "Una estancia con sensación premium y una experiencia de reserva directa muy sencilla.",
      ko: "프리미엄한 숙박 경험과 매우 편리한 직접 예약 과정이었습니다.",
      tl: "Premium-feeling stay with very friendly direct booking experience.",
    },
  },
];
