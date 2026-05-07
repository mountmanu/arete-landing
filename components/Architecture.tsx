import { Reveal } from "./Reveal";

const corePieces = [
  { name: "Auth", description: "Identidad, roles, multi-tenant" },
  { name: "Billing", description: "Facturación CFDI y suscripciones" },
  { name: "RAG", description: "Recuperación sobre documentos del cliente" },
  { name: "Agentes", description: "Razonamiento autónomo y herramientas" },
  { name: "MCP", description: "Conectores a sistemas existentes" },
  { name: "Observabilidad", description: "Trazas, métricas, auditoría" },
];

const packs = [
  { name: "Notarial", subtitle: "Despachos jurídicos" },
  { name: "Hospital", subtitle: "Ingresos y operaciones" },
  { name: "Restaurantes", subtitle: "BI operacional" },
  { name: "Comunidades", subtitle: "Administración condominal" },
  { name: "Profesional", subtitle: "Firmas y consultorías" },
];

export function Architecture() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow mb-6">Cómo está construido</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Un núcleo. Cinco packs verticales.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-[var(--text-body-lg)] leading-relaxed text-ink">
                Una capa horizontal que reuso en cada deploy. Sobre ella,
                paquetes que codifican el dominio de cada industria. Tú
                recibes lo último de ambos.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.15}>
              <div className="space-y-6">
                <div>
                  <p className="eyebrow mb-4">Packs verticales</p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {packs.map((pack) => (
                      <div
                        key={pack.name}
                        className="bg-paper border border-line p-5 hover:border-ink transition-colors"
                      >
                        <div className="text-sm font-medium tracking-tight text-ink">
                          {pack.name}
                        </div>
                        <div className="mt-1 text-xs text-mute leading-snug">
                          {pack.subtitle}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-mute"
                  >
                    <path
                      d="M12 4V20M12 20L6 14M12 20L18 14"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="eyebrow mb-4">Núcleo Areté</p>
                  <div className="bg-ink text-paper p-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                      {corePieces.map((piece) => (
                        <div key={piece.name}>
                          <div className="font-display text-xl text-paper">
                            {piece.name}
                          </div>
                          <div className="mt-1 text-sm text-paper/60 leading-snug">
                            {piece.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
