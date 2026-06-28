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
    portfolioDemo: string;
    language: string;
    theme: string;
    bookNow: string;
    viewHouses: string;
    viewGallery: string;
    contactUs: string;
    learnMore: string;
    available: string;
    booked: string;
    demoOnly: string;
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
        "A multilingual rental website concept for two fictional homes in General Santos City, Philippines.",
    },
    nav: {
      home: "Home",
      houses: "Houses",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      portfolioDemo: "Portfolio demo",
      language: "Language",
      theme: "Theme",
      bookNow: "Book now",
      viewHouses: "View houses",
      viewGallery: "View gallery",
      contactUs: "Contact us",
      learnMore: "Learn more",
      available: "Available",
      booked: "Booked",
      demoOnly: "Demo availability",
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
        "Greenhouse House Rental is a polished portfolio concept for a premium rental brand in General Santos City, with multilingual content, availability browsing, review integration structure and conversion-focused UX.",
      primaryCta: "Check availability",
      secondaryCta: "Explore the homes",
      heroBadgeOne: "2 rental homes",
      heroBadgeTwo: "Google & Facebook reviews ready",
      heroBadgeThree: "Booking inquiry flow",
      housesTitle: "Choose your stay",
      housesDescription:
        "Each house has its own atmosphere, gallery, amenities, map location and booking path.",
      galleryTitle: "A visual-first gallery",
      galleryDescription:
        "Prepared for large photo collections divided by property and room type.",
      reviewsTitle: "Guest trust, prepared for real reviews",
      reviewsDescription:
        "The foundation is ready for Google Reviews, Facebook Reviews or approved third-party widgets.",
      bookingTitle: "Availability-first booking",
      bookingDescription:
        "A clear calendar experience helps guests understand available dates before contacting the host.",
      ctaTitle: "Ready to turn this concept into a live rental brand?",
      ctaDescription:
        "This portfolio version uses fictional homes, but the structure is production-oriented.",
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
        "The gallery is structured for generated images and later real photography.",
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
      title: "Check demo availability before sending an inquiry.",
      description:
        "This page is prepared for a future booking engine, availability API or manual calendar sync.",
      calendarTitle: "Availability calendar",
      calendarDescription:
        "Switch between houses and browse monthly availability.",
      inquiryTitle: "Send a booking inquiry",
      inquiryDescription:
        "For now, the CTA opens WhatsApp. Later we can connect a backend form or booking provider.",
      selectedHouse: "Selected house",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      sendWhatsapp: "Ask on WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "One place for all guest actions.",
      description:
        "WhatsApp, Facebook and booking platforms are grouped into a simple conversion-focused contact page.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Best for quick questions, date checks and direct booking inquiries.",
      facebookTitle: "Facebook page",
      facebookDescription:
        "Use this for social proof, announcements and guest communication.",
      platformsTitle: "Booking platforms",
      platformsDescription:
        "Prepared for Agoda, Booking.com, Airbnb and other external channels.",
      directContactTitle: "Direct inquiry",
      directContactDescription:
        "A future form can collect guest details, dates and preferred property.",
    },
    reviews: {
      googleReady: "Google Reviews ready",
      facebookReady: "Facebook Reviews ready",
      apiNote:
        "Demo reviews are displayed now. The layout is prepared for official APIs or approved widgets.",
    },
    footer: {
      description:
        "Greenhouse House Rental is a fictional portfolio project showing a premium multilingual rental website for General Santos City stays.",
      quickLinks: "Quick links",
      bookingLinks: "Booking links",
      legalNote:
        "Portfolio demo. The houses, reviews, map pins and availability shown here are fictional.",
    },
  },

  ceb: {
    meta: {
      title: "Greenhouse House Rental | General Santos City stays",
      description:
        "Multilingual rental website concept para sa duha ka fictional homes sa General Santos City, Philippines.",
    },
    nav: {
      home: "Home",
      houses: "Mga balay",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      portfolioDemo: "Portfolio demo",
      language: "Pinulongan",
      theme: "Theme",
      bookNow: "Mag-book",
      viewHouses: "Tan-awa ang mga balay",
      viewGallery: "Tan-awa ang gallery",
      contactUs: "Kontaka mi",
      learnMore: "Hibal-i pa",
      available: "Available",
      booked: "Na-book",
      demoOnly: "Demo availability",
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
        "Ang Greenhouse House Rental usa ka polished portfolio concept para sa premium rental brand sa General Santos City, nga naay multilingual content, availability browsing, review integration structure ug conversion-focused UX.",
      primaryCta: "Tan-awa ang availability",
      secondaryCta: "I-explore ang mga balay",
      heroBadgeOne: "2 rental homes",
      heroBadgeTwo: "Ready for Google & Facebook reviews",
      heroBadgeThree: "Booking inquiry flow",
      housesTitle: "Pili-a imong stay",
      housesDescription:
        "Matag balay naay kaugalingong atmosphere, gallery, amenities, map location ug booking path.",
      galleryTitle: "Visual-first gallery",
      galleryDescription:
        "Andam para sa daghang photos nga gibahin by property ug room type.",
      reviewsTitle: "Guest trust nga ready para sa real reviews",
      reviewsDescription:
        "Ready ang foundation para sa Google Reviews, Facebook Reviews o approved third-party widgets.",
      bookingTitle: "Availability-first booking",
      bookingDescription:
        "Clear calendar experience para masabtan sa guests ang available dates before sila mo-contact sa host.",
      ctaTitle: "Ready na ba himuon nga live rental brand ning concept?",
      ctaDescription:
        "Fictional homes ang gamit sa portfolio version, pero production-oriented ang structure.",
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
        "Ang gallery gi-structure para sa generated images ug future real photography.",
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
      title: "Tan-awa ang demo availability before mag-send og inquiry.",
      description:
        "Kini nga page ready para sa future booking engine, availability API o manual calendar sync.",
      calendarTitle: "Availability calendar",
      calendarDescription:
        "Pag-switch sa mga balay ug tan-awa ang monthly availability.",
      inquiryTitle: "Send booking inquiry",
      inquiryDescription:
        "Sa karon, ang CTA mo-open og WhatsApp. Later pwede nato i-connect ang backend form o booking provider.",
      selectedHouse: "Selected house",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      sendWhatsapp: "Ask on WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Usa ka lugar para sa tanang guest actions.",
      description:
        "WhatsApp, Facebook ug booking platforms gi-group sa simple conversion-focused contact page.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Best para sa quick questions, date checks ug direct booking inquiries.",
      facebookTitle: "Facebook page",
      facebookDescription:
        "Para sa social proof, announcements ug guest communication.",
      platformsTitle: "Booking platforms",
      platformsDescription:
        "Prepared for Agoda, Booking.com, Airbnb ug other external channels.",
      directContactTitle: "Direct inquiry",
      directContactDescription:
        "Future form pwede mo-collect og guest details, dates ug preferred property.",
    },
    reviews: {
      googleReady: "Ready for Google Reviews",
      facebookReady: "Ready for Facebook Reviews",
      apiNote:
        "Demo reviews ang displayed karon. Ready ang layout para sa official APIs o approved widgets.",
    },
    footer: {
      description:
        "Ang Greenhouse House Rental usa ka fictional portfolio project nga nagpakita og premium multilingual rental website para sa General Santos City stays.",
      quickLinks: "Quick links",
      bookingLinks: "Booking links",
      legalNote:
        "Portfolio demo. Fictional ang houses, reviews, map pins ug availability nga gipakita diri.",
    },
  },

  tl: {
    meta: {
      title: "Greenhouse House Rental | General Santos City stays",
      description:
        "Multilingual portfolio concept para sa dalawang premium rental homes sa General Santos City, Philippines.",
    },
    nav: {
      home: "Home",
      houses: "Mga bahay",
      gallery: "Gallery",
      booking: "Booking",
      contact: "Contact",
    },
    common: {
      portfolioDemo: "Portfolio demo",
      language: "Wika",
      theme: "Theme",
      bookNow: "Mag-book",
      viewHouses: "Tingnan ang bahay",
      viewGallery: "Tingnan ang gallery",
      contactUs: "Makipag-ugnayan",
      learnMore: "Alamin pa",
      available: "Available",
      booked: "Booked",
      demoOnly: "Demo availability",
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
        "Ang Greenhouse House Rental ay portfolio concept para sa premium rental brand sa General Santos City na may multilingual content, availability browsing, review integration structure at conversion-focused UX.",
      primaryCta: "Tingnan ang availability",
      secondaryCta: "I-explore ang homes",
      heroBadgeOne: "2 rental homes",
      heroBadgeTwo: "Ready for Google & Facebook reviews",
      heroBadgeThree: "Booking inquiry flow",
      housesTitle: "Piliin ang iyong stay",
      housesDescription:
        "Bawat bahay ay may sariling mood, gallery, amenities, map location at booking path.",
      galleryTitle: "Visual-first gallery",
      galleryDescription:
        "Ready para sa maraming photos na nakaayos by property at room type.",
      reviewsTitle: "Guest trust na ready para sa real reviews",
      reviewsDescription:
        "Ready ang foundation para sa Google Reviews, Facebook Reviews o approved widgets.",
      bookingTitle: "Availability-first booking",
      bookingDescription:
        "Clear calendar para makita ng guests ang available dates bago mag-message.",
      ctaTitle: "Ready gawing live rental brand ang concept na ito?",
      ctaDescription:
        "Fictional homes ang gamit sa portfolio version, pero production-oriented ang structure.",
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
        "Ready ang gallery para sa generated images at future real photos.",
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
      title: "Tingnan muna ang demo availability bago mag-inquire.",
      description:
        "Prepared ang page para sa future booking engine, availability API o manual calendar sync.",
      calendarTitle: "Availability calendar",
      calendarDescription:
        "Mag-switch ng houses at tingnan ang monthly availability.",
      inquiryTitle: "Send booking inquiry",
      inquiryDescription:
        "Sa ngayon, WhatsApp ang bubuksan ng CTA. Later pwede nating ikabit ang backend form o booking provider.",
      selectedHouse: "Selected house",
      previousMonth: "Previous month",
      nextMonth: "Next month",
      sendWhatsapp: "Ask on WhatsApp",
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Isang lugar para sa lahat ng guest actions.",
      description:
        "WhatsApp, Facebook at booking platforms are grouped in a simple conversion-focused contact page.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Best for quick questions, date checks at direct booking inquiries.",
      facebookTitle: "Facebook page",
      facebookDescription:
        "Para sa social proof, announcements at guest communication.",
      platformsTitle: "Booking platforms",
      platformsDescription:
        "Prepared for Agoda, Booking.com, Airbnb and other external channels.",
      directContactTitle: "Direct inquiry",
      directContactDescription:
        "Future form can collect guest details, dates and preferred property.",
    },
    reviews: {
      googleReady: "Ready for Google Reviews",
      facebookReady: "Ready for Facebook Reviews",
      apiNote:
        "Demo reviews muna ang displayed. Ready ang layout for official APIs or approved widgets.",
    },
    footer: {
      description:
        "Greenhouse House Rental is a fictional portfolio project for a premium multilingual rental website in General Santos City.",
      quickLinks: "Quick links",
      bookingLinks: "Booking links",
      legalNote:
        "Portfolio demo. Fictional ang houses, reviews, map pins at availability shown here.",
    },
  },

  ko: {
    meta: {
      title: "Greenhouse House Rental | 제너럴 산토스 시티 숙소",
      description:
        "필리핀 제너럴 산토스 시티의 두 가상 숙소를 소개하는 다국어 렌탈 웹사이트 콘셉트입니다.",
    },
    nav: {
      home: "홈",
      houses: "숙소",
      gallery: "갤러리",
      booking: "예약",
      contact: "문의",
    },
    common: {
      portfolioDemo: "포트폴리오 데모",
      language: "언어",
      theme: "테마",
      bookNow: "예약하기",
      viewHouses: "숙소 보기",
      viewGallery: "갤러리 보기",
      contactUs: "문의하기",
      learnMore: "더 보기",
      available: "가능",
      booked: "예약됨",
      demoOnly: "데모 일정",
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
        "Greenhouse House Rental은 제너럴 산토스 시티의 프리미엄 렌탈 브랜드를 위한 포트폴리오 콘셉트로, 다국어 콘텐츠, 예약 가능 일정, 리뷰 연동 구조, 전환 중심 UX를 갖추고 있습니다.",
      primaryCta: "가능 일정 확인",
      secondaryCta: "숙소 둘러보기",
      heroBadgeOne: "2개의 렌탈 숙소",
      heroBadgeTwo: "Google/Facebook 리뷰 준비",
      heroBadgeThree: "예약 문의 흐름",
      housesTitle: "머무를 숙소 선택",
      housesDescription:
        "각 숙소는 고유한 분위기, 갤러리, 편의시설, 지도 위치, 예약 경로를 갖습니다.",
      galleryTitle: "비주얼 중심 갤러리",
      galleryDescription:
        "숙소와 공간 유형별로 많은 이미지를 정리할 수 있도록 설계되었습니다.",
      reviewsTitle: "실제 리뷰 연동을 위한 신뢰 구조",
      reviewsDescription:
        "Google Reviews, Facebook Reviews 또는 승인된 외부 위젯을 위한 기반입니다.",
      bookingTitle: "가능 일정 중심 예약",
      bookingDescription:
        "명확한 캘린더는 게스트가 문의 전 가능한 날짜를 이해하도록 도와줍니다.",
      ctaTitle: "이 콘셉트를 실제 렌탈 브랜드로 만들 준비가 되었나요?",
      ctaDescription:
        "이 포트폴리오 버전은 가상의 숙소를 사용하지만 구조는 프로덕션을 고려했습니다.",
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
        "갤러리는 생성 이미지와 향후 실제 사진을 모두 고려해 구성되었습니다.",
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
      title: "문의 전 데모 가능 일정을 확인하세요.",
      description:
        "이 페이지는 향후 예약 엔진, 가능 일정 API 또는 수동 캘린더 동기화를 위해 준비되었습니다.",
      calendarTitle: "가능 일정 캘린더",
      calendarDescription: "숙소를 전환하고 월별 일정을 확인하세요.",
      inquiryTitle: "예약 문의 보내기",
      inquiryDescription:
        "현재 CTA는 WhatsApp을 엽니다. 이후 폼 백엔드나 예약 서비스를 연결할 수 있습니다.",
      selectedHouse: "선택된 숙소",
      previousMonth: "이전 달",
      nextMonth: "다음 달",
      sendWhatsapp: "WhatsApp 문의",
    },
    contactPage: {
      eyebrow: "문의",
      title: "게스트 액션을 위한 하나의 허브.",
      description:
        "WhatsApp, Facebook, 예약 플랫폼 링크를 전환 중심 페이지에 모았습니다.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "빠른 질문, 일정 확인, 직접 예약 문의에 가장 적합합니다.",
      facebookTitle: "Facebook 페이지",
      facebookDescription:
        "소셜 증거, 공지, 게스트 커뮤니케이션을 위한 채널입니다.",
      platformsTitle: "예약 플랫폼",
      platformsDescription:
        "Agoda, Booking.com, Airbnb 등 외부 채널을 위한 준비 구조입니다.",
      directContactTitle: "직접 문의",
      directContactDescription:
        "향후 폼에서 게스트 정보, 날짜, 선호 숙소를 받을 수 있습니다.",
    },
    reviews: {
      googleReady: "Google Reviews 준비",
      facebookReady: "Facebook Reviews 준비",
      apiNote:
        "현재는 데모 리뷰가 표시됩니다. 공식 API 또는 승인된 위젯 연결을 위한 레이아웃입니다.",
    },
    footer: {
      description:
        "Greenhouse House Rental은 제너럴 산토스 시티 숙소를 위한 프리미엄 다국어 렌탈 웹사이트를 보여주는 가상 포트폴리오 프로젝트입니다.",
      quickLinks: "빠른 링크",
      bookingLinks: "예약 링크",
      legalNote:
        "포트폴리오 데모입니다. 표시된 숙소, 리뷰, 지도 핀, 가능 일정은 가상입니다.",
    },
  },

  es: {
    meta: {
      title: "Greenhouse House Rental | Estancias en General Santos City",
      description:
        "Concepto multilingüe de portfolio para dos casas ficticias en General Santos City, Filipinas.",
    },
    nav: {
      home: "Inicio",
      houses: "Casas",
      gallery: "Galería",
      booking: "Reserva",
      contact: "Contacto",
    },
    common: {
      portfolioDemo: "Demo portfolio",
      language: "Idioma",
      theme: "Tema",
      bookNow: "Reservar",
      viewHouses: "Ver casas",
      viewGallery: "Ver galería",
      contactUs: "Contacto",
      learnMore: "Más información",
      available: "Disponible",
      booked: "Ocupado",
      demoOnly: "Disponibilidad demo",
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
        "Greenhouse House Rental es un concepto portfolio premium para una marca de alquiler en General Santos City, con contenido multilingüe, disponibilidad, estructura de reseñas y UX enfocada en conversión.",
      primaryCta: "Ver disponibilidad",
      secondaryCta: "Explorar casas",
      heroBadgeOne: "2 casas en alquiler",
      heroBadgeTwo: "Preparado para Google y Facebook Reviews",
      heroBadgeThree: "Flujo de consulta de reserva",
      housesTitle: "Elige tu estancia",
      housesDescription:
        "Cada casa tiene su propia atmósfera, galería, servicios, ubicación en mapa y ruta de reserva.",
      galleryTitle: "Una galería visual",
      galleryDescription:
        "Preparada para grandes colecciones de fotos por propiedad y tipo de espacio.",
      reviewsTitle: "Confianza preparada para reseñas reales",
      reviewsDescription:
        "La base está lista para Google Reviews, Facebook Reviews o widgets aprobados.",
      bookingTitle: "Reserva basada en disponibilidad",
      bookingDescription:
        "Un calendario claro ayuda a los huéspedes a entender las fechas disponibles antes de contactar.",
      ctaTitle: "¿Listo para convertir este concepto en una marca real?",
      ctaDescription:
        "Esta versión portfolio usa casas ficticias, pero la estructura está pensada para producción.",
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
        "La galería está lista para imágenes generadas y futuras fotografías reales.",
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
      title: "Consulta la disponibilidad demo antes de enviar una solicitud.",
      description:
        "Esta página está preparada para un motor de reservas, API de disponibilidad o sincronización manual.",
      calendarTitle: "Calendario de disponibilidad",
      calendarDescription: "Cambia de casa y revisa la disponibilidad por mes.",
      inquiryTitle: "Enviar consulta de reserva",
      inquiryDescription:
        "Por ahora, el botón abre WhatsApp. Más tarde podemos conectar un formulario o proveedor.",
      selectedHouse: "Casa seleccionada",
      previousMonth: "Mes anterior",
      nextMonth: "Mes siguiente",
      sendWhatsapp: "Preguntar por WhatsApp",
    },
    contactPage: {
      eyebrow: "Contacto",
      title: "Un lugar para todas las acciones del huésped.",
      description:
        "WhatsApp, Facebook y plataformas de reserva agrupadas en una página simple.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Ideal para preguntas rápidas, fechas y consultas directas.",
      facebookTitle: "Página de Facebook",
      facebookDescription:
        "Para prueba social, anuncios y comunicación con huéspedes.",
      platformsTitle: "Plataformas de reserva",
      platformsDescription:
        "Preparado para Agoda, Booking.com, Airbnb y otros canales.",
      directContactTitle: "Consulta directa",
      directContactDescription:
        "Un futuro formulario puede recoger fechas, datos y propiedad preferida.",
    },
    reviews: {
      googleReady: "Preparado para Google Reviews",
      facebookReady: "Preparado para Facebook Reviews",
      apiNote:
        "Ahora se muestran reseñas demo. El diseño está preparado para APIs oficiales o widgets aprobados.",
    },
    footer: {
      description:
        "Greenhouse House Rental es un proyecto portfolio ficticio de una web premium de alquiler multilingüe para General Santos City.",
      quickLinks: "Enlaces rápidos",
      bookingLinks: "Enlaces de reserva",
      legalNote:
        "Demo portfolio. Las casas, reseñas, pines de mapa y disponibilidad mostradas son ficticias.",
    },
  },

  fr: {
    meta: {
      title: "Greenhouse House Rental | Séjours à General Santos City",
      description:
        "Concept multilingue de portfolio pour deux maisons fictives à General Santos City, Philippines.",
    },
    nav: {
      home: "Accueil",
      houses: "Maisons",
      gallery: "Galerie",
      booking: "Réservation",
      contact: "Contact",
    },
    common: {
      portfolioDemo: "Démo portfolio",
      language: "Langue",
      theme: "Thème",
      bookNow: "Réserver",
      viewHouses: "Voir les maisons",
      viewGallery: "Voir la galerie",
      contactUs: "Nous contacter",
      learnMore: "En savoir plus",
      available: "Disponible",
      booked: "Réservé",
      demoOnly: "Disponibilité démo",
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
        "Greenhouse House Rental est un concept portfolio premium pour une marque de location à General Santos City, avec contenu multilingue, calendrier, structure d’avis et UX orientée conversion.",
      primaryCta: "Vérifier la disponibilité",
      secondaryCta: "Explorer les maisons",
      heroBadgeOne: "2 maisons à louer",
      heroBadgeTwo: "Prêt pour Google et Facebook Reviews",
      heroBadgeThree: "Parcours de demande de réservation",
      housesTitle: "Choisissez votre séjour",
      housesDescription:
        "Chaque maison possède son ambiance, sa galerie, ses équipements, sa carte et son chemin de réservation.",
      galleryTitle: "Une galerie pensée pour l’image",
      galleryDescription:
        "Préparée pour de grandes collections de photos par propriété et type d’espace.",
      reviewsTitle: "Confiance client prête pour de vrais avis",
      reviewsDescription:
        "La base est prête pour Google Reviews, Facebook Reviews ou des widgets approuvés.",
      bookingTitle: "Réservation centrée sur la disponibilité",
      bookingDescription:
        "Un calendrier clair aide les voyageurs à comprendre les dates disponibles avant de contacter l’hôte.",
      ctaTitle: "Prêt à transformer ce concept en marque de location réelle ?",
      ctaDescription:
        "Cette version portfolio utilise des maisons fictives, mais sa structure est orientée production.",
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
        "La galerie est prête pour des images générées puis pour de vraies photos.",
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
      title: "Vérifiez la disponibilité démo avant d’envoyer une demande.",
      description:
        "Cette page est prête pour un futur moteur de réservation, une API ou une synchronisation manuelle.",
      calendarTitle: "Calendrier de disponibilité",
      calendarDescription:
        "Changez de maison et consultez les disponibilités par mois.",
      inquiryTitle: "Envoyer une demande",
      inquiryDescription:
        "Pour l’instant, le bouton ouvre WhatsApp. Plus tard, nous pourrons connecter un formulaire ou un fournisseur.",
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
        "Préparé pour Agoda, Booking.com, Airbnb et d’autres canaux.",
      directContactTitle: "Demande directe",
      directContactDescription:
        "Un futur formulaire pourra collecter les dates, les coordonnées et la maison préférée.",
    },
    reviews: {
      googleReady: "Prêt pour Google Reviews",
      facebookReady: "Prêt pour Facebook Reviews",
      apiNote:
        "Les avis affichés sont fictifs. La mise en page est prête pour des API officielles ou widgets approuvés.",
    },
    footer: {
      description:
        "Greenhouse House Rental est un projet portfolio fictif pour un site de location premium multilingue à General Santos City.",
      quickLinks: "Liens rapides",
      bookingLinks: "Liens de réservation",
      legalNote:
        "Démo portfolio. Les maisons, avis, repères de carte et disponibilités affichés sont fictifs.",
    },
  },

  de: {
    meta: {
      title: "Greenhouse House Rental | Aufenthalte in General Santos City",
      description:
        "Ein mehrsprachiges Portfolio-Konzept für zwei fiktive Ferienhäuser in General Santos City, Philippinen.",
    },
    nav: {
      home: "Start",
      houses: "Häuser",
      gallery: "Galerie",
      booking: "Buchung",
      contact: "Kontakt",
    },
    common: {
      portfolioDemo: "Portfolio-Demo",
      language: "Sprache",
      theme: "Design",
      bookNow: "Jetzt buchen",
      viewHouses: "Häuser ansehen",
      viewGallery: "Galerie ansehen",
      contactUs: "Kontakt",
      learnMore: "Mehr erfahren",
      available: "Verfügbar",
      booked: "Gebucht",
      demoOnly: "Demo-Verfügbarkeit",
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
        "Greenhouse House Rental ist ein ausgearbeitetes Portfolio-Konzept für eine Premium-Vermietungsmarke in General Santos City, mit mehrsprachigen Inhalten, Verfügbarkeitsansicht, Bewertungsstruktur und conversion-orientierter UX.",
      primaryCta: "Verfügbarkeit prüfen",
      secondaryCta: "Häuser entdecken",
      heroBadgeOne: "2 Ferienhäuser",
      heroBadgeTwo: "Bereit für Google & Facebook Reviews",
      heroBadgeThree: "Buchungsanfrage-Flow",
      housesTitle: "Wähle deinen Aufenthalt",
      housesDescription:
        "Jedes Haus hat eine eigene Atmosphäre, Galerie, Ausstattung, Kartenposition und Buchungsstrecke.",
      galleryTitle: "Eine visuell starke Galerie",
      galleryDescription:
        "Vorbereitet für große Fotosammlungen nach Objekt und Raumtyp.",
      reviewsTitle: "Gästevertrauen, vorbereitet für echte Bewertungen",
      reviewsDescription:
        "Die Basis ist bereit für Google Reviews, Facebook Reviews oder genehmigte externe Widgets.",
      bookingTitle: "Buchung mit Fokus auf Verfügbarkeit",
      bookingDescription:
        "Ein klarer Kalender hilft Gästen, verfügbare Daten vor der Kontaktaufnahme zu verstehen.",
      ctaTitle:
        "Bereit, dieses Konzept in eine echte Vermietungsmarke zu verwandeln?",
      ctaDescription:
        "Diese Portfolio-Version nutzt fiktive Häuser, ist aber produktionsorientiert aufgebaut.",
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
        "Die Galerie ist für generierte Bilder und spätere echte Fotografie vorbereitet.",
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
      title: "Prüfe die Demo-Verfügbarkeit vor deiner Anfrage.",
      description:
        "Diese Seite ist für eine zukünftige Buchungsengine, Verfügbarkeits-API oder manuelle Kalendersynchronisierung vorbereitet.",
      calendarTitle: "Verfügbarkeitskalender",
      calendarDescription:
        "Wechsle zwischen den Häusern und prüfe die monatliche Verfügbarkeit.",
      inquiryTitle: "Buchungsanfrage senden",
      inquiryDescription:
        "Aktuell öffnet der Button WhatsApp. Später können wir ein Formular-Backend oder einen Buchungsanbieter verbinden.",
      selectedHouse: "Ausgewähltes Haus",
      previousMonth: "Vorheriger Monat",
      nextMonth: "Nächster Monat",
      sendWhatsapp: "Auf WhatsApp anfragen",
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Ein Ort für alle Gästeaktionen.",
      description:
        "WhatsApp, Facebook und Buchungsplattformen sind auf einer einfachen, conversion-orientierten Kontaktseite gebündelt.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Ideal für schnelle Fragen, Datumschecks und direkte Buchungsanfragen.",
      facebookTitle: "Facebook-Seite",
      facebookDescription:
        "Für Social Proof, Ankündigungen und Kommunikation mit Gästen.",
      platformsTitle: "Buchungsplattformen",
      platformsDescription:
        "Vorbereitet für Agoda, Booking.com, Airbnb und weitere externe Kanäle.",
      directContactTitle: "Direkte Anfrage",
      directContactDescription:
        "Ein zukünftiges Formular kann Gästedaten, Reisedaten und bevorzugtes Objekt sammeln.",
    },
    reviews: {
      googleReady: "Bereit für Google Reviews",
      facebookReady: "Bereit für Facebook Reviews",
      apiNote:
        "Aktuell werden Demo-Bewertungen angezeigt. Das Layout ist für offizielle APIs oder genehmigte Widgets vorbereitet.",
    },
    footer: {
      description:
        "Greenhouse House Rental ist ein fiktives Portfolio-Projekt für eine mehrsprachige Premium-Vermietungswebsite in General Santos City.",
      quickLinks: "Schnellzugriff",
      bookingLinks: "Buchungslinks",
      legalNote:
        "Portfolio-Demo. Die gezeigten Häuser, Bewertungen, Kartenpins und Verfügbarkeiten sind fiktiv.",
    },
  },

  pl: {
    meta: {
      title: "Greenhouse House Rental | Pobyt w General Santos City",
      description:
        "Wielojęzyczna koncepcja portfolio dla strony prezentującej dwa fikcyjne domy na wynajem w General Santos City na Filipinach.",
    },
    nav: {
      home: "Start",
      houses: "Domy",
      gallery: "Galeria",
      booking: "Rezerwacja",
      contact: "Kontakt",
    },
    common: {
      portfolioDemo: "Demo portfolio",
      language: "Język",
      theme: "Motyw",
      bookNow: "Rezerwuj",
      viewHouses: "Zobacz domy",
      viewGallery: "Zobacz galerię",
      contactUs: "Skontaktuj się",
      learnMore: "Dowiedz się więcej",
      available: "Dostępne",
      booked: "Zajęte",
      demoOnly: "Dostępność demo",
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
        "Greenhouse House Rental to dopracowana koncepcja portfolio dla marki wynajmu domów w General Santos City: wielojęzyczna treść, dostępność, struktura pod opinie i UX nastawiony na konwersję.",
      primaryCta: "Sprawdź dostępność",
      secondaryCta: "Poznaj domy",
      heroBadgeOne: "2 domy na wynajem",
      heroBadgeTwo: "Gotowe pod Google i Facebook Reviews",
      heroBadgeThree: "Ścieżka zapytania rezerwacyjnego",
      housesTitle: "Wybierz swój pobyt",
      housesDescription:
        "Każdy dom ma własny klimat, galerię, udogodnienia, lokalizację na mapie i ścieżkę rezerwacji.",
      galleryTitle: "Galeria nastawiona na zdjęcia",
      galleryDescription:
        "Przygotowana pod duże kolekcje zdjęć z podziałem na obiekt i typ pomieszczenia.",
      reviewsTitle: "Zaufanie gości przygotowane pod prawdziwe opinie",
      reviewsDescription:
        "Fundament jest gotowy pod Google Reviews, Facebook Reviews albo zatwierdzone widgety zewnętrzne.",
      bookingTitle: "Rezerwacja oparta o dostępność",
      bookingDescription:
        "Czytelny kalendarz pomaga gościom zrozumieć dostępne terminy przed kontaktem z gospodarzem.",
      ctaTitle: "Gotowy zamienić tę koncepcję w działającą markę wynajmu?",
      ctaDescription:
        "Ta wersja portfolio używa fikcyjnych domów, ale struktura jest przygotowana produkcyjnie.",
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
        "Galeria jest przygotowana pod wygenerowane obrazy oraz późniejsze prawdziwe zdjęcia.",
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
      title: "Sprawdź dostępność demo przed wysłaniem zapytania.",
      description:
        "Ta podstrona jest przygotowana pod przyszły silnik rezerwacji, API dostępności albo ręczną synchronizację kalendarza.",
      calendarTitle: "Kalendarz dostępności",
      calendarDescription:
        "Przełączaj domy i sprawdzaj dostępność miesiąc po miesiącu.",
      inquiryTitle: "Wyślij zapytanie rezerwacyjne",
      inquiryDescription:
        "Na ten moment CTA otwiera WhatsApp. Później możemy podpiąć backend formularza albo dostawcę rezerwacji.",
      selectedHouse: "Wybrany dom",
      previousMonth: "Poprzedni miesiąc",
      nextMonth: "Następny miesiąc",
      sendWhatsapp: "Zapytaj na WhatsApp",
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Jedno miejsce dla wszystkich działań gościa.",
      description:
        "WhatsApp, Facebook i platformy rezerwacyjne są zebrane w prostą stronę nastawioną na konwersję.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Najlepszy do szybkich pytań, sprawdzania terminów i bezpośrednich zapytań rezerwacyjnych.",
      facebookTitle: "Strona na Facebooku",
      facebookDescription:
        "Do budowania zaufania, publikowania aktualności i komunikacji z gośćmi.",
      platformsTitle: "Platformy rezerwacyjne",
      platformsDescription:
        "Przygotowane pod Agoda, Booking.com, Airbnb i inne zewnętrzne kanały.",
      directContactTitle: "Zapytanie bezpośrednie",
      directContactDescription:
        "Przyszły formularz może zbierać dane gościa, daty i preferowany obiekt.",
    },
    reviews: {
      googleReady: "Gotowe pod Google Reviews",
      facebookReady: "Gotowe pod Facebook Reviews",
      apiNote:
        "Teraz wyświetlamy opinie demo. Layout jest przygotowany pod oficjalne API albo zatwierdzone widgety.",
    },
    footer: {
      description:
        "Greenhouse House Rental to fikcyjny projekt portfolio pokazujący premium wielojęzyczną stronę wynajmu w General Santos City.",
      quickLinks: "Szybkie linki",
      bookingLinks: "Linki rezerwacyjne",
      legalNote:
        "Demo portfolio. Domy, opinie, pinezki na mapie i dostępność pokazane na stronie są fikcyjne.",
    },
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
