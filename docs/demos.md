# Demos públicos de los sistemas

Objetivo: que cualquier visitante de lincesistemas.com entre a una copia de cada
sistema con datos inventados y lo use como si fuera el dueño, sin exponer datos
de clientes ni detalles que no conviene mostrar.

## Cómo se conecta con el sitio

- `lib/case-studies.ts`: cada caso acepta `demo: { url, note? }`. En cuanto un caso
  tiene `demo.url`, aparece el botón "Probar el demo" en su página, la tarjeta sale en
  `/demos` y el menú muestra la liga "Demos". Sin ninguna URL, `/demos` existe pero no
  se enlaza desde el menú.
- Los logos de cliente viven en `public/clientes/` y se referencian por id desde
  `lib/clients.ts`.

## Reglas para cada demo

1. Instancia separada de producción: otro proyecto en Vercel/Fly/Railway y otra base
   de datos. Nunca apuntar al Supabase ni al servidor del cliente.
2. Datos 100 % sintéticos generados por un seed reproducible (nombres, RFC, montos,
   fechas falsos). Nada copiado de respaldos reales.
3. Usuario de prueba con sesión automática o credenciales visibles en la página
   (p. ej. `demo@lincesistemas.com` / contraseña mostrada). Rol de dueño o gerente.
4. Reset programado (cron diario) que vuelve a correr el seed, para que lo que toquen
   los visitantes no se acumule.
5. Apagar lo que cueste o filtre: envíos de correo y WhatsApp, cobros, exportaciones
   masivas, integraciones con terceros. Variable `DEMO_MODE=true` que las desactiva.
6. Ocultar lo que no conviene enseñar: prompts internos, reglas de negocio sensibles
   del cliente, tabuladores reales. Donde haga falta, sustituir por versiones genéricas.
7. Aviso visible dentro del demo: "Datos ficticios. Demo de LINCE Sistemas."

## Estado por sistema (6 oct 2026)

| Caso (slug) | Repo | Stack | Hospedaje actual | Qué falta para el demo |
|---|---|---|---|---|
| notaria-45-273 | `D:\notaria-273` | Next 15 + Drizzle + Postgres (Supabase Auth) | Vercel (prod) | Proyecto Vercel nuevo, Postgres de demo, correr `pnpm db:seed` con datos sintéticos, usuario demo, `DEMO_MODE`. |
| hospital-pricing | `D:\hospital-la-salle` (copia: `D:\hospital-demo-main`) | Rust + Axum + SQLite, binario único | Servidor Windows del hospital | Es el más fácil: SQLite con seed sintético, Dockerfile y `fly.toml` ya existen. Falta cuenta Fly (o un VPS), usuario demo y aviso de datos ficticios. |
| dona-tota-bi | `D:\juan_guerra\dona-tota-dashboard` | FastAPI + frontend web | Railway (prod caída: Supabase sin pagar) | Postgres de demo, seed sintético de ventas/inventario/nómina, servicio Railway aparte, `DEMO_MODE`. |
| comunidad-bi | `D:\ricardo-nunez` (Park & Wash) | Next + Supabase | Vercel (prod) | Decidir primero qué cuenta el caso (hoy dice fraccionamiento pero el cliente es Park & Wash). Después: Postgres de demo, seed, usuario demo. |
| job-tracker-bi | no hay repo en `D:\` | — | — | No existe código que desplegar. O se construye como demo nuevo o se quita el caso. |
| laura-zanuna | `D:\laura-zanuna` | Next 14 + Supabase | Vercel (`laura-zanuna.vercel.app`) | Proyecto Vercel y Supabase de demo, correr `/api/seed`, usuario admin demo, apagar correos. |

## Decisiones pendientes (de Manuel)

- Base de datos para los demos: Supabase Pro (cada proyecto extra cobra cómputo) o
  Neon/otro Postgres gratuito. Para Postgres bastaría un solo servidor con una base por demo.
- Hospedaje del demo del hospital: Fly.io (ya hay `fly.toml`) o un VPS.
- Qué hacer con `job-tracker-bi` y qué cliente real respalda `comunidad-bi`.

## Orden sugerido

1. Hospital (sin dependencias externas, un binario y un archivo SQLite).
2. Laura Zanuna (ya está en Vercel, el seed existe).
3. Notaría 273 (seed existe, falta base de demo).
4. Doña Tota (hay que levantar backend y base).
5. Park & Wash, cuando se decida el caso.
