"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { LocalizedLink } from "@/components/ui/LocalizedLink";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { href: "/home", label: dictionary.nav.home },
    { href: "/houses", label: dictionary.nav.houses },
    { href: "/gallery", label: dictionary.nav.gallery },
    { href: "/booking", label: dictionary.nav.booking },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  function isActivePath(href: string) {
    const localizedHref = `/${locale}${href}`;
    return (
      pathname === localizedHref || pathname.startsWith(`${localizedHref}/`)
    );
  }

  function closeMobileMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <LocalizedLink className="brand-link" href="/home" locale={locale}>
          <span className="brand-mark">G</span>
          <span>
            <strong>Greenhouse</strong>
            <small>House Rental</small>
          </span>
        </LocalizedLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <LocalizedLink
              className={isActivePath(item.href) ? "nav-link-active" : ""}
              href={item.href}
              key={item.href}
              locale={locale}
            >
              {item.label}
            </LocalizedLink>
          ))}
        </nav>

        <div className="header-actions">
          <div className="desktop-language-wrapper">
            <LanguageSwitcher
              currentLocale={locale}
              label={dictionary.common.language}
            />
          </div>

          <ThemeToggle label={dictionary.common.theme} />

          <LocalizedLink
            className="button button-small button-primary desktop-booking-button"
            href="/booking"
            locale={locale}
          >
            {dictionary.common.bookNow}
          </LocalizedLink>

          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`mobile-menu-button ${
              isOpen ? "mobile-menu-button-open" : ""
            }`}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="mobile-nav">
          <div className="site-shell mobile-nav-inner">
            <nav className="mobile-nav-links" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <LocalizedLink
                  className={`mobile-nav-link ${
                    isActivePath(item.href) ? "mobile-nav-link-active" : ""
                  }`}
                  href={item.href}
                  key={item.href}
                  locale={locale}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </LocalizedLink>
              ))}
            </nav>

            <div className="mobile-language-panel">
              <p className="mobile-language-title">
                {dictionary.common.language}
              </p>
              <LanguageSwitcher
                currentLocale={locale}
                label={dictionary.common.language}
              />
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        .desktop-nav .nav-link-active {
          background: var(--primary);
          color: white;
        }

        .desktop-nav .nav-link-active:hover {
          background: var(--primary);
          color: white;
        }

        .mobile-nav-link-active {
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface-strong);
          color: var(--primary-strong);
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--primary) 34%, var(--border));
        }
      `}</style>
    </header>
  );
}
