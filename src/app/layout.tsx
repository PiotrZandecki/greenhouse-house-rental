import type { Metadata } from "next";

import { GlobalPolish } from "@/components/layout/GlobalPolish";
import { buildWelcomeMetadata } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = buildWelcomeMetadata();

const themeScript = `
(function () {
  try {
    var storedTheme = window.localStorage.getItem("greenhouse-theme");
    var theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    document.documentElement.dataset.theme = theme;
  } catch (error) {
    document.documentElement.dataset.theme = "light";
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <GlobalPolish />
        {children}
      </body>
    </html>
  );
}
