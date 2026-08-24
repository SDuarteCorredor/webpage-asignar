import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealInit from "@/components/ScrollRevealInit";
import { GoogleTagManager, GTMNoScript } from "@/components/GoogleTagManager";
import { SITE_URL } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  // Resuelve las URLs relativas (Open Graph, canonical) a absolutas.
  metadataBase: new URL(SITE_URL),
  // OJO: el canonical NO va aquí. Next fusiona `metadata` de forma shallow por
  // clave de primer nivel: si el layout raíz declara `alternates`, toda página
  // que no lo sobrescriba hereda el objeto completo y termina apuntando su
  // canonical al home — Google las trataría como duplicados y solo indexaría
  // el home. Cada página declara el suyo (ver src/app/*/page.tsx).
  title: {
    default: "Personal temporal y outsourcing en Colombia | Asignar SAS",
    template: "%s | Asignar SAS",
  },
  description:
    "Más de 20 años conectando talento humano con las mejores empresas de Colombia. Servicios temporales, outsourcing y selección de personal en hotelería, restaurantes, logística e industria.",
  keywords: [
    "servicios temporales Colombia",
    "empleo temporal",
    "outsourcing Colombia",
    "trabajo hotelería",
    "empleo restaurantes",
    "selección de personal",
    "Asignar SAS",
    "trabajo Medellín",
    "trabajo Bogotá",
  ],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Asignar SAS",
    title: "Asignar SAS — Creemos en ti y en tu talento",
    description:
      "Más de 20 años conectando talento humano con las mejores empresas de Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${plusJakarta.variable} ${dmSans.variable} ${inter.variable}`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <GoogleTagManager />
      </head>
      <body className="min-h-screen flex flex-col">
        <GTMNoScript />
        <ScrollRevealInit />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
