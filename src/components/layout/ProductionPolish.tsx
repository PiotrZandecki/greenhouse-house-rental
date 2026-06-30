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

      :target {
        scroll-margin-top: 120px;
      }

      [id] {
        scroll-margin-top: 120px;
      }

      .skip-to-content {
        position: fixed;
        top: 14px;
        left: 14px;
        z-index: 10000;
        transform: translateY(-140%);
        border: 1px solid var(--border);
        border-radius: var(--radius-pill);
        background: var(--surface);
        color: var(--text);
        box-shadow: var(--shadow);
        font-weight: 950;
        padding: 12px 16px;
        transition: transform 160ms ease;
      }

      .skip-to-content:focus {
        transform: translateY(0);
        outline: 3px solid color-mix(in srgb, var(--primary) 60%, white);
        outline-offset: 3px;
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
      }

      @media (max-width: 760px) {
        .site-shell {
          width: min(100% - 24px, var(--shell-width, 1320px));
        }

        .page-section,
        .section {
          padding-block: clamp(44px, 12vw, 72px);
        }

        .hero-section {
          padding-block: clamp(44px, 12vw, 84px);
        }

        .hero-grid {
          gap: 34px;
        }

        .hero-copy h1,
        .page-heading h1 {
          font-size: clamp(3.2rem, 17vw, 5.8rem);
          line-height: 0.9;
          letter-spacing: -0.09em;
        }

        .section-heading h2,
        .final-cta h2 {
          font-size: clamp(2.4rem, 13vw, 4.6rem);
          line-height: 0.98;
          letter-spacing: -0.08em;
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
          font-size: clamp(2rem, 11vw, 3.6rem);
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
      }

      @media (max-width: 420px) {
        .site-shell {
          width: min(100% - 18px, var(--shell-width, 1320px));
        }

        .hero-copy h1,
        .page-heading h1 {
          font-size: clamp(2.9rem, 17vw, 4.6rem);
        }

        .section-heading h2,
        .final-cta h2 {
          font-size: clamp(2.25rem, 13vw, 3.8rem);
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
