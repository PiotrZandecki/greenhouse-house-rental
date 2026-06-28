import type { Dictionary } from "@/data/dictionaries";
import type { House, Locale } from "@/types/site";
import { LocalizedLink } from "@/components/ui/LocalizedLink";

type HouseCardProps = {
  house: House;
  locale: Locale;
  dictionary: Dictionary;
};

export function HouseCard({ house, locale, dictionary }: HouseCardProps) {
  return (
    <article className={`house-card house-card-${house.id}`}>
      <div className="house-card-image">
        <span>{house.name}</span>
      </div>

      <div className="house-card-content">
        <div>
          <p className="eyebrow">{house.location[locale]}</p>
          <h3>{house.name}</h3>
          <p>{house.subtitle[locale]}</p>
        </div>

        <div className="house-facts">
          <span>
            {house.capacity} {dictionary.common.guests}
          </span>
          <span>
            {house.bedrooms} {dictionary.common.bedrooms}
          </span>
          <span>
            {house.bathrooms} {dictionary.common.bathrooms}
          </span>
          <span>{house.area}</span>
        </div>

        <div className="house-card-footer">
          <strong>
            {dictionary.common.from} {house.priceFrom}/{dictionary.common.night}
          </strong>
          <LocalizedLink
            className="button button-secondary"
            href="/houses"
            locale={locale}
          >
            {dictionary.common.learnMore}
          </LocalizedLink>
        </div>
      </div>
    </article>
  );
}
