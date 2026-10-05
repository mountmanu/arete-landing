"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLang } from "@/contexts/LangContext";
import { waLink, WA_MESSAGES } from "@/lib/config";

const content = {
  es: {
    eyebrow: "Contacto",
    h2: "Hablemos de tu operación.",
    body: "30 minutos, sin costo. Trato directo con el fundador.",
    cta1: "WhatsApp",
    cta2: "Agendar 30 minutos",
  },
  en: {
    eyebrow: "Contact",
    h2: "Let's talk about your operation.",
    body: "30 minutes, no charge. Direct line to the founder.",
    cta1: "WhatsApp",
    cta2: "Book 30 minutes",
  },
};

export function ContactCTA() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow mb-8">{t.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="text-balance"
            style={{ fontSize: "var(--text-display-xl)" }}
          >
            {t.h2}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl mx-auto text-[var(--text-body-lg)] text-ink leading-relaxed">
            {t.body}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink(WA_MESSAGES[lang].general)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsAppIcon />
              {t.cta1}
            </a>
            <Link href="/contacto" className="btn-secondary">
              {t.cta2}
            </Link>
            <a href="mailto:manuel@arete.business" className="btn-secondary">
              manuel@arete.business
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
