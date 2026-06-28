import type { Dictionary } from "@/data/dictionaries";
import { reviews } from "@/data/reviews";
import type { Locale, ReviewSource } from "@/types/site";

type ReviewsSectionProps = {
  dictionary: Dictionary;
  locale: Locale;
};

const sourceLabels: Record<ReviewSource, string> = {
  google: "Google",
  facebook: "Facebook",
};

export function ReviewsSection({ dictionary, locale }: ReviewsSectionProps) {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className="section reviews-section-enhanced">
      <div className="site-shell">
        <div className="reviews-hero">
          <div className="section-heading section-heading-left">
            <p className="eyebrow">{dictionary.home.reviewsTitle}</p>
            <h2>{dictionary.home.reviewsTitle}</h2>
            <p>{dictionary.home.reviewsDescription}</p>
          </div>

          <div className="reviews-score-card">
            <span>★★★★★</span>
            <strong>{averageRating.toFixed(1)}</strong>
            <small>{dictionary.reviews.apiNote}</small>
          </div>
        </div>

        <div className="review-source-grid review-source-grid-enhanced">
          <article className="review-source-card">
            <span>★★★★★</span>
            <strong>{dictionary.reviews.googleReady}</strong>
            <p>{dictionary.contactPage.facebookDescription}</p>
          </article>

          <article className="review-source-card">
            <span>★★★★★</span>
            <strong>{dictionary.reviews.facebookReady}</strong>
            <p>{dictionary.contactPage.facebookDescription}</p>
          </article>
        </div>

        <div className="reviews-grid reviews-grid-enhanced">
          {reviews.map((review, index) => (
            <article
              className={`review-card review-card-enhanced review-card-${index + 1}`}
              key={review.id}
            >
              <div className="review-card-top">
                <span className="review-source">
                  {sourceLabels[review.source]}
                </span>
                <span>{"★".repeat(review.rating)}</span>
              </div>

              <p>{review.text[locale]}</p>

              <footer>
                <strong>{review.author}</strong>
                <span>{review.date}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .reviews-section-enhanced {
          position: relative;
          overflow: hidden;
        }

        .reviews-section-enhanced::before {
          position: absolute;
          top: 8rem;
          left: -18rem;
          width: 42rem;
          height: 42rem;
          content: "";
          border-radius: 50%;
          background: radial-gradient(circle, var(--primary-soft), transparent 70%);
          opacity: 0.75;
          pointer-events: none;
        }

        .reviews-hero {
          position: relative;
          z-index: 1;
          display: grid;
          align-items: end;
          gap: 28px;
          grid-template-columns: minmax(0, 1fr) minmax(300px, 0.34fr);
          margin-bottom: 28px;
        }

        .reviews-score-card {
          display: grid;
          gap: 8px;
          border: 1px solid var(--border);
          border-radius: 32px;
          background:
            linear-gradient(135deg, var(--primary-soft), transparent),
            var(--surface);
          box-shadow: var(--shadow-soft);
          padding: 28px;
        }

        .reviews-score-card span {
          color: var(--accent);
          letter-spacing: 0.16em;
        }

        .reviews-score-card strong {
          font-size: clamp(3rem, 5vw, 5.5rem);
          letter-spacing: -0.08em;
          line-height: 0.9;
        }

        .reviews-score-card small {
          color: var(--muted);
          font-weight: 800;
          line-height: 1.5;
        }

        .review-source-grid-enhanced {
          position: relative;
          z-index: 1;
        }

        .review-source-grid-enhanced .review-source-card {
          box-shadow: var(--shadow-soft);
        }

        .reviews-grid-enhanced {
          position: relative;
          z-index: 1;
        }

        .review-card-enhanced {
          min-height: 300px;
          display: grid;
          align-content: space-between;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            box-shadow 180ms ease;
        }

        .review-card-enhanced:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--primary) 38%, var(--border));
          box-shadow: var(--shadow);
        }

        .review-card-enhanced p {
          margin: 26px 0;
          font-size: clamp(1.02rem, 1.05vw, 1.16rem);
        }

        .review-card-enhanced footer strong {
          display: block;
          letter-spacing: -0.02em;
        }

        @media (max-width: 1180px) {
          .reviews-hero {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
