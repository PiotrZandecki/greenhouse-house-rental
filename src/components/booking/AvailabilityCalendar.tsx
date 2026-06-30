"use client";

import { useMemo, useState } from "react";

import type { Dictionary } from "@/data/dictionaries";
import type { House, HouseId, Locale } from "@/types/site";

type AvailabilityCalendarProps = {
  houses: House[];
  locale: Locale;
  dictionary: Dictionary;
};

type BookingStep = "dates" | "details" | "review" | "confirmation";

type FieldErrors = {
  dates?: string;
  guestName?: string;
  guestEmail?: string;
};

type BookingCopy = {
  plannerEyebrow: string;
  plannerTitle: string;
  plannerDescription: string;
  checkIn: string;
  checkOut: string;
  chooseDates: string;
  resetDates: string;
  edit: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  guestMessage: string;
  guestMessagePlaceholder: string;
  staySummary: string;
  nights: string;
  estimatedTotal: string;
  selectedHouse: string;
  selectedDates: string;
  noDates: string;
  rangeNotAvailable: string;
  continueToDetails: string;
  backToDates: string;
  reviewRequest: string;
  backToDetails: string;
  confirmRequest: string;
  startAnotherRequest: string;
  requestReady: string;
  requestReadyDescription: string;
  requestCode: string;
  confirmationNote: string;
  datesStep: string;
  detailsStep: string;
  reviewStep: string;
  confirmationStep: string;
  requiredHint: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  datesRequired: string;
  reviewTitle: string;
  reviewDescription: string;
};

