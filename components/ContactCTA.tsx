"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const content = {
  es: {
    eyebrow: "Hablemos",
    h2: "Clientes o conversaciones — directamente conmigo.",
    body: "Trabajo con empresas mexicanas como consultor independiente. Si vienes por un proyecto, hablamos del problema. Si vienes por otro motivo, también.",
    cta1: "Agendar 30 minutos",
  },
  en: {
    eyebrow: "Let's talk",
    h2: "Clients or conversations — direct line.",
    body: "I work with Mexican businesses as an independent consultant. If you're here for a project, let's discuss the problem. If you're here for another reason, I'm open to that too.",
    cta1: "Book 30 minutes",
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
            <Link href="/contacto" className="btn-primary">
              {t.cta1}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7H13M13 7L7 1M13 7L7 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
