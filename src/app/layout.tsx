import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Greenhouse House Rental | General Santos City stays",
  description:
    "A multilingual rental website for two peaceful tropical homes in General Santos City, Philippines.",
};

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
      <body>{children}</body>
    </html>
  );
}