const bookingCopy: Record<Locale, BookingCopy> = {
  en: {
    plannerEyebrow: "Booking planner",
    plannerTitle: "Choose your house, dates and guest details.",
    plannerDescription:
      "Use the calendar to prepare your stay request and review everything before confirming.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    chooseDates: "Choose dates",
    resetDates: "Reset dates",
    edit: "Edit",
    guestName: "Your name",
    guestEmail: "Email address",
    guestPhone: "Phone number",
    guestMessage: "Message",
    guestMessagePlaceholder:
      "Tell us your preferred arrival time, questions or special requests.",
    staySummary: "Stay summary",
    nights: "nights",
    estimatedTotal: "Estimated total",
    selectedHouse: "Selected house",
    selectedDates: "Selected dates",
    noDates: "Select check-in and check-out dates to continue.",
    rangeNotAvailable:
      "This date range includes unavailable nights. Please choose another range.",
    continueToDetails: "Continue to guest details",
    backToDates: "Back to dates",
    reviewRequest: "Review request",
    backToDetails: "Back to details",
    confirmRequest: "Confirm booking request",
    startAnotherRequest: "Start another request",
    requestReady: "Your booking request is ready.",
    requestReadyDescription:
      "Thank you. Your stay request has been prepared with the selected house, dates and guest details.",
    requestCode: "Request code",
    confirmationNote:
      "Final availability and payment details are confirmed by the host after reviewing the request.",
    datesStep: "Dates",
    detailsStep: "Guest details",
    reviewStep: "Review",
    confirmationStep: "Confirmation",
    requiredHint: "Name and email are required to continue.",
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    datesRequired: "Please select check-in and check-out dates first.",
    reviewTitle: "Review your stay request",
    reviewDescription:
      "Check the selected house, dates, guest details and estimated total before confirming.",
  },
  ceb: {
    plannerEyebrow: "Booking planner",
    plannerTitle: "Pili-a ang balay, dates ug guest details.",
    plannerDescription:
      "Gamiton ang calendar para ma-prepare ang imong stay request ug ma-review tanan before confirmation.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    chooseDates: "Pili og dates",
    resetDates: "Reset dates",
    edit: "Edit",
    guestName: "Imong ngalan",
    guestEmail: "Email address",
    guestPhone: "Phone number",
    guestMessage: "Mensahe",
    guestMessagePlaceholder:
      "Isulti ang preferred arrival time, questions o special requests.",
    staySummary: "Stay summary",
    nights: "gabi-i",
    estimatedTotal: "Estimated total",
    selectedHouse: "Selected house",
    selectedDates: "Selected dates",
    noDates: "Pili og check-in ug check-out dates para makapadayon.",
    rangeNotAvailable:
      "Naay unavailable nights ani nga date range. Pili og lain nga range.",
    continueToDetails: "Padayon sa guest details",
    backToDates: "Balik sa dates",
    reviewRequest: "Review request",
    backToDetails: "Balik sa details",
    confirmRequest: "Confirm booking request",
    startAnotherRequest: "Start another request",
    requestReady: "Ready na imong booking request.",
    requestReadyDescription:
      "Salamat. Na-prepare na ang imong stay request with selected house, dates ug guest details.",
    requestCode: "Request code",
    confirmationNote:
      "Final availability ug payment details i-confirm sa host after review sa request.",
    datesStep: "Dates",
    detailsStep: "Guest details",
    reviewStep: "Review",
    confirmationStep: "Confirmation",
    requiredHint: "Kinahanglan ang name ug email para makapadayon.",
    nameRequired: "Ibutang imong ngalan.",
    emailRequired: "Ibutang imong email address.",
    emailInvalid: "Ibutang ang valid nga email address.",
    datesRequired: "Pili una og check-in ug check-out dates.",
    reviewTitle: "Review your stay request",
    reviewDescription:
      "Tan-awa ang selected house, dates, guest details ug estimated total before confirmation.",
  },
  tl: {
    plannerEyebrow: "Booking planner",
    plannerTitle: "Piliin ang bahay, dates at guest details.",
    plannerDescription:
      "Gamitin ang calendar para ihanda ang stay request at i-review lahat bago i-confirm.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    chooseDates: "Pumili ng dates",
    resetDates: "Reset dates",
    edit: "Edit",
    guestName: "Pangalan mo",
    guestEmail: "Email address",
    guestPhone: "Phone number",
    guestMessage: "Message",
    guestMessagePlaceholder:
      "Sabihin ang preferred arrival time, questions o special requests.",
    staySummary: "Stay summary",
    nights: "gabi",
    estimatedTotal: "Estimated total",
    selectedHouse: "Selected house",
    selectedDates: "Selected dates",
    noDates: "Piliin ang check-in at check-out dates para makapagpatuloy.",
    rangeNotAvailable:
      "May unavailable nights sa date range na ito. Pumili ng ibang range.",
    continueToDetails: "Continue to guest details",
    backToDates: "Back to dates",
    reviewRequest: "Review request",
    backToDetails: "Back to details",
    confirmRequest: "Confirm booking request",
    startAnotherRequest: "Start another request",
    requestReady: "Ready na ang booking request mo.",
    requestReadyDescription:
      "Thank you. Na-prepare na ang stay request with selected house, dates at guest details.",
    requestCode: "Request code",
    confirmationNote:
      "Final availability and payment details are confirmed by the host after reviewing the request.",
    datesStep: "Dates",
    detailsStep: "Guest details",
    reviewStep: "Review",
    confirmationStep: "Confirmation",
    requiredHint: "Name and email are required to continue.",
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    datesRequired: "Please select check-in and check-out dates first.",
    reviewTitle: "Review your stay request",
    reviewDescription:
      "Check the selected house, dates, guest details and estimated total before confirming.",
  },
  ko: {
    plannerEyebrow: "예약 플래너",
    plannerTitle: "숙소, 날짜, 게스트 정보를 선택하세요.",
    plannerDescription:
      "캘린더로 숙박 요청을 준비하고 확인 전에 내용을 검토하세요.",
    checkIn: "체크인",
    checkOut: "체크아웃",
    chooseDates: "날짜 선택",
    resetDates: "날짜 초기화",
    edit: "수정",
    guestName: "이름",
    guestEmail: "이메일 주소",
    guestPhone: "전화번호",
    guestMessage: "메시지",
    guestMessagePlaceholder:
      "도착 예정 시간, 질문 또는 특별 요청을 적어 주세요.",
    staySummary: "숙박 요약",
    nights: "박",
    estimatedTotal: "예상 합계",
    selectedHouse: "선택된 숙소",
    selectedDates: "선택된 날짜",
    noDates: "계속하려면 체크인과 체크아웃 날짜를 선택하세요.",
    rangeNotAvailable:
      "선택한 기간에 예약이 어려운 날짜가 포함되어 있습니다. 다른 기간을 선택해 주세요.",
    continueToDetails: "게스트 정보 입력",
    backToDates: "날짜로 돌아가기",
    reviewRequest: "요청 검토",
    backToDetails: "정보로 돌아가기",
    confirmRequest: "예약 요청 확인",
    startAnotherRequest: "새 요청 시작",
    requestReady: "예약 요청이 준비되었습니다.",
    requestReadyDescription:
      "감사합니다. 선택한 숙소, 날짜, 게스트 정보로 숙박 요청이 준비되었습니다.",
    requestCode: "요청 코드",
    confirmationNote:
      "최종 가능 여부와 결제 세부 정보는 호스트가 요청을 검토한 후 확인됩니다.",
    datesStep: "날짜",
    detailsStep: "게스트 정보",
    reviewStep: "검토",
    confirmationStep: "확인",
    requiredHint: "계속하려면 이름과 이메일이 필요합니다.",
    nameRequired: "이름을 입력해 주세요.",
    emailRequired: "이메일 주소를 입력해 주세요.",
    emailInvalid: "올바른 이메일 주소를 입력해 주세요.",
    datesRequired: "먼저 체크인과 체크아웃 날짜를 선택하세요.",
    reviewTitle: "숙박 요청 검토",
    reviewDescription:
      "확인 전 숙소, 날짜, 게스트 정보와 예상 합계를 확인하세요.",
  },
  es: {
    plannerEyebrow: "Planificador de reserva",
    plannerTitle: "Elige la casa, fechas y datos del huésped.",
    plannerDescription:
      "Usa el calendario para preparar tu solicitud y revisar todo antes de confirmar.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    chooseDates: "Elegir fechas",
    resetDates: "Restablecer fechas",
    edit: "Editar",
    guestName: "Tu nombre",
    guestEmail: "Correo electrónico",
    guestPhone: "Teléfono",
    guestMessage: "Mensaje",
    guestMessagePlaceholder:
      "Indica tu hora de llegada, preguntas o solicitudes especiales.",
    staySummary: "Resumen de estancia",
    nights: "noches",
    estimatedTotal: "Total estimado",
    selectedHouse: "Casa seleccionada",
    selectedDates: "Fechas seleccionadas",
    noDates: "Selecciona check-in y check-out para continuar.",
    rangeNotAvailable:
      "Este rango incluye noches no disponibles. Elige otro rango.",
    continueToDetails: "Continuar a datos del huésped",
    backToDates: "Volver a fechas",
    reviewRequest: "Revisar solicitud",
    backToDetails: "Volver a datos",
    confirmRequest: "Confirmar solicitud",
    startAnotherRequest: "Iniciar otra solicitud",
    requestReady: "Tu solicitud de reserva está lista.",
    requestReadyDescription:
      "Gracias. Tu solicitud se preparó con la casa, fechas y datos del huésped seleccionados.",
    requestCode: "Código de solicitud",
    confirmationNote:
      "La disponibilidad final y los detalles de pago se confirman después de revisar la solicitud.",
    datesStep: "Fechas",
    detailsStep: "Datos",
    reviewStep: "Revisión",
    confirmationStep: "Confirmación",
    requiredHint: "Nombre y correo electrónico son necesarios para continuar.",
    nameRequired: "Introduce tu nombre.",
    emailRequired: "Introduce tu correo electrónico.",
    emailInvalid: "Introduce un correo electrónico válido.",
    datesRequired: "Selecciona primero check-in y check-out.",
    reviewTitle: "Revisa tu solicitud de estancia",
    reviewDescription:
      "Comprueba la casa, fechas, datos del huésped y total estimado antes de confirmar.",
  },
  fr: {
    plannerEyebrow: "Planificateur de réservation",
    plannerTitle:
      "Choisissez la maison, les dates et les informations voyageurs.",
    plannerDescription:
      "Utilisez le calendrier pour préparer votre demande et tout vérifier avant confirmation.",
    checkIn: "Arrivée",
    checkOut: "Départ",
    chooseDates: "Choisir les dates",
    resetDates: "Réinitialiser",
    edit: "Modifier",
    guestName: "Votre nom",
    guestEmail: "Adresse email",
    guestPhone: "Téléphone",
    guestMessage: "Message",
    guestMessagePlaceholder:
      "Indiquez votre heure d’arrivée, vos questions ou demandes particulières.",
    staySummary: "Résumé du séjour",
    nights: "nuits",
    estimatedTotal: "Total estimé",
    selectedHouse: "Maison sélectionnée",
    selectedDates: "Dates sélectionnées",
    noDates: "Sélectionnez les dates d’arrivée et de départ pour continuer.",
    rangeNotAvailable:
      "Cette période contient des nuits indisponibles. Choisissez une autre période.",
    continueToDetails: "Continuer vers les informations",
    backToDates: "Retour aux dates",
    reviewRequest: "Vérifier la demande",
    backToDetails: "Retour aux informations",
    confirmRequest: "Confirmer la demande",
    startAnotherRequest: "Nouvelle demande",
    requestReady: "Votre demande de réservation est prête.",
    requestReadyDescription:
      "Merci. Votre demande a été préparée avec la maison, les dates et les informations voyageurs sélectionnées.",
    requestCode: "Code de demande",
    confirmationNote:
      "La disponibilité finale et les détails de paiement sont confirmés après examen de la demande.",
    datesStep: "Dates",
    detailsStep: "Informations",
    reviewStep: "Vérification",
    confirmationStep: "Confirmation",
    requiredHint: "Le nom et l’email sont nécessaires pour continuer.",
    nameRequired: "Indiquez votre nom.",
    emailRequired: "Indiquez votre adresse email.",
    emailInvalid: "Indiquez une adresse email valide.",
    datesRequired: "Sélectionnez d’abord les dates d’arrivée et de départ.",
    reviewTitle: "Vérifiez votre demande de séjour",
    reviewDescription:
      "Vérifiez la maison, les dates, les informations voyageurs et le total estimé avant confirmation.",
  },
  de: {
    plannerEyebrow: "Buchungsplaner",
    plannerTitle: "Wähle Haus, Daten und Gästeinformationen.",
    plannerDescription:
      "Nutze den Kalender, um deine Anfrage vorzubereiten und vor der Bestätigung zu prüfen.",
    checkIn: "Check-in",
    checkOut: "Check-out",
    chooseDates: "Daten wählen",
    resetDates: "Daten zurücksetzen",
    edit: "Bearbeiten",
    guestName: "Dein Name",
    guestEmail: "E-Mail-Adresse",
    guestPhone: "Telefonnummer",
    guestMessage: "Nachricht",
    guestMessagePlaceholder:
      "Teile deine gewünschte Ankunftszeit, Fragen oder besondere Wünsche mit.",
    staySummary: "Aufenthaltsübersicht",
    nights: "Nächte",
    estimatedTotal: "Geschätzter Gesamtpreis",
    selectedHouse: "Ausgewähltes Haus",
    selectedDates: "Ausgewählte Daten",
    noDates: "Wähle Check-in und Check-out, um fortzufahren.",
    rangeNotAvailable:
      "Dieser Zeitraum enthält nicht verfügbare Nächte. Bitte wähle einen anderen Zeitraum.",
    continueToDetails: "Weiter zu Gästedaten",
    backToDates: "Zurück zu Daten",
    reviewRequest: "Anfrage prüfen",
    backToDetails: "Zurück zu Details",
    confirmRequest: "Buchungsanfrage bestätigen",
    startAnotherRequest: "Neue Anfrage starten",
    requestReady: "Deine Buchungsanfrage ist bereit.",
    requestReadyDescription:
      "Danke. Deine Anfrage wurde mit Haus, Daten und Gästeinformationen vorbereitet.",
    requestCode: "Anfragecode",
    confirmationNote:
      "Finale Verfügbarkeit und Zahlungsdetails werden nach Prüfung der Anfrage bestätigt.",
    datesStep: "Daten",
    detailsStep: "Gästedaten",
    reviewStep: "Prüfung",
    confirmationStep: "Bestätigung",
    requiredHint: "Name und E-Mail sind erforderlich, um fortzufahren.",
    nameRequired: "Bitte gib deinen Namen ein.",
    emailRequired: "Bitte gib deine E-Mail-Adresse ein.",
    emailInvalid: "Bitte gib eine gültige E-Mail-Adresse ein.",
    datesRequired: "Bitte wähle zuerst Check-in und Check-out.",
    reviewTitle: "Aufenthaltsanfrage prüfen",
    reviewDescription:
      "Prüfe Haus, Daten, Gästeinformationen und geschätzten Gesamtpreis vor der Bestätigung.",
  },
  pl: {
    plannerEyebrow: "Planer rezerwacji",
    plannerTitle: "Wybierz dom, daty i dane gościa.",
    plannerDescription:
      "Użyj kalendarza, aby przygotować zapytanie o pobyt i sprawdzić wszystko przed potwierdzeniem.",
    checkIn: "Zameldowanie",
    checkOut: "Wymeldowanie",
    chooseDates: "Wybierz daty",
    resetDates: "Zresetuj daty",
    edit: "Edytuj",
    guestName: "Twoje imię",
    guestEmail: "Adres email",
    guestPhone: "Numer telefonu",
    guestMessage: "Wiadomość",
    guestMessagePlaceholder:
      "Podaj preferowaną godzinę przyjazdu, pytania lub specjalne prośby.",
    staySummary: "Podsumowanie pobytu",
    nights: "noce",
    estimatedTotal: "Szacowana kwota",
    selectedHouse: "Wybrany dom",
    selectedDates: "Wybrane daty",
    noDates: "Wybierz datę zameldowania i wymeldowania, aby przejść dalej.",
    rangeNotAvailable:
      "Ten zakres zawiera niedostępne noce. Wybierz inny termin.",
    continueToDetails: "Przejdź do danych gościa",
    backToDates: "Wróć do dat",
    reviewRequest: "Sprawdź zapytanie",
    backToDetails: "Wróć do danych",
    confirmRequest: "Potwierdź zapytanie",
    startAnotherRequest: "Rozpocznij nowe zapytanie",
    requestReady: "Twoje zapytanie rezerwacyjne jest gotowe.",
    requestReadyDescription:
      "Dziękujemy. Zapytanie zostało przygotowane z wybranym domem, datami i danymi gościa.",
    requestCode: "Kod zapytania",
    confirmationNote:
      "Ostateczna dostępność i szczegóły płatności są potwierdzane po sprawdzeniu zapytania przez gospodarza.",
    datesStep: "Daty",
    detailsStep: "Dane gościa",
    reviewStep: "Podsumowanie",
    confirmationStep: "Potwierdzenie",
    requiredHint: "Imię i email są wymagane, aby przejść dalej.",
    nameRequired: "Podaj swoje imię.",
    emailRequired: "Podaj adres email.",
    emailInvalid: "Podaj poprawny adres email.",
    datesRequired: "Najpierw wybierz datę zameldowania i wymeldowania.",
    reviewTitle: "Sprawdź zapytanie o pobyt",
    reviewDescription:
      "Sprawdź wybrany dom, daty, dane gościa i szacowaną kwotę przed potwierdzeniem.",
  },
};

