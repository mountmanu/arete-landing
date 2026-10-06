import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
import { LangProvider } from "@/contexts/LangContext";
import "./globals.css";

const displayFont = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-display-stack",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body-stack",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lincesistemas.com"),
  title: {
    default: "LINCE Sistemas — Sistemas a la medida para tu negocio",
    template: "%s · LINCE Sistemas",
  },
  description:
    "Soy Manuel Flores. Hago sistemas a la medida para negocios en México: notarías, hospitales, restaurantes, estacionamientos y despachos. Los construyo, los entrego funcionando y me quedo.",
  keywords: [
    "LINCE",
    "LINCE Sistemas",
    "sistemas a la medida",
    "software para PyMEs México",
    "desarrollador de sistemas Ciudad Victoria",
    "Manuel Flores",
    "sistema para notaría",
    "sistema para hospital",
    "tablero para restaurantes",
    "sistema para estacionamiento y autolavado",
    "desarrollo de software a la medida México",
  ],
  authors: [{ name: "LINCE Sistemas" }],
  creator: "LINCE Sistemas",
  publisher: "LINCE Sistemas",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://lincesistemas.com",
    siteName: "LINCE Sistemas",
    title: "LINCE Sistemas — Sistemas a la medida para tu negocio",
    description:
      "Construyo el sistema que tu negocio necesita, lo entrego funcionando y me quedo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LINCE Sistemas — Sistemas a la medida para tu negocio",
    description: "Construyo el sistema que tu negocio necesita, lo entrego funcionando y me quedo.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "96x96" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <LangProvider>
          <SiteChrome>{children}</SiteChrome>
        </LangProvider>
        <Analytics />
      </body>
    </html>
  );
}
