import type { Metadata } from "next";
import { Bebas_Neue, Geist } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - DJ urbano en Barcelona`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    title: `${siteConfig.name} - DJ urbano en Barcelona`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - DJ urbano en Barcelona`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${geistSans.variable}`}>
      <body className="bg-[var(--color-base)] text-[var(--color-foreground)] min-h-[100dvh] flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