const weekDays: Record<Locale, string[]> = {
  en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  ceb: ["Lun", "Mar", "Miy", "Huweb", "Biy", "Sab", "Dom"],
  tl: ["Lun", "Mar", "Miy", "Huweb", "Biy", "Sab", "Ling"],
  ko: ["월", "화", "수", "목", "금", "토", "일"],
  es: ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"],
  fr: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
  de: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
  pl: ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"],
};

const millisecondsPerDay = 1000 * 60 * 60 * 24;

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function dateFromIso(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function getDaysInMonth(year: number, month: number): Date[] {
  const days: Date[] = [];
  const cursor = new Date(year, month, 1);

  while (cursor.getMonth() === month) {
    days.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}

function isBookedDate(houseId: HouseId, date: Date) {
  const day = date.getDate();

  if (houseId === "fern-house") {
    return (
      day === 4 ||
      day === 5 ||
      day === 12 ||
      day === 18 ||
      day === 19 ||
      day === 27
    );
  }

  return (
    day === 2 ||
    day === 9 ||
    day === 10 ||
    day === 16 ||
    day === 23 ||
    day === 24
  );
}

function getBookedDates(houseId: HouseId, year: number, month: number) {
  const days = getDaysInMonth(year, month);

  return new Set(
    days.filter((day) => isBookedDate(houseId, day)).map(toIsoDate),
  );
}

function getNights(checkIn?: string, checkOut?: string) {
  if (!checkIn || !checkOut) {
    return 0;
  }

  const start = dateFromIso(checkIn);
  const end = dateFromIso(checkOut);

  return Math.max(
    0,
    Math.round((end.getTime() - start.getTime()) / millisecondsPerDay),
  );
}

function parseNightlyPrice(price: string) {
  const numericPrice = Number.parseInt(price.replace(/[^\d]/g, ""), 10);
  return Number.isNaN(numericPrice) ? 0 : numericPrice;
}

function formatPeso(amount: number) {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0,
  }).format(amount);
}

