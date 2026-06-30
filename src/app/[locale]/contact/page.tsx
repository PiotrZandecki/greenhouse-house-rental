import { notFound } from "next/navigation";

import { getDictionary } from "@/data/dictionaries";
import { getHouses } from "@/data/houses";
import { isLocale } from "@/lib/i18n";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import type { Locale } from "@/types/site";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

type ContactCopy = {
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  whatsappLabel: string;
  whatsappTitle: string;
  whatsappDescription: string;
  whatsappCta: string;
  facebookLabel: string;
  facebookTitle: string;
  facebookDescription: string;
  facebookCta: string;
  platformsEyebrow: string;
  platformsTitle: string;
  platformsDescription: string;
  helpEyebrow: string;
  helpTitle: string;
  helpDescription: string;
  trustEyebrow: string;
  trustTitle: string;
  trustDescription: string;
  housePickerEyebrow: string;
  housePickerTitle: string;
  housePickerDescription: string;
  directBookingTitle: string;
  directBookingDescription: string;
  responseTime: string;
  responseTimeDescription: string;
  localGuidance: string;
  localGuidanceDescription: string;
  flexiblePlanning: string;
  flexiblePlanningDescription: string;
  bookFern: string;
  bookOlive: string;
  openGuide: string;
  openGallery: string;
  contactDetails: string;
  contactDetailsDescription: string;
  email: string;
  phone: string;
  location: string;
  availabilityNote: string;
  platformCards: {
    label: string;
    description: string;
    href: string;
  }[];
};

