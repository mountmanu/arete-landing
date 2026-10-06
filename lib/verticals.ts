import type { ClientId } from "./clients";

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
  anchorClients: ClientId[];
  caseSlug?: string;
}

export const verticals: Vertical[] = [
  {
    slug: "notarial",
    name: "Notarías",
    promise: "Que la escritura salga en horas, con el rigor de siempre.",
    description:
      "Una notaría trabaja con un cuidado que el software genérico no entiende. Armo herramientas que acompañan al equipo paso a paso: la ley del estado a la mano, los antecedentes del cliente en pantalla y un historial de cada decisión. El despacho sale más rápido sin aflojar la formalidad.",
    packIncludes: [
      "Redacción asistida de minutas y escrituras, con la legislación del estado a la mano",
      "Expediente del cliente con sus antecedentes en segundos",
      "Revisión automática de identidades y poderes",
      "Seguimiento de trámites y vencimientos",
      "Historial completo de cada escritura, listo para auditar",
    ],
    anchorClients: ["notaria-45", "notaria-273"],
    caseSlug: "notaria-45-273",
  },
  {
    slug: "hospital",
    name: "Hospitales",
    promise: "Saber cada día qué deja dinero y por dónde se está yendo.",
    description:
      "Con decenas de convenios, cada uno con su tabulador y sus excepciones, el margen se escapa por rendijas que nadie ve a tiempo. Pongo los tabuladores, la cobranza y los indicadores de la dirección en un solo lugar, para que las decisiones se tomen con datos del día y no con el reporte del mes pasado.",
    packIncludes: [
      "Tabuladores de cada convenio y aseguradora, ordenados y vigentes",
      "Lo facturado contra lo cobrado, cuadrado solo",
      "Panel de dirección: ocupación, rentabilidad por servicio y quién paga qué",
      "Avisos de cobranza antes de que una cuenta se atrase",
      "Detección de cobros que se están quedando cortos",
    ],
    anchorClients: ["hospital-la-salle"],
    caseSlug: "hospital-pricing",
  },
  {
    slug: "restaurant",
    name: "Restaurantes",
    promise: "Ver todas las sucursales como si estuvieras parado en cada una.",
    description:
      "Cuando una cadena crece, los reportes llegan tarde, y cuando una sucursal pierde margen te enteras semanas después. Conecto el punto de venta, el inventario y la nómina en un tablero que te dice hoy qué sucursal necesita atención.",
    packIncludes: [
      "Costo de cada receta: lo que debería costar contra lo que cuesta",
      "Mermas detectadas el mismo día",
      "Productividad por turno y por persona",
      "Tablero regional con detalle por sucursal",
      "Avisos cuando algo se sale de rango",
    ],
    anchorClients: ["dona-tota"],
    caseSlug: "dona-tota-bi",
  },
  {
    slug: "community",
    name: "Comunidades",
    promise: "Que el comité administre con información y no con el chat.",
    description:
      "Un fraccionamiento se administra entre un grupo de WhatsApp, una contadora y la memoria del administrador. Les doy una sola plataforma: cuotas, morosidad, reservas de áreas comunes, incidencias de seguridad y mantenimiento, y cada quien ve lo que le toca.",
    packIncludes: [
      "Cuotas cobradas y pendientes, cuadradas con sus facturas",
      "Morosidad clara, por vecino y por antigüedad",
      "Reservas de áreas comunes con calendario",
      "Bitácora de seguridad e incidencias por turno",
      "Mantenimiento programado",
    ],
    anchorClients: ["park-wash"],
    caseSlug: "comunidad-bi",
  },
  {
    slug: "professional",
    name: "Servicios profesionales",
    promise: "Que el tiempo que trabajas sea el tiempo que cobras.",
    description:
      "Para despachos, consultores y firmas que cobran por hora o por proyecto. Registrar el tiempo es lo que más se posterga, y por eso el margen real se conoce cuando ya se perdió. Hago que registrarlo sea casi automático y que cada proyecto avise a tiempo si está dejando dinero o no.",
    packIncludes: [
      "Registro de tiempo casi sin esfuerzo",
      "Margen real por proyecto y por persona",
      "Prospectos y proyectos en curso en un mismo lugar",
      "Reportes limpios para entregar al cliente",
      "Un asistente que te prepara el día",
    ],
    anchorClients: ["laura-zanuna", "job-tracker"],
    caseSlug: "job-tracker-bi",
  },
];

export const findVertical = (slug: VerticalSlug) =>
  verticals.find((v) => v.slug === slug);
