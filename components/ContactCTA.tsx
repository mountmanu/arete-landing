"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useLang } from "@/contexts/LangContext";
import { waLink, WA_MESSAGES } from "@/lib/config";

const content = {
  es: {
    eyebrow: "Hablemos",
    h2: "Clientes o conversaciones — directamente conmigo.",
    body: "Trabajo con empresas mexicanas como fundador de Areté Soluciones. Si vienes por un proyecto, hablamos del problema — sin intermediarios, te contesto yo.",
    cta1: "Escríbeme por WhatsApp",
    cta2: "Agendar 30 minutos",
  },
  en: {
    eyebrow: "Let's talk",
    h2: "Clients or conversations — direct line.",
    body: "I work with Mexican businesses as the founder of Areté Soluciones. If you're here for a project, let's discuss the problem — no middlemen, you're talking to me.",
    cta1: "Message me on WhatsApp",
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
