import type { VerticalSlug } from "./verticals";
import type { ClientId } from "./clients";

export interface CaseImpact {
  metric: string;
  detail: string;
}

export interface CaseDemo {
  /** Copia del sistema con datos inventados, abierta al público. */
  url: string;
  /** Qué va a ver quien entre (opcional; si falta se usa el tagline). */
  note?: string;
}

export interface CaseSection {
  heading: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  clients: ClientId[];
  vertical: VerticalSlug;
  verticalLabel: string;
  title: string;
  tagline: string;
  year: string;
  scope: string;
  problem: string[];
  solution: string[];
  reuse: string[];
  impact: CaseImpact[];
  stack: string[];
  featured?: boolean;
  order: number;
  demo?: CaseDemo;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "notaria-45-273",
    client: "Notaría Pública 45 / 273",
    clients: ["notaria-45", "notaria-273"],
    vertical: "notarial",
    verticalLabel: "Notarial",
    title: "La notaría que dejó de redactar desde cero.",
    tagline:
      "Una escritura que tomaba días ahora sale en horas, con la misma formalidad de siempre.",
    year: "2025",
    scope: "Redacción asistida · Expediente del cliente · Historial de cada escritura",
    problem: [
      "Dos notarías con formas de trabajar heredadas de distintas épocas: minutas en Word, anexos sueltos, control en hojas de cálculo. En cada escritura participaban el notario, dos abogados y un capturista, y cada versión nueva era una oportunidad para que algo no cuadrara.",
      "El problema no era jurídico. De derecho saben de sobra. Lo que faltaba era una herramienta que acompañara al equipo paso a paso, con la ley del estado a la mano y los antecedentes del cliente en pantalla.",
    ],
    solution: [
      "Construí un sistema donde el equipo redacta sobre una base que ya conoce la legislación local y los protocolos del despacho. El sistema propone la minuta a partir de los hechos del cliente, trae sus antecedentes del archivo en segundos y deja que el abogado decida.",
      "Cada cláusula sabe de dónde viene y quién la aprobó. Al cerrar, la escritura queda con un historial completo, firmado y listo para cualquier auditoría.",
    ],
    reuse: [
      "Accesos por puesto: notario, abogado, capturista",
      "La redacción asistida, lista para otros despachos",
      "El historial auditable, que después usé en el hospital y en el fraccionamiento",
    ],
    impact: [
      { metric: "De días a horas", detail: "en sacar una escritura" },
      { metric: "Más escrituras", detail: "con el mismo equipo" },
      { metric: "Cero", detail: "versiones encontradas entre sí" },
    ],
    stack: [
      "Aplicación web",
      "Asistente con inteligencia artificial",
      "Conexión con el sistema interno del despacho",
      "Historial auditable",
    ],
    featured: true,
    order: 1,
  },
  {
    slug: "hospital-pricing",
    client: "Hospital Victoria La Salle",
    clients: ["hospital-la-salle"],
    vertical: "hospital",
    verticalLabel: "Hospital",
    title: "El hospital que ve su margen todos los días.",
    tagline:
      "Recuperamos dinero que se escapaba en los convenios, y la dirección cambió ocho reportes por una pantalla.",
    year: "2025",
    scope: "Tabuladores por convenio · Cobranza cuadrada · Panel de dirección",
    problem: [
      "Más de cuarenta convenios, entre aseguradoras, gobierno y pacientes que pagan directo, cada uno con su tabulador, su vigencia y sus excepciones. Cuadrar lo facturado contra lo cobrado tomaba dos personas de tiempo completo, mes con mes, en hojas de cálculo.",
      "El margen se fugaba por lugares conocidos: servicios que el convenio no contemplaba, descuentos fuera de tiempo, paquetes mal armados. Todos lo sospechaban; nadie podía medirlo a tiempo.",
    ],
    solution: [
      "Puse todos los convenios en un solo lugar, cada uno con sus reglas claras y su historial de cambios. Sobre eso, el cuadre entre facturación y cobro se hace solo, y la dirección tiene un panel con ocupación, rentabilidad por servicio y quién está pagando qué.",
      "El equipo de finanzas dejó de reaccionar una vez al mes y ahora ajusta convenios con datos del día. El director consulta una pantalla, no un PDF.",
    ],
    reuse: [
      "Los tableros de dirección, que después armé para la cadena de comida",
      "El cuadre de pagos, reutilizado en el fraccionamiento",
      "Los avisos de cobranza",
    ],
    impact: [
      { metric: "Margen de vuelta", detail: "desde el primer trimestre" },
      { metric: "De semanas a horas", detail: "en cerrar el mes" },
      { metric: "Ocho reportes", detail: "cambiados por un solo panel" },
    ],
    stack: [
      "Aplicación web",
      "Base de datos central",
      "Reglas por convenio",
      "Tableros de dirección",
    ],
    featured: true,
    order: 2,
  },
  {
    slug: "dona-tota-bi",
    client: "Doña Tota",
    clients: ["dona-tota"],
    vertical: "restaurant",
    verticalLabel: "Restaurantes",
    title: "La cadena que se ve completa todos los días.",
    tagline:
      "Un tablero que le dice a la dirección regional qué sucursal necesita una visita hoy, no en tres semanas.",
    year: "2024",
    scope: "Costo por receta · Mermas · Productividad por turno · Tablero regional",
    problem: [
      "Doña Tota crecía rápido y con muchas sucursales, pero la dirección regional dependía de reportes que llegaban tarde y ya viejos. El costo de cada platillo se calculaba dos veces al año; las mermas se adivinaban a fin de mes.",
      "Cuando una sucursal perdía margen, la empresa se enteraba tres semanas después, cuando corregirlo ya costaba más que el problema.",
    ],
    solution: [
      "Conecté el punto de venta, los inventarios y la nómina en un solo tablero: lo que cada receta debería costar contra lo que cuesta, mermas detectadas el mismo día, productividad por turno y por persona, y una vista regional que baja hasta cada sucursal.",
      "Los gerentes regionales ahora saben a cuál sucursal ir hoy. La dirección tiene una sola versión de la verdad.",
    ],
    reuse: [
      "Las conexiones con puntos de venta, listas para otras cadenas",
      "El costeo por receta",
      "La plantilla del tablero regional",
    ],
    impact: [
      { metric: "Menos merma", detail: "en los primeros tres meses" },
      { metric: "Cada día", detail: "el costeo que antes era semestral" },
      { metric: "Un tablero", detail: "para toda la red de sucursales" },
    ],
    stack: [
      "Aplicación web",
      "Conexión con punto de venta e inventarios",
      "Tableros regionales",
    ],
    featured: true,
    order: 3,
  },
  {
    slug: "comunidad-bi",
    client: "Park & Wash Victoria",
    clients: ["park-wash"],
    vertical: "community",
    verticalLabel: "Comunidades",
    title: "El fraccionamiento que se administra como empresa.",
    tagline:
      "Cuotas, morosidad, áreas comunes y seguridad en un solo lugar, para un comité que decidía viendo la mitad.",
    year: "2024",
    scope: "Cuotas · Morosidad · Reservas · Bitácora de seguridad · Panel del comité",
    problem: [
      "El fraccionamiento funcionaba con un administrador, una contadora y un grupo de WhatsApp donde caían reportes de seguridad, mantenimiento y reservas. La morosidad subía, la información vivía en pedazos y el comité decidía con medio panorama.",
      "No necesitaban más gente. Necesitaban una herramienta que les permitiera administrar como empresa con los recursos de una comunidad.",
    ],
    solution: [
      "Les armé una plataforma única: cuotas cuadradas con sus facturas, morosidad por vecino y por antigüedad, reservas de áreas comunes con calendario, bitácora de seguridad firmada por turno y un panel para el comité donde cada quien ve lo que le toca.",
      "El comité dejó de apagar fuegos. La morosidad bajó porque la cobranza se volvió predecible.",
    ],
    reuse: [
      "Accesos por papel: administrador, comité, vecino",
      "El cuadre de cuotas, heredado del hospital",
      "La bitácora, heredada de la notaría",
    ],
    impact: [
      { metric: "Menos morosidad", detail: "en seis meses" },
      { metric: "Todo registrado", detail: "cada incidencia de seguridad" },
      { metric: "Una plataforma", detail: "en lugar de cuatro herramientas y un chat" },
    ],
    stack: [
      "Aplicación web",
      "Facturación electrónica",
      "Accesos por papel",
      "Bitácora",
    ],
    order: 4,
  },
  {
    slug: "job-tracker-bi",
    client: "Job Tracker BI",
    clients: ["job-tracker"],
    vertical: "professional",
    verticalLabel: "Servicios profesionales",
    title: "Cobrar el tiempo sin perder tiempo registrándolo.",
    tagline:
      "Para firmas que cobran por hora: registro casi automático, margen claro por proyecto y un aviso antes de que uno se vuelva pérdida.",
    year: "2024",
    scope: "Registro de tiempo · Margen por proyecto · Prospectos · Asistente",
    problem: [
      "Las firmas que cobran por hora viven una contradicción: el tiempo es su producto, y registrarlo es lo que más se posterga. Las hojas se llenan los viernes de memoria, el margen real se conoce tarde y los prospectos viven aparte de los proyectos.",
      "El resultado: proyectos que pierden dinero mientras todos creen que van bien.",
    ],
    solution: [
      "Construí un registro de tiempo que casi se llena solo: el sistema sugiere las entradas a partir del calendario y el correo. Prospectos, proyectos y facturación quedaron en un mismo plano, con el margen real por proyecto y por persona, y un aviso cuando alguno entra en zona de riesgo.",
      "El equipo recupera horas cada semana y la dirección ve los problemas antes de que cuesten.",
    ],
    reuse: [
      "Accesos por firma y por persona",
      "El asistente de productividad, que después armé para Laura Zanuna",
      "El seguimiento de prospectos",
    ],
    impact: [
      { metric: "Margen a la vista", detail: "en cada proyecto activo" },
      { metric: "Horas de vuelta", detail: "cada semana por consultor" },
      { metric: "Al día", detail: "prospectos y proyectos juntos" },
    ],
    stack: [
      "Aplicación web",
      "Conexión con calendario y correo",
      "Asistente con inteligencia artificial",
    ],
    order: 5,
  },
  {
    slug: "laura-zanuna",
    client: "Laura Zanuna",
    clients: ["laura-zanuna"],
    vertical: "professional",
    verticalLabel: "Servicios profesionales",
    title: "Una consultora con el respaldo de una firma.",
    tagline:
      "Agenda, contenido, seguimiento y un asistente propio, para que su tiempo se vaya a los clientes.",
    year: "2025",
    scope: "Asistente personal · Agenda · Seguimiento · Contenido",
    problem: [
      "Laura atiende clientes de alto valor con una agenda llena. Su tiempo se cobra, pero todo lo que sostiene su marca, preparar, publicar y dar seguimiento, se lo robaba a las horas que facturan.",
      "El reto era darle a una sola persona lo que una firma tiene detrás, sin contratar a nadie.",
    ],
    solution: [
      "Le armé un asistente conectado a su agenda, su correo y sus notas, junto con un registro de tiempo ligero y un flujo para publicar contenido. El asistente le prepara las reuniones y le redacta los seguimientos; ella se concentra en la conversación con el cliente.",
      "Es la prueba de que lo que construí para notarías y hospitales también sirve, ajustado, para una sola persona.",
    ],
    reuse: [
      "El asistente personal, heredado del registro de tiempo para firmas",
      "El flujo de contenido",
      "La conexión con agenda y correo",
    ],
    impact: [
      { metric: "Horas recuperadas", detail: "cada semana para atender clientes" },
      { metric: "El doble", detail: "de contenido publicado" },
      { metric: "Una persona", detail: "operando como una firma" },
    ],
    stack: [
      "Asistente con inteligencia artificial",
      "Conexión con agenda y correo",
      "Aplicación web",
    ],
    order: 6,
  },
];

export const featuredCases = caseStudies.filter((c) => c.featured);
export const orderedCases = [...caseStudies].sort((a, b) => a.order - b.order);
export const findCase = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
