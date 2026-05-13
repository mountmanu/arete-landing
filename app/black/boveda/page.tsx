import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { ContactCTABlack } from "@/components/black/ContactCTABlack";

export const metadata: Metadata = {
  title: "Bóveda — Módulo white-label para clientes top",
  description:
    "Bóveda es el módulo opcional de Areté Black que entrega a sus clientes top una experiencia digital con la marca de su casa: certificado de procedencia, registro gemológico, tasación anual y recompra preferente.",
};

const principles = [
  {
    number: "01",
    title: "Su marca, no la nuestra",
    body: "Los clientes top descargan una aplicación con el nombre y la identidad de su casa: «Berger · Mi Bóveda», «Peyrelongue · Mi Bóveda», «Tane · Mi Bóveda». Areté Black es la infraestructura; usted es la marca.",
  },
  {
    number: "02",
    title: "Atributos por pieza",
    body: "Cada pieza adquirida queda registrada con certificado de procedencia, fotografía editorial, datos del laboratorio gemológico cuando la pieza tiene inscripción láser (GIA / IGI / HRD), tasación inicial e historial de servicios posteriores.",
  },
  {
    number: "03",
    title: "Recompra preferente",
    body: "Compromiso vinculante de la casa con el titular: derecho de primer rechazo en una eventual venta secundaria. Aumenta sustancialmente la retención de clientes top y reduce la pérdida de piezas hacia el mercado gris.",
  },
  {
    number: "04",
    title: "Tasación anual editorial",
    body: "Reporte anual con valor de tasación actualizado, firmado por gemólogo o relojero acreditado. Útil para fines de seguro, sucesión y reportes patrimoniales del titular.",
  },
  {
    number: "05",
    title: "Cadena de servicios",
    body: "Cada mantenimiento, servicio o intervención queda registrado fotográficamente con técnico responsable. El titular ve la historia íntegra de la pieza desde su casa de origen.",
  },
];

const audiences = [
  {
    figure: "5 %",
    label: "del padrón habitual",
    body: "Es la fracción típica de clientes que califican como top en una casa de joyería luxury mexicana: aquellos con tres o más adquisiciones anuales o ticket promedio mayor a $500K MXN.",
  },
  {
    figure: "$2.4M",
    label: "valor de inventario por cliente top",
    body: "Promedio observado de inventario acumulado en clientes top de casas multi-sucursal en CDMX y Monterrey. Bóveda eleva el costo de cambio sin imponer obligación al titular.",
  },
  {
    figure: "+38 %",
    label: "retención esperada Año 2",
    body: "Estimación basada en programas comparables internacionales (Cartier Care, Patek Philippe Service Continuum). Cifra a validar con el primer caso en producción.",
  },
];

export default function BovedaPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Bóveda · Módulo opcional</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Una experiencia, con su marca, para sus clientes top.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-[var(--text-body-lg)] text-ink/85 leading-relaxed">
              El cumplimiento es la obligación. Bóveda es la oportunidad: un
              módulo opcional sobre la suite base que convierte la operación
              regulatoria en una capa de valor para sus clientes top — sin que
              ellos sepan que la tecnología es Areté.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-[var(--spacing-section)] bg-soft border-t border-b border-line">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow text-gold mb-6">Principios</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Cinco principios. Una sola promesa.
              </h2>
            </Reveal>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-t border-b border-line">
            {principles.map((p, idx) => (
              <Reveal key={p.number} delay={idx * 0.04}>
                <li className="bg-[var(--color-paper)] p-10 h-full grid grid-cols-[auto,1fr] gap-6 md:gap-8">
                  <span className="font-display text-2xl md:text-3xl text-gold leading-none tracking-tight">
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
                    <p className="mt-4 text-[var(--text-body)] leading-relaxed text-ink/85 max-w-2xl">
                      {p.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-[var(--spacing-section)]">
        <div className="container-editorial">
          <div className="max-w-3xl mb-16">
            <Reveal>
              <p className="eyebrow text-gold mb-6">El efecto comercial</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Para quién, cuánto, qué retorno.
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-line border-t border-b border-line">
            {audiences.map((a, idx) => (
              <Reveal key={a.label} delay={idx * 0.05} className="h-full">
                <article className="bg-[var(--color-paper)] p-10 h-full flex flex-col">
                  <span
                    className="font-display text-gold"
                    style={{
                      fontSize: "var(--text-display-lg)",
                      lineHeight: 1,
                    }}
                  >
                    {a.figure}
                  </span>
                  <span className="mt-3 eyebrow">{a.label}</span>
                  <p className="mt-8 text-[var(--text-body)] leading-relaxed text-ink/85">
                    {a.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.25}>
            <p className="mt-10 max-w-3xl text-[var(--text-caption)] text-mute leading-relaxed">
              Cifras de retención son estimaciones basadas en programas
              comparables internacionales. Se validarán con el primer caso
              en producción durante el periodo 2026–2027.
            </p>
          </Reveal>
        </div>
      </section>

      <ContactCTABlack />
    </>
  );
}
