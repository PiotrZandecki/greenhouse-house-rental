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

      html {
        scroll-padding-top: 118px;
      }

      h1,
      h2,
      h3 {
        overflow-wrap: anywhere;
        text-wrap: balance;
      }

      p {
        text-wrap: pretty;
      }

      .page-heading h1 {
        max-width: 1120px;
        margin-bottom: clamp(24px, 3vw, 42px) !important;
        font-size: clamp(3rem, 6.8vw, 6.8rem) !important;
        line-height: 1.02 !important;
        letter-spacing: -0.08em !important;
      }

      .page-heading h1 + p {
        margin-top: 0 !important;
      }

      .section-heading h2,
      .section-heading-left h2 {
        max-width: 980px;
        margin-bottom: clamp(20px, 2.5vw, 36px) !important;
        font-size: clamp(2.35rem, 4.6vw, 5rem) !important;
        line-height: 1.04 !important;
        letter-spacing: -0.07em !important;
      }

      .section-heading h2 + p,
      .section-heading-left h2 + p {
        margin-top: 0 !important;
      }

      .hero-copy h1 {
        max-width: 980px;
        margin-bottom: clamp(24px, 3vw, 44px) !important;
        font-size: clamp(3rem, 7vw, 7rem) !important;
        line-height: 1.02 !important;
        letter-spacing: -0.085em !important;
      }

      .hero-copy h1 + p {
        margin-top: 0 !important;
      }

      .welcome-copy-card h1 {
        margin-bottom: clamp(24px, 3vw, 42px) !important;
        font-size: clamp(3rem, 6.8vw, 6.3rem) !important;
        line-height: 1.02 !important;
        letter-spacing: -0.08em !important;
      }

      .welcome-copy-card h1 + p {
        margin-top: 0 !important;
      }

      .story-card h1 {
        margin-bottom: clamp(24px, 3vw, 42px) !important;
        font-size: clamp(2.7rem, 5.6vw, 5.3rem) !important;
        line-height: 1.04 !important;
        letter-spacing: -0.075em !important;
      }

      .story-card h1 + p {
        margin-top: 0 !important;
      }

      .house-detail-hero-content h1 {
        margin-bottom: clamp(28px, 4vw, 56px) !important;
        font-size: clamp(3.8rem, 8.4vw, 8.4rem) !important;
        line-height: 0.98 !important;
        letter-spacing: -0.09em !important;
      }

      .house-detail-hero-content h1 + p {
        margin-top: 0 !important;
      }

      .house-detail-main-card h2,
      .house-detail-card h2,
      .house-detail-map-copy h2,
      .house-detail-final-cta h2,
      .contact-stay-panel h2,
      .booking-planner-heading h2,
      .booking-summary-card h2,
      .enhanced-property-content h2 {
        margin-bottom: clamp(20px, 2.6vw, 38px) !important;
        font-size: clamp(2.1rem, 3.8vw, 4.2rem) !important;
        line-height: 1.04 !important;
        letter-spacing: -0.07em !important;
      }

      .house-detail-main-card h2 + p,
      .house-detail-card h2 + p,
      .house-detail-map-copy h2 + p,
      .house-detail-final-cta h2 + p,
      .contact-stay-panel h2 + p,
      .booking-planner-heading h2 + p,
      .booking-summary-card h2 + p,
      .enhanced-property-content h2 + p {
        margin-top: 0 !important;
      }

      .final-cta h2 {
        margin-bottom: clamp(24px, 3vw, 42px) !important;
        font-size: clamp(2.45rem, 4.8vw, 5.2rem) !important;
        line-height: 1.04 !important;
        letter-spacing: -0.075em !important;
      }

      .final-cta h2 + p {
        margin-top: 0 !important;
      }

      .gallery-featured-card-1 .gallery-featured-copy strong,
      .gallery-preview-card-1 .gallery-preview-copy strong,
      .house-detail-gallery-card-large strong {
        font-size: clamp(1.9rem, 3vw, 3.4rem) !important;
        line-height: 1.02 !important;
        letter-spacing: -0.065em !important;
      }

      .enhanced-property-media-copy strong {
        font-size: clamp(2rem, 3.2vw, 3.5rem) !important;
        line-height: 1.02 !important;
        letter-spacing: -0.07em !important;
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
      .story-card,
      .house-detail-main-card,
      .house-detail-side-card,
      .house-detail-card,
      .house-detail-map-section,
      .house-detail-final-cta {
        animation: greenhouse-reveal 560ms ease both;
      }

      .house-card:nth-child(2),
      .gallery-card:nth-child(2),
      .review-card:nth-child(2),
      .contact-card:nth-child(2),
      .booking-flow-card:nth-child(2),
      .contact-platform-card:nth-child(2),
      .gallery-house-card:nth-child(2),
      .house-detail-card:nth-child(2) {
        animation-delay: 70ms;
      }

      .house-card:nth-child(3),
      .gallery-card:nth-child(3),
      .review-card:nth-child(3),
      .contact-card:nth-child(3),
      .booking-flow-card:nth-child(3),
      .contact-platform-card:nth-child(3),
      .gallery-house-card:nth-child(3),
      .house-detail-card:nth-child(3) {
        animation-delay: 120ms;
      }

      .house-card-image img,
      .gallery-preview-card img,
      .gallery-featured-card img,
      .gallery-house-image img,
      .enhanced-property-media img,
      .home-photo-hero img,
      .welcome-photo img,
      .story-photo img,
      .house-detail-gallery-card img,
      .house-detail-hero img {
        transition: transform 720ms ease, filter 720ms ease;
      }

      .house-card:hover .house-card-image img,
      .gallery-preview-card:hover img,
      .gallery-featured-card:hover img,
      .gallery-house-card:hover .gallery-house-image img,
      .enhanced-property-panel:hover .enhanced-property-media img,
      .house-detail-gallery-card:hover img {
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

      @media (max-width: 980px) {
        .page-heading h1 {
          margin-bottom: clamp(22px, 5vw, 38px) !important;
          font-size: clamp(2.85rem, 11vw, 5.2rem) !important;
          line-height: 1.04 !important;
        }

        .hero-copy h1 {
          margin-bottom: clamp(22px, 5vw, 38px) !important;
          font-size: clamp(3rem, 11vw, 5.5rem) !important;
          line-height: 1.04 !important;
        }

        .house-detail-hero-content h1 {
          margin-bottom: clamp(26px, 6vw, 48px) !important;
          font-size: clamp(3.6rem, 13vw, 6.5rem) !important;
          line-height: 1 !important;
        }

        .section-heading h2,
        .section-heading-left h2,
        .final-cta h2 {
          margin-bottom: clamp(20px, 4vw, 34px) !important;
          font-size: clamp(2.25rem, 8vw, 4.3rem) !important;
          line-height: 1.05 !important;
        }
      }

      @media (max-width: 640px) {
        html {
          scroll-padding-top: 96px;
        }

        .page-heading h1 {
          margin-bottom: 22px !important;
          font-size: clamp(2.55rem, 13vw, 4.1rem) !important;
          line-height: 1.06 !important;
          letter-spacing: -0.07em !important;
        }

        .hero-copy h1,
        .welcome-copy-card h1,
        .story-card h1 {
          margin-bottom: 22px !important;
          font-size: clamp(2.65rem, 13vw, 4.25rem) !important;
          line-height: 1.06 !important;
          letter-spacing: -0.07em !important;
        }

        .house-detail-hero-content h1 {
          margin-bottom: 26px !important;
          font-size: clamp(3.25rem, 16vw, 5.1rem) !important;
          line-height: 1 !important;
          letter-spacing: -0.08em !important;
        }

        .section-heading h2,
        .section-heading-left h2,
        .final-cta h2,
        .house-detail-main-card h2,
        .house-detail-card h2,
        .house-detail-map-copy h2,
        .house-detail-final-cta h2,
        .contact-stay-panel h2,
        .booking-planner-heading h2,
        .booking-summary-card h2,
        .enhanced-property-content h2 {
          margin-bottom: 20px !important;
          font-size: clamp(2rem, 10vw, 3.35rem) !important;
          line-height: 1.08 !important;
          letter-spacing: -0.065em !important;
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
