import type { Dictionary } from "@/data/dictionaries";
import type { Locale } from "@/types/site";
import { reviews } from "@/data/reviews";

type ReviewsSectionProps = {
  locale: Locale;
  dictionary: Dictionary;
};

export function ReviewsSection({ locale, dictionary }: ReviewsSectionProps) {
  return (
    <section className="section section-muted">
      <div className="site-shell">
        <div className="section-heading">
          <p className="eyebrow">{dictionary.reviews.googleReady}</p>
          <h2>{dictionary.home.reviewsTitle}</h2>
          <p>{dictionary.home.reviewsDescription}</p>
        </div>

        <div className="review-source-grid">
          <div className="review-source-card">
            <strong>Google</strong>
            <span>★★★★★</span>
            <p>{dictionary.reviews.googleReady}</p>
          </div>
          <div className="review-source-card">
            <strong>Facebook</strong>
            <span>★★★★★</span>
            <p>{dictionary.reviews.facebookReady}</p>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.id}>
              <div className="review-card-top">
                <span className="review-source">{review.source}</span>
                <span>{"★".repeat(review.rating)}</span>
              </div>
              <p>“{review.text[locale]}”</p>
              <footer>
                <strong>{review.author}</strong>
                <span>{review.date}</span>
              </footer>
            </article>
          ))}
        </div>

        <p className="integration-note">{dictionary.reviews.apiNote}</p>
      </div>
    </section>
  );
}
