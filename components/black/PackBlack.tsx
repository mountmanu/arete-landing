import Link from "next/link";
import { Reveal } from "../Reveal";

const modules = [
  {
    number: "01",
    title: "Inteligencia regulatoria continua",
    body: "RAG entrenado sobre LFPIORPI, criterios SAT/UIF, resoluciones DOF y jurisprudencia anti-lavado. Su equipo consulta el marco aplicable en lenguaje natural; el sistema cita la norma exacta.",
  },
  {
    number: "02",
    title: "Identificación de cliente automatizada",
    body: "Cotejo de INE / Pasaporte / Cédula Profesional con OCR y validación contra listas restrictivas. Identificación de beneficiario controlador con umbral 25% post-reforma.",
  },
  {
    number: "03",
    title: "Agente de avisos al SPPLD",
    body: "Generación automatizada de Avisos en formato XML válido, presentación dentro de 24 horas, acuse de recepción almacenado en bitácora. Reduce la dependencia del cumplimiento manual y elimina el riesgo de omisión por error humano.",
  },
  {
    number: "04",
    title: "Bitácora inmutable a 10 años",
    body: "Almacenamiento cifrado at-rest con sellado criptográfico por operación. Trazabilidad completa para auditoría del SAT, despacho legal, o autoridad fiscal en cualquier momento del periodo.",
  },
  {
    number: "05",
    title: "Panel multi-sucursal",
    body: "Consolidación por boutique, ciudad y razón social. Drilldown de operaciones por umbral, oficial de cumplimiento responsable y estado del aviso. Diseñado para grupos con presencia en CDMX, Monterrey, Guadalajara, Bogotá y Medellín.",
  },
  {
    number: "06",
    title: "Capacitación anual del personal",
    body: "Programa de capacitación obligatoria con certificados nominativos por colaborador. Cumple el requisito post-reforma de formación anual documentada para todos los miembros del equipo.",
  },
];

export function PackBlack() {
  return (
    <section className="py-[var(--spacing-section)]">
      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-gold mb-6">La suite</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-balance"
                style={{ fontSize: "var(--text-display-lg)" }}
              >
                Seis módulos diseñados para una sola obligación.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal delay={0.1}>
              <p className="text-[var(--text-body-lg)] leading-relaxed text-ink/85">
                Cumplir el Art. 18 de la LFPIORPI dejó de ser un trámite
                mensual. La reforma lo convirtió en un sistema operativo
                continuo: identificación en el momento de la venta, aviso en
                24 horas, conservación por una década. La suite cubre las seis
                obligaciones sin imponer carga adicional al personal de piso.
              </p>
            </Reveal>
          </div>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-t border-b border-line">
          {modules.map((m, idx) => (
            <Reveal key={m.number} delay={idx * 0.04}>
              <li className="bg-[var(--color-paper)] p-10 h-full grid grid-cols-[auto,1fr] gap-6 md:gap-8">
                <span className="font-display text-2xl md:text-3xl text-gold leading-none tracking-tight">
                  {m.number}
                </span>
                <div>
                  <h3
                    className="font-display text-balance"
                    style={{
                      fontSize: "var(--text-display-md)",
                      lineHeight: 1.15,
                    }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-4 text-[var(--text-body)] leading-relaxed text-ink/85 max-w-2xl">
                    {m.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
            <Link href="/black/cumplimiento" className="btn-primary">
              Ver detalle completo
            </Link>
            <Link
              href="/black/boveda"
              className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-gold"
            >
              Conocer el módulo Bóveda →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
