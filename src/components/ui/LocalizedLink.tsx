import Link from "next/link";

import type { Locale } from "@/types/site";
import { localizePath } from "@/lib/i18n";

type LocalizedLinkProps = {
  locale: Locale;
  href: string;
  className?: string;
  children: React.ReactNode;
};

export function LocalizedLink({
  locale,
  href,
  className,
  children,
}: LocalizedLinkProps) {
  return (
    <Link className={className} href={localizePath(locale, href)}>
      {children}
    </Link>
  );
}
