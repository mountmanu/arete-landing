import { Reveal } from "./Reveal";

const tracks = [
  {
    name: "Discovery",
    duration: "1–2 semanas",
    description:
      "Mapeamos tu dominio, los flujos críticos, y diagnosticamos qué piezas del núcleo aplican. Termina con un plan ejecutable y un acuerdo claro.",
    deliverables: [
      "Mapa de dominio y procesos",
      "Plan de pack con módulos a reutilizar y a construir",
      "Estimación con ventana ±20%",
    ],
  },
  {
    name: "Pack ancla",
    duration: "8–12 semanas",
    description:
      "Para el primer cliente de una industria nueva. Co-financiamos la creación del pack: tú recibes un sistema a tu medida, y el núcleo gana una capacidad reusable.",
    deliverables: [
      "Sistema en producción",
      "Pack de la industria disponible para próximos clientes",
      "Documentación operativa y entrenamiento del equipo",
    ],
  },
  {
    name: "Pack maduro",
    duration: "4–6 semanas",
    description:
      "Para clientes en industrias donde ya existe pack. Recibes la madurez acumulada con ajustes a tu operación específica. Tiempo de implementación significativamente menor.",
    deliverables: [
      "Pack vertical desplegado",
      "Personalización en flujos y reglas",
      "Migración de datos legacy",
    ],
  },
  {
    name: "Operación continua",
    duration: "Mensual",
    description:
      "Una vez en producción, mantengo, evoluciono e instrumento. Nuevas funcionalidades entran al pack y benefician a toda la red de clientes.",
    deliverables: [
      "SLA de soporte y disponibilidad",
      "Roadmap mensual con cliente",
      "Acceso a nuevas capacidades del núcleo",
    ],
  },
];

export function Engagement() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <p className="eyebrow mb-6">Cómo me contratas</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Cuatro modos de engagement.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[var(--text-body-lg)] leading-relaxed text-ink">
              Cada uno tiene una ventana clara y entregables explícitos. No
              vendo horas por bolsa; vendo resultados con scope acotado.
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
