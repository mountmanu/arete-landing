# Areté — Landing Page

Sitio institucional de **Areté Soluciones S.A. de C.V.**, consultoría mexicana de software AI-nativo. Núcleo reusable + packs por industria.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript estricto)
- **Tailwind 4** (configuración CSS-first vía `@theme`)
- **next/font** (EB Garamond + Inter, self-hosted)
- **react-hook-form + zod** (formulario de contacto)
- **framer-motion** (animaciones de entrada)

## Setup

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

## Estructura

```
app/                  Páginas (App Router)
  ├─ page.tsx                  Home
  ├─ nosotros/page.tsx         Cómo trabajo
  ├─ verticales/page.tsx       Industrias
  ├─ casos/page.tsx            Grid de los 7 casos
  ├─ casos/[slug]/page.tsx     Caso individual (statically generated)
  ├─ contacto/page.tsx
  ├─ sitemap.ts · robots.ts
  └─ opengraph-image.tsx       OG image dinámica

components/           UI reusable
  ├─ Logo.tsx                  LogoFull · LogoWordmark · LogoMark
  ├─ Nav.tsx · Footer.tsx
  ├─ Hero · Founder · Principios · Architecture · VerticalsGrid · CasesPreview · ContactCTA
  ├─ CaseStudyCard · CasesGrid · ContactForm · Engagement · ReadingProgress
  ├─ JsonLd · Reveal · ClientsStrip
  └─ ...

lib/
  ├─ case-studies.ts           Fuente única de los 7 casos
  └─ verticals.ts              Fuente única de las 5 industrias

public/
  ├─ favicon.svg
  └─ images/manuel.jpg         Foto del fundador
```

## Marca

- **Nombre comercial**: Areté
- **Razón social**: Areté Soluciones S.A. de C.V.
- **Logo**: wordmark en EB Garamond + apex mark
- **Paleta**: Ink `#0A0A0A` · Paper `#FAFAFA` · Soft `#F5F5F5` · Mute `#525252` · Line `#E5E5E5`
- **Tipografía**: EB Garamond (display) · Inter (body)

## Casos en producción

1. Notaría Pública 45 / 273 · Notarial
2. Hospital privado Bajío · Hospital
3. Doña Tota · Restaurantes
4. Comunidad residencial · Comunidades
5. Bento · Restaurantes
6. Job Tracker BI · Servicios profesionales
7. Laura Zanuna · Servicios profesionales

## Deploy

```bash
# Build de producción
npm run build
npm run start
```

Despliegue recomendado: Vercel (auto-deploy desde main).

---

© Areté Soluciones S.A. de C.V.
