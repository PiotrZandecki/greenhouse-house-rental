import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

const guideLabels: Record<Locale, string> = {
  en: "Guide",
  ceb: "Guide",
  tl: "Guide",
  ko: "가이드",
  es: "Guía",
  fr: "Guide",
  de: "Guide",
  pl: "Przewodnik",
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const quickLinks = [
    { href: "/home", label: dictionary.nav.home },
    { href: "/houses", label: dictionary.nav.houses },
    { href: "/gallery", label: dictionary.nav.gallery },
    { href: "/guide", label: guideLabels[locale] },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  const bookingLinks = [
    { href: "/booking", label: dictionary.common.bookNow },
    { href: "/houses", label: dictionary.common.viewHouses },
    { href: "/gallery", label: dictionary.common.viewGallery },
  ];

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <LocalizedLink
            className="brand-link brand-link-footer"
            href="/home"
            locale={locale}
          >
            <span className="brand-mark">G</span>
            <span>
              <strong>Greenhouse</strong>
              <small>House Rental</small>
            </span>
          </LocalizedLink>

          <p>{dictionary.footer.description}</p>
          <span className="demo-note">{dictionary.footer.legalNote}</span>
        </div>

        <div>
          <h3>{dictionary.footer.quickLinks}</h3>
          <nav className="footer-links">
            {quickLinks.map((link) => (
              <LocalizedLink href={link.href} key={link.href} locale={locale}>
                {link.label}
              </LocalizedLink>
            ))}
          </nav>
        </div>

        <div>
          <h3>{dictionary.footer.bookingLinks}</h3>
          <nav className="footer-links">
            {bookingLinks.map((link) => (
              <LocalizedLink href={link.href} key={link.href} locale={locale}>
                {link.label}
              </LocalizedLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
