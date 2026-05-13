import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://arete.mx"),
  title: {
    default: "Areté — Software AI-nativo que compone valor",
    template: "%s · Areté",
  },
  description:
    "Areté Soluciones S.A. de C.V. — consultoría mexicana de software AI-nativo. Construimos sobre un núcleo reusable y empacamos por vertical: notarías, hospitales, restaurantes, comunidades y servicios profesionales.",
  keywords: [
    "Areté",
    "Areté Soluciones",
    "consultoría AI México",
    "software AI-nativo",
    "automatización notarial",
    "BI restaurantes",
    "RAG México",
    "compound AI",
  ],
  authors: [{ name: "Areté Soluciones S.A. de C.V." }],
  creator: "Areté Soluciones S.A. de C.V.",
  publisher: "Areté Soluciones S.A. de C.V.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://arete.mx",
    siteName: "Areté",
    title: "Areté — Software AI-nativo que compone valor",
    description:
      "Núcleo reusable + packs verticales. Cada entrega compone valor sobre la anterior.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areté — Software AI-nativo que compone valor",
    description: "Núcleo reusable + packs verticales para SMBs mexicanas.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
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
        <SiteChrome>{children}</SiteChrome>
        <Analytics />
      </body>
    </html>
  );
}
