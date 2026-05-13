import { Reveal } from "../Reveal";

const stakes = [
  {
    figure: "$94,434",
    unit: "MXN",
    label: "Umbral de identificación",
    body: "805 UMAs (valor 2026). Por encima de este monto su firma debe identificar formalmente al cliente antes de cerrar la operación.",
  },
  {
    figure: "$188,283",
    unit: "MXN",
    label: "Umbral de aviso",
    body: "1,605 UMAs. Detona obligación de generar Aviso al SPPLD en formato XML válido, dentro de las primeras 24 horas tras la reforma de julio 2025.",
  },
  {
    figure: "$1.17M – $7.6M",
    unit: "MXN",
    label: "Multa por aviso omitido",
    body: "10,000 a 65,000 UMAs por evento. Una sola omisión equivale a seis a cuarenta años de la suscripción a esta suite.",
  },
];

export function StakesBlack() {
  return (
    <section className="py-[var(--spacing-section)] bg-soft border-t border-b border-line">
      <div className="container-editorial">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Lo que su firma asume</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="text-balance"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              El costo real de un aviso omitido.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[var(--text-body-lg)] leading-relaxed text-ink/85">
              La reforma DOF del 16 de julio de 2025 introdujo tres cambios
              que afectan directamente a casas de joyería, relojería y
              comercializadores de metales preciosos: mecanismos automatizados
              ahora obligatorios, conservación documental ampliada a 10 años,
              y plazo de aviso reducido a 24 horas.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line">
          {stakes.map((s, idx) => (
            <Reveal key={s.label} delay={idx * 0.05} className="h-full">
              <article className="bg-[var(--color-paper)] p-10 h-full flex flex-col">
                <div className="eyebrow mb-6">{s.label}</div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display text-gold"
                    style={{
                      fontSize: "var(--text-display-lg)",
                      lineHeight: 1,
                    }}
                  >
                    {s.figure}
                  </span>
                  <span className="text-mute text-sm tracking-[0.04em] uppercase font-medium">
                    {s.unit}
                  </span>
                </div>
                <p className="mt-8 text-[var(--text-body)] leading-relaxed text-ink/85">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <p className="mt-10 max-w-3xl text-[var(--text-caption)] text-mute leading-relaxed">
            Cifras vigentes con UMA $117.31 (DOF 09-ene-2026). Aplica al
            Art. 17 Fr. VIII LFPIORPI: comercialización habitual de metales
            preciosos, piedras preciosas, joyas y relojes. Fuente: Portal
            SPPLD del SAT.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
