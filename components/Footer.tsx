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
      { href: "/verticales#community", label: "Comunidades" },
      {
        href: "/verticales#professional",
        label: "Servicios profesionales",
      },
    ],
  },
  {
    title: "Contacto",
    items: [
      { href: "mailto:hola@arete.mx", label: "hola@arete.mx" },
      { href: "/contacto", label: "Agendar 30 min" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Areté — Inicio" className="inline-block">
              <LogoFull tone="light" className="h-10 w-auto" />
            </Link>
            <p className="mt-8 max-w-md text-paper/70 leading-relaxed">
              Software AI-nativo construido sobre un núcleo reusable y
              empacado por industria. Cada proyecto compone valor sobre el
              anterior.
            </p>
            <p className="mt-8 text-paper/55 text-sm">
              Areté Soluciones S.A. de C.V.
              <br />
              Operación remota desde México
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
                        className="text-paper/85 hover:text-paper transition-colors text-[15px]"
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

        <hr className="my-12 border-paper/10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-paper/55">
          <p>
            &copy; {year} Areté Soluciones S.A. de C.V. — Todos los derechos
            reservados.
          </p>
          <p>Construido con cuidado en México.</p>
        </div>
      </div>
    </footer>
  );
}
