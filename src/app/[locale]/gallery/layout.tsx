import type { Metadata } from "next";

import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildMetadata(locale, "gallery");
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
