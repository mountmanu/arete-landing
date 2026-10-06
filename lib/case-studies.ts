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
      "El historial auditable, que después usé en el hospital",
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
      "El cuadre de pagos, listo para cualquier negocio que cobra por convenio",
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
    slug: "park-wash",
    client: "Park & Wash Victoria",
    clients: ["park-wash"],
    vertical: "parking",
    verticalLabel: "Estacionamientos",
    title: "El estacionamiento donde cada peso queda registrado, a cualquier hora.",
    tagline:
      "Entrada, lavado, cobro y corte de turno en una sola pantalla de cabina, para un negocio que trabaja las 24 horas con gente que rota.",
    year: "2026",
    scope: "Cabina de cobro · Tickets y tiempos · Bahías de lavado · Corte de turno · Pensiones",
    problem: [
      "Park & Wash es un estacionamiento con autolavado en el centro de Ciudad Victoria, abierto las 24 horas: tres turnos, veinte cajones, cuatro bahías y un flujo constante de autos que entran, se lavan y salen. Sin sistema, el ticket era un papel, el tiempo se calculaba de cabeza y el corte de turno dependía de que la memoria del empleado cuadrara con el dinero del cajón.",
      "El dueño necesitaba una cosa antes que nada: que cada peso que entra quede registrado, sin importar quién esté en la cabina ni a qué hora.",
    ],
    solution: [
      "Construí la cabina de cobro: el empleado entra con su clave, registra la placa, elige si el auto lleva lavado y el sistema arranca el reloj. El cobro lo calcula el sistema, no el empleado, con las tarifas y la tolerancia que fijó el dueño. Al salir, recibo impreso y cajón abierto desde la misma pantalla.",
      "Las bahías de lavado tienen su propio tablero: qué auto está en cuál, cuánto lleva y qué servicio se le hace. El corte de turno sale solo, con el desglose por efectivo, tarjeta y transferencia. La terminal de cobro con tarjeta se está integrando para que el monto llegue sin teclearlo.",
    ],
    reuse: [
      "La cabina de cobro con tarifa por tiempo, lista para otro estacionamiento",
      "El corte de turno por método de pago",
      "La conexión con impresora, cajón y lector de código",
    ],
    impact: [
      { metric: "Cada peso registrado", detail: "sin depender de quién esté en la cabina" },
      { metric: "Corte en minutos", detail: "con desglose por método de pago" },
      { metric: "Las 24 horas", detail: "tres turnos sobre el mismo sistema" },
    ],
    stack: [
      "Aplicación web",
      "Base de datos central",
      "Impresora, cajón y lector de código",
      "Terminal de cobro con tarjeta",
    ],
    order: 4,
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
    order: 5,
  },
];

export const featuredCases = caseStudies.filter((c) => c.featured);
export const orderedCases = [...caseStudies].sort((a, b) => a.order - b.order);
export const findCase = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
