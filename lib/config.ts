/**
 * Single source of truth for conversion — offer, price, and the WhatsApp
 * channel every CTA funnels into. Change the price or number here once and it
 * propagates across the homepage offer, Nav, ContactCTA, and the AI chat agent.
 */

// WhatsApp Business number every CTA funnels into. Country code first, no "+",
// no spaces. Overridable at build time via NEXT_PUBLIC_WHATSAPP_NUMBER.
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528341963524";

/** Build a wa.me deep link with a pre-filled first message. */
export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Canonical pre-filled messages so every entry point opens the same thread. */
export const WA_MESSAGES = {
  es: {
    piloto:
      "Hola Manuel, quiero mi piloto LINCE de 72 horas. Mi negocio es: ",
    general: "Hola Manuel, vi lincesistemas.com y quiero platicar sobre un proyecto.",
    nav: "Hola Manuel, me gustaría platicar sobre LINCE.",
  },
  en: {
    piloto:
      "Hi Manuel, I want the 72-hour LINCE pilot. My business is: ",
    general: "Hi Manuel, I found lincesistemas.com and want to talk about a project.",
    nav: "Hi Manuel, I'd like to talk about LINCE.",
  },
} as const;
