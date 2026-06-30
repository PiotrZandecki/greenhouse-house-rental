export function ProductionPolish() {
  return (
    <style>{`
      :root {
        scroll-behavior: smooth;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      html {
        text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
      }

      body {
        min-width: 320px;
        overflow-x: hidden;
      }

      img,
      svg,
      video,
      canvas,
      iframe {
        max-width: 100%;
      }

      button,
      input,
      select,
      textarea {
        font: inherit;
      }

      button,
      a {
        -webkit-tap-highlight-color: transparent;
      }

      button:not(:disabled),
      a[href],
      summary {
        cursor: pointer;
      }

      :target,
      [id] {
        scroll-margin-top: 112px;
      }

      a:focus-visible,
      button:focus-visible,
      input:focus-visible,
      select:focus-visible,
      textarea:focus-visible,
      [tabindex]:focus-visible {
        outline: 3px solid color-mix(in srgb, var(--primary) 62%, white);
        outline-offset: 4px;
      }

      .button:focus-visible,
      .nav-link:focus-visible,
      .language-option:focus-visible,
      .mobile-nav-link:focus-visible {
        outline-offset: 5px;
      }

      main {
        min-height: 60vh;
      }

      .page-section,
      .section {
        isolation: isolate;
      }

      .site-shell {
        width: min(100% - 32px, var(--shell-width, 1320px));
      }

      .page-heading h1,
      .section-heading h2,
      .hero-copy h1,
      .final-cta h2 {
        overflow-wrap: anywhere;
      }

      .page-heading p,
      .section-heading p,
      .hero-copy p,
      .final-cta p {
        max-width: 820px;
      }

      .hero-actions {
        align-items: center;
      }

      .button {
        text-align: center;
      }

      .button:disabled,
      button:disabled {
        pointer-events: none;
      }

      .house-card,
      .property-panel,
      .gallery-complete-card,
      .gallery-featured-card,
      .booking-planner-card,
      .booking-summary-card,
      .contact-platform-card,
      .contact-channel-card {
        overflow-wrap: anywhere;
      }

      .gallery-lightbox {
        overscroll-behavior: contain;
      }

      .gallery-lightbox-inner {
        outline: none;
      }

      .gallery-lightbox-close,
      .gallery-lightbox-actions button {
        min-width: 44px;
        min-height: 44px;
      }

      .calendar-day,
      .month-controls button,
      .booking-house-option {
        min-height: 44px;
      }

      .calendar-day:disabled {
        cursor: not-allowed;
      }

      iframe {
        background: var(--surface-strong);
      }

      /*
        Final visual balance polish.
        Goal: calmer first impression, smaller premium headings,
        and clearer space between headings and body copy.
      */

      .hero-section {
        padding-block: clamp(44px, 5.4vw, 82px);
      }

      .page-section,
      .section {
        padding-block: clamp(52px, 6.6vw, 96px);
      }

      .greenhouse-home-hero {
        padding-top: clamp(38px, 4.8vw, 66px);
        padding-bottom: clamp(52px, 6.4vw, 88px);
      }

      .hero-grid {
        align-items: center;
        gap: clamp(34px, 5.4vw, 82px);
      }

      .hero-copy {
        max-width: 720px;
      }

      body .hero-copy h1 {
        max-width: 720px;
        font-size: clamp(3.6rem, 6.2vw, 7.2rem);
        line-height: 0.94;
        letter-spacing: -0.078em;
      }

      body .page-heading h1 {
        max-width: 900px;
        font-size: clamp(3.2rem, 5.7vw, 6.6rem);
        line-height: 0.96;
        letter-spacing: -0.078em;
      }

      body .section-heading h2,
      body .final-cta h2,
      body .stay-path-card h2,
      body .guide-preview-card h2,
      body .why-compare-panel h2,
      body .contact-channel-card h2,
      body .contact-help-panel h2,
      body .contact-final-cta h2,
      body .booking-hero-copy h1,
      body .house-detail-main-card h2,
      body .house-detail-card h2,
      body .house-detail-map-copy h2,
      body .house-detail-final-cta h2,
      body .enhanced-property-content h2 {
        max-width: 940px;
        font-size: clamp(2.55rem, 4.7vw, 5.3rem);
        line-height: 1;
        letter-spacing: -0.072em;
      }

      body .house-detail-hero-content h1 {
        max-width: 1120px;
        font-size: clamp(3.8rem, 7.4vw, 8.2rem);
        line-height: 0.88;
        letter-spacing: -0.088em;
      }

      body .hero-copy h1 + p,
      body .page-heading h1 + p,
      body .section-heading h2 + p,
      body .final-cta h2 + p,
      body .guide-preview-card h2 + p,
      body .why-compare-panel h2 + p,
      body .contact-channel-card h2 + p,
      body .contact-help-panel h2 + p,
      body .contact-final-cta h2 + p,
      body .house-detail-hero-content h1 + p,
      body .house-detail-main-card h2 + p,
      body .house-detail-card h2 + p,
      body .house-detail-map-copy h2 + p,
      body .house-detail-final-cta h2 + p,
      body .enhanced-property-content h2 + p {
        margin-top: clamp(18px, 2.2vw, 30px);
      }

      body .hero-copy p,
      body .page-heading p,
      body .section-heading p,
      body .final-cta p,
      body .guide-preview-card p,
      body .why-compare-panel p,
      body .contact-channel-card p,
      body .contact-help-panel p,
      body .contact-final-cta p {
        line-height: 1.75;
      }

      .page-heading {
        margin-bottom: clamp(28px, 4vw, 52px);
      }

      .section-heading {
        margin-bottom: clamp(26px, 4vw, 48px);
      }

      .final-cta {
        padding-block: clamp(42px, 5.8vw, 76px);
      }

      .stay-path-card,
      .guide-preview-card,
      .contact-hero-panel,
      .booking-hero-panel,
      .contact-help-panel,
      .why-compare-panel {
        padding: clamp(28px, 4.2vw, 54px);
      }

      .house-detail-content {
        gap: clamp(42px, 5.6vw, 68px);
        padding-top: clamp(44px, 5.8vw, 68px);
      }

      .contact-section,
      .contact-channel-grid {
        margin-bottom: clamp(42px, 5.8vw, 68px);
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          scroll-behavior: auto !important;
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.001ms !important;
        }
      }

      @media (max-width: 1180px) {
        :target,
        [id] {
          scroll-margin-top: 96px;
        }

        .section-heading-row {
          align-items: start;
          grid-template-columns: 1fr;
        }

        .section-heading-row .button {
          width: fit-content;
        }

        body .hero-copy h1 {
          font-size: clamp(3.25rem, 8.6vw, 5.9rem);
        }

        body .page-heading h1 {
          font-size: clamp(3rem, 8vw, 5.6rem);
        }

        body .section-heading h2,
        body .final-cta h2,
        body .stay-path-card h2,
        body .guide-preview-card h2,
        body .why-compare-panel h2,
        body .contact-channel-card h2,
        body .contact-help-panel h2,
        body .contact-final-cta h2,
        body .booking-hero-copy h1,
        body .house-detail-main-card h2,
        body .house-detail-card h2,
        body .house-detail-map-copy h2,
        body .house-detail-final-cta h2,
        body .enhanced-property-content h2 {
          font-size: clamp(2.65rem, 7.1vw, 4.8rem);
        }
      }

      @media (max-width: 760px) {
        .site-shell {
          width: min(100% - 24px, var(--shell-width, 1320px));
        }

        .page-section,
        .section {
          padding-block: clamp(40px, 10vw, 62px);
        }

        .hero-section {
          padding-block: clamp(40px, 10vw, 68px);
        }

        .greenhouse-home-hero {
          padding-top: clamp(32px, 9vw, 50px);
          padding-bottom: clamp(40px, 10vw, 64px);
        }

        .hero-grid {
          gap: 30px;
        }

        body .hero-copy h1,
        body .page-heading h1 {
          font-size: clamp(2.75rem, 12.6vw, 4.45rem);
          line-height: 0.96;
          letter-spacing: -0.078em;
        }

        body .section-heading h2,
        body .final-cta h2,
        body .stay-path-card h2,
        body .guide-preview-card h2,
        body .why-compare-panel h2,
        body .contact-channel-card h2,
        body .contact-help-panel h2,
        body .contact-final-cta h2,
        body .booking-hero-copy h1,
        body .house-detail-main-card h2,
        body .house-detail-card h2,
        body .house-detail-map-copy h2,
        body .house-detail-final-cta h2,
        body .enhanced-property-content h2 {
          font-size: clamp(2.15rem, 9.8vw, 3.55rem);
          line-height: 1.03;
          letter-spacing: -0.068em;
        }

        body .house-detail-hero-content h1 {
          font-size: clamp(3rem, 13vw, 5rem);
          line-height: 0.94;
        }

        body .hero-copy h1 + p,
        body .page-heading h1 + p,
        body .section-heading h2 + p,
        body .final-cta h2 + p,
        body .guide-preview-card h2 + p,
        body .why-compare-panel h2 + p,
        body .contact-channel-card h2 + p,
        body .contact-help-panel h2 + p,
        body .contact-final-cta h2 + p,
        body .house-detail-hero-content h1 + p,
        body .house-detail-main-card h2 + p,
        body .house-detail-card h2 + p,
        body .house-detail-map-copy h2 + p,
        body .house-detail-final-cta h2 + p,
        body .enhanced-property-content h2 + p {
          margin-top: 18px;
        }

        .hero-actions {
          width: 100%;
        }

        .hero-actions .button {
          width: 100%;
          justify-content: center;
        }

        .button {
          min-height: 46px;
        }

        .hero-badges {
          gap: 8px;
        }

        .hero-badges span {
          max-width: 100%;
        }

        .house-card-footer,
        .property-actions,
        .platform-row {
          align-items: stretch;
          flex-direction: column;
        }

        .house-card-footer .button,
        .property-actions .button,
        .platform-row a {
          width: 100%;
          justify-content: center;
        }

        .calendar-grid {
          gap: 6px;
        }

        .calendar-day {
          min-height: 76px;
          padding: 8px 4px;
        }

        .calendar-day small {
          font-size: 0.62rem;
        }

        .gallery-lightbox-content h2,
        .booking-planner-heading h2,
        .booking-summary-card h2 {
          font-size: clamp(2rem, 9vw, 3.2rem);
          line-height: 1;
        }

        .gallery-lightbox {
          padding: 8px;
        }

        .gallery-lightbox-close {
          top: 12px;
          right: 12px;
        }

        .contact-detail-list a,
        .contact-detail-list span {
          overflow-wrap: anywhere;
        }

        .stay-path-card,
        .guide-preview-card,
        .contact-hero-panel,
        .booking-hero-panel,
        .contact-help-panel,
        .why-compare-panel {
          padding: 24px;
        }
      }

      @media (max-width: 420px) {
        .site-shell {
          width: min(100% - 18px, var(--shell-width, 1320px));
        }

        body .hero-copy h1,
        body .page-heading h1 {
          font-size: clamp(2.45rem, 12vw, 3.75rem);
        }

        body .section-heading h2,
        body .final-cta h2,
        body .stay-path-card h2,
        body .guide-preview-card h2,
        body .why-compare-panel h2,
        body .contact-channel-card h2,
        body .contact-help-panel h2,
        body .contact-final-cta h2,
        body .booking-hero-copy h1,
        body .house-detail-main-card h2,
        body .house-detail-card h2,
        body .house-detail-map-copy h2,
        body .house-detail-final-cta h2,
        body .enhanced-property-content h2 {
          font-size: clamp(2rem, 9.8vw, 3.1rem);
        }

        .calendar-day {
          min-height: 68px;
        }

        .calendar-day small {
          display: none;
        }
      }
    `}</style>
  );
}
