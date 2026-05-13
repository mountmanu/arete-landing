import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { ContactCTABlack } from "@/components/black/ContactCTABlack";

export const metadata: Metadata = {
  title: "Suite de Cumplimiento PLD",
  description:
    "Detalle de la Suite de Cumplimiento PLD de Areté Black: inteligencia regulatoria, identificación de cliente, agente de avisos al SPPLD, bitácora a 10 años, panel multi-sucursal y capacitación anual.",
};

const obligations = [
  {
    article: "Art. 18 Fr. I",
    title: "Identificación del cliente",
    body: "Recabar datos generales, CURP, RFC, ocupación, identificación oficial. La suite automatiza la captura con OCR de INE/Pasaporte/Cédula y validación contra listas restrictivas.",
  },
  {
    article: "Art. 18 Fr. III",
    title: "Beneficiario controlador",
    body: "Identificar a la persona física que efectivamente controla a una persona moral cliente. Post-reforma: el umbral bajó al 25 % de participación. La suite estructura el cuestionario y conserva la trazabilidad.",
  },
  {
    article: "Art. 18 Fr. V",
    title: "Solicitud de información adicional",
    body: "Para operaciones por encima del umbral, recabar información del origen de los recursos. La suite genera el cuestionario, lo almacena firmado y lo vincula a la operación.",
  },
  {
    article: "Art. 18 Fr. VI",
    title: "Custodia de información por 10 años",
    body: "Conservación bajo medidas de seguridad de toda la información recabada. La suite cifra at-rest, sella criptográficamente cada operación y mantiene acceso por una década.",
  },
  {
    article: "Art. 18 Fr. VII",
    title: "Capacitación anual",
    body: "El personal debe recibir capacitación periódica documentada. La suite incluye programa anual con certificados nominativos y registro de asistencia por colaborador.",
  },
  {
    article: "Art. 18 Fr. X",
    title: "Mecanismos automatizados",
    body: "Establecidos como obligatorios por la reforma DOF 16-jul-2025. La suite es, en sí misma, la implementación del mecanismo automatizado que el artículo exige.",
  },
];

export default function CumplimientoPage() {
  return (
    <>
      <section className="py-[var(--spacing-section)] pt-32">
        <div className="container-editorial">
          <Reveal>
            <p className="eyebrow text-gold mb-6">Suite de Cumplimiento PLD</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="text-balance max-w-4xl"
              style={{ fontSize: "var(--text-display-2xl)" }}
            >
              Las seis obligaciones del Art. 18, cubiertas.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-3xl text-[var(--text-body-lg)] text-ink/85 leading-relaxed">
              La LFPIORPI no se cumple con un sistema, se cumple con una
              operación. La suite codifica las obligaciones del Art. 18 dentro
              del flujo de venta de su casa, sin que el equipo de piso deba
              llevar planillas, archivos compartidos o procesos manuales en
              paralelo.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        {obligations.map((o, idx) => {
          const isAlt = idx % 2 === 1;
          return (
            <div
              key={o.article}
              className={`py-[var(--spacing-block)] ${
                isAlt ? "bg-soft border-t border-b border-line" : ""
              }`}
            >
              <div className="container-editorial">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  <div className="lg:col-span-4">
                    <Reveal>
                      <p className="eyebrow text-gold">{o.article}</p>
                    </Reveal>
                    <Reveal delay={0.05}>
                      <h2
                        className="mt-4 text-balance"
                        style={{ fontSize: "var(--text-display-md)" }}
                      >
                        {o.title}
                      </h2>
                    </Reveal>
                  </div>
                  <div className="lg:col-span-8">
                    <Reveal delay={0.1}>
                      <p className="text-[var(--text-body-lg)] text-ink/85 leading-relaxed">
                        {o.body}
                      </p>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      <section className="py-[var(--spacing-section)] border-t border-line">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-gold mb-6">Cobertura regional</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2
                  className="text-balance"
                  style={{ fontSize: "var(--text-display-lg)" }}
                >
                  México y Colombia, con marco parametrizable.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 prose-editorial">
              <Reveal delay={0.1}>
                <p>
                  La suite opera en jurisdicción mexicana bajo el marco
                  LFPIORPI y en Colombia bajo SARLAFT y SAGRILAFT (Circular
                  Externa 100-000016 de la Superintendencia de Sociedades).
                  Mismo núcleo técnico, diferentes generadores de reporte
                  según jurisdicción.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  Para clientes con presencia en ambos países, la
                  consolidación corporativa unifica panel directivo, mantiene
                  segregación legal de bitácoras y entrega reportería al
                  consejo en formato único.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <Link
                  href="/black/contacto"
                  className="link-underline text-[var(--text-caption)] tracking-[0.04em] uppercase font-medium text-gold"
                >
                  Solicitar dictamen para su firma →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <ContactCTABlack />
    </>
  );
}
