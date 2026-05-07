import { Reveal } from "./Reveal";

const principios = [
  {
    number: "01",
    title: "Componer, no revender.",
    body: "El conocimiento de un engagement vive en el código del núcleo, no en una sola persona. Lo que aprendo hoy reduce el costo del próximo cliente.",
  },
  {
    number: "02",
    title: "Empacar el dominio.",
    body: "Cada industria tiene reglas, lenguaje y protocolos propios. Codificarlos una vez —y bien— vale más que cien soluciones a medida.",
  },
  {
    number: "03",
    title: "Operar desde el día uno.",
    body: "Despliego en producción temprano e itero sobre uso real. La fase de demo eterna no genera aprendizaje, genera deuda.",
  },
  {
    number: "04",
    title: "Auditar todo.",
    body: "Bitácoras inmutables, decisiones trazables, métricas que se sostienen. La excelencia que no se mide no es excelencia: es marketing.",
  },
];

export function Principios() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Principios</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Cuatro reglas que sostienen el método.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[var(--text-body-lg)] leading-relaxed text-ink">
                Decisiones que se toman antes de cada engagement, no durante.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <ol className="space-y-px bg-line">
              {principios.map((p, idx) => (
                <Reveal key={p.number} delay={idx * 0.05}>
                  <li className="bg-paper p-8 md:p-10 grid grid-cols-[auto,1fr] gap-6 md:gap-10">
                    <span className="font-display text-2xl md:text-3xl text-mute leading-none tracking-tight">
                      {p.number}
                    </span>
                    <div>
                      <h3
                        className="font-display text-balance"
                        style={{
                          fontSize: "var(--text-display-md)",
                          lineHeight: 1.15,
                        }}
                      >
                        {p.title}
                      </h3>
                      <p className="mt-4 text-[var(--text-body)] leading-relaxed text-ink max-w-2xl">
                        {p.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
