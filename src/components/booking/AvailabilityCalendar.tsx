"use client";

import { useMemo, useState } from "react";

import type { Dictionary } from "@/data/dictionaries";
import type { House, HouseId, Locale } from "@/types/site";

type AvailabilityCalendarProps = {
  houses: House[];
  locale: Locale;
  dictionary: Dictionary;
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

function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
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

function getDemoBookedDates(houseId: HouseId, year: number, month: number) {
  const days = getDaysInMonth(year, month);

  return new Set(
    days
      .filter((day) => {
        const date = day.getDate();

        if (houseId === "fern-house") {
          return (
            date === 4 ||
            date === 5 ||
            date === 12 ||
            date === 18 ||
            date === 19 ||
            date === 27
          );
        }

        return (
          date === 2 ||
          date === 9 ||
          date === 10 ||
          date === 16 ||
          date === 23 ||
          date === 24
        );
      })
      .map(toIsoDate),
  );
}

export function AvailabilityCalendar({
  houses,
  locale,
  dictionary,
}: AvailabilityCalendarProps) {
  const today = new Date();
  const [visibleDate, setVisibleDate] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );
  const [selectedHouseId, setSelectedHouseId] = useState<HouseId>(houses[0].id);

  const selectedHouse =
    houses.find((house) => house.id === selectedHouseId) ?? houses[0];

  const days = useMemo(
    () => getDaysInMonth(visibleDate.getFullYear(), visibleDate.getMonth()),
    [visibleDate],
  );

  const bookedDates = useMemo(
    () =>
      getDemoBookedDates(
        selectedHouseId,
        visibleDate.getFullYear(),
        visibleDate.getMonth(),
      ),
    [selectedHouseId, visibleDate],
  );

  const firstDay = days[0];
  const firstDayIndex = firstDay ? (firstDay.getDay() + 6) % 7 : 0;

  function changeMonth(direction: "previous" | "next") {
    setVisibleDate((current) => {
      const next = new Date(current);
      next.setMonth(current.getMonth() + (direction === "next" ? 1 : -1));
      return next;
    });
  }

  return (
    <div className="calendar-card">
      <div className="calendar-toolbar">
        <div>
          <p className="eyebrow">{dictionary.bookingPage.selectedHouse}</p>
          <div className="house-switcher">
            {houses.map((house) => (
              <button
                className={`house-switcher-button ${
                  house.id === selectedHouseId
                    ? "house-switcher-button-active"
                    : ""
                }`}
                key={house.id}
                onClick={() => setSelectedHouseId(house.id)}
                type="button"
              >
                {house.name}
              </button>
            ))}
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
        <span>{dictionary.common.demoOnly}</span>
      </div>

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
            new Date(today.getFullYear(), today.getMonth(), today.getDate());

          return (
            <button
              className={`calendar-day ${
                isBooked || isPast
                  ? "calendar-day-booked"
                  : "calendar-day-available"
              }`}
              disabled={isBooked || isPast}
              key={isoDate}
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

      <div className="booking-cta-panel">
        <div>
          <p className="eyebrow">{selectedHouse.name}</p>
          <h3>{dictionary.bookingPage.inquiryTitle}</h3>
          <p>{dictionary.bookingPage.inquiryDescription}</p>
        </div>
        <a
          className="button button-primary"
          href={selectedHouse.whatsappUrl}
          rel="noreferrer"
          target="_blank"
        >
          {dictionary.bookingPage.sendWhatsapp}
        </a>
      </div>
    </div>
  );
}
