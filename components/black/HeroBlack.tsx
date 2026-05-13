import Link from "next/link";
import { Reveal } from "../Reveal";

export function HeroBlack() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial pt-24 md:pt-36 pb-24 md:pb-32 relative">
        <Reveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="accent-rule" />
            <span className="eyebrow text-gold">Areté · Black</span>
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
            Cumplimiento.{" "}
            <em className="not-italic font-display italic text-gold">
              Discreción.
            </em>{" "}
            Continuidad.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-[var(--text-body-lg)] text-pretty leading-relaxed text-ink/85">
            Suite de Cumplimiento PLD para casas de joyería, relojería, metales
            y piedras preciosas. Construida sobre la madurez acumulada de Areté
            Soluciones — la misma plataforma que opera para notarios,
            hospitales y cadenas con rigor regulatorio diario.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
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
            <Link href="/black/cumplimiento" className="btn-secondary">
              Conocer la suite
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="mt-24 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-line">
            <Pillar
              label="Marco regulatorio"
              value="Art. 18 Fr. X"
              foot="LFPIORPI · Reforma 2025"
            />
            <Pillar
              label="Plazo de aviso"
              value="24 h"
              foot="Generación automatizada al SPPLD"
            />
            <Pillar
              label="Bitácora auditable"
              value="10 años"
              foot="Cifrada at-rest · trazabilidad inmutable"
            />
            <Pillar
              label="Cobertura"
              value="MX · CO"
              foot="LFPIORPI · SARLAFT · SAGRILAFT"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pillar({
  label,
  value,
  foot,
}: {
  label: string;
  value: string;
  foot: string;
}) {
  return (
    <div>
      <div className="eyebrow mb-3">{label}</div>
      <div
        className="font-display text-ink"
        style={{ fontSize: "var(--text-display-md)", lineHeight: 1 }}
      >
        {value}
      </div>
      <div className="mt-3 text-[var(--text-caption)] text-mute leading-snug">
        {foot}
      </div>
    </div>
  );
}
