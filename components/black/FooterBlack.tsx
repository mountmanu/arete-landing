import Link from "next/link";
import { LogoBlack } from "./LogoBlack";

const sitemap = [
  {
    title: "Producto",
    items: [
      { href: "/black/cumplimiento", label: "Cumplimiento PLD" },
      { href: "/black/boveda", label: "Bóveda" },
      { href: "/black/casos", label: "Casos" },
      { href: "/black/contacto", label: "Solicitar acceso" },
    ],
  },
  {
    title: "Grupo Areté",
    items: [
      { href: "/", label: "Areté Soluciones" },
      { href: "/verticales", label: "Otras industrias" },
      { href: "/nosotros", label: "Cómo trabajamos" },
      { href: "/casos", label: "Casos en producción" },
    ],
  },
  {
    title: "Contacto",
    items: [
      { href: "mailto:black@arete.mx", label: "black@arete.mx" },
      { href: "/black/contacto", label: "Solicitar acceso" },
    ],
  },
];

export function FooterBlack() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-paper-pure)] text-ink mt-24 border-t border-line">
      <div className="container-editorial py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-5">
            <Link
              href="/black"
              aria-label="Areté Black — Inicio"
              className="inline-block"
            >
              <LogoBlack className="h-10 w-auto" />
            </Link>
            <p className="mt-8 max-w-md text-mute leading-relaxed">
              Suite de Cumplimiento PLD para casas de joyería, relojería,
              metales y piedras preciosas. Construida sobre la madurez
              acumulada de Areté Soluciones.
            </p>
            <p className="mt-8 text-mute/80 text-sm">
              Areté Soluciones S.A. de C.V.
              <br />
              Operación remota desde México · Cobertura LATAM
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {sitemap.map((column) => (
              <div key={column.title}>
                <h3 className="eyebrow text-gold mb-5">{column.title}</h3>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-ink/85 hover:text-gold transition-colors text-[15px]"
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

        <div className="my-12 h-px bg-line" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm text-mute">
          <p>
            &copy; {year} Areté Soluciones S.A. de C.V. — Todos los derechos
            reservados.
          </p>
          <p className="text-mute/70">
            <span className="text-gold">·</span> Acceso restringido por
            solicitud
          </p>
        </div>
      </div>
    </footer>
  );
}
