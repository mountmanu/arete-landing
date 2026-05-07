import Link from "next/link";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial pt-20 md:pt-32 pb-24 md:pb-32 relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="block w-12 h-px bg-ink" />
            <span className="eyebrow">Software AI a la medida</span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            className="text-balance"
            style={{
              fontSize: "var(--text-display-2xl)",
              lineHeight: 1.02,
            }}
          >
            Sistemas que operan tu negocio.
            <br />
            <em className="not-italic font-display italic text-mute">
              Listos en semanas, no en años.
            </em>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-[var(--text-body-lg)] text-pretty text-ink leading-relaxed">
            Construyo software AI-nativo para PyMEs mexicanas. Mis clientes
            reciben sistemas con la madurez de una cadena grande desde el
            primer día — porque cada proyecto se construye sobre la base de
            los anteriores, no desde cero.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href="/casos" className="btn-primary">
              Ver casos en producción
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
            <Link href="/contacto" className="btn-secondary">
              Agenda 30 minutos
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 rule-top">
            <Stat label="Sistemas en producción" value="7" />
            <Stat label="Industrias atendidas" value="5" />
            <Stat label="Tiempo a producción" value="4–12 sem" />
            <Stat label="Sede" value="México" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div
        className="font-display text-ink"
        style={{ fontSize: "var(--text-display-md)", lineHeight: 1 }}
      >
        {value}
      </div>
      <div className="mt-3 eyebrow">{label}</div>
    </div>
  );
}
