export type VerticalSlug =
  | "notarial"
  | "hospital"
  | "restaurant"
  | "community"
  | "professional";

export interface Vertical {
  slug: VerticalSlug;
  name: string;
  promise: string;
  description: string;
  packIncludes: string[];
  anchorClients: string[];
  caseSlug?: string;
}

export const verticals: Vertical[] = [
  {
    slug: "notarial",
    name: "Notarías",
    promise: "Automatización notarial sin sacrificar formalidad jurídica.",
    description:
      "Empacamos los flujos críticos del despacho — escrituras, poderes, sucesiones, fe de hechos — con RAG entrenado en la legislación local, agentes redactores y conexión directa al sistema de gestión interno. El equipo trabaja más rápido sin perder el rigor que la profesión exige.",
    packIncludes: [
      "RAG sobre legislación notarial estatal",
      "Generador asistido de minutas y escrituras",
      "Cotejo automático de identidades y representaciones",
      "Agente de seguimiento de trámites y vigencias",
      "Bitácora cronológica auditable",
    ],
    anchorClients: ["Notaría Pública 45", "Notaría Pública 273"],
    caseSlug: "notaria-45-273",
  },
  {
    slug: "hospital",
    name: "Hospitales",
    promise: "Pricing, cobranza y operaciones clínicas con visión unificada.",
    description:
      "Pack hospitalario con foco en el ciclo de ingresos: pricing dinámico por convenio, conciliación de pagos, ruteo de pacientes y panel directivo en tiempo real. Recuperas margen que estaba filtrándose en convenios y reduces el cierre mensual de semanas a horas.",
    packIncludes: [
      "Pricing dinámico por convenio y aseguradora",
      "Conciliación automática facturación-pago",
      "Panel directivo en tiempo real (ocupación, rentabilidad, mix)",
      "Agente de cobranza preventiva",
      "Detección de fugas y leakage en cobros",
    ],
    anchorClients: ["Hospital privado, Bajío"],
    caseSlug: "hospital-pricing",
  },
  {
    slug: "restaurant",
    name: "Restaurantes",
    promise: "BI operacional para cadenas que crecen sin perder margen.",
    description:
      "Para cadenas y franquicias: control de costo teórico vs real, mermas detectadas el mismo día, productividad por turno, panel regional con drilldown a sucursal. Tu director regional sabe qué unidad necesita visita hoy — no en tres semanas.",
    packIncludes: [
      "Costo teórico vs real, por receta y unidad",
      "Análisis de mermas y desviaciones",
      "Productividad por turno y empleado",
      "Panel regional con drilldown a sucursal",
      "Alertas de variación crítica vía agentes",
    ],
    anchorClients: ["Doña Tota", "Bento"],
    caseSlug: "dona-tota-bi",
  },
  {
    slug: "community",
    name: "Comunidades",
    promise: "BI para administraciones de fraccionamientos y condominios.",
    description:
      "Visibilidad completa para administradores y comités: cuotas, morosidad, reservas de áreas comunes, incidencias de seguridad, mantenimiento. Una plataforma reemplaza cuatro herramientas y un grupo de WhatsApp.",
    packIncludes: [
      "Conciliación de cuotas y morosidad",
      "Reservas y uso de áreas comunes",
      "Bitácora de seguridad e incidencias",
      "Mantenimiento preventivo programado",
      "Panel para comité con accesos por rol",
    ],
    anchorClients: ["Comunidad residencial Norte"],
    caseSlug: "comunidad-bi",
  },
  {
    slug: "professional",
    name: "Servicios profesionales",
    promise: "Firmas y consultorías que cobran por hora, operan por proyecto.",
    description:
      "Job tracking con captura mínima, margen real por proyecto y por consultor, pipeline conectado al delivery, asistente personal de productividad. Recuperas horas facturables y ves los problemas antes de que se conviertan en pérdidas.",
    packIncludes: [
      "Job tracker con captura asistida",
      "Margen real por proyecto y consultor",
      "Pipeline comercial conectado al delivery",
      "Reportes editoriales para cliente final",
      "Asistente personal de productividad",
    ],
    anchorClients: ["Laura Zanuna", "Job Tracker BI"],
    caseSlug: "job-tracker-bi",
  },
];

export const findVertical = (slug: VerticalSlug) =>
  verticals.find((v) => v.slug === slug);
