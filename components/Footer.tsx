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

// What the name stands for. The initials carry the acronym, so they read brighter.
const acronym: [string, string][] = [
  ["L", "ógica e "],
  ["I", "nteligencia en "],
  ["N", "úcleos con "],
  ["C", "apacidades "],
  ["E", "mpresariales"],
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <div className="container-editorial py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" aria-label="LINCE — Inicio" className="inline-block">
              <LogoFull tone="light" className="h-16 w-auto" />
            </Link>
            <p className="mt-5 max-w-md text-paper/60 text-[15px] leading-relaxed">
              {acronym.map(([initial, rest]) => (
                <span key={initial}>
                  <span className="text-paper font-semibold">{initial}</span>
                  {rest}
                </span>
              ))}
            </p>
            <p className="mt-6 max-w-md text-paper/70 leading-relaxed">
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

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sitemap.map((column) => (
              <div key={column.title}>
                <h3 className="eyebrow text-paper/60 mb-5">{column.title}</h3>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-paper/85 hover:text-paper transition-colors text-[15px] [overflow-wrap:anywhere]"
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
