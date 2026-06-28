"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore } from "react";

import type { Locale } from "@/types/site";
import {
  defaultLocale,
  getLocaleFromBrowserLanguage,
  localeFlags,
  localeLabels,
  localeShortLabels,
} from "@/lib/i18n";

type WelcomeCopy = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  detected: string;
};

const welcomeCopy: Record<Locale, WelcomeCopy> = {
  en: {
    eyebrow: "Greenhouse House Rental",
    title: "Good to see you here.",
    description:
      "Your quiet tropical stay starts with a small story, a warm welcome and two homes designed for slow mornings in General Santos City.",
    cta: "Continue",
    detected: "Selected for you",
  },
  ceb: {
    eyebrow: "Greenhouse House Rental",
    title: "Maayo nga naa ka diri.",
    description:
      "Ang imong malinawon nga tropical stay magsugod sa gamay nga istorya, mainit nga welcome ug duha ka balay para sa hinay nga buntag sa General Santos City.",
    cta: "Padayon",
    detected: "Gipili para nimo",
  },
  tl: {
    eyebrow: "Greenhouse House Rental",
    title: "Masaya kaming nandito ka.",
    description:
      "Nagsisimula ang tahimik mong tropical stay sa isang maikling kuwento, warm welcome at dalawang bahay para sa slow mornings sa General Santos City.",
    cta: "Magpatuloy",
    detected: "Pinili para sa iyo",
  },
  ko: {
    eyebrow: "Greenhouse House Rental",
    title: "방문해 주셔서 반가워요.",
    description:
      "General Santos City의 느린 아침을 위해 설계된 두 숙소와 따뜻한 이야기로 조용한 열대 휴식이 시작됩니다.",
    cta: "계속하기",
    detected: "선택된 언어",
  },
  es: {
    eyebrow: "Greenhouse House Rental",
    title: "Qué bueno verte aquí.",
    description:
      "Tu estancia tropical tranquila empieza con una pequeña historia, una bienvenida cálida y dos casas pensadas para mañanas lentas en General Santos City.",
    cta: "Continuar",
    detected: "Seleccionado para ti",
  },
  fr: {
    eyebrow: "Greenhouse House Rental",
    title: "Content de vous voir ici.",
    description:
      "Votre séjour tropical paisible commence par une petite histoire, un accueil chaleureux et deux maisons pensées pour des matins lents à General Santos City.",
    cta: "Continuer",
    detected: "Sélectionné pour vous",
  },
  de: {
    eyebrow: "Greenhouse House Rental",
    title: "Schön, dass du hier bist.",
    description:
      "Dein ruhiger tropischer Aufenthalt beginnt mit einer kleinen Geschichte, einem warmen Willkommen und zwei Häusern für langsame Morgen in General Santos City.",
    cta: "Weiter",
    detected: "Für dich ausgewählt",
  },
  pl: {
    eyebrow: "Greenhouse House Rental",
    title: "Miło Cię tu widzieć.",
    description:
      "Twój spokojny tropikalny pobyt zaczyna się od krótkiej historii, ciepłego powitania i dwóch domów stworzonych do wolnych poranków w General Santos City.",
    cta: "Przejdź dalej",
    detected: "Wybrano dla Ciebie",
  },
};

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

  const copy = welcomeCopy[locale];

  return (
    <main className="welcome-screen">
      <section className="site-shell welcome-grid">
        <div className="welcome-copy-card">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>

          <div className="welcome-language-card">
            <span aria-hidden="true">{localeFlags[locale]}</span>
            <div>
              <strong>{localeLabels[locale]}</strong>
              <small>
                {copy.detected} · {localeShortLabels[locale]}
              </small>
            </div>
          </div>

          <Link
            className="button button-primary welcome-main-action"
            href={`/${locale}`}
          >
            {copy.cta}
          </Link>
        </div>

        <div className="welcome-photo-stage" aria-hidden="true">
          <div className="welcome-photo welcome-photo-large">
            <Image
              alt=""
              fill
              priority
              sizes="(max-width: 980px) 100vw, 48vw"
              src="/images/fern-house/fern-exterior-01.webp"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="welcome-photo welcome-photo-small welcome-photo-top">
            <Image
              alt=""
              fill
              sizes="220px"
              src="/images/olive-house/olive-interior-01.webp"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="welcome-photo welcome-photo-small welcome-photo-bottom">
            <Image
              alt=""
              fill
              sizes="220px"
              src="/images/fern-house/fern-terrace-01.webp"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="welcome-floating-note">
            <span>General Santos City</span>
            <strong>Private tropical homes</strong>
          </div>
        </div>
      </section>

      <style>{`
        .welcome-screen {
          min-height: 100vh;
          display: grid;
          place-items: center;
          padding: clamp(24px, 4vw, 56px) 0;
          overflow: hidden;
          position: relative;
        }

        .welcome-screen::before {
          position: absolute;
          inset: auto auto -18rem -14rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 68%);
          opacity: 0.8;
          pointer-events: none;
        }

        .welcome-grid {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: center;
          gap: clamp(34px, 6vw, 92px);
          grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
        }

        .welcome-copy-card {
          border: 1px solid var(--border);
          border-radius: 44px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            color-mix(in srgb, var(--surface) 94%, transparent);
          box-shadow: var(--shadow);
          padding: clamp(32px, 5vw, 72px);
          backdrop-filter: blur(18px);
        }

        .welcome-copy-card h1 {
          margin: 0;
          font-size: clamp(3.4rem, 8vw, 7.6rem);
          letter-spacing: -0.09em;
          line-height: 0.9;
        }

        .welcome-copy-card p {
          max-width: 720px;
          color: var(--muted);
          font-size: clamp(1rem, 1.15vw, 1.2rem);
          line-height: 1.8;
        }

        .welcome-language-card {
          display: inline-grid;
          align-items: center;
          gap: 12px;
          grid-template-columns: 46px minmax(0, 1fr);
          margin-top: 18px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: var(--surface);
          padding: 10px 16px 10px 10px;
        }

        .welcome-language-card > span {
          display: grid;
          width: 46px;
          height: 46px;
          place-items: center;
          border-radius: 18px;
          background: var(--surface-strong);
          color: var(--primary-strong);
          font-weight: 950;
          box-shadow: inset 0 0 0 1px var(--border);
        }

        .welcome-language-card strong,
        .welcome-language-card small {
          display: block;
        }

        .welcome-language-card small {
          color: var(--muted);
          font-size: 0.78rem;
          font-weight: 850;
          margin-top: 3px;
        }

        .welcome-main-action {
          margin-top: 28px;
          width: fit-content;
        }

        .welcome-photo-stage {
          position: relative;
          min-height: clamp(560px, 52vw, 760px);
        }

        .welcome-photo {
          position: absolute;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.34);
          background: var(--surface);
          box-shadow: var(--shadow);
        }

        .welcome-photo::after {
          position: absolute;
          inset: 0;
          content: "";
          background: linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.24));
          pointer-events: none;
        }

        .welcome-photo-large {
          inset: 3% 8% 6% 0;
          border-radius: 52px;
        }

        .welcome-photo-small {
          width: min(38%, 240px);
          aspect-ratio: 4 / 3;
          border-radius: 30px;
          z-index: 2;
        }

        .welcome-photo-top {
          top: 0;
          right: 0;
        }

        .welcome-photo-bottom {
          right: 6%;
          bottom: 0;
        }

        .welcome-floating-note {
          position: absolute;
          left: 34px;
          bottom: 34px;
          z-index: 3;
          display: grid;
          gap: 6px;
          border: 1px solid rgba(255,255,255,0.34);
          border-radius: 26px;
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 18px 20px;
          backdrop-filter: blur(18px);
          box-shadow: 0 24px 70px rgba(0,0,0,0.2);
        }

        .welcome-floating-note span {
          font-size: 0.78rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .welcome-floating-note strong {
          font-size: 1.35rem;
          letter-spacing: -0.04em;
        }

        @media (max-width: 980px) {
          .welcome-grid {
            grid-template-columns: 1fr;
          }

          .welcome-photo-stage {
            min-height: 520px;
          }

          .welcome-photo-large {
            inset: 0;
          }
        }

        @media (max-width: 640px) {
          .welcome-screen {
            padding: 14px 0;
          }

          .welcome-copy-card {
            border-radius: 32px;
            padding: 28px;
          }

          .welcome-copy-card h1 {
            font-size: clamp(3rem, 16vw, 4.6rem);
          }

          .welcome-main-action {
            width: 100%;
          }

          .welcome-photo-stage {
            min-height: 430px;
          }

          .welcome-photo-small {
            width: 44%;
          }

          .welcome-floating-note {
            left: 18px;
            right: 18px;
            bottom: 18px;
          }
        }
      `}</style>
    </main>
  );
}
