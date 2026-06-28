import Link from "next/link";

import { defaultLocale, localeLabels, locales } from "@/lib/i18n";

export default function RootPage() {
  return (
    <main className="root-language-page">
      <section className="root-language-card">
        <p className="eyebrow">Greenhouse House Rental</p>
        <h1>Choose your language</h1>
        <p>
          Select a language to continue to the Greenhouse House Rental website.
        </p>

        <div className="root-language-grid">
          {locales.map((locale) => (
            <Link
              className={`root-language-link ${
                locale === defaultLocale ? "root-language-link-primary" : ""
              }`}
              href={`/${locale}`}
              key={locale}
            >
              {localeLabels[locale]}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
