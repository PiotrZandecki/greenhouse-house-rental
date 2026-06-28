"use client";

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
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { href: "/", label: dictionary.nav.home },
    { href: "/houses", label: dictionary.nav.houses },
    { href: "/gallery", label: dictionary.nav.gallery },
    { href: "/booking", label: dictionary.nav.booking },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <LocalizedLink className="brand-link" href="/" locale={locale}>
          <span className="brand-mark">G</span>
          <span>
            <strong>Greenhouse</strong>
            <small>House Rental</small>
          </span>
        </LocalizedLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <LocalizedLink href={item.href} key={item.href} locale={locale}>
              {item.label}
            </LocalizedLink>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher
            currentLocale={locale}
            label={dictionary.common.language}
          />
          <ThemeToggle label={dictionary.common.theme} />
          <LocalizedLink
            className="button button-small button-primary"
            href="/booking"
            locale={locale}
          >
            {dictionary.common.bookNow}
          </LocalizedLink>
          <button
            aria-expanded={isOpen}
            aria-label="Open menu"
            className="mobile-menu-button"
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
            {navigation.map((item) => (
              <LocalizedLink
                href={item.href}
                key={item.href}
                locale={locale}
                className="mobile-nav-link"
              >
                {item.label}
              </LocalizedLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
