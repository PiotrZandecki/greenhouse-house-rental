import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "https://greenhouse-house-rental.pages.dev",
  ),
  title: {
    default: "Greenhouse House Rental",
    template: "%s | Greenhouse House Rental",
  },
  description:
    "Private tropical house rentals in General Santos City, South Cotabato, Philippines.",
  applicationName: "Greenhouse House Rental",
  authors: [{ name: "Greenhouse House Rental" }],
  creator: "Greenhouse House Rental",
  publisher: "Greenhouse House Rental",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "Greenhouse House Rental",
    title: "Greenhouse House Rental",
    description:
      "Private tropical house rentals in General Santos City, South Cotabato, Philippines.",
    images: [
      {
        url: "/images/fern-house/fern-exterior-01.webp",
        width: 1200,
        height: 900,
        alt: "Greenhouse House Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenhouse House Rental",
    description:
      "Private tropical house rentals in General Santos City, South Cotabato, Philippines.",
    images: ["/images/fern-house/fern-exterior-01.webp"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#f5efe2",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#07100b",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
