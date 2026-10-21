import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0506",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["400", "600", "700", "800"],
});

const siteTitle = "Beltry — DJ urbano y reggaeton en Barcelona | Booking";
const siteDescription = "Beltry, DJ urbano de Barcelona: lo que suena hoy y los temazos de siempre en una misma sesión. Booking para salas, festivales y eventos privados.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beltry DJ Urbano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bricolage.variable}`}>
      <head>
        <link rel="dns-prefetch" href="https://potenciatunegocio.eu" />
        <link rel="preconnect" href="https://potenciatunegocio.eu" crossOrigin="" />
      </head>
      <body className="antialiased selection:bg-accent selection:text-white font-sans">
        <div 
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay animate-grain" 
          style={{ backgroundImage: 'url("/assets/noise.png")' }}
        />
        {children}
      </body>
    </html>
  );
}
