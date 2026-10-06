import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "LINCE Black — Cumplimiento PLD para joyería y relojería",
    template: "%s · LINCE Black",
  },
  description:
    "Suite de Cumplimiento PLD para casas de joyería, relojería, metales y piedras preciosas. Aviso al SPPLD en 24 h, bitácora a 10 años, Bóveda white-label. Construida sobre LINCE Sistemas.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "LINCE Black",
    title: "LINCE Black — Cumplimiento PLD para joyería y relojería de lujo",
    description:
      "Suite de Cumplimiento PLD para casas de joyería, relojería, metales y piedras preciosas en México y Colombia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "LINCE Black — Cumplimiento PLD",
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
