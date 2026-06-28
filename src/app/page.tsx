"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

import type { Locale } from "@/types/site";
import { defaultLocale, getLocaleFromBrowserLanguage } from "@/lib/i18n";

type WelcomeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
};

const welcomeCopy: Record<Locale, WelcomeCopy> = {
  en: {
    eyebrow: "Greenhouse House Rental",
    title: "Good to see you here.",
    description:
      "Your quiet tropical stay starts with a small story, a warm welcome and two homes designed for slow mornings in General Santos City.",
    cta: "Continue",
  },
  ceb: {
    eyebrow: "Greenhouse House Rental",
    title: "Maayo nga naa ka diri.",
    description:
      "Ang imong malinawon nga tropical stay magsugod sa gamay nga istorya, mainit nga welcome ug duha ka balay para sa hinay nga buntag sa General Santos City.",
    cta: "Padayon",
  },
  tl: {
    eyebrow: "Greenhouse House Rental",
    title: "Masaya kaming nandito ka.",
    description:
      "Nagsisimula ang tahimik mong tropical stay sa isang maikling kuwento, warm welcome at dalawang bahay para sa slow mornings sa General Santos City.",
    cta: "Magpatuloy",
  },
  ko: {
    eyebrow: "Greenhouse House Rental",
    title: "방문해 주셔서 반가워요.",
    description:
      "General Santos City의 느린 아침을 위해 설계된 두 숙소와 따뜻한 이야기로 조용한 열대 휴식이 시작됩니다.",
    cta: "계속하기",
  },
  es: {
    eyebrow: "Greenhouse House Rental",
    title: "Qué bueno verte aquí.",
    description:
      "Tu estancia tropical tranquila empieza con una pequeña historia, una bienvenida cálida y dos casas pensadas para mañanas lentas en General Santos City.",
    cta: "Continuar",
  },
  fr: {
    eyebrow: "Greenhouse House Rental",
    title: "Content de vous voir ici.",
    description:
      "Votre séjour tropical paisible commence par une petite histoire, un accueil chaleureux et deux maisons pensées pour des matins lents à General Santos City.",
    cta: "Continuer",
  },
  de: {
    eyebrow: "Greenhouse House Rental",
    title: "Schön, dass du hier bist.",
    description:
      "Dein ruhiger tropischer Aufenthalt beginnt mit einer kleinen Geschichte, einem warmen Willkommen und zwei Häusern für langsame Morgen in General Santos City.",
    cta: "Weiter",
  },
  pl: {
    eyebrow: "Greenhouse House Rental",
    title: "Miło Cię tu widzieć.",
    description:
      "Twój spokojny tropikalny pobyt zaczyna się od krótkiej historii, ciepłego powitania i dwóch domów stworzonych do wolnych poranków w General Santos City.",
    cta: "Przejdź dalej",
  },
};

function getPreferredTheme(): "light" | "dark" {
  if (typeof window === "undefined") {
    return "light";
  }

  const storedTheme = window.localStorage.getItem("greenhouse-theme");

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getBrowserLocaleSnapshot(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }

  const browserLanguage =
    window.navigator.languages?.[0] ?? window.navigator.language;

  return getLocaleFromBrowserLanguage(browserLanguage);
}

function getServerLocaleSnapshot(): Locale {
  return defaultLocale;
}

function subscribeToLanguageChanges(callback: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  window.addEventListener("languagechange", callback);

  return () => {
    window.removeEventListener("languagechange", callback);
  };
}

export default function RootWelcomePage() {
  const locale = useSyncExternalStore(
    subscribeToLanguageChanges,
    getBrowserLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  useEffect(() => {
    const preferredTheme = getPreferredTheme();

    document.documentElement.dataset.theme = preferredTheme;
  }, []);

  const copy = welcomeCopy[locale];

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
          maxWidth: "980px",
        }}
      >
        <p className="eyebrow">{copy.eyebrow}</p>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(3rem, 8vw, 7.4rem)",
            letterSpacing: "-0.08em",
            lineHeight: 0.92,
          }}
        >
          {copy.title}
        </h1>

        <p>{copy.description}</p>

        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Link className="button button-primary" href={`/${locale}`}>
            {copy.cta}
          </Link>
        </div>
      </section>
    </main>
  );
}
