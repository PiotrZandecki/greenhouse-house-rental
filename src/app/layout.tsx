import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Greenhouse House Rental | General Santos City stays",
  description:
    "A multilingual rental website for two peaceful tropical homes in General Santos City, Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
