import { Reveal } from "../Reveal";

const tracks = [
  {
    name: "Diagnóstico",
    duration: "1 semana",
    description:
      "Mapeo de operaciones por umbral, inventario de obligaciones actuales bajo LFPIORPI, identificación del oficial de cumplimiento y diagnóstico de riesgo. Salida: dictamen escrito + plan de implementación.",
    deliverables: [
      "Dictamen de exposición regulatoria",
      "Inventario de operaciones vulnerables",
      "Plan de implementación con ventana ±15 %",
    ],
  },
  {
    name: "Pack ancla",
    duration: "8–10 semanas",
    description:
      "Despliegue completo de la suite, integración con su sistema de gestión existente, capacitación del equipo de piso y validación del primer Aviso al SPPLD en producción. Operación supervisada durante los primeros 30 días.",
    deliverables: [
      "Suite en producción multi-sucursal",
      "Integración con sistema POS / ERP / gestión interna",
      "Capacitación nominativa del personal",
      "Primer Aviso al SPPLD validado",
    ],
  },
  {
    name: "Operación continua",
    duration: "Mensual",
    description:
      "Mantenimiento, evolución del marco regulatorio, ajustes por reformas DOF, reportería mensual al consejo, y atención prioritaria del oficial de cumplimiento. Renovación anual con ventana cerrada de incremento.",
    deliverables: [
      "SLA dedicado para oficial de cumplimiento",
      "Actualización automática por reformas DOF",
      "Reporte mensual al consejo",
      "Acceso a nuevas capacidades de la suite",
    ],
  },
];

export function EngagementBlack() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Cómo se contrata</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Tres etapas. Cada una con entregables explícitos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[var(--text-body-lg)] leading-relaxed text-ink/85">
              No vendemos horas, ni licencias por usuario, ni hardware. La
              suscripción es por sucursal activa, con cláusula de salida
              limpia si el dictamen inicial concluye que su exposición no la
              justifica.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line border-t border-b border-line">
          {tracks.map((track, idx) => (
            <Reveal key={track.name} delay={idx * 0.05}>
              <div className="bg-[var(--color-paper)] p-10 h-full">
                <div className="flex items-baseline justify-between mb-6">
                  <h3
                    className="font-display"
                    style={{ fontSize: "var(--text-display-md)" }}
                  >
                    {track.name}
                  </h3>
                  <span className="eyebrow text-gold">{track.duration}</span>
                </div>
                <p className="text-[var(--text-body)] leading-relaxed text-ink/85">
                  {track.description}
                </p>
                <ul className="mt-8 space-y-2 pt-6 border-t border-line">
                  {track.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-[var(--text-caption)] text-mute"
                    >
                      <span className="text-gold">→</span>
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
