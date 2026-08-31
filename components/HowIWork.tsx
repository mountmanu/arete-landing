"use client";

import { Reveal } from "./Reveal";
import { useLang } from "@/contexts/LangContext";

const content = {
  es: {
    eyebrow: "Cómo opero",
    h2: "Sin intermediarios, sin ambigüedad.",
    cards: [
      {
        n: "01",
        title: "Consultor independiente, no agencia",
        body: "Trato directo conmigo en cada proyecto. Sin ejecutivos de cuenta, sin subcontratos, sin cambios de alcance a media obra.",
      },
      {
        n: "02",
        title: "Los sistemas se mantienen — no se entregan y olvidan",
        body: "Cada sistema queda monitoreado y con mantenimiento al día. Si algo se cae, lo veo yo antes que tú. Soporte mensual opcional.",
      },
      {
        n: "03",
        title: "4 a 12 semanas a producción",
        body: "Scope fijo, entrega funcional. El costo de mantenimiento es una fracción del proyecto inicial.",
      },
    ],
  },
  en: {
    eyebrow: "How I operate",
    h2: "No middlemen, no ambiguity.",
    cards: [
      {
        n: "01",
        title: "Independent consultant, not an agency",
        body: "Direct relationship with the founder on every engagement. No account managers, no subcontracts, no scope creep.",
      },
      {
        n: "02",
        title: "Systems are maintained — not delivered and forgotten",
        body: "Every system runs with an active SLA: monitored uptime, applied patches, optional monthly retainer.",
      },
      {
        n: "03",
        title: "4 to 12 weeks to production",
        body: "Fixed scope, functional delivery. Maintenance costs a fraction of the initial project.",
      },
    ],
  },
};

export function HowIWork() {
  const { lang } = useLang();
  const t = content[lang];

  return (
    <section className="py-[var(--spacing-section)] rule-top">
      <div className="container-editorial">
        <div className="mb-16">
          <Reveal>
            <p className="eyebrow mb-6">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              {t.h2}
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line rule-top rule-bottom">
          {t.cards.map((card, i) => (
            <Reveal key={card.n} delay={i * 0.07} className="h-full">
              <div className="bg-paper p-8 md:p-10 h-full">
                <div className="text-mute font-display text-xl mb-6">{card.n}</div>
                <h3
                  className="font-display text-balance"
                  style={{ fontSize: "var(--text-display-md)" }}
                >
                  {card.title}
                </h3>
                <p className="mt-4 text-mute leading-relaxed">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
