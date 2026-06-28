import Image from "next/image";

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
        <Image
          alt={house.subtitle[locale]}
          fill
          priority={house.id === "fern-house"}
          sizes="(max-width: 760px) 100vw, 50vw"
          src={house.coverImage}
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        <span
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.48))",
          }}
        />

        <span
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          {house.name}
        </span>
      </div>

      <div className="house-card-content">
        <p className="eyebrow">{house.location[locale]}</p>
        <h3>{house.name}</h3>
        <p>{house.subtitle[locale]}</p>

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
