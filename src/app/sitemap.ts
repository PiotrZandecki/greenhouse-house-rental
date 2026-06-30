import type { MetadataRoute } from "next";

import { getSitemapEntries } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getSitemapEntries().map((url) => ({
    url,
    lastModified: now,
    changeFrequency: "weekly",
    priority: url.endsWith("/home") || url.endsWith(".pages.dev/") ? 1 : 0.8,
  }));
}
