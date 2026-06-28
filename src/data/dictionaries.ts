import type { Locale } from "@/types/site";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    houses: string;
    gallery: string;
    booking: string;
    contact: string;
  };
  common: {
    stayTagline: string;
    language: string;
    theme: string;
    bookNow: string;
    viewHouses: string;
    viewGallery: string;
    contactUs: string;
    learnMore: string;
    available: string;
    booked: string;
    availabilityGuide: string;
    guests: string;
    bedrooms: string;
    bathrooms: string;
    area: string;
    from: string;
    night: string;
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    heroBadgeOne: string;
    heroBadgeTwo: string;
    heroBadgeThree: string;
    housesTitle: string;
    housesDescription: string;
    galleryTitle: string;
    galleryDescription: string;
    reviewsTitle: string;
    reviewsDescription: string;
    bookingTitle: string;
    bookingDescription: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  housesPage: {
    eyebrow: string;
    title: string;
    description: string;
    highlights: string;
    amenities: string;
    platforms: string;
  };
  galleryPage: {
    eyebrow: string;
    title: string;
    description: string;
    all: string;
    exterior: string;
    interior: string;
    bedroom: string;
    kitchen: string;
    bathroom: string;
    terrace: string;
    details: string;
  };
  bookingPage: {
    eyebrow: string;
    title: string;
    description: string;
    calendarTitle: string;
    calendarDescription: string;
    inquiryTitle: string;
    inquiryDescription: string;
    selectedHouse: string;
    previousMonth: string;
    nextMonth: string;
    sendWhatsapp: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    whatsappTitle: string;
    whatsappDescription: string;
    facebookTitle: string;
    facebookDescription: string;
    platformsTitle: string;
    platformsDescription: string;
    directContactTitle: string;
    directContactDescription: string;
  };
  reviews: {
    googleReady: string;
    facebookReady: string;
    apiNote: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    bookingLinks: string;
    legalNote: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    meta: {
      title: "Greenhouse House Rental | General Santos City stays",
      description:
        "A multilingual rental website for two peaceful tropical homes in General Santos City, Philippines.",
    },
    nav: {
      home: "Home",
      houses: "Houses",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      stayTagline: "Private tropical stays",
      language: "Language",
      theme: "Theme",
      bookNow: "Book now",
      viewHouses: "View houses",
      viewGallery: "View gallery",
      contactUs: "Contact us",
      learnMore: "Learn more",
      available: "Available",
      booked: "Booked",
      availabilityGuide: "Availability guide",
      guests: "Guests",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "Area",
      from: "From",
      night: "night",
    },
    home: {
      eyebrow: "Private stays in General Santos City",
      title: "Two peaceful homes designed for slow mornings and easy stays.",
      description:
        "Greenhouse House Rental brings together warm Mindanao hospitality, calm tropical gardens and carefully prepared spaces for guests who want a private, comfortable stay in General Santos City.",
      primaryCta: "Check availability",
      secondaryCta: "Explore the homes",
      heroBadgeOne: "2 rental homes",
      heroBadgeTwo: "Guest reviews",
      heroBadgeThree: "Direct booking inquiry",
      housesTitle: "Choose your stay",
      housesDescription:
        "Each house has its own atmosphere, gallery, amenities, map location and booking path.",
      galleryTitle: "A visual-first gallery",
      galleryDescription:
        "Explore the spaces, details and tropical atmosphere of both homes before choosing your stay.",
      reviewsTitle: "Guest trust built on real experiences",
      reviewsDescription:
        "Guest impressions help future visitors understand the comfort, atmosphere and direct-booking experience.",
      bookingTitle: "Availability-first booking",
      bookingDescription:
        "A clear calendar helps guests understand available dates before contacting the host.",
      ctaTitle: "Ready to plan your stay in General Santos City?",
      ctaDescription:
        "Choose your preferred home, check availability and contact us directly for your next tropical stay.",
    },
    housesPage: {
      eyebrow: "The properties",
      title: "Two houses, two General Santos City locations.",
      description:
        "A clear comparison page helps guests quickly understand which home fits their stay.",
      highlights: "Highlights",
      amenities: "Amenities",
      platforms: "External booking platforms",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Browse the houses by space and mood.",
      description:
        "Discover the atmosphere of each home through interiors, outdoor spaces, details and garden views.",
      all: "All",
      exterior: "Exterior",
      interior: "Interior",
      bedroom: "Bedroom",
      kitchen: "Kitchen",
      bathroom: "Bathroom",
      terrace: "Terrace",
      details: "Details",
    },
    bookingPage: {
      eyebrow: "Booking",
      title: "Check availability before sending an inquiry.",
      description:
        "Browse the calendar, choose a home and contact us directly to confirm your preferred dates.",
      calendarTitle: "Availability calendar",
      calendarDescription:
        "Switch between houses and browse monthly availability.",
      inquiryTitle: "Send a booking inquiry",
      inquiryDescription:
        "Use WhatsApp for quick questions, date checks and direct booking requests.",
      selectedHouse: "Selected house",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      sendWhatsapp: "Ask on WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "One place for all guest actions.",
      description:
        "WhatsApp, Facebook and booking platforms are grouped into a simple contact page for quick guest decisions.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Best for quick questions, date checks and direct booking inquiries.",
      facebookTitle: "Facebook page",
      facebookDescription:
        "Use this for social proof, announcements and guest communication.",
      platformsTitle: "Booking platforms",
      platformsDescription:
        "Find us on Agoda, Booking.com, Airbnb and other external channels.",
      directContactTitle: "Direct inquiry",
      directContactDescription:
        "Share your travel dates, preferred house and guest details so we can help you plan your stay.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Guest reviews are gathered from trusted channels to help visitors choose the right stay with confidence.",
    },
    footer: {
      description:
        "Greenhouse House Rental offers two peaceful tropical homes in General Santos City, prepared for private stays, slow mornings and direct guest communication.",
      quickLinks: "Quick links",
      bookingLinks: "Booking links",
      legalNote:
        "Private stays in General Santos City with direct inquiries, guest reviews and external booking options.",
    },
  },

  ceb: {
    meta: {
      title: "Greenhouse House Rental | General Santos City stays",
      description:
        "Multilingual rental website para sa duha ka malinawon nga balay sa General Santos City, Philippines.",
    },
    nav: {
      home: "Home",
      houses: "Mga balay",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      stayTagline: "Private tropical stays",
      language: "Pinulongan",
      theme: "Theme",
      bookNow: "Mag-book",
      viewHouses: "Tan-awa ang mga balay",
      viewGallery: "Tan-awa ang gallery",
      contactUs: "Kontaka mi",
      learnMore: "Hibal-i pa",
      available: "Available",
      booked: "Na-book",
      availabilityGuide: "Availability guide",
      guests: "Guests",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "Area",
      from: "Gikan sa",
      night: "gabi-i",
    },
    home: {
      eyebrow: "Private stays sa General Santos City",
      title:
        "Duha ka malinawon nga balay para sa hinay nga buntag ug komportable nga stay.",
      description:
        "Ang Greenhouse House Rental nagdala sa kainit sa Mindanao hospitality, malinawon nga tropical gardens ug maayo nga spaces para sa guests nga gusto og private ug comfortable stay sa General Santos City.",
      primaryCta: "Tan-awa ang availability",
      secondaryCta: "I-explore ang mga balay",
      heroBadgeOne: "2 rental homes",
      heroBadgeTwo: "Guest reviews",
      heroBadgeThree: "Direct booking inquiry",
      housesTitle: "Pili-a imong stay",
      housesDescription:
        "Matag balay naay kaugalingong atmosphere, gallery, amenities, map location ug booking path.",
      galleryTitle: "Visual-first gallery",
      galleryDescription:
        "Tan-awa ang spaces, details ug tropical atmosphere sa duha ka balay before ka mopili sa imong stay.",
      reviewsTitle: "Guest trust nga gikan sa tinuod nga experiences",
      reviewsDescription:
        "Ang guest impressions makatabang sa future visitors nga masabtan ang comfort, atmosphere ug direct-booking experience.",
      bookingTitle: "Availability-first booking",
      bookingDescription:
        "Clear calendar experience para masabtan sa guests ang available dates before sila mo-contact sa host.",
      ctaTitle: "Ready na ba ka mo-plan sa imong stay sa General Santos City?",
      ctaDescription:
        "Pili-a imong preferred home, tan-awa ang availability ug kontaka mi directly para sa imong next tropical stay.",
    },
    housesPage: {
      eyebrow: "Properties",
      title: "Duha ka balay, duha ka General Santos City locations.",
      description:
        "Clear comparison page para dali masabtan sa guests kung asa nga balay bagay sa ilang stay.",
      highlights: "Highlights",
      amenities: "Amenities",
      platforms: "External booking platforms",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Tan-awa ang mga balay by space ug mood.",
      description:
        "Discover ang atmosphere sa matag balay through interiors, outdoor spaces, details ug garden views.",
      all: "All",
      exterior: "Exterior",
      interior: "Interior",
      bedroom: "Bedroom",
      kitchen: "Kitchen",
      bathroom: "Bathroom",
      terrace: "Terrace",
      details: "Details",
    },
    bookingPage: {
      eyebrow: "Booking",
      title: "Tan-awa ang availability before mag-send og inquiry.",
      description:
        "Tan-awa ang calendar, pili og balay ug kontaka mi directly para ma-confirm ang imong preferred dates.",
      calendarTitle: "Availability calendar",
      calendarDescription:
        "Pag-switch sa mga balay ug tan-awa ang monthly availability.",
      inquiryTitle: "Send booking inquiry",
      inquiryDescription:
        "Gamiton ang WhatsApp para sa quick questions, date checks ug direct booking requests.",
      selectedHouse: "Selected house",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      sendWhatsapp: "Ask on WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Usa ka lugar para sa tanang guest actions.",
      description:
        "WhatsApp, Facebook ug booking platforms gi-group sa simple contact page para dali ang guest decisions.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Best para sa quick questions, date checks ug direct booking inquiries.",
      facebookTitle: "Facebook page",
      facebookDescription:
        "Para sa social proof, announcements ug guest communication.",
      platformsTitle: "Booking platforms",
      platformsDescription:
        "Makita mi sa Agoda, Booking.com, Airbnb ug other external channels.",
      directContactTitle: "Direct inquiry",
      directContactDescription:
        "I-share ang imong travel dates, preferred house ug guest details para makatabang mi sa pag-plan sa imong stay.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Ang guest reviews gikan sa trusted channels para makatabang sa visitors nga mopili og stay with confidence.",
    },
    footer: {
      description:
        "Ang Greenhouse House Rental nagtanyag og duha ka malinawon nga tropical homes sa General Santos City para sa private stays, hinay nga buntag ug direct guest communication.",
      quickLinks: "Quick links",
      bookingLinks: "Booking links",
      legalNote:
        "Private stays sa General Santos City with direct inquiries, guest reviews ug external booking options.",
    },
  },

  tl: {
    meta: {
      title: "Greenhouse House Rental | General Santos City stays",
      description:
        "Multilingual rental website para sa dalawang peaceful homes sa General Santos City, Philippines.",
    },
    nav: {
      home: "Home",
      houses: "Mga bahay",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      stayTagline: "Private tropical stays",
      language: "Wika",
      theme: "Theme",
      bookNow: "Mag-book",
      viewHouses: "Tingnan ang bahay",
      viewGallery: "Tingnan ang gallery",
      contactUs: "Makipag-ugnayan",
      learnMore: "Alamin pa",
      available: "Available",
      booked: "Booked",
      availabilityGuide: "Availability guide",
      guests: "Guests",
      bedrooms: "Bedrooms",
      bathrooms: "Bathrooms",
      area: "Area",
      from: "Mula",
      night: "gabi",
    },
    home: {
      eyebrow: "Private stays in General Santos City",
      title:
        "Dalawang tahimik na bahay para sa slow mornings at komportableng stay.",
      description:
        "Pinagsasama ng Greenhouse House Rental ang init ng Mindanao hospitality, calm tropical gardens at carefully prepared spaces para sa guests na gusto ng private at comfortable stay sa General Santos City.",
      primaryCta: "Tingnan ang availability",
      secondaryCta: "I-explore ang homes",
      heroBadgeOne: "2 rental homes",
      heroBadgeTwo: "Guest reviews",
      heroBadgeThree: "Direct booking inquiry",
      housesTitle: "Piliin ang iyong stay",
      housesDescription:
        "Bawat bahay ay may sariling mood, gallery, amenities, map location at booking path.",
      galleryTitle: "Visual-first gallery",
      galleryDescription:
        "I-explore ang spaces, details at tropical atmosphere ng dalawang homes bago pumili ng stay.",
      reviewsTitle: "Guest trust built on real experiences",
      reviewsDescription:
        "Guest impressions help future visitors understand the comfort, atmosphere and direct-booking experience.",
      bookingTitle: "Availability-first booking",
      bookingDescription:
        "Clear calendar para makita ng guests ang available dates bago mag-message.",
      ctaTitle: "Ready ka na bang i-plan ang stay mo sa General Santos City?",
      ctaDescription:
        "Piliin ang preferred home, tingnan ang availability at mag-contact directly for your next tropical stay.",
    },
    housesPage: {
      eyebrow: "Properties",
      title: "Dalawang bahay, dalawang General Santos City locations.",
      description:
        "Clear comparison para madaling pumili ang guests ng bagay na stay.",
      highlights: "Highlights",
      amenities: "Amenities",
      platforms: "External booking platforms",
    },
    galleryPage: {
      eyebrow: "Gallery",
      title: "Browse homes by space and mood.",
      description:
        "Discover the atmosphere of each home through interiors, outdoor spaces, details and garden views.",
      all: "All",
      exterior: "Exterior",
      interior: "Interior",
      bedroom: "Bedroom",
      kitchen: "Kitchen",
      bathroom: "Bathroom",
      terrace: "Terrace",
      details: "Details",
    },
    bookingPage: {
      eyebrow: "Booking",
      title: "Tingnan ang availability bago mag-inquire.",
      description:
        "Browse the calendar, choose a home and contact us directly to confirm your preferred dates.",
      calendarTitle: "Availability calendar",
      calendarDescription:
        "Mag-switch ng houses at tingnan ang monthly availability.",
      inquiryTitle: "Send booking inquiry",
      inquiryDescription:
        "Use WhatsApp for quick questions, date checks and direct booking requests.",
      selectedHouse: "Selected house",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      sendWhatsapp: "Ask on WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Isang lugar para sa lahat ng guest actions.",
      description:
        "WhatsApp, Facebook at booking platforms are grouped in a simple contact page for quick guest decisions.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Best for quick questions, date checks at direct booking inquiries.",
      facebookTitle: "Facebook page",
      facebookDescription:
        "Para sa social proof, announcements at guest communication.",
      platformsTitle: "Booking platforms",
      platformsDescription:
        "Find us on Agoda, Booking.com, Airbnb and other external channels.",
      directContactTitle: "Direct inquiry",
      directContactDescription:
        "Share your travel dates, preferred house and guest details so we can help you plan your stay.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Guest reviews are gathered from trusted channels to help visitors choose the right stay with confidence.",
    },
    footer: {
      description:
        "Greenhouse House Rental offers two peaceful tropical homes in General Santos City for private stays, slow mornings and direct guest communication.",
      quickLinks: "Quick links",
      bookingLinks: "Booking links",
      legalNote:
        "Private stays in General Santos City with direct inquiries, guest reviews and external booking options.",
    },
  },

  ko: {
    meta: {
      title: "Greenhouse House Rental | 제너럴 산토스 시티 숙소",
      description:
        "필리핀 제너럴 산토스 시티의 두 평화로운 숙소를 소개하는 다국어 렌탈 웹사이트입니다.",
    },
    nav: {
      home: "홈",
      houses: "숙소",
      gallery: "갤러리",
      booking: "예약",
      contact: "문의",
    },
    common: {
      stayTagline: "프라이빗 열대 숙소",
      language: "언어",
      theme: "테마",
      bookNow: "예약하기",
      viewHouses: "숙소 보기",
      viewGallery: "갤러리 보기",
      contactUs: "문의하기",
      learnMore: "더 보기",
      available: "가능",
      booked: "예약됨",
      availabilityGuide: "가능 일정 안내",
      guests: "게스트",
      bedrooms: "침실",
      bathrooms: "욕실",
      area: "면적",
      from: "시작가",
      night: "박",
    },
    home: {
      eyebrow: "제너럴 산토스 시티 프라이빗 숙소",
      title: "느린 아침과 편안한 머무름을 위한 두 개의 조용한 숙소.",
      description:
        "Greenhouse House Rental은 Mindanao의 따뜻한 환대, 차분한 열대 정원, 그리고 제너럴 산토스 시티에서 프라이빗하고 편안한 시간을 원하는 게스트를 위한 세심한 공간을 함께 담았습니다.",
      primaryCta: "가능 일정 확인",
      secondaryCta: "숙소 둘러보기",
      heroBadgeOne: "2개의 렌탈 숙소",
      heroBadgeTwo: "게스트 리뷰",
      heroBadgeThree: "직접 예약 문의",
      housesTitle: "머무를 숙소 선택",
      housesDescription:
        "각 숙소는 고유한 분위기, 갤러리, 편의시설, 지도 위치, 예약 경로를 갖습니다.",
      galleryTitle: "비주얼 중심 갤러리",
      galleryDescription:
        "숙소를 선택하기 전, 공간과 디테일, 열대 분위기를 먼저 둘러보세요.",
      reviewsTitle: "실제 경험을 바탕으로 쌓이는 게스트 신뢰",
      reviewsDescription:
        "게스트의 인상은 다음 방문객이 숙소의 편안함, 분위기, 직접 예약 경험을 이해하는 데 도움이 됩니다.",
      bookingTitle: "가능 일정 중심 예약",
      bookingDescription:
        "명확한 캘린더는 게스트가 문의 전 가능한 날짜를 이해하도록 도와줍니다.",
      ctaTitle: "제너럴 산토스 시티에서의 숙박을 계획할 준비가 되었나요?",
      ctaDescription:
        "원하는 숙소를 선택하고 가능 일정을 확인한 뒤 다음 열대 휴식을 위해 직접 문의하세요.",
    },
    housesPage: {
      eyebrow: "숙소",
      title: "두 숙소, 두 개의 제너럴 산토스 시티 위치.",
      description:
        "명확한 비교 페이지는 게스트가 빠르게 적합한 숙소를 고르도록 돕습니다.",
      highlights: "하이라이트",
      amenities: "편의시설",
      platforms: "외부 예약 플랫폼",
    },
    galleryPage: {
      eyebrow: "갤러리",
      title: "공간과 분위기별로 숙소를 둘러보세요.",
      description:
        "인테리어, 야외 공간, 디테일, 정원 전망을 통해 각 숙소의 분위기를 확인하세요.",
      all: "전체",
      exterior: "외부",
      interior: "인테리어",
      bedroom: "침실",
      kitchen: "주방",
      bathroom: "욕실",
      terrace: "테라스",
      details: "디테일",
    },
    bookingPage: {
      eyebrow: "예약",
      title: "문의 전 가능 일정을 확인하세요.",
      description:
        "캘린더를 확인하고 숙소를 선택한 뒤 원하는 날짜를 직접 문의해 주세요.",
      calendarTitle: "가능 일정 캘린더",
      calendarDescription: "숙소를 전환하고 월별 일정을 확인하세요.",
      inquiryTitle: "예약 문의 보내기",
      inquiryDescription:
        "빠른 질문, 날짜 확인, 직접 예약 요청은 WhatsApp을 이용해 주세요.",
      selectedHouse: "선택된 숙소",
      previousMonth: "이전 달",
      nextMonth: "다음 달",
      sendWhatsapp: "WhatsApp 문의",
    },
    contactPage: {
      eyebrow: "문의",
      title: "게스트 액션을 위한 하나의 허브.",
      description:
        "WhatsApp, Facebook, 예약 플랫폼 링크를 게스트가 쉽게 결정할 수 있도록 모았습니다.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "빠른 질문, 일정 확인, 직접 예약 문의에 가장 적합합니다.",
      facebookTitle: "Facebook 페이지",
      facebookDescription:
        "소셜 증거, 공지, 게스트 커뮤니케이션을 위한 채널입니다.",
      platformsTitle: "예약 플랫폼",
      platformsDescription:
        "Agoda, Booking.com, Airbnb 등 외부 채널에서 확인할 수 있습니다.",
      directContactTitle: "직접 문의",
      directContactDescription:
        "여행 날짜, 선호 숙소, 게스트 정보를 공유해 주시면 숙박 계획을 도와드립니다.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "신뢰할 수 있는 채널의 게스트 리뷰를 통해 방문객이 더 확신을 가지고 숙소를 선택할 수 있습니다.",
    },
    footer: {
      description:
        "Greenhouse House Rental은 제너럴 산토스 시티에서 프라이빗한 숙박, 느린 아침, 직접 게스트 소통을 위한 두 개의 평화로운 열대 숙소를 제공합니다.",
      quickLinks: "빠른 링크",
      bookingLinks: "예약 링크",
      legalNote:
        "제너럴 산토스 시티의 프라이빗 숙소, 직접 문의, 게스트 리뷰, 외부 예약 옵션.",
    },
  },

  es: {
    meta: {
      title: "Greenhouse House Rental | Estancias en General Santos City",
      description:
        "Sitio multilingüe de alquiler para dos casas tranquilas en General Santos City, Filipinas.",
    },
    nav: {
      home: "Inicio",
      houses: "Casas",
      gallery: "Galería",
      booking: "Reserva",
      contact: "Contacto",
    },
    common: {
      stayTagline: "Estancias tropicales privadas",
      language: "Idioma",
      theme: "Tema",
      bookNow: "Reservar",
      viewHouses: "Ver casas",
      viewGallery: "Ver galería",
      contactUs: "Contacto",
      learnMore: "Más información",
      available: "Disponible",
      booked: "Ocupado",
      availabilityGuide: "Guía de disponibilidad",
      guests: "Huéspedes",
      bedrooms: "Dormitorios",
      bathrooms: "Baños",
      area: "Superficie",
      from: "Desde",
      night: "noche",
    },
    home: {
      eyebrow: "Estancias privadas en General Santos City",
      title:
        "Dos casas tranquilas diseñadas para mañanas lentas y estancias cómodas.",
      description:
        "Greenhouse House Rental combina la calidez de la hospitalidad de Mindanao, jardines tropicales tranquilos y espacios preparados con cuidado para huéspedes que buscan una estancia privada y cómoda en General Santos City.",
      primaryCta: "Ver disponibilidad",
      secondaryCta: "Explorar casas",
      heroBadgeOne: "2 casas en alquiler",
      heroBadgeTwo: "Reseñas de huéspedes",
      heroBadgeThree: "Consulta directa de reserva",
      housesTitle: "Elige tu estancia",
      housesDescription:
        "Cada casa tiene su propia atmósfera, galería, servicios, ubicación en mapa y ruta de reserva.",
      galleryTitle: "Una galería visual",
      galleryDescription:
        "Explora los espacios, detalles y la atmósfera tropical de ambas casas antes de elegir tu estancia.",
      reviewsTitle: "Confianza construida sobre experiencias reales",
      reviewsDescription:
        "Las impresiones de los huéspedes ayudan a entender la comodidad, el ambiente y la experiencia de reserva directa.",
      bookingTitle: "Reserva basada en disponibilidad",
      bookingDescription:
        "Un calendario claro ayuda a los huéspedes a entender las fechas disponibles antes de contactar.",
      ctaTitle: "¿Listo para planificar tu estancia en General Santos City?",
      ctaDescription:
        "Elige tu casa preferida, consulta disponibilidad y contáctanos directamente para tu próxima estancia tropical.",
    },
    housesPage: {
      eyebrow: "Propiedades",
      title: "Dos casas, dos ubicaciones en General Santos City.",
      description:
        "Una comparación clara ayuda a elegir rápidamente la casa ideal.",
      highlights: "Destacados",
      amenities: "Servicios",
      platforms: "Plataformas externas de reserva",
    },
    galleryPage: {
      eyebrow: "Galería",
      title: "Explora las casas por espacio y ambiente.",
      description:
        "Descubre la atmósfera de cada casa a través de interiores, exteriores, detalles y vistas al jardín.",
      all: "Todo",
      exterior: "Exterior",
      interior: "Interior",
      bedroom: "Dormitorio",
      kitchen: "Cocina",
      bathroom: "Baño",
      terrace: "Terraza",
      details: "Detalles",
    },
    bookingPage: {
      eyebrow: "Reserva",
      title: "Consulta la disponibilidad antes de enviar una solicitud.",
      description:
        "Revisa el calendario, elige una casa y contáctanos directamente para confirmar tus fechas.",
      calendarTitle: "Calendario de disponibilidad",
      calendarDescription: "Cambia de casa y revisa la disponibilidad por mes.",
      inquiryTitle: "Enviar consulta de reserva",
      inquiryDescription:
        "Usa WhatsApp para preguntas rápidas, fechas y solicitudes directas de reserva.",
      selectedHouse: "Casa seleccionada",
      previousMonth: "Mes anterior",
      nextMonth: "Mes siguiente",
      sendWhatsapp: "Preguntar por WhatsApp",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Un lugar para todas las acciones del huésped.",
      description:
        "WhatsApp, Facebook y plataformas de reserva agrupadas en una página sencilla para decisiones rápidas.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Ideal para preguntas rápidas, fechas y consultas directas.",
      facebookTitle: "Página de Facebook",
      facebookDescription:
        "Para prueba social, anuncios y comunicación con huéspedes.",
      platformsTitle: "Plataformas de reserva",
      platformsDescription:
        "Encuéntranos en Agoda, Booking.com, Airbnb y otros canales.",
      directContactTitle: "Consulta directa",
      directContactDescription:
        "Comparte tus fechas, casa preferida y datos de huéspedes para ayudarte a planificar la estancia.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Las reseñas de huéspedes de canales confiables ayudan a elegir la estancia adecuada con confianza.",
    },
    footer: {
      description:
        "Greenhouse House Rental ofrece dos casas tropicales tranquilas en General Santos City, preparadas para estancias privadas, mañanas lentas y comunicación directa.",
      quickLinks: "Enlaces rápidos",
      bookingLinks: "Enlaces de reserva",
      legalNote:
        "Estancias privadas en General Santos City con consultas directas, reseñas y opciones externas de reserva.",
    },
  },

  fr: {
    meta: {
      title: "Greenhouse House Rental | Séjours à General Santos City",
      description:
        "Site multilingue de location pour deux maisons paisibles à General Santos City, Philippines.",
    },
    nav: {
      home: "Accueil",
      houses: "Maisons",
      gallery: "Galerie",
      booking: "Réservation",
      contact: "Contact",
    },
    common: {
      stayTagline: "Séjours tropicaux privés",
      language: "Langue",
      theme: "Thème",
      bookNow: "Réserver",
      viewHouses: "Voir les maisons",
      viewGallery: "Voir la galerie",
      contactUs: "Nous contacter",
      learnMore: "En savoir plus",
      available: "Disponible",
      booked: "Réservé",
      availabilityGuide: "Guide de disponibilité",
      guests: "Voyageurs",
      bedrooms: "Chambres",
      bathrooms: "Salles de bain",
      area: "Surface",
      from: "À partir de",
      night: "nuit",
    },
    home: {
      eyebrow: "Séjours privés à General Santos City",
      title:
        "Deux maisons paisibles pensées pour des matins lents et des séjours faciles.",
      description:
        "Greenhouse House Rental réunit la chaleur de l’hospitalité de Mindanao, des jardins tropicaux calmes et des espaces soigneusement préparés pour les voyageurs qui recherchent un séjour privé et confortable à General Santos City.",
      primaryCta: "Vérifier la disponibilité",
      secondaryCta: "Explorer les maisons",
      heroBadgeOne: "2 maisons à louer",
      heroBadgeTwo: "Avis voyageurs",
      heroBadgeThree: "Demande directe de réservation",
      housesTitle: "Choisissez votre séjour",
      housesDescription:
        "Chaque maison possède son ambiance, sa galerie, ses équipements, sa carte et son chemin de réservation.",
      galleryTitle: "Une galerie pensée pour l’image",
      galleryDescription:
        "Explorez les espaces, les détails et l’atmosphère tropicale des deux maisons avant de choisir votre séjour.",
      reviewsTitle: "Confiance construite sur des expériences réelles",
      reviewsDescription:
        "Les impressions des voyageurs aident à comprendre le confort, l’ambiance et l’expérience de réservation directe.",
      bookingTitle: "Réservation centrée sur la disponibilité",
      bookingDescription:
        "Un calendrier clair aide les voyageurs à comprendre les dates disponibles avant de contacter l’hôte.",
      ctaTitle: "Prêt à planifier votre séjour à General Santos City ?",
      ctaDescription:
        "Choisissez votre maison, vérifiez la disponibilité et contactez-nous directement pour votre prochain séjour tropical.",
    },
    housesPage: {
      eyebrow: "Les propriétés",
      title: "Deux maisons, deux emplacements à General Santos City.",
      description:
        "Une comparaison claire aide les voyageurs à choisir rapidement la maison idéale.",
      highlights: "Points forts",
      amenities: "Équipements",
      platforms: "Plateformes de réservation externes",
    },
    galleryPage: {
      eyebrow: "Galerie",
      title: "Parcourez les maisons par espace et ambiance.",
      description:
        "Découvrez l’atmosphère de chaque maison à travers les intérieurs, les extérieurs, les détails et les vues jardin.",
      all: "Tout",
      exterior: "Extérieur",
      interior: "Intérieur",
      bedroom: "Chambre",
      kitchen: "Cuisine",
      bathroom: "Salle de bain",
      terrace: "Terrasse",
      details: "Détails",
    },
    bookingPage: {
      eyebrow: "Réservation",
      title: "Vérifiez la disponibilité avant d’envoyer une demande.",
      description:
        "Consultez le calendrier, choisissez une maison et contactez-nous directement pour confirmer vos dates.",
      calendarTitle: "Calendrier de disponibilité",
      calendarDescription:
        "Changez de maison et consultez les disponibilités par mois.",
      inquiryTitle: "Envoyer une demande",
      inquiryDescription:
        "Utilisez WhatsApp pour les questions rapides, les dates et les demandes directes.",
      selectedHouse: "Maison sélectionnée",
      previousMonth: "Mois précédent",
      nextMonth: "Mois suivant",
      sendWhatsapp: "Demander sur WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Un seul endroit pour toutes les actions du voyageur.",
      description:
        "WhatsApp, Facebook et les plateformes de réservation sont regroupés dans une page simple.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Idéal pour les questions rapides, les dates et les demandes directes.",
      facebookTitle: "Page Facebook",
      facebookDescription:
        "Pour la preuve sociale, les annonces et la communication avec les voyageurs.",
      platformsTitle: "Plateformes de réservation",
      platformsDescription:
        "Retrouvez-nous sur Agoda, Booking.com, Airbnb et d’autres canaux.",
      directContactTitle: "Demande directe",
      directContactDescription:
        "Partagez vos dates, votre maison préférée et les informations voyageurs pour planifier votre séjour.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Les avis voyageurs issus de canaux fiables aident les visiteurs à choisir leur séjour en confiance.",
    },
    footer: {
      description:
        "Greenhouse House Rental propose deux maisons tropicales paisibles à General Santos City, préparées pour des séjours privés, des matins lents et une communication directe.",
      quickLinks: "Liens rapides",
      bookingLinks: "Liens de réservation",
      legalNote:
        "Séjours privés à General Santos City avec demandes directes, avis voyageurs et options de réservation externes.",
    },
  },

  de: {
    meta: {
      title: "Greenhouse House Rental | Aufenthalte in General Santos City",
      description:
        "Mehrsprachige Vermietungswebsite für zwei ruhige Häuser in General Santos City, Philippinen.",
    },
    nav: {
      home: "Start",
      houses: "Häuser",
      gallery: "Galerie",
      booking: "Buchung",
      contact: "Kontakt",
    },
    common: {
      stayTagline: "Private tropische Aufenthalte",
      language: "Sprache",
      theme: "Design",
      bookNow: "Jetzt buchen",
      viewHouses: "Häuser ansehen",
      viewGallery: "Galerie ansehen",
      contactUs: "Kontakt",
      learnMore: "Mehr erfahren",
      available: "Verfügbar",
      booked: "Gebucht",
      availabilityGuide: "Verfügbarkeitsübersicht",
      guests: "Gäste",
      bedrooms: "Schlafzimmer",
      bathrooms: "Bäder",
      area: "Fläche",
      from: "Ab",
      night: "Nacht",
    },
    home: {
      eyebrow: "Private Aufenthalte in General Santos City",
      title:
        "Zwei ruhige Häuser für langsame Morgen und entspannte Aufenthalte.",
      description:
        "Greenhouse House Rental verbindet die Wärme der Mindanao-Gastfreundschaft, ruhige tropische Gärten und sorgfältig vorbereitete Räume für Gäste, die einen privaten und komfortablen Aufenthalt in General Santos City suchen.",
      primaryCta: "Verfügbarkeit prüfen",
      secondaryCta: "Häuser entdecken",
      heroBadgeOne: "2 Ferienhäuser",
      heroBadgeTwo: "Gästebewertungen",
      heroBadgeThree: "Direkte Buchungsanfrage",
      housesTitle: "Wähle deinen Aufenthalt",
      housesDescription:
        "Jedes Haus hat eine eigene Atmosphäre, Galerie, Ausstattung, Kartenposition und Buchungsstrecke.",
      galleryTitle: "Eine visuell starke Galerie",
      galleryDescription:
        "Entdecke die Räume, Details und tropische Atmosphäre beider Häuser, bevor du deinen Aufenthalt auswählst.",
      reviewsTitle: "Gästevertrauen aus echten Erfahrungen",
      reviewsDescription:
        "Gästeeindrücke helfen zukünftigen Besuchern, Komfort, Atmosphäre und direkte Buchung besser einzuschätzen.",
      bookingTitle: "Buchung mit Fokus auf Verfügbarkeit",
      bookingDescription:
        "Ein klarer Kalender hilft Gästen, verfügbare Daten vor der Kontaktaufnahme zu verstehen.",
      ctaTitle: "Bereit, deinen Aufenthalt in General Santos City zu planen?",
      ctaDescription:
        "Wähle dein bevorzugtes Haus, prüfe die Verfügbarkeit und kontaktiere uns direkt für deinen nächsten tropischen Aufenthalt.",
    },
    housesPage: {
      eyebrow: "Die Objekte",
      title: "Zwei Häuser, zwei Standorte in General Santos City.",
      description:
        "Eine klare Vergleichsseite hilft Gästen, schnell das passende Haus zu finden.",
      highlights: "Highlights",
      amenities: "Ausstattung",
      platforms: "Externe Buchungsplattformen",
    },
    galleryPage: {
      eyebrow: "Galerie",
      title: "Durchsuche die Häuser nach Raum und Stimmung.",
      description:
        "Entdecke die Atmosphäre jedes Hauses durch Innenräume, Außenbereiche, Details und Gartenblicke.",
      all: "Alle",
      exterior: "Außenbereich",
      interior: "Innenbereich",
      bedroom: "Schlafzimmer",
      kitchen: "Küche",
      bathroom: "Bad",
      terrace: "Terrasse",
      details: "Details",
    },
    bookingPage: {
      eyebrow: "Buchung",
      title: "Prüfe die Verfügbarkeit vor deiner Anfrage.",
      description:
        "Sieh dir den Kalender an, wähle ein Haus und kontaktiere uns direkt, um deine Wunschdaten zu bestätigen.",
      calendarTitle: "Verfügbarkeitskalender",
      calendarDescription:
        "Wechsle zwischen den Häusern und prüfe die monatliche Verfügbarkeit.",
      inquiryTitle: "Buchungsanfrage senden",
      inquiryDescription:
        "Nutze WhatsApp für schnelle Fragen, Datumschecks und direkte Buchungsanfragen.",
      selectedHouse: "Ausgewähltes Haus",
      previousMonth: "Vorheriger Monat",
      nextMonth: "Nächster Monat",
      sendWhatsapp: "Auf WhatsApp anfragen",
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Ein Ort für alle Gästeaktionen.",
      description:
        "WhatsApp, Facebook und Buchungsplattformen sind auf einer einfachen Kontaktseite gebündelt.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Ideal für schnelle Fragen, Datumschecks und direkte Buchungsanfragen.",
      facebookTitle: "Facebook-Seite",
      facebookDescription:
        "Für Social Proof, Ankündigungen und Kommunikation mit Gästen.",
      platformsTitle: "Buchungsplattformen",
      platformsDescription:
        "Finde uns auf Agoda, Booking.com, Airbnb und weiteren externen Kanälen.",
      directContactTitle: "Direkte Anfrage",
      directContactDescription:
        "Teile deine Reisedaten, dein bevorzugtes Haus und Gästeinformationen, damit wir deinen Aufenthalt planen können.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Gästebewertungen aus vertrauenswürdigen Kanälen helfen Besuchern, den passenden Aufenthalt sicher zu wählen.",
    },
    footer: {
      description:
        "Greenhouse House Rental bietet zwei ruhige tropische Häuser in General Santos City für private Aufenthalte, langsame Morgen und direkte Gästekommunikation.",
      quickLinks: "Schnellzugriff",
      bookingLinks: "Buchungslinks",
      legalNote:
        "Private Aufenthalte in General Santos City mit direkten Anfragen, Gästebewertungen und externen Buchungsoptionen.",
    },
  },

  pl: {
    meta: {
      title: "Greenhouse House Rental | Pobyt w General Santos City",
      description:
        "Wielojęzyczna strona wynajmu prezentująca dwa spokojne domy w General Santos City na Filipinach.",
    },
    nav: {
      home: "Start",
      houses: "Domy",
      gallery: "Galeria",
      booking: "Rezerwacja",
      contact: "Kontakt",
    },
    common: {
      stayTagline: "Prywatne tropikalne pobyty",
      language: "Język",
      theme: "Motyw",
      bookNow: "Rezerwuj",
      viewHouses: "Zobacz domy",
      viewGallery: "Zobacz galerię",
      contactUs: "Skontaktuj się",
      learnMore: "Dowiedz się więcej",
      available: "Dostępne",
      booked: "Zajęte",
      availabilityGuide: "Podgląd dostępności",
      guests: "Goście",
      bedrooms: "Sypialnie",
      bathrooms: "Łazienki",
      area: "Powierzchnia",
      from: "Od",
      night: "noc",
    },
    home: {
      eyebrow: "Prywatne pobyty w General Santos City",
      title:
        "Dwa spokojne domy stworzone do wolnych poranków i wygodnego pobytu.",
      description:
        "Greenhouse House Rental łączy ciepło gościnności Mindanao, spokojne tropikalne ogrody i starannie przygotowane przestrzenie dla gości, którzy szukają prywatnego, wygodnego pobytu w General Santos City.",
      primaryCta: "Sprawdź dostępność",
      secondaryCta: "Poznaj domy",
      heroBadgeOne: "2 domy na wynajem",
      heroBadgeTwo: "Opinie gości",
      heroBadgeThree: "Bezpośrednie zapytanie rezerwacyjne",
      housesTitle: "Wybierz swój pobyt",
      housesDescription:
        "Każdy dom ma własny klimat, galerię, udogodnienia, lokalizację na mapie i ścieżkę rezerwacji.",
      galleryTitle: "Galeria nastawiona na zdjęcia",
      galleryDescription:
        "Poznaj przestrzenie, detale i tropikalny klimat obu domów, zanim wybierzesz swój pobyt.",
      reviewsTitle: "Zaufanie gości budowane na prawdziwych doświadczeniach",
      reviewsDescription:
        "Wrażenia gości pomagają kolejnym odwiedzającym poznać komfort, atmosferę i doświadczenie bezpośredniej rezerwacji.",
      bookingTitle: "Rezerwacja oparta o dostępność",
      bookingDescription:
        "Czytelny kalendarz pomaga gościom zrozumieć dostępne terminy przed kontaktem z gospodarzem.",
      ctaTitle: "Gotowy zaplanować pobyt w General Santos City?",
      ctaDescription:
        "Wybierz preferowany dom, sprawdź dostępność i skontaktuj się z nami bezpośrednio w sprawie swojego następnego tropikalnego pobytu.",
    },
    housesPage: {
      eyebrow: "Obiekty",
      title: "Dwa domy, dwie lokalizacje w General Santos City.",
      description:
        "Czytelne porównanie pomaga gościom szybko wybrać dom pasujący do ich pobytu.",
      highlights: "Najważniejsze cechy",
      amenities: "Udogodnienia",
      platforms: "Zewnętrzne platformy rezerwacyjne",
    },
    galleryPage: {
      eyebrow: "Galeria",
      title: "Przeglądaj domy według przestrzeni i nastroju.",
      description:
        "Poznaj atmosferę każdego domu poprzez wnętrza, przestrzenie zewnętrzne, detale i widoki na ogród.",
      all: "Wszystko",
      exterior: "Z zewnątrz",
      interior: "Wnętrze",
      bedroom: "Sypialnia",
      kitchen: "Kuchnia",
      bathroom: "Łazienka",
      terrace: "Taras",
      details: "Detale",
    },
    bookingPage: {
      eyebrow: "Rezerwacja",
      title: "Sprawdź dostępność przed wysłaniem zapytania.",
      description:
        "Przejrzyj kalendarz, wybierz dom i skontaktuj się bezpośrednio, aby potwierdzić preferowane terminy.",
      calendarTitle: "Kalendarz dostępności",
      calendarDescription:
        "Przełączaj domy i sprawdzaj dostępność miesiąc po miesiącu.",
      inquiryTitle: "Wyślij zapytanie rezerwacyjne",
      inquiryDescription:
        "Użyj WhatsAppa do szybkich pytań, sprawdzania terminów i bezpośrednich zapytań rezerwacyjnych.",
      selectedHouse: "Wybrany dom",
      previousMonth: "Poprzedni miesiąc",
      nextMonth: "Następny miesiąc",
      sendWhatsapp: "Zapytaj na WhatsApp",
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Jedno miejsce dla wszystkich działań gościa.",
      description:
        "WhatsApp, Facebook i platformy rezerwacyjne są zebrane w prostą stronę ułatwiającą szybki kontakt.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Najlepszy do szybkich pytań, sprawdzania terminów i bezpośrednich zapytań rezerwacyjnych.",
      facebookTitle: "Strona na Facebooku",
      facebookDescription:
        "Do budowania zaufania, publikowania aktualności i komunikacji z gośćmi.",
      platformsTitle: "Platformy rezerwacyjne",
      platformsDescription:
        "Znajdziesz nas na Agoda, Booking.com, Airbnb i innych zewnętrznych kanałach.",
      directContactTitle: "Zapytanie bezpośrednie",
      directContactDescription:
        "Podaj daty podróży, preferowany dom i dane gości, abyśmy mogli pomóc zaplanować pobyt.",
    },
    reviews: {
      googleReady: "Google Reviews",
      facebookReady: "Facebook Reviews",
      apiNote:
        "Opinie gości z zaufanych kanałów pomagają odwiedzającym wybrać odpowiedni pobyt z większą pewnością.",
    },
    footer: {
      description:
        "Greenhouse House Rental oferuje dwa spokojne tropikalne domy w General Santos City, przygotowane pod prywatne pobyty, wolne poranki i bezpośrednią komunikację z gośćmi.",
      quickLinks: "Szybkie linki",
      bookingLinks: "Linki rezerwacyjne",
      legalNote:
        "Prywatne pobyty w General Santos City z bezpośrednimi zapytaniami, opiniami gości i zewnętrznymi opcjami rezerwacji.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
