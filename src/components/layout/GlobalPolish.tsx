export function GlobalPolish() {
  return (
    <style>{`
      .skip-link {
        position: fixed;
        left: 16px;
        top: 16px;
        z-index: 9999;
        transform: translateY(-140%);
        border: 1px solid var(--border);
        border-radius: var(--radius-pill);
        background: var(--surface-strong);
        color: var(--text);
        font-weight: 950;
        padding: 12px 16px;
        box-shadow: var(--shadow);
        transition: transform 180ms ease;
      }

      .skip-link:focus {
        transform: translateY(0);
      }

      :where(a, button, input, textarea, select):focus-visible {
        outline: 3px solid color-mix(in srgb, var(--primary) 68%, white);
        outline-offset: 4px;
      }

      ::selection {
        background: var(--primary);
        color: white;
      }

      .button:active,
      .language-trigger:active,
      .gh-language-trigger:active,
      .mobile-menu-button:active,
      .theme-toggle:active {
        transform: translateY(1px) scale(0.98);
      }

      .house-card,
      .gallery-card,
      .review-card,
      .contact-card,
      .calendar-card,
      .booking-aside,
      .property-panel,
      .split-card,
      .final-cta,
      .booking-flow-card,
      .contact-platform-card,
      .gallery-house-card,
      .gallery-featured-card,
      .reviews-score-card,
      .welcome-copy-card,
      .story-card {
        animation: greenhouse-reveal 560ms ease both;
      }

      .house-card:nth-child(2),
      .gallery-card:nth-child(2),
      .review-card:nth-child(2),
      .contact-card:nth-child(2),
      .booking-flow-card:nth-child(2),
      .contact-platform-card:nth-child(2),
      .gallery-house-card:nth-child(2) {
        animation-delay: 70ms;
      }

      .house-card:nth-child(3),
      .gallery-card:nth-child(3),
      .review-card:nth-child(3),
      .contact-card:nth-child(3),
      .booking-flow-card:nth-child(3),
      .contact-platform-card:nth-child(3),
      .gallery-house-card:nth-child(3) {
        animation-delay: 120ms;
      }

      .house-card-image img,
      .gallery-preview-card img,
      .gallery-featured-card img,
      .gallery-house-image img,
      .enhanced-property-media img,
      .home-photo-hero img,
      .welcome-photo img,
      .story-photo img {
        transition: transform 720ms ease, filter 720ms ease;
      }

      .house-card:hover .house-card-image img,
      .gallery-preview-card:hover img,
      .gallery-featured-card:hover img,
      .gallery-house-card:hover .gallery-house-image img,
      .enhanced-property-panel:hover .enhanced-property-media img {
        transform: scale(1.045);
        filter: saturate(1.04) contrast(1.02);
      }

      @keyframes greenhouse-reveal {
        from {
          opacity: 0;
          transform: translateY(18px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          animation-duration: 0.001ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 0.001ms !important;
        }
      }
    `}</style>
  );
}
