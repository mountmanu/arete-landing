# Demos públicos de los sistemas

Objetivo: que cualquier visitante de lincesistemas.com entre a una copia de cada
sistema con datos inventados y lo use como si fuera el dueño, sin exponer datos
de clientes ni detalles que no conviene mostrar. Todo en planes gratuitos.

## Cómo se conecta con el sitio

- `lib/case-studies.ts`: cada caso acepta `demo: { url, note? }`. En cuanto un caso
  tiene `demo.url`, aparece el botón "Probar el demo" en su página, la tarjeta sale en
  `/demos` y el menú muestra la liga "Demos". Sin ninguna URL, `/demos` existe pero no
  se enlaza desde el menú.
- Los logos de cliente viven en `public/clientes/` y se referencian por id desde
  `lib/clients.ts`.

## Reglas para cada demo

1. Instancia separada de producción: otro proyecto y otra base de datos. Nunca apuntar
   al Supabase ni al servidor del cliente.
2. Datos 100 % sintéticos generados por un seed reproducible (nombres, RFC, montos,
   fechas falsos). Nada copiado de respaldos reales.
3. Usuario de prueba con credenciales públicas mostradas en `/demos`. Rol de dueño o
   gerente.
4. Reset automático: en Render gratuito el disco es efímero y cada reinicio vuelve a
   sembrar; donde haya Postgres, un cron diario corre el seed.
5. Apagar lo que cueste o filtre: correos, WhatsApp, cobros, integraciones. Variable
   `DEMO_MODE=true` que las desactiva.
6. Ocultar lo que no conviene enseñar: prompts internos, reglas sensibles del cliente,
   tabuladores reales. Sustituir por versiones genéricas.
7. Aviso visible: "Datos ficticios. Demo de LINCE Sistemas."

## Decisiones tomadas (6 oct 2026, Manuel)

- Postgres de demo: **Neon** (gratis).
- Servidores de demo (Rust y FastAPI): **Render** plan gratuito (se duermen tras 15 min
  sin uso; la primera visita tarda ~1 min).
- Apps Next.js: **Vercel** (plan gratuito, cuenta existente).
- Auth y datos de Laura Zanuna y Park & Wash: **Supabase** en una organización nueva
  del plan gratuito (dos proyectos gratis por organización).
- `job-tracker-bi` no existe: eliminado del sitio. `comunidad-bi` no existe: sustituido
  por el caso real de Park & Wash (repo `ricardo-nunez`).

## Estado por sistema

| Caso (slug) | Repo | Stack | Plan de demo | Estado |
|---|---|---|---|---|
| hospital-pricing | `D:\hospital-la-salle` rama `feat/online-demo` | Rust + Axum + SQLite | Render free con Docker. `render.yaml` listo; `entrypoint.sh` crea admin `demo` / `demo-lince-2026` y corre `seed-demo` (5 proveedores ficticios, 40 productos, historial de precios). | **Listo para desplegar**: falta que Manuel cree la cuenta de Render y aplique el blueprint. |
| laura-zanuna | `D:\laura-zanuna` | Next 14 + Supabase | Proyecto Supabase gratuito `laura-demo` + proyecto Vercel nuevo. Migraciones del repo, `/api/setup-admin` y `/api/seed`. Apagar correos con `DEMO_MODE`. | Pendiente de cuentas. |
| park-wash | `D:\ricardo-nunez` | Next 16 + Supabase (migraciones 001–017, RLS) | Proyecto Supabase gratuito `parkwash-demo` + Vercel. Seed sintético (tickets, bahías, cortes) a partir de `src/lib/demo/seed-data.ts`. PIN de cabina demo. | Pendiente de cuentas; hay que escribir el seed. |
| notaria-45-273 | `D:\notaria-273` | Next 15 + Drizzle + Postgres, Supabase Auth | Base en Neon (`notaria_demo`) + `pnpm db:seed`. Login: `DEMO_MODE` con sesión fija de notaría demo para no depender de Supabase Auth. | Pendiente de cuentas; hay que implementar el modo demo en el middleware. |
| dona-tota-bi | `D:\juan_guerra\dona-tota-dashboard` | FastAPI + frontend web | Backend en Render free (Docker/Python), base en Neon (`donatota_demo`), frontend en Vercel. Seed sintético de ventas, inventario y nómina por sucursal. | Pendiente de cuentas; hay que escribir el seed y el `render.yaml`. |

## Lo que debe hacer Manuel (todo gratis, con login de GitHub)

1. **Render**: crear cuenta en render.com → New → Blueprint → repo
   `mountmanu/hospital-pricing`, rama `feat/online-demo` → Apply. Cuando termine el build
   (10–15 min), copiar la URL `https://hospital-pricing-demo….onrender.com`.
2. **Neon**: crear cuenta en neon.tech → proyecto `lince-demos` → bases `notaria_demo` y
   `donatota_demo`.
3. **Supabase**: crear organización nueva "LINCE Demos" (plan Free) → proyectos
   `laura-demo` y `parkwash-demo`.
4. **Vercel**: en una terminal, `vercel login` (abre el navegador) para poder desplegar
   desde la línea de comandos.
5. Pegar las URLs, cadenas de conexión y llaves en `C:\Users\Manuel\Desktop\demos-env.txt`
   (no en el chat). Con eso se arman los demos en el orden de la tabla.

## Orden de trabajo

1. Hospital: aplicar blueprint, probar, poner la URL en `lib/case-studies.ts`.
2. Laura Zanuna (seed y setup-admin existen).
3. Park & Wash (escribir seed).
4. Notaría (modo demo en middleware + seed).
5. Doña Tota (seed grande + backend).
