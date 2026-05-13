import Link from "next/link";
import { Reveal } from "../Reveal";

export function ContactCTABlack() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-narrow text-center">
        <Reveal>
          <p className="eyebrow text-gold mb-8">Acceso por solicitud</p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            className="text-balance"
            style={{ fontSize: "var(--text-display-xl)" }}
          >
            Hablemos en privado.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl mx-auto text-[var(--text-body-lg)] leading-relaxed text-ink/85">
            Por la naturaleza del producto y de nuestros clientes, evaluamos
            cada solicitud caso por caso. Si su firma califica para una
            conversación, le confirmamos en menos de 48 horas.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link href="/black/contacto" className="btn-primary">
              Solicitar acceso
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
            <a href="mailto:black@arete.mx" className="btn-secondary">
              black@arete.mx
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
