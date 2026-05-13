import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Areté Black — Cumplimiento PLD para joyería y relojería",
    template: "%s · Areté Black",
  },
  description:
    "Suite de Cumplimiento PLD para casas de joyería, relojería, metales y piedras preciosas. Aviso al SPPLD en 24 h, bitácora a 10 años, Bóveda white-label. Construida sobre Areté Soluciones.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Areté Black",
    title: "Areté Black — Cumplimiento PLD para joyería y relojería de lujo",
    description:
      "Suite de Cumplimiento PLD para casas de joyería, relojería, metales y piedras preciosas en México y Colombia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areté Black — Cumplimiento PLD",
    description:
      "Suite de Cumplimiento PLD para joyería, relojería, metales y piedras preciosas.",
  },
  robots: {
    // Black is acceso por solicitud — discoverable but not aggressively indexed.
    index: true,
    follow: true,
  },
};

export default function BlackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
