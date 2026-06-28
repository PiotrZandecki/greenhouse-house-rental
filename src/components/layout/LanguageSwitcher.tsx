"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import type { Locale } from "@/types/site";
import {
  localeFlags,
  localeLabels,
  localeShortLabels,
  locales,
  replaceLocaleInPath,
} from "@/lib/i18n";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({
  currentLocale,
  label,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement | null>(null);

  const currentLanguageLabel = localeLabels[currentLocale];
  const currentLanguageCode = localeShortLabels[currentLocale];
  const currentLanguageFlag = localeFlags[currentLocale];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!switcherRef.current) {
        return;
      }

      if (!switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="gh-language-menu" ref={switcherRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={label}
        className="gh-language-trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span className="gh-language-trigger-flag" aria-hidden="true">
          {currentLanguageFlag}
        </span>

        <span className="gh-language-trigger-copy">
          <span className="gh-language-trigger-code">
            {currentLanguageCode}
          </span>
          <span className="gh-language-trigger-name">
            {currentLanguageLabel}
          </span>
        </span>

        <span
          aria-hidden="true"
          className={`gh-language-trigger-chevron ${
            isOpen ? "gh-language-trigger-chevron-open" : ""
          }`}
        >
          ↓
        </span>
      </button>

      {isOpen ? (
        <div className="gh-language-panel" role="listbox" aria-label={label}>
          {locales.map((locale) => {
            const isActive = locale === currentLocale;

            return (
              <Link
                aria-selected={isActive}
                className={`gh-language-option ${
                  isActive ? "gh-language-option-active" : ""
                }`}
                href={replaceLocaleInPath(pathname, locale)}
                key={locale}
                onClick={() => setIsOpen(false)}
                role="option"
                title={localeLabels[locale]}
              >
                <span className="gh-language-option-flag" aria-hidden="true">
                  {localeFlags[locale]}
                </span>

                <span className="gh-language-option-copy">
                  <strong>{localeLabels[locale]}</strong>
                  <small>{localeShortLabels[locale]}</small>
                </span>

                <span className="gh-language-option-check" aria-hidden="true">
                  {isActive ? "✓" : ""}
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}

      <style>{`
        .gh-language-menu {
          position: relative;
          z-index: 100;
          width: 168px;
        }

        .gh-language-trigger {
          display: grid;
          width: 100%;
          min-height: 46px;
          align-items: center;
          gap: 10px;
          grid-template-columns: 34px minmax(0, 1fr) 18px;
          border: 1px solid var(--border);
          border-radius: var(--radius-pill);
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface);
          color: var(--text);
          padding: 6px 10px 6px 7px;
          box-shadow: var(--shadow-soft);
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            background 180ms ease;
        }

        .gh-language-trigger:hover {
          transform: translateY(-1px);
          border-color: color-mix(in srgb, var(--primary) 36%, var(--border));
        }

        .gh-language-trigger-flag {
          display: grid;
          width: 34px;
          height: 34px;
          place-items: center;
          border-radius: 50%;
          background: var(--surface-strong);
          color: var(--primary-strong);
          font-size: 0.82rem;
          font-weight: 950;
          box-shadow: inset 0 0 0 1px var(--border);
        }

        .gh-language-trigger-copy {
          display: grid;
          min-width: 0;
          text-align: left;
        }

        .gh-language-trigger-code {
          color: var(--primary-strong);
          font-size: 0.68rem;
          font-weight: 950;
          letter-spacing: 0.14em;
          line-height: 1;
          text-transform: uppercase;
        }

        .gh-language-trigger-name {
          overflow: hidden;
          color: var(--text);
          font-size: 0.84rem;
          font-weight: 900;
          line-height: 1.15;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .gh-language-trigger-chevron {
          display: grid;
          place-items: center;
          color: var(--muted);
          font-size: 0.82rem;
          font-weight: 950;
          transition: transform 180ms ease;
        }

        .gh-language-trigger-chevron-open {
          transform: rotate(180deg);
        }

        .gh-language-panel {
          position: absolute;
          top: calc(100% + 12px);
          right: 0;
          display: grid;
          width: min(440px, calc(100vw - 32px));
          gap: 8px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--border);
          border-radius: 26px;
          background: color-mix(in srgb, var(--surface) 96%, transparent);
          padding: 10px;
          box-shadow: var(--shadow);
          backdrop-filter: blur(18px);
        }

        .gh-language-option {
          display: grid;
          min-height: 68px;
          align-items: center;
          gap: 10px;
          grid-template-columns: 42px minmax(0, 1fr) 28px;
          border: 1px solid transparent;
          border-radius: 18px;
          color: var(--text);
          padding: 10px;
          transition:
            background 180ms ease,
            border-color 180ms ease,
            transform 180ms ease;
        }

        .gh-language-option:hover {
          transform: translateY(-1px);
          border-color: var(--border);
          background: var(--background-soft);
        }

        .gh-language-option-active {
          border-color: color-mix(in srgb, var(--primary) 40%, var(--border));
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
        }

        .gh-language-option-flag {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 15px;
          background: var(--surface-strong);
          color: var(--primary-strong);
          font-size: 0.9rem;
          font-weight: 950;
          box-shadow: inset 0 0 0 1px var(--border);
        }

        .gh-language-option-copy {
          display: grid;
          min-width: 0;
          gap: 4px;
        }

        .gh-language-option-copy strong {
          overflow: hidden;
          color: var(--text);
          font-size: 0.94rem;
          font-weight: 950;
          line-height: 1.1;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .gh-language-option-copy small {
          color: var(--muted);
          font-size: 0.7rem;
          font-weight: 950;
          letter-spacing: 0.13em;
          line-height: 1;
          text-transform: uppercase;
        }

        .gh-language-option-check {
          display: grid;
          width: 28px;
          height: 28px;
          place-items: center;
          border-radius: 50%;
          background: var(--primary);
          color: white;
          font-size: 0.8rem;
          font-weight: 950;
        }

        .gh-language-option:not(.gh-language-option-active)
          .gh-language-option-check {
          background: transparent;
        }

        .mobile-language-panel .gh-language-menu {
          width: 100%;
        }

        .mobile-language-panel .gh-language-trigger {
          min-height: 56px;
          grid-template-columns: 40px minmax(0, 1fr) 18px;
          padding: 8px 12px 8px 8px;
        }

        .mobile-language-panel .gh-language-trigger-flag {
          width: 40px;
          height: 40px;
        }

        .mobile-language-panel .gh-language-panel {
          position: static;
          width: 100%;
          margin-top: 10px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          box-shadow: none;
        }

        @media (max-width: 760px) {
          .gh-language-menu {
            width: 150px;
          }

          .gh-language-panel {
            width: min(360px, calc(100vw - 24px));
            grid-template-columns: 1fr;
          }

          .mobile-language-panel .gh-language-menu {
            width: 100%;
          }

          .mobile-language-panel .gh-language-panel {
            width: 100%;
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
