import type { VerticalSlug } from "./verticals";

export interface CaseImpact {
  metric: string;
  detail: string;
}

export interface CaseSection {
  heading: string;
  body: string[];
}

export interface CaseStudy {
  slug: string;
  client: string;
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
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "notaria-45-273",
    client: "Notaría Pública 45 / 273",
    vertical: "notarial",
    verticalLabel: "Notarial",
    title: "El despacho notarial como sistema operativo.",
    tagline:
      "Reducimos el tiempo de redacción de escrituras de días a horas, sin sacrificar formalidad jurídica.",
    year: "2025",
    scope: "Plataforma notarial · RAG · Agentes redactores · Bitácora auditable",
    problem: [
      "Las dos notarías operaban con flujos heterogéneos heredados de décadas distintas: minutas en Word, anexos sueltos, control en hojas de cálculo. Cada escritura involucraba al notario, dos abogados y un capturista, con tiempos de retrabajo elevados y riesgo de inconsistencias entre versiones.",
      "El cuello de botella no era jurídico — era operativo. La materia legal estaba dominada; lo que faltaba era un sistema que acompañara al equipo paso por paso, con la legislación local cargada y los antecedentes del cliente disponibles en contexto.",
    ],
    solution: [
      "Sobre el núcleo Areté armamos el pack notarial: RAG con la legislación estatal y los protocolos del despacho, agentes redactores que generan minutas a partir de los hechos del cliente, MCP que conecta con el sistema de gestión interna para traer antecedentes en cuestión de segundos.",
      "El equipo trabaja sobre un editor donde cada cláusula está trazable a su fuente legal y a la decisión del notario. Cada escritura final se cierra con una bitácora cronológica firmada — auditable, inmutable, exportable.",
    ],
    reuse: [
      "Núcleo de auth y permisos por rol (notario, abogado, capturista)",
      "Motor de RAG generalizable",
      "Bitácora auditable reutilizable en hospital y comunidades",
    ],
    impact: [
      { metric: "−72%", detail: "tiempo de redacción de escritura promedio" },
      { metric: "+3.4×", detail: "throughput del despacho sin sumar personal" },
      { metric: "0", detail: "reprocesos por inconsistencia de versión" },
    ],
    stack: ["Next.js", "RAG", "Agentes", "MCP", "Postgres", "Bitácora auditable"],
    featured: true,
    order: 1,
  },
  {
    slug: "hospital-pricing",
    client: "Hospital privado · Bajío",
    vertical: "hospital",
    verticalLabel: "Hospital",
    title: "El pricing como sistema vivo, no como hoja de cálculo.",
    tagline:
      "Recuperamos margen filtrado en convenios y fugas de cobranza, con un panel directivo que reemplaza ocho reportes manuales.",
    year: "2025",
    scope: "Pricing dinámico · Conciliación · Panel directivo · Agentes de cobranza",
    problem: [
      "El hospital negociaba con más de cuarenta convenios — aseguradoras, gobierno, autopago — cada uno con tabuladores distintos, vigencias móviles y reglas de exclusión. La conciliación entre lo facturado y lo cobrado se hacía mes contra mes en hojas de cálculo, con dos analistas dedicados a tiempo completo.",
      "Las fugas de margen vivían en lugares predecibles: códigos no contemplados en el convenio, descuentos extemporáneos, paquetes mal armados. Pero nadie las podía cuantificar en tiempo real.",
    ],
    solution: [
      "Migramos el pricing a un motor centralizado, con cada convenio como contrato versionado y reglas explícitas. Sobre eso construimos la conciliación automática facturación-pago y un panel directivo con métricas de ocupación, mix de pagador, rentabilidad por servicio y agente de cobranza preventiva.",
      "El equipo financiero pasó de reaccionar mensualmente a ajustar convenios con datos diarios. La dirección general ahora consulta una pantalla, no un PDF.",
    ],
    reuse: [
      "Núcleo de BI y dashboards",
      "Motor de reglas reutilizable para conciliaciones en restaurantes",
      "Agentes de cobranza generalizables a comunidades",
    ],
    impact: [
      { metric: "+11.4%", detail: "margen recuperado en el primer trimestre" },
      { metric: "−86%", detail: "tiempo de cierre mensual" },
      { metric: "8 → 1", detail: "reportes manuales reemplazados por un panel" },
    ],
    stack: ["Next.js", "Postgres", "Motor de reglas", "Agentes", "BI", "MCP"],
    featured: true,
    order: 2,
  },
  {
    slug: "dona-tota-bi",
    client: "Doña Tota",
    vertical: "restaurant",
    verticalLabel: "Restaurantes",
    title: "Una cadena que se ve a sí misma todos los días.",
    tagline:
      "BI operacional para una cadena de comida regional: del costeo teórico hasta la productividad por turno.",
    year: "2024",
    scope: "BI · Costeo · Mermas · Productividad · Panel regional",
    problem: [
      "Doña Tota crecía con velocidad y operaba con muchas sucursales, pero la dirección regional dependía de reportes ad-hoc que llegaban tarde y desactualizados. El costeo teórico se calculaba dos veces al año; las mermas se inferían a fin de mes.",
      "Cuando una sucursal perdía margen, la organización lo descubría tres semanas después, cuando la corrección ya costaba más caro que el problema.",
    ],
    solution: [
      "Conectamos punto de venta, inventarios y nómina a un dashboard unificado. Costo teórico vs real por receta, mermas detectadas en el día, productividad por turno con desglose por empleado, panel regional con drilldown a sucursal.",
      "Los gerentes regionales ahora saben qué sucursal necesita una visita el mismo día. La dirección tiene una sola fuente de verdad.",
    ],
    reuse: [
      "Conectores de POS reutilizables en Bento",
      "Motor de costeo teórico empacable a hospitales",
      "Plantilla de panel regional",
    ],
    impact: [
      { metric: "−4.2 pts", detail: "merma promedio en 90 días" },
      { metric: "Diaria", detail: "frecuencia de costeo (antes semestral)" },
      { metric: "1 panel", detail: "para 100% de la red de sucursales" },
    ],
    stack: ["Next.js", "Postgres", "ETL", "BI", "Dashboards regionales"],
    featured: true,
    order: 3,
  },
  {
    slug: "comunidad-bi",
    client: "Comunidad residencial",
    vertical: "community",
    verticalLabel: "Comunidades",
    title: "La administración condominal, profesionalizada.",
    tagline:
      "Cuotas, morosidad, áreas comunes y seguridad — todo en una sola plataforma para el comité.",
    year: "2024",
    scope: "Cuotas · Morosidad · Reservas · Bitácora · Panel para comité",
    problem: [
      "El fraccionamiento operaba con un administrador, una contadora y un grupo de WhatsApp donde llegaban reportes de seguridad, mantenimiento y reservas de áreas comunes. La morosidad subía, la información vivía en silos y el comité gobernaba con visibilidad parcial.",
      "Lo que necesitaban no era más personal: era un sistema que les permitiera administrar como una empresa profesional con los recursos de una comunidad.",
    ],
    solution: [
      "Implementamos el pack de comunidades: conciliación automática de cuotas con CFDI, panel de morosidad con segmentación por antigüedad, reservas de áreas comunes con calendario público, bitácora de seguridad firmada por turno y panel del comité con acceso por rol.",
      "El comité dejó de ser bombero y volvió a ser estratégico. La morosidad bajó porque la cobranza se hizo predecible.",
    ],
    reuse: [
      "Núcleo de auth con roles granulares",
      "Conciliación reutilizada del pack hospital",
      "Bitácora auditable del pack notarial",
    ],
    impact: [
      { metric: "−38%", detail: "morosidad en seis meses" },
      { metric: "100%", detail: "incidencias de seguridad bitacoreadas" },
      { metric: "1 plataforma", detail: "reemplaza 4 herramientas anteriores" },
    ],
    stack: ["Next.js", "Postgres", "CFDI", "Auth multi-rol", "Bitácora"],
    order: 4,
  },
  {
    slug: "bento",
    client: "Bento",
    vertical: "restaurant",
    verticalLabel: "Restaurantes",
    title: "Un nuevo concepto, lanzado con instrumentación de cadena madura.",
    tagline:
      "Bento abrió con el dashboard que otras cadenas tardan años en construir.",
    year: "2024",
    scope: "Lanzamiento · Punto de venta · BI · Operaciones",
    problem: [
      "Bento es un concepto nuevo de comida — joven, ágil, con ambiciones de cadena. El equipo no quería abrir y luego \"resolver\" la información meses después: querían lanzar con la misma claridad operativa que tienen las cadenas grandes.",
      "El reto era empacar lo que aprendimos en Doña Tota y entregárselo a un equipo más pequeño, sin sacrificar profundidad.",
    ],
    solution: [
      "Reutilizamos el pack de restaurantes y lo desplegamos en seis semanas: POS conectado, costeo activo desde el día uno, panel diario, alertas de variación. El equipo de Bento abrió la primera unidad con instrumentación de cadena madura.",
      "Es exactamente la promesa del modelo compound de Areté: el segundo cliente del mismo vertical recibe en semanas lo que el primero construyó en meses.",
    ],
    reuse: [
      "Pack de restaurantes completo del proyecto Doña Tota",
      "Conectores POS",
      "Plantilla de panel diario",
    ],
    impact: [
      { metric: "6 semanas", detail: "del kickoff al panel productivo" },
      { metric: "Día 1", detail: "con costeo y mermas activos" },
      { metric: "−65%", detail: "tiempo de implementación vs el primer cliente" },
    ],
    stack: ["Next.js", "POS", "ETL", "BI", "Pack restaurante"],
    order: 5,
  },
  {
    slug: "job-tracker-bi",
    client: "Job Tracker BI",
    vertical: "professional",
    verticalLabel: "Servicios profesionales",
    title: "El tiempo facturable, sin la fricción de capturarlo.",
    tagline:
      "Para firmas que cobran por hora: captura mínima, márgenes claros, alertas tempranas de fuga.",
    year: "2024",
    scope: "Job tracking · Margen por proyecto · Pipeline · Asistente",
    problem: [
      "Las firmas que cobran por hora viven una contradicción: el tiempo es su producto, y la captura del tiempo es la tarea que más se posterga. Las hojas se llenan los viernes con datos imprecisos, el margen real por proyecto se conoce demasiado tarde, y el pipeline comercial vive desconectado del delivery.",
      "El resultado: proyectos que sangran margen mientras todos creen que van bien.",
    ],
    solution: [
      "Construimos un job tracker con captura asistida — el agente sugiere las entradas a partir del calendario, los emails y los commits — y conectamos pipeline, delivery y facturación en un solo plano. Margen real por proyecto y por consultor en tiempo real, alertas tempranas cuando un proyecto entra en zona de fuga.",
      "El equipo recupera horas de captura cada semana, y la dirección ve los problemas antes de que se conviertan en pérdidas.",
    ],
    reuse: [
      "Núcleo de auth y multi-tenant",
      "Asistente personal de productividad reutilizable a Laura Zanuna",
      "Motor de pipeline a verticales adicionales",
    ],
    impact: [
      { metric: "+22%", detail: "margen visible en proyectos activos" },
      { metric: "−4 hrs", detail: "captura semanal por consultor" },
      { metric: "Tiempo real", detail: "pipeline conectado a delivery" },
    ],
    stack: ["Next.js", "Postgres", "Agentes", "Calendario", "Email"],
    order: 6,
  },
  {
    slug: "laura-zanuna",
    client: "Laura Zanuna",
    vertical: "professional",
    verticalLabel: "Servicios profesionales",
    title: "Una marca personal con el back-office de una firma.",
    tagline:
      "Para una consultora individual de alto valor: agenda, contenido, operaciones y un asistente de IA dedicado.",
    year: "2025",
    scope: "Marca personal · Asistente IA · Operaciones · Contenido",
    problem: [
      "Laura es una consultora con clientes de alto valor y agenda densa. Su tiempo factura, pero las tareas que sostienen la marca personal — preparación, contenido, seguimiento, operaciones — competían con el tiempo facturable.",
      "El reto: darle a una persona el back-office de una firma sin agregar headcount.",
    ],
    solution: [
      "Empacamos un asistente personal de IA conectado a su agenda, su correo y sus notas, junto con el job tracker liviano y un sistema editorial para contenido. El asistente prepara reuniones, redacta seguimientos, y deja a Laura enfocada en la conversación con el cliente.",
      "Es el caso límite de la promesa Areté: el mismo núcleo que opera notarías y hospitales, ajustado para una sola persona.",
    ],
    reuse: [
      "Asistente personal del Job Tracker BI",
      "Motor de contenido editorial",
      "Núcleo de calendar/email",
    ],
    impact: [
      { metric: "+9 hrs", detail: "tiempo facturable recuperado por semana" },
      { metric: "2×", detail: "frecuencia de contenido publicado" },
      { metric: "1 persona", detail: "operando como una firma pequeña" },
    ],
    stack: ["Next.js", "Asistente IA", "Calendar", "Email", "Editorial"],
    order: 7,
  },
];

export const featuredCases = caseStudies.filter((c) => c.featured);
export const orderedCases = [...caseStudies].sort((a, b) => a.order - b.order);
export const findCase = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);
