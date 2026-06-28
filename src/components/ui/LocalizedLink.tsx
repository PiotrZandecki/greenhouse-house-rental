import Link from "next/link";
import type { ComponentProps } from "react";

import type { Locale } from "@/types/site";
import { localizePath } from "@/lib/i18n";

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  locale: Locale;
};

export function LocalizedLink({ href, locale, ...props }: LocalizedLinkProps) {
  return <Link href={localizePath(locale, href)} {...props} />;
}
