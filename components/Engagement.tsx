import { Reveal } from "./Reveal";

const tracks = [
  {
    name: "Diagnóstico",
    duration: "1 a 2 semanas",
    description:
      "Reviso tu operación y te digo qué sistema necesitas, qué ya existe y cuánto cuesta. Si decides no seguir, te quedas con el plan.",
    deliverables: [
      "Mapa de cómo trabaja tu negocio",
      "Propuesta con alcance y precio cerrado",
      "Plan de arranque",
    ],
  },
  {
    name: "Sistema nuevo",
    duration: "8 a 12 semanas",
    description:
      "Para un giro en el que todavía no he trabajado. Lo construimos juntos, con un precio preferente por ser el primero, y te queda un sistema hecho a tu medida.",
    deliverables: [
      "Sistema funcionando en tu negocio",
      "Capacitación a tu equipo",
      "Manual de uso sencillo",
    ],
  },
  {
    name: "Sistema probado",
    duration: "4 a 6 semanas",
    description:
      "Para giros donde ya trabajé. Recibes lo que ya está probado, ajustado a tu operación. Más rápido y más barato.",
    deliverables: [
      "Sistema instalado y ajustado",
      "Tus reglas y tus flujos",
      "Migración de la información que ya tienes",
    ],
  },
  {
    name: "Acompañamiento",
    duration: "Mensual",
    description:
      "Después de entregar, me quedo: resuelvo, mantengo y mejoro. Cuando algo pasa, hablas conmigo.",
    deliverables: [
      "Soporte con tiempo de respuesta garantizado",
      "Mejoras cada mes, acordadas contigo",
      "Lo nuevo que construyo para otros, si te sirve",
    ],
  },
];

export function Engagement() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-10">
          <Reveal>
            <p className="eyebrow mb-6">Cómo me contratas</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Cuatro maneras de trabajar conmigo.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[var(--text-body-lg)] leading-relaxed text-ink">
              Cada una con un alcance claro y un precio cerrado. No vendo
              horas; vendo un sistema funcionando.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line rule-top rule-bottom">
          {tracks.map((track, idx) => (
            <Reveal key={track.name} delay={idx * 0.05}>
              <div className="bg-paper p-10 h-full">
                <div className="flex items-baseline justify-between mb-6">
                  <h3
                    className="font-display"
                    style={{ fontSize: "var(--text-display-md)" }}
                  >
                    {track.name}
                  </h3>
                  <span className="eyebrow">{track.duration}</span>
                </div>
                <p className="text-[var(--text-body)] leading-relaxed text-ink">
                  {track.description}
                </p>
                <ul className="mt-8 space-y-2 pt-6 border-t border-line">
                  {track.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-[var(--text-caption)] text-mute"
                    >
                      <span className="text-ink">→</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