const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    heroKicker: "Direct guest support",
    heroTitle: "Tell us what kind of stay you’re planning.",
    heroDescription:
      "Whether you already know your dates or you’re still choosing between Fern House and Olive House, we’ll help you prepare the right stay request.",
    whatsappLabel: "Fastest contact",
    whatsappTitle: "Message us on WhatsApp",
    whatsappDescription:
      "Use WhatsApp for quick questions about dates, house fit, arrival plans or longer stays.",
    whatsappCta: "Open WhatsApp",
    facebookLabel: "Social updates",
    facebookTitle: "Visit us on Facebook",
    facebookDescription:
      "Follow updates, message the host and keep the property page close while planning your stay.",
    facebookCta: "Open Facebook",
    platformsEyebrow: "Where to book us",
    platformsTitle: "Book directly or through your preferred travel platform.",
    platformsDescription:
      "Choose the path that works best for you: direct booking request, travel platform listing, Facebook message or WhatsApp conversation.",
    helpEyebrow: "Need help choosing?",
    helpTitle: "Fern House or Olive House?",
    helpDescription:
      "Fern House is calmer and garden-oriented. Olive House is larger, brighter and better for families or longer stays.",
    trustEyebrow: "Guest support",
    trustTitle: "A smoother stay starts before arrival.",
    trustDescription:
      "Clear communication, local orientation and a simple booking path make the planning process easier.",
    housePickerEyebrow: "Choose your stay",
    housePickerTitle: "Start with the house that fits your trip.",
    housePickerDescription:
      "You can open booking with your preferred house already selected.",
    directBookingTitle: "Direct booking request",
    directBookingDescription:
      "Prepare dates, guest details and a request summary before final confirmation.",
    responseTime: "Quick replies",
    responseTimeDescription:
      "Useful for date checks, arrival questions and choosing the better house.",
    localGuidance: "Local guidance",
    localGuidanceDescription:
      "Helpful orientation around General Santos City, Calumpang and Dadiangas North.",
    flexiblePlanning: "Flexible planning",
    flexiblePlanningDescription:
      "Good for longer stays, family trips and guests comparing both houses.",
    bookFern: "Book Fern House",
    bookOlive: "Book Olive House",
    openGuide: "Open guide",
    openGallery: "Open gallery",
    contactDetails: "Contact details",
    contactDetailsDescription:
      "Use the channel that feels easiest for your planning stage.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "Final availability, stay details and payment arrangements are confirmed after reviewing your request.",
    platformCards: [
      {
        label: "Booking.com",
        description: "For guests who prefer classic travel platform booking.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Useful for regional travel planning in Asia.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "A familiar path for private home stays.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Good for quick messages and social updates.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  ceb: {
    heroKicker: "Direct guest support",
    heroTitle: "Isulti unsa nga stay imong gi-plan.",
    heroDescription:
      "Kung kabalo na ka sa dates o nagapili pa ka between Fern House ug Olive House, tabangan ka namo sa right stay request.",
    whatsappLabel: "Fastest contact",
    whatsappTitle: "Message us on WhatsApp",
    whatsappDescription:
      "Use WhatsApp para sa quick questions about dates, house fit, arrival plans o longer stays.",
    whatsappCta: "Open WhatsApp",
    facebookLabel: "Social updates",
    facebookTitle: "Visit us on Facebook",
    facebookDescription:
      "Follow updates, message the host ug keep close ang property page while planning your stay.",
    facebookCta: "Open Facebook",
    platformsEyebrow: "Where to book us",
    platformsTitle: "Book directly or through your preferred travel platform.",
    platformsDescription:
      "Pili-a ang path nga mas convenient: direct booking request, travel platform listing, Facebook message o WhatsApp conversation.",
    helpEyebrow: "Need help choosing?",
    helpTitle: "Fern House or Olive House?",
    helpDescription:
      "Fern House mas calm ug garden-oriented. Olive House mas dako, brighter ug bagay sa families o longer stays.",
    trustEyebrow: "Guest support",
    trustTitle: "A smoother stay starts before arrival.",
    trustDescription:
      "Clear communication, local orientation ug simple booking path para mas sayon ang planning.",
    housePickerEyebrow: "Choose your stay",
    housePickerTitle: "Start with the house that fits your trip.",
    housePickerDescription:
      "Pwede nimo i-open ang booking with preferred house already selected.",
    directBookingTitle: "Direct booking request",
    directBookingDescription:
      "Prepare dates, guest details ug request summary before final confirmation.",
    responseTime: "Quick replies",
    responseTimeDescription:
      "Useful for date checks, arrival questions ug choosing the better house.",
    localGuidance: "Local guidance",
    localGuidanceDescription:
      "Helpful orientation around General Santos City, Calumpang ug Dadiangas North.",
    flexiblePlanning: "Flexible planning",
    flexiblePlanningDescription:
      "Good for longer stays, family trips ug guests comparing both houses.",
    bookFern: "Book Fern House",
    bookOlive: "Book Olive House",
    openGuide: "Open guide",
    openGallery: "Open gallery",
    contactDetails: "Contact details",
    contactDetailsDescription:
      "Use the channel that feels easiest for your planning stage.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "Final availability, stay details ug payment arrangements are confirmed after reviewing your request.",
    platformCards: [
      {
        label: "Booking.com",
        description: "For guests who prefer classic travel platform booking.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Useful for regional travel planning in Asia.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "A familiar path for private home stays.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Good for quick messages and social updates.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  tl: {
    heroKicker: "Direct guest support",
    heroTitle: "Tell us what kind of stay you’re planning.",
    heroDescription:
      "Whether alam mo na ang dates or still choosing between Fern House and Olive House, we’ll help prepare the right stay request.",
    whatsappLabel: "Fastest contact",
    whatsappTitle: "Message us on WhatsApp",
    whatsappDescription:
      "Use WhatsApp for quick questions about dates, house fit, arrival plans or longer stays.",
    whatsappCta: "Open WhatsApp",
    facebookLabel: "Social updates",
    facebookTitle: "Visit us on Facebook",
    facebookDescription:
      "Follow updates, message the host and keep the property page close while planning your stay.",
    facebookCta: "Open Facebook",
    platformsEyebrow: "Where to book us",
    platformsTitle: "Book directly or through your preferred travel platform.",
    platformsDescription:
      "Choose the path that works best for you: direct booking request, travel platform listing, Facebook message or WhatsApp conversation.",
    helpEyebrow: "Need help choosing?",
    helpTitle: "Fern House or Olive House?",
    helpDescription:
      "Fern House is calmer and garden-oriented. Olive House is larger, brighter and better for families or longer stays.",
    trustEyebrow: "Guest support",
    trustTitle: "A smoother stay starts before arrival.",
    trustDescription:
      "Clear communication, local orientation and a simple booking path make the planning process easier.",
    housePickerEyebrow: "Choose your stay",
    housePickerTitle: "Start with the house that fits your trip.",
    housePickerDescription:
      "You can open booking with your preferred house already selected.",
    directBookingTitle: "Direct booking request",
    directBookingDescription:
      "Prepare dates, guest details and a request summary before final confirmation.",
    responseTime: "Quick replies",
    responseTimeDescription:
      "Useful for date checks, arrival questions and choosing the better house.",
    localGuidance: "Local guidance",
    localGuidanceDescription:
      "Helpful orientation around General Santos City, Calumpang and Dadiangas North.",
    flexiblePlanning: "Flexible planning",
    flexiblePlanningDescription:
      "Good for longer stays, family trips and guests comparing both houses.",
    bookFern: "Book Fern House",
    bookOlive: "Book Olive House",
    openGuide: "Open guide",
    openGallery: "Open gallery",
    contactDetails: "Contact details",
    contactDetailsDescription:
      "Use the channel that feels easiest for your planning stage.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "Final availability, stay details and payment arrangements are confirmed after reviewing your request.",
    platformCards: [
      {
        label: "Booking.com",
        description: "For guests who prefer classic travel platform booking.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Useful for regional travel planning in Asia.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "A familiar path for private home stays.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Good for quick messages and social updates.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  ko: {
    heroKicker: "직접 게스트 지원",
    heroTitle: "계획 중인 숙박 스타일을 알려 주세요.",
    heroDescription:
      "날짜가 정해졌거나 Fern House와 Olive House 중 고민 중이어도, 적절한 숙박 요청을 준비할 수 있도록 도와드립니다.",
    whatsappLabel: "가장 빠른 연락",
    whatsappTitle: "WhatsApp으로 문의하기",
    whatsappDescription:
      "날짜, 숙소 선택, 도착 계획 또는 장기 숙박에 대한 빠른 질문에 좋습니다.",
    whatsappCta: "WhatsApp 열기",
    facebookLabel: "소셜 업데이트",
    facebookTitle: "Facebook 방문하기",
    facebookDescription:
      "업데이트를 확인하고 호스트에게 메시지를 보내며 숙박 계획을 이어가세요.",
    facebookCta: "Facebook 열기",
    platformsEyebrow: "예약 채널",
    platformsTitle: "직접 예약하거나 선호하는 여행 플랫폼을 이용하세요.",
    platformsDescription:
      "직접 예약 요청, 여행 플랫폼, Facebook 메시지 또는 WhatsApp 대화 중 편한 방법을 선택하세요.",
    helpEyebrow: "선택이 어려우신가요?",
    helpTitle: "Fern House 또는 Olive House?",
    helpDescription:
      "Fern House는 더 조용하고 정원 중심입니다. Olive House는 더 넓고 밝으며 가족 또는 장기 숙박에 좋습니다.",
    trustEyebrow: "게스트 지원",
    trustTitle: "편안한 숙박은 도착 전부터 시작됩니다.",
    trustDescription:
      "명확한 소통, 지역 안내, 간단한 예약 흐름으로 계획이 쉬워집니다.",
    housePickerEyebrow: "숙박 선택",
    housePickerTitle: "여행에 맞는 숙소부터 시작하세요.",
    housePickerDescription:
      "선호하는 숙소가 선택된 상태로 예약 페이지를 열 수 있습니다.",
    directBookingTitle: "직접 예약 요청",
    directBookingDescription:
      "최종 확인 전 날짜, 게스트 정보와 요청 요약을 준비하세요.",
    responseTime: "빠른 답변",
    responseTimeDescription: "날짜 확인, 도착 질문, 숙소 선택에 유용합니다.",
    localGuidance: "지역 안내",
    localGuidanceDescription:
      "General Santos City, Calumpang, Dadiangas North 주변 안내를 제공합니다.",
    flexiblePlanning: "유연한 계획",
    flexiblePlanningDescription:
      "장기 숙박, 가족 여행, 두 숙소 비교에 좋습니다.",
    bookFern: "Fern House 예약",
    bookOlive: "Olive House 예약",
    openGuide: "가이드 열기",
    openGallery: "갤러리 열기",
    contactDetails: "연락처",
    contactDetailsDescription: "계획 단계에 맞는 채널을 이용하세요.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "최종 가능 여부, 숙박 세부 정보와 결제 안내는 요청 검토 후 확인됩니다.",
    platformCards: [
      {
        label: "Booking.com",
        description: "일반 여행 플랫폼 예약을 선호하는 게스트에게 좋습니다.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "아시아 지역 여행 계획에 유용합니다.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "프라이빗 홈스테이에 익숙한 예약 경로입니다.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "빠른 메시지와 소셜 업데이트에 좋습니다.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  es: {
    heroKicker: "Soporte directo",
    heroTitle: "Cuéntanos qué tipo de estancia estás planeando.",
    heroDescription:
      "Si ya sabes tus fechas o todavía estás eligiendo entre Fern House y Olive House, te ayudamos a preparar la solicitud adecuada.",
    whatsappLabel: "Contacto más rápido",
    whatsappTitle: "Escríbenos por WhatsApp",
    whatsappDescription:
      "Usa WhatsApp para preguntas rápidas sobre fechas, casa ideal, llegada o estancias largas.",
    whatsappCta: "Abrir WhatsApp",
    facebookLabel: "Actualizaciones sociales",
    facebookTitle: "Visítanos en Facebook",
    facebookDescription:
      "Sigue actualizaciones, escribe al anfitrión y guarda la página mientras planificas tu estancia.",
    facebookCta: "Abrir Facebook",
    platformsEyebrow: "Dónde reservar",
    platformsTitle: "Reserva directamente o mediante tu plataforma preferida.",
    platformsDescription:
      "Elige el camino más cómodo: solicitud directa, plataforma de viajes, Facebook o WhatsApp.",
    helpEyebrow: "¿Necesitas ayuda para elegir?",
    helpTitle: "¿Fern House u Olive House?",
    helpDescription:
      "Fern House es más tranquila y orientada al jardín. Olive House es más grande, luminosa y mejor para familias o estancias largas.",
    trustEyebrow: "Soporte al huésped",
    trustTitle: "Una estancia fluida empieza antes de llegar.",
    trustDescription:
      "Comunicación clara, orientación local y una ruta de reserva sencilla facilitan la planificación.",
    housePickerEyebrow: "Elige tu estancia",
    housePickerTitle: "Empieza con la casa que encaja con tu viaje.",
    housePickerDescription:
      "Puedes abrir la reserva con tu casa preferida ya seleccionada.",
    directBookingTitle: "Solicitud directa",
    directBookingDescription:
      "Prepara fechas, datos y resumen antes de la confirmación final.",
    responseTime: "Respuestas rápidas",
    responseTimeDescription:
      "Útil para revisar fechas, llegada y elegir la mejor casa.",
    localGuidance: "Orientación local",
    localGuidanceDescription:
      "Información sobre General Santos City, Calumpang y Dadiangas North.",
    flexiblePlanning: "Planificación flexible",
    flexiblePlanningDescription:
      "Ideal para estancias largas, viajes familiares y comparar ambas casas.",
    bookFern: "Reservar Fern House",
    bookOlive: "Reservar Olive House",
    openGuide: "Abrir guía",
    openGallery: "Abrir galería",
    contactDetails: "Datos de contacto",
    contactDetailsDescription:
      "Usa el canal que resulte más cómodo para tu etapa de planificación.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "La disponibilidad final, detalles de estancia y pago se confirman después de revisar tu solicitud.",
    platformCards: [
      {
        label: "Booking.com",
        description: "Para huéspedes que prefieren una plataforma clásica.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Útil para planificar viajes regionales en Asia.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "Una ruta familiar para estancias privadas.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Bueno para mensajes rápidos y actualizaciones.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  fr: {
    heroKicker: "Support direct",
    heroTitle: "Dites-nous le type de séjour que vous préparez.",
    heroDescription:
      "Que vos dates soient déjà prêtes ou que vous hésitiez entre Fern House et Olive House, nous vous aidons à préparer la bonne demande.",
    whatsappLabel: "Contact le plus rapide",
    whatsappTitle: "Écrivez-nous sur WhatsApp",
    whatsappDescription:
      "Utilisez WhatsApp pour les questions rapides sur les dates, la maison adaptée, l’arrivée ou les longs séjours.",
    whatsappCta: "Ouvrir WhatsApp",
    facebookLabel: "Actualités sociales",
    facebookTitle: "Retrouvez-nous sur Facebook",
    facebookDescription:
      "Suivez les actualités, contactez l’hôte et gardez la page sous la main pendant votre planification.",
    facebookCta: "Ouvrir Facebook",
    platformsEyebrow: "Où réserver",
    platformsTitle: "Réservez directement ou via votre plateforme préférée.",
    platformsDescription:
      "Choisissez le chemin le plus simple : demande directe, plateforme voyage, Facebook ou WhatsApp.",
    helpEyebrow: "Besoin d’aide pour choisir ?",
    helpTitle: "Fern House ou Olive House ?",
    helpDescription:
      "Fern House est plus calme et orientée jardin. Olive House est plus grande, lumineuse et adaptée aux familles ou longs séjours.",
    trustEyebrow: "Support voyageur",
    trustTitle: "Un séjour fluide commence avant l’arrivée.",
    trustDescription:
      "Communication claire, orientation locale et parcours simple facilitent la préparation.",
    housePickerEyebrow: "Choisir le séjour",
    housePickerTitle: "Commencez par la maison adaptée à votre voyage.",
    housePickerDescription:
      "Vous pouvez ouvrir la réservation avec votre maison préférée déjà sélectionnée.",
    directBookingTitle: "Demande directe",
    directBookingDescription:
      "Préparez dates, informations voyageurs et résumé avant confirmation finale.",
    responseTime: "Réponses rapides",
    responseTimeDescription:
      "Utile pour vérifier les dates, l’arrivée et choisir la meilleure maison.",
    localGuidance: "Orientation locale",
    localGuidanceDescription:
      "Aide autour de General Santos City, Calumpang et Dadiangas North.",
    flexiblePlanning: "Planification flexible",
    flexiblePlanningDescription:
      "Idéal pour longs séjours, familles et comparaison des deux maisons.",
    bookFern: "Réserver Fern House",
    bookOlive: "Réserver Olive House",
    openGuide: "Ouvrir le guide",
    openGallery: "Ouvrir la galerie",
    contactDetails: "Coordonnées",
    contactDetailsDescription:
      "Utilisez le canal le plus simple selon votre étape de préparation.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "La disponibilité finale, les détails du séjour et le paiement sont confirmés après examen de votre demande.",
    platformCards: [
      {
        label: "Booking.com",
        description: "Pour les voyageurs préférant une plateforme classique.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Utile pour organiser un voyage régional en Asie.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "Un chemin familier pour les séjours privés.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Pratique pour messages rapides et actualités.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  de: {
    heroKicker: "Direkter Gästesupport",
    heroTitle: "Erzähl uns, welchen Aufenthalt du planst.",
    heroDescription:
      "Ob deine Daten feststehen oder du noch zwischen Fern House und Olive House wählst, wir helfen bei der passenden Anfrage.",
    whatsappLabel: "Schnellster Kontakt",
    whatsappTitle: "Schreib uns auf WhatsApp",
    whatsappDescription:
      "Nutze WhatsApp für kurze Fragen zu Daten, Hauswahl, Ankunft oder längeren Aufenthalten.",
    whatsappCta: "WhatsApp öffnen",
    facebookLabel: "Social Updates",
    facebookTitle: "Besuche uns auf Facebook",
    facebookDescription:
      "Folge Updates, schreibe dem Gastgeber und behalte die Seite während der Planung griffbereit.",
    facebookCta: "Facebook öffnen",
    platformsEyebrow: "Wo buchen",
    platformsTitle: "Buche direkt oder über deine bevorzugte Reiseplattform.",
    platformsDescription:
      "Wähle deinen Weg: direkte Anfrage, Reiseplattform, Facebook-Nachricht oder WhatsApp.",
    helpEyebrow: "Hilfe bei der Auswahl?",
    helpTitle: "Fern House oder Olive House?",
    helpDescription:
      "Fern House ist ruhiger und gartenorientiert. Olive House ist größer, heller und besser für Familien oder längere Aufenthalte.",
    trustEyebrow: "Gästesupport",
    trustTitle: "Ein entspannter Aufenthalt beginnt vor der Ankunft.",
    trustDescription:
      "Klare Kommunikation, lokale Orientierung und einfache Buchung erleichtern die Planung.",
    housePickerEyebrow: "Aufenthalt wählen",
    housePickerTitle: "Starte mit dem Haus, das zu deiner Reise passt.",
    housePickerDescription:
      "Du kannst die Buchung mit deinem bevorzugten Haus bereits ausgewählt öffnen.",
    directBookingTitle: "Direkte Buchungsanfrage",
    directBookingDescription:
      "Bereite Daten, Gästeinformationen und Zusammenfassung vor der finalen Bestätigung vor.",
    responseTime: "Schnelle Antworten",
    responseTimeDescription:
      "Nützlich für Datumsprüfung, Ankunftsfragen und Hauswahl.",
    localGuidance: "Lokale Orientierung",
    localGuidanceDescription:
      "Hilfreich rund um General Santos City, Calumpang und Dadiangas North.",
    flexiblePlanning: "Flexible Planung",
    flexiblePlanningDescription:
      "Gut für längere Aufenthalte, Familienreisen und Vergleich beider Häuser.",
    bookFern: "Fern House buchen",
    bookOlive: "Olive House buchen",
    openGuide: "Guide öffnen",
    openGallery: "Galerie öffnen",
    contactDetails: "Kontaktdaten",
    contactDetailsDescription:
      "Nutze den Kanal, der zu deiner Planungsphase passt.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "Finale Verfügbarkeit, Aufenthaltsdetails und Zahlungsinformationen werden nach Prüfung deiner Anfrage bestätigt.",
    platformCards: [
      {
        label: "Booking.com",
        description: "Für Gäste, die klassische Reiseplattformen bevorzugen.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Nützlich für regionale Reiseplanung in Asien.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "Ein vertrauter Weg für private Hausaufenthalte.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Gut für schnelle Nachrichten und Updates.",
        href: "https://www.facebook.com/",
      },
    ],
  },
  pl: {
    heroKicker: "Bezpośrednie wsparcie gości",
    heroTitle: "Powiedz nam, jaki pobyt planujesz.",
    heroDescription:
      "Jeśli masz już daty albo dopiero wybierasz między Fern House i Olive House, pomożemy przygotować właściwe zapytanie o pobyt.",
    whatsappLabel: "Najszybszy kontakt",
    whatsappTitle: "Napisz do nas na WhatsApp",
    whatsappDescription:
      "WhatsApp sprawdzi się przy szybkich pytaniach o daty, wybór domu, przyjazd albo dłuższy pobyt.",
    whatsappCta: "Otwórz WhatsApp",
    facebookLabel: "Aktualności społecznościowe",
    facebookTitle: "Odwiedź nas na Facebooku",
    facebookDescription:
      "Śledź aktualności, napisz do gospodarza i miej stronę obiektu pod ręką podczas planowania pobytu.",
    facebookCta: "Otwórz Facebook",
    platformsEyebrow: "Gdzie nas zarezerwować",
    platformsTitle: "Rezerwuj bezpośrednio albo przez ulubioną platformę.",
    platformsDescription:
      "Wybierz najwygodniejszą ścieżkę: bezpośrednie zapytanie, platforma podróżnicza, Facebook albo WhatsApp.",
    helpEyebrow: "Potrzebujesz pomocy w wyborze?",
    helpTitle: "Fern House czy Olive House?",
    helpDescription:
      "Fern House jest spokojniejszy i bardziej ogrodowy. Olive House jest większy, jaśniejszy i lepszy dla rodzin lub dłuższych pobytów.",
    trustEyebrow: "Wsparcie gości",
    trustTitle: "Spokojny pobyt zaczyna się przed przyjazdem.",
    trustDescription:
      "Czytelna komunikacja, lokalna orientacja i prosty proces rezerwacji ułatwiają planowanie.",
    housePickerEyebrow: "Wybierz pobyt",
    housePickerTitle: "Zacznij od domu, który pasuje do Twojej podróży.",
    housePickerDescription:
      "Możesz otworzyć rezerwację z wybranym domem zaznaczonym od razu.",
    directBookingTitle: "Bezpośrednie zapytanie",
    directBookingDescription:
      "Przygotuj daty, dane gościa i podsumowanie przed finalnym potwierdzeniem.",
    responseTime: "Szybkie odpowiedzi",
    responseTimeDescription:
      "Przydatne przy sprawdzaniu dat, pytaniach o przyjazd i wyborze domu.",
    localGuidance: "Lokalne wskazówki",
    localGuidanceDescription:
      "Pomocna orientacja wokół General Santos City, Calumpang i Dadiangas North.",
    flexiblePlanning: "Elastyczne planowanie",
    flexiblePlanningDescription:
      "Dobre przy dłuższych pobytach, podróżach rodzinnych i porównywaniu obu domów.",
    bookFern: "Zarezerwuj Fern House",
    bookOlive: "Zarezerwuj Olive House",
    openGuide: "Otwórz przewodnik",
    openGallery: "Otwórz galerię",
    contactDetails: "Dane kontaktowe",
    contactDetailsDescription:
      "Użyj kanału, który najlepiej pasuje do etapu planowania.",
    email: "hello@greenhousehomerental.com",
    phone: "+63 912 345 6789",
    location: "General Santos City, South Cotabato, Philippines",
    availabilityNote:
      "Finalna dostępność, szczegóły pobytu i płatności są potwierdzane po sprawdzeniu zapytania.",
    platformCards: [
      {
        label: "Booking.com",
        description: "Dla gości preferujących klasyczne platformy podróżnicze.",
        href: "https://www.booking.com/",
      },
      {
        label: "Agoda",
        description: "Przydatna przy planowaniu podróży w Azji.",
        href: "https://www.agoda.com/",
      },
      {
        label: "Airbnb",
        description: "Znana ścieżka dla prywatnych pobytów w domach.",
        href: "https://www.airbnb.com/",
      },
      {
        label: "Facebook",
        description: "Dobry kanał do szybkich wiadomości i aktualności.",
        href: "https://www.facebook.com/",
      },
    ],
  },
};

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale);
  const houses = getHouses();
  const copy = contactCopy[locale];
  const fernHouse = houses.find((house) => house.id === "fern-house");
  const oliveHouse = houses.find((house) => house.id === "olive-house");

  return (
    <section className="page-section contact-page-polished">
      <div className="site-shell">
        <div className="contact-hero-panel">
          <div className="page-heading contact-hero-copy">
            <p className="eyebrow">{copy.heroKicker}</p>
            <h1>{copy.heroTitle}</h1>
            <p>{copy.heroDescription}</p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://wa.me/639123456789"
                rel="noreferrer"
                target="_blank"
              >
                {copy.whatsappCta}
              </a>

              <LocalizedLink
                className="button button-secondary"
                href="/booking"
                locale={locale}
              >
                {dictionary.common.bookNow}
              </LocalizedLink>
            </div>
          </div>

          <aside className="contact-hero-card">
            <p className="eyebrow">{copy.contactDetails}</p>
            <h2>Greenhouse House Rental</h2>
            <p>{copy.contactDetailsDescription}</p>

            <div className="contact-detail-list">
              <a href={`mailto:${copy.email}`}>{copy.email}</a>
              <a href={`tel:${copy.phone.replaceAll(" ", "")}`}>{copy.phone}</a>
              <span>{copy.location}</span>
            </div>
          </aside>
        </div>

        <section className="contact-channel-grid">
          <article className="contact-channel-card contact-channel-card-primary">
            <p className="eyebrow">{copy.whatsappLabel}</p>
            <h2>{copy.whatsappTitle}</h2>
            <p>{copy.whatsappDescription}</p>

            <a
              className="button button-primary"
              href="https://wa.me/639123456789"
              rel="noreferrer"
              target="_blank"
            >
              {copy.whatsappCta}
            </a>
          </article>

          <article className="contact-channel-card">
            <p className="eyebrow">{copy.facebookLabel}</p>
            <h2>{copy.facebookTitle}</h2>
            <p>{copy.facebookDescription}</p>

            <a
              className="button button-secondary"
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              {copy.facebookCta}
            </a>
          </article>
        </section>

        <section className="contact-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{copy.platformsEyebrow}</p>
              <h2>{copy.platformsTitle}</h2>
              <p>{copy.platformsDescription}</p>
            </div>
          </div>

          <div className="contact-platform-grid">
            <LocalizedLink
              className="contact-platform-card contact-platform-card-direct"
              href="/booking"
              locale={locale}
            >
              <span>{copy.platformsEyebrow}</span>
              <strong>{copy.directBookingTitle}</strong>
              <p>{copy.directBookingDescription}</p>
            </LocalizedLink>

            {copy.platformCards.map((platform) => (
              <a
                className="contact-platform-card"
                href={platform.href}
                key={platform.label}
                rel="noreferrer"
                target="_blank"
              >
                <span>{platform.label}</span>
                <strong>{platform.label}</strong>
                <p>{platform.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="contact-section contact-help-panel">
          <div>
            <p className="eyebrow">{copy.helpEyebrow}</p>
            <h2>{copy.helpTitle}</h2>
            <p>{copy.helpDescription}</p>

            <div className="hero-actions">
              <LocalizedLink
                className="button button-primary"
                href="/guide"
                locale={locale}
              >
                {copy.openGuide}
              </LocalizedLink>

              <LocalizedLink
                className="button button-secondary"
                href="/gallery"
                locale={locale}
              >
                {copy.openGallery}
              </LocalizedLink>
            </div>
          </div>

          <div className="contact-house-mini-grid">
            {fernHouse ? (
              <article className="contact-house-mini-card">
                <span>{fernHouse.location[locale]}</span>
                <h3>{fernHouse.name}</h3>
                <p>{fernHouse.subtitle[locale]}</p>
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
              <article className="contact-house-mini-card">
                <span>{oliveHouse.location[locale]}</span>
                <h3>{oliveHouse.name}</h3>
                <p>{oliveHouse.subtitle[locale]}</p>
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
        </section>

        <section className="contact-section">
          <div className="section-heading section-heading-row">
            <div>
              <p className="eyebrow">{copy.trustEyebrow}</p>
              <h2>{copy.trustTitle}</h2>
              <p>{copy.trustDescription}</p>
            </div>
          </div>

          <div className="contact-trust-grid">
            <article>
              <span>01</span>
              <h3>{copy.responseTime}</h3>
              <p>{copy.responseTimeDescription}</p>
            </article>

            <article>
              <span>02</span>
              <h3>{copy.localGuidance}</h3>
              <p>{copy.localGuidanceDescription}</p>
            </article>

            <article>
              <span>03</span>
              <h3>{copy.flexiblePlanning}</h3>
              <p>{copy.flexiblePlanningDescription}</p>
            </article>
          </div>
        </section>

        <section className="contact-final-cta">
          <p className="eyebrow">{copy.housePickerEyebrow}</p>
          <h2>{copy.housePickerTitle}</h2>
          <p>{copy.housePickerDescription}</p>

          <div className="hero-actions">
            <LocalizedLink
              className="button button-primary"
              href="/booking?house=fern-house"
              locale={locale}
            >
              {copy.bookFern}
            </LocalizedLink>

            <LocalizedLink
              className="button button-secondary"
              href="/booking?house=olive-house"
              locale={locale}
            >
              {copy.bookOlive}
            </LocalizedLink>
          </div>

          <small>{copy.availabilityNote}</small>
        </section>
      </div>

      <style>{`
        .contact-page-polished {
          position: relative;
          overflow: hidden;
        }

        .contact-page-polished::before {
          position: absolute;
          top: 8rem;
          right: -18rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.78;
          pointer-events: none;
        }

        .contact-page-polished::after {
          position: absolute;
          top: 44rem;
          left: -20rem;
          width: 38rem;
          height: 38rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--accent-soft), transparent 70%);
          opacity: 0.6;
          pointer-events: none;
        }

        .contact-hero-panel,
        .contact-channel-grid,
        .contact-section,
        .contact-final-cta {
          position: relative;
          z-index: 1;
        }

        .contact-hero-panel {
          display: grid;
          align-items: end;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(340px, 0.36fr);
          margin-bottom: 34px;
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(30px, 5vw, 64px);
        }

        .contact-hero-copy {
          margin-bottom: 0;
        }

        .contact-hero-card,
        .contact-channel-card,
        .contact-platform-card,
        .contact-help-panel,
        .contact-trust-grid article,
        .contact-house-mini-card,
        .contact-final-cta {
          border: 1px solid var(--border);
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 96%, transparent);
          box-shadow: var(--shadow-soft);
        }

        .contact-hero-card {
          display: grid;
          gap: 12px;
          border-radius: 30px;
          padding: 26px;
        }

        .contact-hero-card h2 {
          margin: 0;
          font-size: 1.6rem;
          letter-spacing: -0.045em;
        }

        .contact-hero-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.65;
        }

        .contact-detail-list {
          display: grid;
          gap: 10px;
          margin-top: 8px;
        }

        .contact-detail-list a,
        .contact-detail-list span {
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--surface);
          color: var(--text);
          font-weight: 850;
          padding: 13px 14px;
        }

        .contact-channel-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          margin-bottom: 76px;
        }

        .contact-channel-card {
          display: grid;
          align-content: start;
          gap: 18px;
          border-radius: var(--radius-xl);
          padding: clamp(26px, 4vw, 46px);
        }

        .contact-channel-card-primary {
          background:
            radial-gradient(circle at 20% 10%, color-mix(in srgb, var(--primary) 24%, transparent), transparent 22rem),
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 96%, transparent);
        }

        .contact-channel-card h2,
        .contact-help-panel h2,
        .contact-final-cta h2 {
          margin: 0;
          font-size: clamp(2.2rem, 4vw, 4.8rem);
          line-height: 1.04;
          letter-spacing: -0.075em;
        }

        .contact-channel-card p,
        .contact-help-panel p,
        .contact-final-cta p,
        .contact-platform-card p,
        .contact-trust-grid p,
        .contact-house-mini-card p {
          color: var(--muted);
          line-height: 1.7;
        }

        .contact-section {
          margin-bottom: 76px;
        }

        .contact-platform-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .contact-platform-card {
          display: grid;
          gap: 10px;
          border-radius: 26px;
          padding: 22px;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .contact-platform-card:hover {
          transform: translateY(-3px);
          border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
          box-shadow: var(--shadow);
        }

        .contact-platform-card span {
          color: var(--primary);
          font-size: 0.76rem;
          font-weight: 950;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .contact-platform-card strong {
          font-size: 1.22rem;
          letter-spacing: -0.04em;
        }

        .contact-platform-card p {
          margin: 0;
        }

        .contact-platform-card-direct {
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
        }

        .contact-help-panel {
          display: grid;
          align-items: center;
          gap: clamp(28px, 5vw, 64px);
          grid-template-columns: minmax(0, 0.82fr) minmax(460px, 1.18fr);
          border-radius: var(--radius-xl);
          padding: clamp(30px, 5vw, 64px);
        }

        .contact-house-mini-grid {
          display: grid;
          gap: 18px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .contact-house-mini-card {
          display: grid;
          gap: 12px;
          border-radius: 28px;
          padding: 24px;
        }

        .contact-house-mini-card span {
          color: var(--primary);
          font-size: 0.74rem;
          font-weight: 950;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .contact-house-mini-card h3 {
          margin: 0;
          font-size: 1.55rem;
          letter-spacing: -0.05em;
        }

        .contact-house-mini-card p {
          margin: 0;
        }

        .contact-trust-grid {
          display: grid;
          gap: 22px;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .contact-trust-grid article {
          display: grid;
          gap: 12px;
          border-radius: 28px;
          padding: 26px;
        }

        .contact-trust-grid span {
          display: grid;
          width: 46px;
          height: 46px;
          place-items: center;
          border-radius: 16px;
          background: var(--primary);
          color: white;
          font-size: 0.82rem;
          font-weight: 950;
        }

        .contact-trust-grid h3 {
          margin: 0;
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        .contact-trust-grid p {
          margin: 0;
        }

        .contact-final-cta {
          display: grid;
          justify-items: center;
          gap: 18px;
          border-radius: var(--radius-xl);
          padding: clamp(34px, 6vw, 78px);
          text-align: center;
        }

        .contact-final-cta p {
          max-width: 760px;
          margin: 0;
        }

        .contact-final-cta small {
          max-width: 680px;
          color: var(--muted);
          line-height: 1.6;
        }

        @media (max-width: 1280px) {
          .contact-platform-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 1180px) {
          .contact-hero-panel,
          .contact-channel-grid,
          .contact-help-panel,
          .contact-trust-grid {
            grid-template-columns: 1fr;
          }

          .contact-house-mini-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .contact-hero-panel,
          .contact-channel-card,
          .contact-help-panel,
          .contact-final-cta {
            border-radius: 32px;
            padding: 26px;
          }

          .contact-platform-grid {
            grid-template-columns: 1fr;
          }

          .contact-section,
          .contact-channel-grid {
            margin-bottom: 48px;
          }

          .contact-final-cta .button,
          .contact-channel-card .button,
          .contact-house-mini-card .button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
