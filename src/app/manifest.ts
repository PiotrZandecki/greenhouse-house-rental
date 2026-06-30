import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Greenhouse House Rental",
    short_name: "Greenhouse",
    description: "Private tropical stays in General Santos City, Philippines.",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f3ea",
    theme_color: "#2f6b45",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
