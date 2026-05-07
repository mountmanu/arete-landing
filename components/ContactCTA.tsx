import Link from "next/link";
import { Reveal } from "./Reveal";

export function ContactCTA() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow mb-8">Conversación inicial</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="text-balance"
            style={{ fontSize: "var(--text-display-xl)" }}
          >
            30 minutos bastan para saber si encajamos.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl mx-auto text-[var(--text-body-lg)] text-ink leading-relaxed">
            Cuéntame qué problema operativo te trae aquí. Si lo que necesitas
            no encaja con cómo trabajo, te lo digo en esa misma llamada — no
            cobro la primera conversación.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contacto" className="btn-primary">
              Agendar 30 minutos
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
            <a href="mailto:hola@arete.mx" className="btn-secondary">
              hola@arete.mx
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
