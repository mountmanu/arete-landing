import type { ClientId } from "./clients";

export type VerticalSlug =
  | "notarial"
  | "hospital"
  | "restaurant"
  | "parking"
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
    slug: "parking",
    name: "Estacionamientos y autolavados",
    promise: "Que cada peso que entra quede registrado, a cualquier hora y con quien sea que esté en la cabina.",
    description:
      "Un estacionamiento o un autolavado vive de muchos cobros chicos, todo el día, con gente que rota. Ahí el dinero se pierde en los huecos: el ticket de papel, el tiempo calculado de cabeza, el corte que no cuadra. Armo la cabina de cobro, los tiempos, las bahías y el corte de turno en un solo sistema, con la impresora, el cajón y la terminal de tarjeta conectados.",
    packIncludes: [
      "Cabina de cobro con tarifa por tiempo y tolerancia",
      "Tickets con reloj y recibo impreso",
      "Tablero de bahías o estaciones de servicio",
      "Corte de turno por efectivo, tarjeta y transferencia",
      "Pensiones y membresías mensuales",
    ],
    anchorClients: ["park-wash"],
    caseSlug: "park-wash",
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
    anchorClients: ["laura-zanuna"],
    caseSlug: "laura-zanuna",
  },
];

export const findVertical = (slug: VerticalSlug) =>
  verticals.find((v) => v.slug === slug);
