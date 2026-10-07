import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Beltry — DJ Urbano en Barcelona",
  description: "Web oficial de Beltry, DJ urbano de Barcelona. Booking para salas, festivales y eventos privados. Escucha La Penúltima Vol.1 y su live set en Millennium.",
  keywords: ["DJ urbano Barcelona", "booking DJ Barcelona", "DJ reggaeton Barcelona", "mix urbano 2026", "Beltry"],
  openGraph: {
    locale: "es_ES",
    type: "website",
    title: "Beltry — DJ Urbano en Barcelona",
    description: "Web oficial de Beltry, DJ urbano de Barcelona. Booking para salas, festivales y eventos privados.",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="antialiased selection:bg-accent selection:text-white">
        <div 
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay animate-grain" 
          style={{ backgroundImage: 'url("/assets/noise.png")' }}
        />
        {children}
      </body>
    </html>
  );
}
