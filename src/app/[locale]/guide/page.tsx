import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import type { Locale } from "@/types/site";

type GuidePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type GuideCopy = {
  eyebrow: string;
  title: string;
  description: string;
  localTitle: string;
  localDescription: string;
  faqTitle: string;
  faqDescription: string;
  rulesTitle: string;
  rulesDescription: string;
  guestInfoTitle: string;
  guestInfoDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  bookNow: string;
  contact: string;
  localCards: {
    title: string;
    description: string;
    items: string[];
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  rules: string[];
  guestInfo: string[];
};

const guideCopy: Record<Locale, GuideCopy> = {
  en: {
    eyebrow: "Guest guide",
    title: "Plan your stay with confidence.",
    description:
      "A simple guide for guests preparing a stay at Greenhouse House Rental in General Santos City.",
    localTitle: "Local orientation",
    localDescription:
      "Understand the two house areas and the kind of stay each location supports best.",
    faqTitle: "Frequently asked questions",
    faqDescription:
      "Quick answers to the questions guests usually ask before sending a booking request.",
    rulesTitle: "House rules",
    rulesDescription:
      "Clear and practical rules help keep both houses comfortable for every guest.",
    guestInfoTitle: "Guest information",
    guestInfoDescription:
      "Useful details to make arrival, daily stay and departure easier.",
    ctaTitle: "Ready to choose your dates?",
    ctaDescription:
      "Check the calendar, choose your preferred house and prepare your booking request.",
    bookNow: "Open booking",
    contact: "Contact us",
    localCards: [
      {
        title: "General Santos City",
        description:
          "A practical Mindanao base with food, transport, shopping and access to nearby coastal trips.",
        items: [
          "Urban convenience",
          "Mindanao hospitality",
          "Useful transport options",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "A calmer residential area suited for guests who prefer a softer, garden-oriented stay.",
        items: ["Quiet mornings", "Local feel", "Best with Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "A central option for longer stays, families and guests who want easier access to daily errands.",
        items: ["Central area", "Family-friendly", "Best with Olive House"],
      },
    ],
    faq: [
      {
        question: "How do I request a booking?",
        answer:
          "Open the booking page, select a house, choose your dates, add guest details and confirm the request summary.",
      },
      {
        question: "Can I choose a specific house?",
        answer:
          "Yes. Fern House and Olive House can be selected separately in the booking calendar.",
      },
      {
        question: "Are longer stays possible?",
        answer:
          "Longer stays can be arranged depending on calendar availability and guest requirements.",
      },
      {
        question: "Where are the houses located?",
        answer:
          "Fern House is in the Calumpang area, while Olive House is in Dadiangas North, General Santos City.",
      },
      {
        question: "Is the estimated total final?",
        answer:
          "The booking flow shows an estimated total based on nightly pricing and selected nights.",
      },
    ],
    rules: [
      "Check-in from 2:00 PM.",
      "Check-out until 11:00 AM.",
      "Quiet hours after 10:00 PM.",
      "Smoking only in outdoor areas.",
      "Guest count should match the selected house capacity.",
      "Shared outdoor areas should be kept tidy.",
    ],
    guestInfo: [
      "Prepare your preferred arrival time before confirming a request.",
      "Choose the house that best matches your group size and stay style.",
      "Use the map links to understand the surrounding barangay area.",
      "Review the gallery before choosing between Fern House and Olive House.",
      "Keep your request code after completing the booking flow.",
    ],
  },
  pl: {
    eyebrow: "Przewodnik dla gości",
    title: "Zaplanuj pobyt z większą pewnością.",
    description:
      "Prosty przewodnik dla gości przygotowujących pobyt w Greenhouse House Rental w General Santos City.",
    localTitle: "Orientacja lokalna",
    localDescription:
      "Poznaj dwie lokalizacje domów i charakter pobytu, do którego każda z nich pasuje najlepiej.",
    faqTitle: "Najczęstsze pytania",
    faqDescription:
      "Szybkie odpowiedzi na pytania, które goście zwykle zadają przed wysłaniem zapytania rezerwacyjnego.",
    rulesTitle: "Zasady domu",
    rulesDescription:
      "Czytelne i praktyczne zasady pomagają utrzymać komfort w obu domach.",
    guestInfoTitle: "Informacje dla gości",
    guestInfoDescription:
      "Przydatne szczegóły ułatwiające przyjazd, codzienny pobyt i wyjazd.",
    ctaTitle: "Gotowy wybrać daty?",
    ctaDescription:
      "Sprawdź kalendarz, wybierz preferowany dom i przygotuj zapytanie rezerwacyjne.",
    bookNow: "Otwórz rezerwację",
    contact: "Kontakt",
    localCards: [
      {
        title: "General Santos City",
        description:
          "Praktyczna baza na Mindanao z jedzeniem, transportem, zakupami i dostępem do pobliskich wyjazdów nad wodę.",
        items: [
          "Wygoda miasta",
          "Gościnność Mindanao",
          "Dobre opcje transportu",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "Spokojniejsza okolica mieszkalna dla gości, którzy wolą bardziej ogrodowy i kameralny pobyt.",
        items: ["Spokojne poranki", "Lokalny klimat", "Najlepiej z Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "Centralniejsza opcja dla dłuższych pobytów, rodzin i gości, którzy chcą mieć łatwy dostęp do codziennych spraw.",
        items: ["Centralna okolica", "Dla rodzin", "Najlepiej z Olive House"],
      },
    ],
    faq: [
      {
        question: "Jak wysłać zapytanie rezerwacyjne?",
        answer:
          "Wejdź na stronę rezerwacji, wybierz dom, daty, dodaj dane gościa i potwierdź podsumowanie zapytania.",
      },
      {
        question: "Czy mogę wybrać konkretny dom?",
        answer:
          "Tak. Fern House i Olive House można wybrać osobno w kalendarzu rezerwacji.",
      },
      {
        question: "Czy możliwe są dłuższe pobyty?",
        answer:
          "Dłuższe pobyty można ustalić zależnie od dostępności w kalendarzu i potrzeb gości.",
      },
      {
        question: "Gdzie znajdują się domy?",
        answer:
          "Fern House znajduje się w rejonie Calumpang, a Olive House w Dadiangas North w General Santos City.",
      },
      {
        question: "Czy szacowana kwota jest finalna?",
        answer:
          "Proces rezerwacji pokazuje szacowaną kwotę na podstawie ceny za noc i wybranej liczby nocy.",
      },
    ],
    rules: [
      "Zameldowanie od 14:00.",
      "Wymeldowanie do 11:00.",
      "Cisza nocna po 22:00.",
      "Palenie wyłącznie w przestrzeniach zewnętrznych.",
      "Liczba gości powinna odpowiadać pojemności wybranego domu.",
      "Wspólne przestrzenie zewnętrzne powinny pozostać uporządkowane.",
    ],
    guestInfo: [
      "Przygotuj preferowaną godzinę przyjazdu przed potwierdzeniem zapytania.",
      "Wybierz dom pasujący do wielkości grupy i stylu pobytu.",
      "Użyj linków do map, aby poznać okoliczny rejon barangay.",
      "Przejrzyj galerię przed wyborem Fern House lub Olive House.",
      "Zachowaj kod zapytania po ukończeniu procesu rezerwacji.",
    ],
  },
  ceb: {
    eyebrow: "Guest guide",
    title: "Plan your stay with confidence.",
    description:
      "Simple guide para sa guests nga nag-prepare og stay sa Greenhouse House Rental sa General Santos City.",
    localTitle: "Local orientation",
    localDescription:
      "Masabtan ang duha ka house areas ug unsa nga stay ang bagay sa matag location.",
    faqTitle: "Frequently asked questions",
    faqDescription:
      "Quick answers sa common questions before mag-send og booking request.",
    rulesTitle: "House rules",
    rulesDescription:
      "Clear ug practical rules para comfortable ang stay sa duha ka balay.",
    guestInfoTitle: "Guest information",
    guestInfoDescription:
      "Useful details para mas sayon ang arrival, daily stay ug departure.",
    ctaTitle: "Ready na mopili og dates?",
    ctaDescription:
      "Tan-awa ang calendar, pili-a ang preferred house ug prepare your booking request.",
    bookNow: "Open booking",
    contact: "Contact us",
    localCards: [
      {
        title: "General Santos City",
        description:
          "Practical Mindanao base with food, transport, shopping ug nearby coastal trips.",
        items: [
          "Urban convenience",
          "Mindanao hospitality",
          "Transport options",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "Calmer residential area para sa guests nga ganahan og soft garden-oriented stay.",
        items: ["Quiet mornings", "Local feel", "Best with Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "Central option para sa longer stays, families ug daily errands.",
        items: ["Central area", "Family-friendly", "Best with Olive House"],
      },
    ],
    faq: [
      {
        question: "How do I request a booking?",
        answer:
          "Open booking page, select house, choose dates, add guest details ug confirm request summary.",
      },
      {
        question: "Can I choose a specific house?",
        answer:
          "Yes. Fern House ug Olive House mapili separately sa booking calendar.",
      },
      {
        question: "Are longer stays possible?",
        answer:
          "Longer stays possible depende sa calendar availability ug guest requirements.",
      },
      {
        question: "Where are the houses located?",
        answer:
          "Fern House naa sa Calumpang area, Olive House naa sa Dadiangas North, General Santos City.",
      },
      {
        question: "Is the estimated total final?",
        answer:
          "Booking flow shows estimated total based sa nightly pricing ug selected nights.",
      },
    ],
    rules: [
      "Check-in from 2:00 PM.",
      "Check-out until 11:00 AM.",
      "Quiet hours after 10:00 PM.",
      "Smoking only in outdoor areas.",
      "Guest count should match house capacity.",
      "Keep shared outdoor areas tidy.",
    ],
    guestInfo: [
      "Prepare preferred arrival time before confirming request.",
      "Choose the house that matches your group size and stay style.",
      "Use map links to understand surrounding barangay area.",
      "Review gallery before choosing Fern House or Olive House.",
      "Keep your request code after completing booking flow.",
    ],
  },
  tl: {
    eyebrow: "Guest guide",
    title: "Plan your stay with confidence.",
    description:
      "Simple guide para sa guests preparing a stay at Greenhouse House Rental in General Santos City.",
    localTitle: "Local orientation",
    localDescription:
      "Understand the two house areas and the kind of stay each location supports best.",
    faqTitle: "Frequently asked questions",
    faqDescription:
      "Quick answers to the questions guests usually ask before sending a booking request.",
    rulesTitle: "House rules",
    rulesDescription:
      "Clear and practical rules help keep both houses comfortable for every guest.",
    guestInfoTitle: "Guest information",
    guestInfoDescription:
      "Useful details to make arrival, daily stay and departure easier.",
    ctaTitle: "Ready to choose your dates?",
    ctaDescription:
      "Check the calendar, choose your preferred house and prepare your booking request.",
    bookNow: "Open booking",
    contact: "Contact us",
    localCards: [
      {
        title: "General Santos City",
        description:
          "A practical Mindanao base with food, transport, shopping and access to nearby coastal trips.",
        items: [
          "Urban convenience",
          "Mindanao hospitality",
          "Useful transport options",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "A calmer residential area suited for guests who prefer a softer, garden-oriented stay.",
        items: ["Quiet mornings", "Local feel", "Best with Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "A central option for longer stays, families and guests who want easier access to daily errands.",
        items: ["Central area", "Family-friendly", "Best with Olive House"],
      },
    ],
    faq: [
      {
        question: "How do I request a booking?",
        answer:
          "Open the booking page, select a house, choose your dates, add guest details and confirm the request summary.",
      },
      {
        question: "Can I choose a specific house?",
        answer:
          "Yes. Fern House and Olive House can be selected separately in the booking calendar.",
      },
      {
        question: "Are longer stays possible?",
        answer:
          "Longer stays can be arranged depending on calendar availability and guest requirements.",
      },
      {
        question: "Where are the houses located?",
        answer:
          "Fern House is in the Calumpang area, while Olive House is in Dadiangas North, General Santos City.",
      },
      {
        question: "Is the estimated total final?",
        answer:
          "The booking flow shows an estimated total based on nightly pricing and selected nights.",
      },
    ],
    rules: [
      "Check-in from 2:00 PM.",
      "Check-out until 11:00 AM.",
      "Quiet hours after 10:00 PM.",
      "Smoking only in outdoor areas.",
      "Guest count should match the selected house capacity.",
      "Shared outdoor areas should be kept tidy.",
    ],
    guestInfo: [
      "Prepare your preferred arrival time before confirming a request.",
      "Choose the house that best matches your group size and stay style.",
      "Use the map links to understand the surrounding barangay area.",
      "Review the gallery before choosing between Fern House and Olive House.",
      "Keep your request code after completing the booking flow.",
    ],
  },
  ko: {
    eyebrow: "게스트 가이드",
    title: "안심하고 숙박을 계획하세요.",
    description:
      "General Santos City의 Greenhouse House Rental 숙박을 준비하는 게스트를 위한 간단한 가이드입니다.",
    localTitle: "지역 안내",
    localDescription:
      "두 숙소 지역과 각 위치에 어울리는 숙박 스타일을 확인하세요.",
    faqTitle: "자주 묻는 질문",
    faqDescription: "예약 요청 전 게스트가 자주 묻는 질문에 빠르게 답합니다.",
    rulesTitle: "숙소 규칙",
    rulesDescription:
      "명확하고 실용적인 규칙은 모든 게스트에게 편안한 숙박을 제공합니다.",
    guestInfoTitle: "게스트 정보",
    guestInfoDescription:
      "도착, 숙박, 출발을 더 쉽게 만드는 유용한 정보입니다.",
    ctaTitle: "날짜를 선택할 준비가 되었나요?",
    ctaDescription:
      "캘린더를 확인하고 원하는 숙소를 선택한 뒤 예약 요청을 준비하세요.",
    bookNow: "예약 열기",
    contact: "문의하기",
    localCards: [
      {
        title: "General Santos City",
        description:
          "음식, 교통, 쇼핑과 근처 해안 여행 접근성을 갖춘 실용적인 Mindanao 거점입니다.",
        items: ["도시 편의성", "Mindanao 환대", "교통 옵션"],
      },
      {
        title: "Barangay Calumpang",
        description:
          "정원 중심의 조용한 숙박을 선호하는 게스트에게 어울리는 차분한 주거 지역입니다.",
        items: ["조용한 아침", "로컬 분위기", "Fern House 추천"],
      },
      {
        title: "Dadiangas North",
        description:
          "장기 숙박, 가족 여행, 일상 편의 접근성을 원하는 게스트에게 좋은 중심 지역입니다.",
        items: ["중심 지역", "가족 친화적", "Olive House 추천"],
      },
    ],
    faq: [
      {
        question: "예약 요청은 어떻게 하나요?",
        answer:
          "예약 페이지에서 숙소를 선택하고 날짜와 게스트 정보를 입력한 뒤 요청 요약을 확인하세요.",
      },
      {
        question: "특정 숙소를 선택할 수 있나요?",
        answer:
          "네. 예약 캘린더에서 Fern House와 Olive House를 별도로 선택할 수 있습니다.",
      },
      {
        question: "장기 숙박도 가능한가요?",
        answer:
          "장기 숙박은 캘린더 가능 여부와 게스트 요구 사항에 따라 조율할 수 있습니다.",
      },
      {
        question: "숙소는 어디에 있나요?",
        answer:
          "Fern House는 Calumpang 지역, Olive House는 General Santos City의 Dadiangas North에 있습니다.",
      },
      {
        question: "예상 금액이 최종 금액인가요?",
        answer:
          "예약 플로우는 1박 요금과 선택한 숙박 일수를 기준으로 예상 금액을 보여줍니다.",
      },
    ],
    rules: [
      "체크인은 오후 2시부터 가능합니다.",
      "체크아웃은 오전 11시까지입니다.",
      "오후 10시 이후에는 조용히 이용해 주세요.",
      "흡연은 야외 공간에서만 가능합니다.",
      "게스트 수는 선택한 숙소 정원과 맞아야 합니다.",
      "공용 야외 공간은 깨끗하게 이용해 주세요.",
    ],
    guestInfo: [
      "요청을 확인하기 전에 선호 도착 시간을 준비하세요.",
      "그룹 규모와 숙박 스타일에 맞는 숙소를 선택하세요.",
      "지도 링크로 주변 barangay 지역을 확인하세요.",
      "Fern House와 Olive House 중 선택 전 갤러리를 확인하세요.",
      "예약 플로우 완료 후 요청 코드를 보관하세요.",
    ],
  },
  es: {
    eyebrow: "Guía para huéspedes",
    title: "Planifica tu estancia con confianza.",
    description:
      "Una guía sencilla para preparar tu estancia en Greenhouse House Rental en General Santos City.",
    localTitle: "Orientación local",
    localDescription:
      "Conoce las dos zonas de las casas y el tipo de estancia que mejor encaja con cada ubicación.",
    faqTitle: "Preguntas frecuentes",
    faqDescription:
      "Respuestas rápidas a las preguntas habituales antes de enviar una solicitud de reserva.",
    rulesTitle: "Normas de la casa",
    rulesDescription:
      "Normas claras y prácticas para mantener ambas casas cómodas para todos.",
    guestInfoTitle: "Información para huéspedes",
    guestInfoDescription:
      "Detalles útiles para facilitar la llegada, estancia diaria y salida.",
    ctaTitle: "¿Listo para elegir tus fechas?",
    ctaDescription:
      "Consulta el calendario, elige tu casa preferida y prepara tu solicitud.",
    bookNow: "Abrir reserva",
    contact: "Contacto",
    localCards: [
      {
        title: "General Santos City",
        description:
          "Una base práctica en Mindanao con comida, transporte, compras y acceso a viajes costeros cercanos.",
        items: [
          "Comodidad urbana",
          "Hospitalidad de Mindanao",
          "Opciones de transporte",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "Una zona residencial más tranquila para estancias suaves y orientadas al jardín.",
        items: ["Mañanas tranquilas", "Ambiente local", "Ideal con Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "Una opción central para estancias largas, familias y recados diarios.",
        items: ["Zona central", "Familiar", "Ideal con Olive House"],
      },
    ],
    faq: [
      {
        question: "¿Cómo solicito una reserva?",
        answer:
          "Abre la página de reserva, elige una casa, selecciona fechas, añade datos y confirma el resumen.",
      },
      {
        question: "¿Puedo elegir una casa concreta?",
        answer:
          "Sí. Fern House y Olive House pueden seleccionarse por separado en el calendario.",
      },
      {
        question: "¿Son posibles las estancias largas?",
        answer:
          "Las estancias largas pueden organizarse según disponibilidad y necesidades del huésped.",
      },
      {
        question: "¿Dónde están las casas?",
        answer:
          "Fern House está en Calumpang y Olive House en Dadiangas North, General Santos City.",
      },
      {
        question: "¿El total estimado es final?",
        answer:
          "El flujo de reserva muestra un total estimado según el precio por noche y las noches seleccionadas.",
      },
    ],
    rules: [
      "Check-in desde las 2:00 PM.",
      "Check-out hasta las 11:00 AM.",
      "Horario de silencio después de las 10:00 PM.",
      "Fumar solo en zonas exteriores.",
      "El número de huéspedes debe coincidir con la capacidad de la casa.",
      "Las zonas exteriores compartidas deben mantenerse ordenadas.",
    ],
    guestInfo: [
      "Prepara tu hora de llegada preferida antes de confirmar.",
      "Elige la casa que encaje con el tamaño del grupo y estilo de estancia.",
      "Usa los enlaces del mapa para conocer la zona barangay cercana.",
      "Revisa la galería antes de elegir entre Fern House y Olive House.",
      "Conserva tu código de solicitud después de completar el flujo.",
    ],
  },
  fr: {
    eyebrow: "Guide voyageur",
    title: "Planifiez votre séjour en toute confiance.",
    description:
      "Un guide simple pour préparer votre séjour chez Greenhouse House Rental à General Santos City.",
    localTitle: "Orientation locale",
    localDescription:
      "Comprenez les deux zones des maisons et le type de séjour que chaque emplacement soutient le mieux.",
    faqTitle: "Questions fréquentes",
    faqDescription:
      "Réponses rapides aux questions posées avant l’envoi d’une demande de réservation.",
    rulesTitle: "Règles de la maison",
    rulesDescription:
      "Des règles claires et pratiques pour garder les deux maisons confortables.",
    guestInfoTitle: "Informations voyageurs",
    guestInfoDescription:
      "Détails utiles pour faciliter l’arrivée, le séjour quotidien et le départ.",
    ctaTitle: "Prêt à choisir vos dates ?",
    ctaDescription:
      "Consultez le calendrier, choisissez votre maison et préparez votre demande.",
    bookNow: "Ouvrir la réservation",
    contact: "Contact",
    localCards: [
      {
        title: "General Santos City",
        description:
          "Une base pratique à Mindanao avec nourriture, transport, shopping et accès aux sorties côtières.",
        items: [
          "Confort urbain",
          "Hospitalité de Mindanao",
          "Options de transport",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "Une zone résidentielle plus calme pour les voyageurs préférant un séjour orienté jardin.",
        items: ["Matins calmes", "Ambiance locale", "Idéal avec Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "Une option centrale pour longs séjours, familles et besoins du quotidien.",
        items: [
          "Zone centrale",
          "Adapté aux familles",
          "Idéal avec Olive House",
        ],
      },
    ],
    faq: [
      {
        question: "Comment envoyer une demande de réservation ?",
        answer:
          "Ouvrez la page réservation, choisissez une maison, sélectionnez les dates, ajoutez les informations et confirmez le résumé.",
      },
      {
        question: "Puis-je choisir une maison spécifique ?",
        answer:
          "Oui. Fern House et Olive House peuvent être sélectionnées séparément dans le calendrier.",
      },
      {
        question: "Les longs séjours sont-ils possibles ?",
        answer:
          "Les longs séjours peuvent être organisés selon la disponibilité et les besoins voyageurs.",
      },
      {
        question: "Où se trouvent les maisons ?",
        answer:
          "Fern House est dans le secteur Calumpang et Olive House à Dadiangas North, General Santos City.",
      },
      {
        question: "Le total estimé est-il final ?",
        answer:
          "Le parcours de réservation affiche un total estimé selon le prix par nuit et les nuits choisies.",
      },
    ],
    rules: [
      "Arrivée à partir de 14h00.",
      "Départ jusqu’à 11h00.",
      "Heures calmes après 22h00.",
      "Fumer uniquement dans les espaces extérieurs.",
      "Le nombre de voyageurs doit respecter la capacité de la maison.",
      "Les espaces extérieurs partagés doivent rester propres.",
    ],
    guestInfo: [
      "Préparez votre heure d’arrivée préférée avant de confirmer.",
      "Choisissez la maison adaptée à votre groupe et style de séjour.",
      "Utilisez les liens de carte pour comprendre la zone barangay.",
      "Consultez la galerie avant de choisir entre Fern House et Olive House.",
      "Gardez votre code de demande après le parcours de réservation.",
    ],
  },
  de: {
    eyebrow: "Gästeguide",
    title: "Plane deinen Aufenthalt mit Sicherheit.",
    description:
      "Ein einfacher Guide für Gäste, die einen Aufenthalt bei Greenhouse House Rental in General Santos City vorbereiten.",
    localTitle: "Lokale Orientierung",
    localDescription:
      "Verstehe die zwei Hausbereiche und welcher Aufenthalt am besten zu welchem Standort passt.",
    faqTitle: "Häufige Fragen",
    faqDescription:
      "Schnelle Antworten auf Fragen vor dem Absenden einer Buchungsanfrage.",
    rulesTitle: "Hausregeln",
    rulesDescription:
      "Klare und praktische Regeln halten beide Häuser für Gäste komfortabel.",
    guestInfoTitle: "Gästeinformationen",
    guestInfoDescription:
      "Nützliche Details für Ankunft, Aufenthalt und Abreise.",
    ctaTitle: "Bereit, deine Daten zu wählen?",
    ctaDescription:
      "Prüfe den Kalender, wähle dein Haus und bereite deine Anfrage vor.",
    bookNow: "Buchung öffnen",
    contact: "Kontakt",
    localCards: [
      {
        title: "General Santos City",
        description:
          "Eine praktische Mindanao-Basis mit Essen, Transport, Shopping und Zugang zu Küstentrips.",
        items: [
          "Städtische Bequemlichkeit",
          "Mindanao-Gastfreundschaft",
          "Transportoptionen",
        ],
      },
      {
        title: "Barangay Calumpang",
        description:
          "Eine ruhigere Wohngegend für Gäste, die einen sanften Gartenaufenthalt bevorzugen.",
        items: ["Ruhige Morgen", "Lokales Gefühl", "Ideal mit Fern House"],
      },
      {
        title: "Dadiangas North",
        description:
          "Eine zentrale Option für längere Aufenthalte, Familien und tägliche Erledigungen.",
        items: ["Zentrale Lage", "Familienfreundlich", "Ideal mit Olive House"],
      },
    ],
    faq: [
      {
        question: "Wie stelle ich eine Buchungsanfrage?",
        answer:
          "Öffne die Buchungsseite, wähle Haus und Daten, füge Gästedaten hinzu und bestätige die Übersicht.",
      },
      {
        question: "Kann ich ein bestimmtes Haus wählen?",
        answer:
          "Ja. Fern House und Olive House können separat im Kalender gewählt werden.",
      },
      {
        question: "Sind längere Aufenthalte möglich?",
        answer:
          "Längere Aufenthalte können je nach Kalender und Gästeanforderungen abgestimmt werden.",
      },
      {
        question: "Wo befinden sich die Häuser?",
        answer:
          "Fern House liegt im Bereich Calumpang, Olive House in Dadiangas North, General Santos City.",
      },
      {
        question: "Ist der geschätzte Gesamtpreis final?",
        answer:
          "Der Buchungsprozess zeigt einen geschätzten Betrag basierend auf Nachtpreis und gewählten Nächten.",
      },
    ],
    rules: [
      "Check-in ab 14:00 Uhr.",
      "Check-out bis 11:00 Uhr.",
      "Ruhezeiten nach 22:00 Uhr.",
      "Rauchen nur in Außenbereichen.",
      "Die Gästezahl sollte zur Kapazität des Hauses passen.",
      "Gemeinsame Außenbereiche bitte ordentlich halten.",
    ],
    guestInfo: [
      "Bereite deine gewünschte Ankunftszeit vor der Bestätigung vor.",
      "Wähle das Haus passend zu Gruppengröße und Aufenthaltsstil.",
      "Nutze Kartenlinks, um die Barangay-Umgebung zu verstehen.",
      "Sieh dir die Galerie an, bevor du Fern House oder Olive House wählst.",
      "Bewahre deinen Anfragecode nach dem Buchungsprozess auf.",
    ],
  },
};

export default async function GuidePage({ params }: GuidePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();
  const copy = guideCopy[locale];

  return (
    <section className="page-section guide-page">
      <div className="site-shell">
        <div className="guide-hero">
          <div className="page-heading guide-heading">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p>{copy.description}</p>
          </div>

          <div className="guide-hero-card">
            <span>General Santos City</span>
            <strong>{dictionary.common.stayTagline}</strong>
            <p>{dictionary.footer.description}</p>
          </div>
        </div>

        <section className="guide-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{copy.localTitle}</p>
              <h2>{copy.localTitle}</h2>
              <p>{copy.localDescription}</p>
            </div>
          </div>

          <div className="guide-local-grid">
            {copy.localCards.map((card) => (
              <article className="guide-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul className="check-list">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="guide-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{copy.guestInfoTitle}</p>
              <h2>{copy.guestInfoTitle}</h2>
              <p>{copy.guestInfoDescription}</p>
            </div>
          </div>

          <div className="guide-info-grid">
            {copy.guestInfo.map((item, index) => (
              <article className="guide-info-card" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="guide-section guide-split">
          <article className="guide-card guide-card-large">
            <p className="eyebrow">{copy.rulesTitle}</p>
            <h2>{copy.rulesTitle}</h2>
            <p>{copy.rulesDescription}</p>

            <ul className="check-list">
              {copy.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </article>

          <article className="guide-card guide-card-large">
            <p className="eyebrow">{dictionary.housesPage.eyebrow}</p>
            <h2>{dictionary.common.viewHouses}</h2>
            <p>{dictionary.housesPage.description}</p>

            <div className="guide-house-links">
              {houses.map((house) => (
                <LocalizedLink
                  href={`/houses/${house.slug}`}
                  key={house.id}
                  locale={locale}
                >
                  <strong>{house.name}</strong>
                  <span>{house.location[locale]}</span>
                </LocalizedLink>
              ))}
            </div>
          </article>
        </section>

        <section className="guide-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{copy.faqTitle}</p>
              <h2>{copy.faqTitle}</h2>
              <p>{copy.faqDescription}</p>
            </div>
          </div>

          <div className="guide-faq-list">
            {copy.faq.map((item) => (
              <details className="guide-faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="guide-final-cta">
          <p className="eyebrow">Greenhouse House Rental</p>
          <h2>{copy.ctaTitle}</h2>
          <p>{copy.ctaDescription}</p>

          <div className="hero-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking"
              locale={locale}
            >
              {copy.bookNow}
            </LocalizedLink>

            <LocalizedLink
              className="button button-secondary"
              href="/contact"
              locale={locale}
            >
              {copy.contact}
            </LocalizedLink>
          </div>
        </section>
      </div>

      <style>{`
        .guide-page {
          position: relative;
          overflow: hidden;
        }

        .guide-page::before {
          position: absolute;
          top: 10rem;
          right: -18rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.76;
          pointer-events: none;
        }

        .guide-hero {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: end;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(320px, 0.36fr);
          margin-bottom: 70px;
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 64px);
        }

        .guide-heading {
          margin-bottom: 0;
        }

        .guide-hero-card {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 28px;
          background: var(--surface);
          padding: 24px;
        }

        .guide-hero-card span {
          color: var(--primary);
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .guide-hero-card strong {
          font-size: 1.45rem;
          letter-spacing: -0.04em;
        }

        .guide-hero-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .guide-section {
          position: relative;
          z-index: 1;
          margin-bottom: 76px;
        }

        .guide-local-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .guide-card,
        .guide-info-card,
        .guide-final-cta,
        .guide-faq-item {
          border: 1px solid var(--border);
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 96%, transparent);
          box-shadow: var(--shadow-soft);
        }

        .guide-card {
          border-radius: var(--radius-xl);
          padding: clamp(24px, 3vw, 36px);
        }

        .guide-card h2,
        .guide-final-cta h2 {
          margin: 0;
          font-size: clamp(2.3rem, 4.4vw, 4.8rem);
          line-height: 1.04;
          letter-spacing: -0.075em;
        }

        .guide-card h3 {
          margin: 0 0 12px;
          font-size: 1.55rem;
          letter-spacing: -0.045em;
        }

        .guide-card p,
        .guide-final-cta p,
        .guide-info-card p {
          color: var(--muted);
          line-height: 1.72;
        }

        .guide-info-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .guide-info-card {
          display: grid;
          gap: 14px;
          border-radius: 26px;
          padding: 22px;
        }

        .guide-info-card span {
          display: grid;
          width: 46px;
          height: 46px;
          place-items: center;
          border-radius: 16px;
          background: var(--primary);
          color: white;
          font-size: 0.8rem;
          font-weight: 950;
        }

        .guide-info-card p {
          margin: 0;
          font-weight: 850;
        }

        .guide-split {
          display: grid;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        }

        .guide-card-large {
          min-height: 100%;
        }

        .guide-house-links {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .guide-house-links a {
          display: grid;
          gap: 4px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface-strong);
          padding: 16px;
          transition:
            transform 180ms ease,
            border-color 180ms ease;
        }

        .guide-house-links a:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
        }

        .guide-house-links strong {
          font-size: 1.18rem;
          letter-spacing: -0.04em;
        }

        .guide-house-links span {
          color: var(--muted);
          font-weight: 850;
        }

        .guide-faq-list {
          display: grid;
          gap: 14px;
        }

        .guide-faq-item {
          border-radius: 24px;
          padding: 0;
          overflow: hidden;
        }

        .guide-faq-item summary {
          cursor: pointer;
          list-style: none;
          padding: 22px 24px;
          font-size: 1.08rem;
          font-weight: 950;
          letter-spacing: -0.03em;
        }

        .guide-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .guide-faq-item summary::after {
          float: right;
          content: "+";
          color: var(--primary);
          font-weight: 950;
        }

        .guide-faq-item[open] summary::after {
          content: "–";
        }

        .guide-faq-item p {
          margin: 0;
          border-top: 1px solid var(--border);
          color: var(--muted);
          line-height: 1.7;
          padding: 0 24px 22px;
        }

        .guide-final-cta {
          display: grid;
          justify-items: center;
          gap: 18px;
          border-radius: var(--radius-xl);
          padding: clamp(34px, 6vw, 78px);
          text-align: center;
        }

        .guide-final-cta p {
          max-width: 760px;
        }

        @media (max-width: 1180px) {
          .guide-hero,
          .guide-local-grid,
          .guide-info-grid,
          .guide-split {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .guide-hero,
          .guide-card,
          .guide-final-cta {
            border-radius: 32px;
            padding: 26px;
          }

          .guide-section {
            margin-bottom: 48px;
          }

          .guide-final-cta .button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