function rangeContainsBookedDate(
  houseId: HouseId,
  checkIn: string,
  checkOut: string,
) {
  const start = dateFromIso(checkIn);
  const end = dateFromIso(checkOut);
  const cursor = new Date(start);

  cursor.setDate(cursor.getDate() + 1);

  while (cursor < end) {
    if (isBookedDate(houseId, cursor)) {
      return true;
    }

    cursor.setDate(cursor.getDate() + 1);
  }

  return false;
}

function isDateInSelectedRange(
  isoDate: string,
  checkIn?: string,
  checkOut?: string,
) {
  if (!checkIn || !checkOut) {
    return false;
  }

  return isoDate > checkIn && isoDate < checkOut;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function createRequestCode(houseId: HouseId) {
  const prefix = houseId === "fern-house" ? "FERN" : "OLIVE";
  const code = Math.floor(100000 + Math.random() * 900000);

  return `GH-${prefix}-${code}`;
}

export function AvailabilityCalendar({
  houses,
  locale,
  dictionary,
}: AvailabilityCalendarProps) {
  const today = new Date();
  const copy = bookingCopy[locale];

  const [visibleDate, setVisibleDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedHouseId, setSelectedHouseId] = useState<HouseId>(houses[0].id);
  const [checkIn, setCheckIn] = useState<string>();
  const [checkOut, setCheckOut] = useState<string>();
  const [rangeError, setRangeError] = useState("");
  const [guestCount, setGuestCount] = useState(2);
  const [guestName, setGuestName] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestMessage, setGuestMessage] = useState("");
  const [bookingStep, setBookingStep] = useState<BookingStep>("dates");
  const [requestCode, setRequestCode] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const selectedHouse =
    houses.find((house) => house.id === selectedHouseId) ?? houses[0];

  const days = useMemo(
    () => getDaysInMonth(visibleDate.getFullYear(), visibleDate.getMonth()),
    [visibleDate],
  );

  const bookedDates = useMemo(
    () =>
      getBookedDates(
        selectedHouseId,
        visibleDate.getFullYear(),
        visibleDate.getMonth(),
      ),
    [selectedHouseId, visibleDate],
  );

  const firstDay = days[0];
  const firstDayIndex = firstDay ? (firstDay.getDay() + 6) % 7 : 0;

  const nights = getNights(checkIn, checkOut);
  const nightlyPrice = parseNightlyPrice(selectedHouse.priceFrom);
  const estimatedTotal = formatPeso(nightlyPrice * nights);
  const hasSelectedRange = Boolean(checkIn && checkOut && nights > 0);
  const hasGuestDetails =
    guestName.trim().length > 0 &&
    guestEmail.trim().length > 0 &&
    isValidEmail(guestEmail.trim());

  const progressPercent = {
    dates: 25,
    details: 50,
    review: 75,
    confirmation: 100,
  }[bookingStep];

  const processSteps = [
    { id: "dates", label: copy.datesStep },
    { id: "details", label: copy.detailsStep },
    { id: "review", label: copy.reviewStep },
    { id: "confirmation", label: copy.confirmationStep },
  ] satisfies { id: BookingStep; label: string }[];

  function changeMonth(direction: "previous" | "next") {
    setVisibleDate((current) => {
      const next = new Date(current);
      next.setMonth(current.getMonth() + (direction === "next" ? 1 : -1));
      return next;
    });
  }

  function clearRequestState() {
    setRangeError("");
    setRequestCode("");
    setFieldErrors({});
  }

  function resetDates() {
    setCheckIn(undefined);
    setCheckOut(undefined);
    clearRequestState();
    setBookingStep("dates");
  }

  function resetRequest() {
    setCheckIn(undefined);
    setCheckOut(undefined);
    setRangeError("");
    setGuestCount(2);
    setGuestName("");
    setGuestEmail("");
    setGuestPhone("");
    setGuestMessage("");
    setRequestCode("");
    setFieldErrors({});
    setBookingStep("dates");
  }

  function selectHouse(houseId: HouseId) {
    setSelectedHouseId(houseId);
    setCheckIn(undefined);
    setCheckOut(undefined);
    clearRequestState();
    setBookingStep("dates");
  }

  function selectDate(date: Date) {
    const isoDate = toIsoDate(date);
    clearRequestState();

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(isoDate);
      setCheckOut(undefined);
      setBookingStep("dates");
      return;
    }

    if (isoDate <= checkIn) {
      setCheckIn(isoDate);
      setCheckOut(undefined);
      setBookingStep("dates");
      return;
    }

    if (rangeContainsBookedDate(selectedHouseId, checkIn, isoDate)) {
      setRangeError(copy.rangeNotAvailable);
      return;
    }

    setCheckOut(isoDate);
  }

  function validateDates() {
    if (!hasSelectedRange) {
      setFieldErrors((current) => ({
        ...current,
        dates: copy.datesRequired,
      }));
      return false;
    }

    setFieldErrors((current) => ({
      ...current,
      dates: undefined,
    }));
    return true;
  }

  function validateDetails() {
    const nextErrors: FieldErrors = {};

    if (!guestName.trim()) {
      nextErrors.guestName = copy.nameRequired;
    }

    if (!guestEmail.trim()) {
      nextErrors.guestEmail = copy.emailRequired;
    } else if (!isValidEmail(guestEmail.trim())) {
      nextErrors.guestEmail = copy.emailInvalid;
    }

    setFieldErrors((current) => ({
      ...current,
      ...nextErrors,
    }));

    return Object.keys(nextErrors).length === 0;
  }

  function continueToDetails() {
    if (validateDates()) {
      setBookingStep("details");
    }
  }

  function continueToReview() {
    const datesAreValid = validateDates();
    const detailsAreValid = validateDetails();

    if (datesAreValid && detailsAreValid) {
      setBookingStep("review");
    }
  }

  function confirmRequest() {
    const datesAreValid = validateDates();
    const detailsAreValid = validateDetails();

    if (!datesAreValid || !detailsAreValid) {
      return;
    }

    setRequestCode(createRequestCode(selectedHouseId));
    setBookingStep("confirmation");
  }

  function updateGuestName(value: string) {
    setGuestName(value);

    if (value.trim()) {
      setFieldErrors((current) => ({ ...current, guestName: undefined }));
    }
  }

  function updateGuestEmail(value: string) {
    setGuestEmail(value);

    if (isValidEmail(value.trim())) {
      setFieldErrors((current) => ({ ...current, guestEmail: undefined }));
    }
  }

  function getStepStatus(step: BookingStep) {
    const order: BookingStep[] = ["dates", "details", "review", "confirmation"];
    const currentIndex = order.indexOf(bookingStep);
    const stepIndex = order.indexOf(step);

    if (stepIndex < currentIndex) {
      return "booking-process-step-completed";
    }

    if (stepIndex === currentIndex) {
      return "booking-process-step-active";
    }

    return "";
  }

  function renderSelectedDates() {
    if (!hasSelectedRange || !checkIn || !checkOut) {
      return copy.noDates;
    }

    return `${formatDate(dateFromIso(checkIn), locale)} - ${formatDate(
      dateFromIso(checkOut),
      locale,
    )}`;
  }

  return (
    <div className="booking-experience">
      <div className="booking-planner-card">
        <div className="booking-planner-heading">
          <div>
            <p className="eyebrow">{copy.plannerEyebrow}</p>
            <h2>{copy.plannerTitle}</h2>
            <p>{copy.plannerDescription}</p>
          </div>

          <button
            className="button button-secondary"
            onClick={resetDates}
            type="button"
          >
            {copy.resetDates}
          </button>
        </div>

        <div className="booking-house-selector">
          {houses.map((house) => (
            <button
              className={`booking-house-option ${
                house.id === selectedHouseId
                  ? "booking-house-option-active"
                  : ""
              }`}
              key={house.id}
              onClick={() => selectHouse(house.id)}
              type="button"
            >
              <span>{house.location[locale]}</span>
              <strong>{house.name}</strong>
              <small>
                {dictionary.common.from} {house.priceFrom}/
                {dictionary.common.night}
              </small>
            </button>
          ))}
        </div>

        <div className="booking-calendar-panel">
          <div className="calendar-toolbar">
            <div>
              <p className="eyebrow">{copy.chooseDates}</p>
              <div className="booking-date-chips">
                <span className={checkIn ? "booking-date-chip-active" : ""}>
                  {copy.checkIn}:{" "}
                  <strong>
                    {checkIn ? formatDate(dateFromIso(checkIn), locale) : "—"}
                  </strong>
                </span>
                <span className={checkOut ? "booking-date-chip-active" : ""}>
                  {copy.checkOut}:{" "}
                  <strong>
                    {checkOut ? formatDate(dateFromIso(checkOut), locale) : "—"}
                  </strong>
                </span>
              </div>
            </div>

            <div className="month-controls">
              <button
                aria-label={dictionary.bookingPage.previousMonth}
                onClick={() => changeMonth("previous")}
                type="button"
              >
                ←
              </button>
              <strong>
                {visibleDate.toLocaleDateString(locale, {
                  month: "long",
                  year: "numeric",
                })}
              </strong>
              <button
                aria-label={dictionary.bookingPage.nextMonth}
                onClick={() => changeMonth("next")}
                type="button"
              >
                →
              </button>
            </div>
          </div>

          <div className="calendar-legend">
            <span>
              <i className="legend-dot legend-available" />
              {dictionary.common.available}
            </span>
            <span>
              <i className="legend-dot legend-booked" />
              {dictionary.common.booked}
            </span>
            <span>{dictionary.common.availabilityGuide}</span>
          </div>

          {rangeError ? (
            <p className="booking-range-error">{rangeError}</p>
          ) : null}

          {fieldErrors.dates ? (
            <p className="booking-range-error">{fieldErrors.dates}</p>
          ) : null}

          <div className="calendar-weekdays">
            {weekDays[locale].map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {Array.from({ length: firstDayIndex }).map((_, index) => (
              <span className="calendar-empty" key={`empty-${index}`} />
            ))}

            {days.map((day) => {
              const isoDate = toIsoDate(day);
              const isBooked = bookedDates.has(isoDate);
              const isPast =
                day <
                new Date(
                  today.getFullYear(),
                  today.getMonth(),
                  today.getDate(),
                );
              const isDisabled = isBooked || isPast;
              const isCheckIn = isoDate === checkIn;
              const isCheckOut = isoDate === checkOut;
              const isInRange = isDateInSelectedRange(
                isoDate,
                checkIn,
                checkOut,
              );

              return (
                <button
                  className={`calendar-day ${
                    isDisabled
                      ? "calendar-day-booked"
                      : "calendar-day-available"
                  } ${
                    isCheckIn || isCheckOut ? "calendar-day-selected" : ""
                  } ${isInRange ? "calendar-day-range" : ""}`}
                  disabled={isDisabled}
                  key={isoDate}
                  onClick={() => selectDate(day)}
                  type="button"
                >
                  <span>{day.getDate()}</span>
                  <small>
                    {isBooked || isPast
                      ? dictionary.common.booked
                      : dictionary.common.available}
                  </small>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <aside className="booking-summary-card">
        <div className="booking-process-steps">
          {processSteps.map((step, index) => (
            <span
              className={`booking-process-step ${getStepStatus(step.id)}`}
              key={step.id}
            >
              <i>{index + 1}</i>
              {step.label}
            </span>
          ))}
        </div>

        <div className="booking-progress-track">
          <span style={{ width: `${progressPercent}%` }} />
        </div>

        {bookingStep === "confirmation" ? (
          <div className="booking-confirmation-panel">
            <span className="booking-confirmation-mark">✓</span>
            <p className="eyebrow">{copy.confirmationStep}</p>
            <h2>{copy.requestReady}</h2>
            <p>{copy.requestReadyDescription}</p>

            <div className="booking-summary-list">
              <div>
                <span>{copy.requestCode}</span>
                <strong>{requestCode}</strong>
              </div>
              <div>
                <span>{copy.selectedHouse}</span>
                <strong>{selectedHouse.name}</strong>
              </div>
              <div>
                <span>{copy.selectedDates}</span>
                <strong>{renderSelectedDates()}</strong>
              </div>
              <div>
                <span>{copy.estimatedTotal}</span>
                <strong>{estimatedTotal}</strong>
              </div>
            </div>

            <p className="booking-confirmation-note">{copy.confirmationNote}</p>

            <button
              className="button button-primary"
              onClick={resetRequest}
              type="button"
            >
              {copy.startAnotherRequest}
            </button>
          </div>
        ) : (
          <>
            <div>
              <p className="eyebrow">{copy.staySummary}</p>
              <h2>{selectedHouse.name}</h2>
              <p>{selectedHouse.subtitle[locale]}</p>
            </div>

            <div className="booking-summary-list">
              <div>
                <span>{copy.selectedHouse}</span>
                <strong>{selectedHouse.name}</strong>
              </div>
              <div>
                <span>{copy.selectedDates}</span>
                <strong>{renderSelectedDates()}</strong>
                {bookingStep !== "dates" ? (
                  <button
                    className="booking-inline-edit"
                    onClick={() => setBookingStep("dates")}
                    type="button"
                  >
                    {copy.edit}
                  </button>
                ) : null}
              </div>
              <div>
                <span>{dictionary.common.guests}</span>
                <strong>{guestCount}</strong>
              </div>
              <div>
                <span>{copy.nights}</span>
                <strong>{nights}</strong>
              </div>
              <div>
                <span>{copy.estimatedTotal}</span>
                <strong>{estimatedTotal}</strong>
              </div>
            </div>

            {bookingStep === "details" || bookingStep === "review" ? (
              <div className="booking-form-grid">
                <label>
                  <span>{dictionary.common.guests}</span>
                  <select
                    value={guestCount}
                    onChange={(event) =>
                      setGuestCount(Number(event.target.value))
                    }
                  >
                    {Array.from({ length: selectedHouse.capacity }).map(
                      (_, index) => {
                        const count = index + 1;

                        return (
                          <option key={count} value={count}>
                            {count}
                          </option>
                        );
                      },
                    )}
                  </select>
                </label>

                <label>
                  <span>{copy.guestName}</span>
                  <input
                    aria-invalid={Boolean(fieldErrors.guestName)}
                    value={guestName}
                    onChange={(event) => updateGuestName(event.target.value)}
                    placeholder={copy.guestName}
                  />
                  {fieldErrors.guestName ? (
                    <small className="booking-field-error">
                      {fieldErrors.guestName}
                    </small>
                  ) : null}
                </label>

                <label>
                  <span>{copy.guestEmail}</span>
                  <input
                    aria-invalid={Boolean(fieldErrors.guestEmail)}
                    type="email"
                    value={guestEmail}
                    onChange={(event) => updateGuestEmail(event.target.value)}
                    placeholder="name@email.com"
                  />
                  {fieldErrors.guestEmail ? (
                    <small className="booking-field-error">
                      {fieldErrors.guestEmail}
                    </small>
                  ) : null}
                </label>

                <label>
                  <span>{copy.guestPhone}</span>
                  <input
                    value={guestPhone}
                    onChange={(event) => setGuestPhone(event.target.value)}
                    placeholder="+63..."
                  />
                </label>

                <label>
                  <span>{copy.guestMessage}</span>
                  <textarea
                    value={guestMessage}
                    onChange={(event) => setGuestMessage(event.target.value)}
                    placeholder={copy.guestMessagePlaceholder}
                    rows={5}
                  />
                </label>

                {!hasGuestDetails ? (
                  <p className="booking-required-hint">{copy.requiredHint}</p>
                ) : null}
              </div>
            ) : null}

            {bookingStep === "review" ? (
              <div className="booking-review-panel">
                <p className="eyebrow">{copy.reviewStep}</p>
                <h3>{copy.reviewTitle}</h3>
                <p>{copy.reviewDescription}</p>

                <ul>
                  <li>{selectedHouse.name}</li>
                  <li>{renderSelectedDates()}</li>
                  <li>
                    {guestCount} {dictionary.common.guests}
                  </li>
                  <li>{estimatedTotal}</li>
                  <li>{guestName}</li>
                  <li>{guestEmail}</li>
                  {guestPhone ? <li>{guestPhone}</li> : null}
                  {guestMessage ? <li>{guestMessage}</li> : null}
                </ul>
              </div>
            ) : null}

            <div className="booking-actions-panel">
              {bookingStep === "dates" ? (
                <button
                  className="button button-primary"
                  disabled={!hasSelectedRange}
                  onClick={continueToDetails}
                  type="button"
                >
                  {copy.continueToDetails}
                </button>
              ) : null}

              {bookingStep === "details" ? (
                <>
                  <button
                    className="button button-secondary"
                    onClick={() => setBookingStep("dates")}
                    type="button"
                  >
                    {copy.backToDates}
                  </button>
                  <button
                    className="button button-primary"
                    disabled={!hasSelectedRange || !hasGuestDetails}
                    onClick={continueToReview}
                    type="button"
                  >
                    {copy.reviewRequest}
                  </button>
                </>
              ) : null}

              {bookingStep === "review" ? (
                <>
                  <button
                    className="button button-secondary"
                    onClick={() => setBookingStep("details")}
                    type="button"
                  >
                    {copy.backToDetails}
                  </button>
                  <button
                    className="button button-primary"
                    onClick={confirmRequest}
                    type="button"
                  >
                    {copy.confirmRequest}
                  </button>
                </>
              ) : null}

              <p>{copy.confirmationNote}</p>
            </div>
          </>
        )}
      </aside>

      <style>{`
        .booking-experience {
          display: grid;
          align-items: start;
          gap: 34px;
          grid-template-columns: minmax(0, 1fr) minmax(380px, 0.42fr);
        }

        .booking-planner-card,
        .booking-summary-card {
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          background: color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow-soft);
          padding: clamp(20px, 2.6vw, 34px);
        }

        .booking-planner-heading {
          display: flex;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 24px;
        }

        .booking-planner-heading h2,
        .booking-summary-card h2 {
          margin: 0;
          font-size: clamp(2rem, 3.6vw, 4.4rem);
          letter-spacing: -0.07em;
          line-height: 0.96;
        }

        .booking-planner-heading p,
        .booking-summary-card p {
          color: var(--muted);
          line-height: 1.7;
        }

        .booking-house-selector {
          display: grid;
          gap: 12px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-bottom: 24px;
        }

        .booking-house-option {
          display: grid;
          gap: 6px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: var(--surface-strong);
          color: var(--text);
          padding: 18px;
          text-align: left;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .booking-house-option:hover {
          transform: translateY(-2px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
          box-shadow: var(--shadow-soft);
        }

        .booking-house-option-active {
          border-color: color-mix(in srgb, var(--primary) 50%, var(--border));
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
        }

        .booking-house-option span {
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .booking-house-option strong {
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        .booking-house-option small {
          color: var(--muted);
          font-weight: 850;
        }

        .booking-calendar-panel {
          border: 1px solid var(--border);
          border-radius: var(--radius-xl);
          background: var(--surface-strong);
          padding: clamp(16px, 2vw, 24px);
        }

        .booking-date-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .booking-date-chips span {
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background: var(--background-soft);
          color: var(--muted);
          font-weight: 850;
          padding: 10px 14px;
        }

        .booking-date-chips strong {
          color: var(--text);
        }

        .booking-date-chip-active {
          background: var(--primary-soft) !important;
          color: var(--primary-strong) !important;
        }

        .booking-range-error,
        .booking-required-hint {
          margin: 0;
          border: 1px solid color-mix(in srgb, var(--accent) 44%, var(--border));
          border-radius: 18px;
          background: var(--accent-soft);
          color: var(--text);
          font-weight: 850;
          padding: 12px 14px;
        }

        .booking-range-error {
          margin-bottom: 16px;
        }

        .calendar-day-selected {
          background: var(--primary);
          color: white;
          opacity: 1;
          box-shadow: inset 0 -4px 0 var(--primary-strong);
        }

        .calendar-day-selected small,
        .calendar-day-selected span {
          color: white;
        }

        .calendar-day-range {
          background: var(--primary-soft);
          box-shadow: inset 0 -4px 0 var(--primary);
        }

        .booking-summary-card {
          position: sticky;
          top: 112px;
          display: grid;
          gap: 24px;
        }

        .booking-process-steps {
          display: grid;
          gap: 8px;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .booking-process-step {
          display: grid;
          gap: 6px;
          justify-items: center;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--surface-strong);
          color: var(--muted);
          font-size: 0.72rem;
          font-weight: 950;
          padding: 10px 8px;
          text-align: center;
        }

        .booking-process-step i {
          display: grid;
          width: 26px;
          height: 26px;
          place-items: center;
          border-radius: 50%;
          background: var(--background-soft);
          color: var(--muted);
          font-style: normal;
        }

        .booking-process-step-active {
          border-color: color-mix(in srgb, var(--primary) 44%, var(--border));
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
          color: var(--primary-strong);
        }

        .booking-process-step-active i,
        .booking-process-step-completed i {
          background: var(--primary);
          color: white;
        }

        .booking-process-step-completed {
          color: var(--primary-strong);
        }

        .booking-progress-track {
          overflow: hidden;
          height: 8px;
          border-radius: var(--radius-pill);
          background: var(--background-soft);
        }

        .booking-progress-track span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          transition: width 260ms ease;
        }

        .booking-summary-list {
          display: grid;
          gap: 10px;
        }

        .booking-summary-list > div {
          display: grid;
          gap: 5px;
          border: 1px solid var(--border);
          border-radius: 20px;
          background: var(--surface-strong);
          padding: 14px;
        }

        .booking-summary-list span {
          color: var(--primary);
          font-size: 0.72rem;
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .booking-summary-list strong {
          line-height: 1.35;
        }

        .booking-inline-edit {
          width: fit-content;
          border: 0;
          border-radius: var(--radius-pill);
          background: var(--primary-soft);
          color: var(--primary-strong);
          font-size: 0.78rem;
          font-weight: 950;
          padding: 8px 10px;
        }

        .booking-form-grid {
          display: grid;
          gap: 12px;
        }

        .booking-form-grid label {
          display: grid;
          gap: 8px;
        }

        .booking-form-grid label span {
          color: var(--muted);
          font-size: 0.82rem;
          font-weight: 900;
        }

        .booking-form-grid input,
        .booking-form-grid select,
        .booking-form-grid textarea {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: var(--surface-strong);
          color: var(--text);
          padding: 13px 14px;
        }

        .booking-form-grid input[aria-invalid="true"] {
          border-color: color-mix(in srgb, var(--accent) 64%, var(--border));
          background: var(--accent-soft);
        }

        .booking-form-grid textarea {
          resize: vertical;
        }

        .booking-field-error {
          color: var(--accent);
          font-size: 0.78rem;
          font-weight: 900;
        }

        .booking-review-panel {
          border: 1px solid var(--border);
          border-radius: 24px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
          padding: 20px;
        }

        .booking-review-panel h3 {
          margin: 0 0 10px;
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        .booking-review-panel p {
          margin-top: 0;
        }

        .booking-review-panel ul {
          display: grid;
          gap: 8px;
          margin: 0;
          padding-left: 18px;
          color: var(--muted);
          line-height: 1.55;
        }

        .booking-actions-panel {
          display: grid;
          gap: 12px;
        }

        .booking-actions-panel .button,
        .booking-confirmation-panel .button {
          width: 100%;
        }

        .booking-actions-panel p {
          margin: 0;
          color: var(--muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .booking-actions-panel button:disabled {
          opacity: 0.52;
          cursor: not-allowed;
          transform: none;
        }

        .booking-confirmation-panel {
          display: grid;
          gap: 20px;
        }

        .booking-confirmation-mark {
          display: grid;
          width: 64px;
          height: 64px;
          place-items: center;
          border-radius: 24px;
          background: var(--primary);
          color: white;
          font-size: 1.6rem;
          font-weight: 950;
          box-shadow: var(--shadow-soft);
        }

        .booking-confirmation-note {
          border: 1px solid var(--border);
          border-radius: 22px;
          background: var(--background-soft);
          padding: 16px;
        }

        @media (max-width: 1180px) {
          .booking-experience {
            grid-template-columns: 1fr;
          }

          .booking-summary-card {
            position: static;
          }
        }

        @media (max-width: 760px) {
          .booking-planner-card,
          .booking-summary-card {
            border-radius: 30px;
            padding: 16px;
          }

          .booking-planner-heading,
          .calendar-toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .booking-house-selector,
          .booking-process-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
