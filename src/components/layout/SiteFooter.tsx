import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <div className="brand-link brand-link-footer">
            <span className="brand-mark">G</span>
            <span>
              <strong>Greenhouse</strong>
              <small>House Rental</small>
            </span>
          </div>
          <p>{dictionary.footer.description}</p>
          <span className="demo-note">{dictionary.footer.legalNote}</span>
        </div>

        <div>
          <h3>{dictionary.footer.quickLinks}</h3>
          <div className="footer-links">
            <LocalizedLink href="/" locale={locale}>
              {dictionary.nav.home}
            </LocalizedLink>
            <LocalizedLink href="/houses" locale={locale}>
              {dictionary.nav.houses}
            </LocalizedLink>
            <LocalizedLink href="/gallery" locale={locale}>
              {dictionary.nav.gallery}
            </LocalizedLink>
            <LocalizedLink href="/booking" locale={locale}>
              {dictionary.nav.booking}
            </LocalizedLink>
            <LocalizedLink href="/contact" locale={locale}>
              {dictionary.nav.contact}
            </LocalizedLink>
          </div>
        </div>

        <div>
          <h3>{dictionary.footer.bookingLinks}</h3>
          <div className="footer-links">
            <a href="https://www.booking.com" rel="noreferrer" target="_blank">
              Booking.com
            </a>
            <a href="https://www.agoda.com" rel="noreferrer" target="_blank">
              Agoda
            </a>
            <a href="https://www.airbnb.com" rel="noreferrer" target="_blank">
              Airbnb
            </a>
            <a href="https://www.facebook.com" rel="noreferrer" target="_blank">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
