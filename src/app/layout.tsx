import type { Metadata } from "next";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Greenhouse House Rental",
  description:
    "A multilingual portfolio concept for a premium two-house rental website.",
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
