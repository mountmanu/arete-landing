import Link from "next/link";
import { LogoFull } from "./Logo";

const sitemap = [
  {
    title: "Compañía",
    items: [
      { href: "/nosotros", label: "Cómo trabajo" },
      { href: "/verticales", label: "Industrias" },
      { href: "/casos", label: "Casos" },
      { href: "/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Industrias",
    items: [
      { href: "/verticales#notarial", label: "Notarías" },
      { href: "/verticales#hospital", label: "Hospitales" },
      { href: "/verticales#restaurant", label: "Restaurantes" },
      { href: "/verticales#parking", label: "Estacionamientos" },
      {
        href: "/verticales#professional",
        label: "Servicios profesionales",
      },
    ],
  },
  {
    title: "Contacto",
    items: [
      { href: "mailto:manuel@lincesistemas.com", label: "manuel@lincesistemas.com" },
      { href: "/contacto", label: "Agendar 30 min" },
      { href: "https://www.linkedin.com/in/manuel-flores-90653060/", label: "LinkedIn" },
    ],
  },
];

// Qué significa el nombre. Se muestra como acróstico: las iniciales, una por
// línea, forman LINCE en vertical; los conectores van en chico y apagados.
const acronym: { initial: string; rest: string; link?: string }[] = [
  { initial: "L", rest: "ógica", link: "e" },
  { initial: "I", rest: "nteligencia", link: "en" },
  { initial: "N", rest: "úcleos", link: "con" },
  { initial: "C", rest: "apacidades" },
  { initial: "E", rest: "mpresariales" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-5">
            <Link href="/" aria-label="LINCE — Inicio" className="inline-block">
              <LogoFull tone="light" className="h-16 w-auto" />
            </Link>
            <ul
              className="mt-8 font-display leading-[1.15]"
              aria-label="Lógica e Inteligencia en Núcleos con Capacidades Empresariales"
            >
              {acronym.map(({ initial, rest, link }) => (
                <li key={initial} className="whitespace-nowrap">
                  <span className="text-[2.25rem] text-paper">{initial}</span>
                  <span className="text-[1.5rem] text-paper/80">{rest}</span>
                  {link && (
                    <>
                      {" "}
                      <span className="ml-2 font-body text-[11px] tracking-[0.2em] uppercase text-paper/40 align-middle">
                        {link}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-md text-paper/70 leading-relaxed">
              Hago sistemas a la medida para negocios que ya funcionan y
              quieren ver, controlar y crecer sin perder el piso. Los
              construyo, los entrego funcionando y me quedo.
            </p>
            <p className="mt-6 text-paper/55 text-sm">
              LINCE Sistemas
              <br />
              Ciudad Victoria, Tamaulipas. Trabajo con negocios de todo México.
            </p>
          </div>

          {/* Contacto toma el ancho de su contenido para que el correo nunca se parta. */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-[1fr_1fr_auto] gap-8">
            {sitemap.map((column) => (
              <div
                key={column.title}
                className={column.title === "Contacto" ? "col-span-2 sm:col-span-1" : ""}
              >
                <h3 className="eyebrow text-paper/60 mb-5">{column.title}</h3>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-paper/85 hover:text-paper transition-colors text-[15px] ${
                          item.href.startsWith("mailto:") ? "whitespace-nowrap" : ""
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-8 border-paper/10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-paper/55">
          <p>
            &copy; {year} LINCE Sistemas — Todos los derechos
            reservados.
          </p>
          <p>Hecho en México.</p>
        </div>
      </div>
    </footer>
  );
}
