# LINCE Sistemas — Sitio web

Sitio institucional de **LINCE Sistemas**, consultoría mexicana de software AI-nativo. Núcleo reusable + packs por industria.

Aloja dos experiencias bajo un mismo dominio:

- **`lincesistemas.com`** — sitio principal: 5 giros (notarías, hospitales, restaurantes, estacionamientos y autolavados, servicios profesionales), 5 casos en producción, cómo trabajo, contacto, demos.
- **`lincesistemas.com/black`** — sub-experiencia luxury **LINCE Black**: Suite de Cumplimiento PLD para casas de joyería, relojería, metales y piedras preciosas en México y Colombia. Paleta onyx/bone/gold, navegación dedicada (NavBlack/FooterBlack), formulario de "Solicitar acceso".

El switch entre experiencias lo maneja `components/SiteChrome.tsx` vía `usePathname`. El tema luxury se aplica con `data-theme="black"` sobre un wrapper interior; todos los tokens CSS (`--color-ink`, `--color-paper`, `--color-gold`, etc.) se sobrescriben dentro de ese scope en `globals.css`.

## Stack

- **Next.js 15** (App Router, React 19, TypeScript estricto)
- **Tailwind 4** (configuración CSS-first vía `@theme`)
- **next/font** (EB Garamond + Inter, self-hosted)
- **react-hook-form + zod** (formularios de contacto)
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
app/
  ├─ page.tsx                  Home LINCE Sistemas
  ├─ nosotros/page.tsx         Cómo trabajo
  ├─ verticales/page.tsx       Industrias
  ├─ casos/page.tsx            Grid de los 7 casos
  ├─ casos/[slug]/page.tsx     Caso individual (statically generated)
  ├─ contacto/page.tsx
  ├─ black/
  │   ├─ page.tsx              Landing LINCE Black
  │   ├─ cumplimiento/page.tsx Suite de Cumplimiento PLD (6 obligaciones del Art. 18)
  │   ├─ boveda/page.tsx       Módulo Bóveda white-label
  │   ├─ casos/page.tsx        Caso ancla 2026–2027
  │   ├─ contacto/page.tsx     Solicitar acceso
  │   └─ layout.tsx            Metadata Black
  ├─ sitemap.ts · robots.ts
  └─ opengraph-image.tsx       OG image dinámica

components/
  ├─ Logo.tsx                  LogoFull · LogoWordmark · LogoMark
  ├─ Nav.tsx · Footer.tsx
  ├─ SiteChrome.tsx            Router de Nav/Footer entre LINCE y LINCE Black
  ├─ Hero · Founder · Principios · Architecture · VerticalsGrid · CasesPreview · ContactCTA
  ├─ CaseStudyCard · CasesGrid · ContactForm · Engagement · ReadingProgress
  ├─ JsonLd · Reveal · ClientsStrip
  └─ black/                    Componentes específicos de LINCE Black
      ├─ LogoBlack.tsx
      ├─ NavBlack.tsx · FooterBlack.tsx
      ├─ HeroBlack · StakesBlack · PackBlack · BovedaShowcase
      ├─ EngagementBlack · FounderBridge · ContactCTABlack
      └─ ContactFormBlack.tsx

lib/
  ├─ case-studies.ts           Fuente única de los 7 casos
  └─ verticals.ts              Fuente única de las 5 industrias

public/
  ├─ brand/lince-negro.png     Logo para fondo claro
  ├─ brand/lince-blanco.png    Logo para fondo oscuro
  ├─ favicon.png · apple-touch-icon.png · icon-512.png
```

## Marca

### LINCE (principal)
- **Nombre comercial**: LINCE Sistemas
- **Logo**: cabeza de lince en grabado + wordmark LINCE en EB Garamond. El lince sale de una foto CC0 (Wilfredor, Wikimedia Commons)
- **Paleta**: Ink `#0A0A0A` · Paper `#FAFAFA` · Soft `#F5F5F5` · Mute `#525252` · Line `#E5E5E5`
- **Tipografía**: EB Garamond (display) · Inter (body)
- **Audiencia**: PyMEs mexicanas, decisores operativos (notarios, COOs hospitalarios, directores regionales de cadena)

### LINCE Black (sub-experiencia luxury)
- **Producto**: Suite de Cumplimiento PLD + módulo Bóveda
- **Logo**: lince y wordmark LINCE en bone + sub-label "BLACK" en oro mate tracked uppercase
- **Paleta**: Onyx `#0A0908` · Bone `#F5F1E8` · Gold `#C9A961` · Gold-deep `#8E7541`
- **Tipografía**: misma familia, mismo peso — la diferenciación está en paleta y tono editorial
- **Audiencia**: oficiales de cumplimiento, CFOs y directores generales de casas de joyería, relojería y comercializadores de metales preciosos en MX y CO
- **Activación**: `[data-theme="black"]` aplicado por `SiteChrome` cuando `pathname.startsWith("/black")`

## Casos en producción (LINCE)

1. Notaría Pública 45 / 273 · Notarial
2. Hospital Victoria La Salle · Hospital
3. Doña Tota · Restaurantes
4. Park & Wash Victoria · Estacionamientos y autolavados
5. Laura Zanuna · Servicios profesionales

## Caso ancla (LINCE Black)

Sin firmar al cierre Q2 2026. Búsqueda activa entre joyerías de lujo con presencia multi-sucursal en CDMX, Monterrey, Guadalajara, Bogotá y Medellín. Las cuentas que califiquen como design partner reciben condiciones especiales: precio Y1 reducido, exclusividad por sub-segmento, derechos editoriales sobre el caso de estudio.

## Deploy

```bash
npm run build
npm run start
```

Despliegue recomendado: Vercel (auto-deploy desde main).

---

© LINCE Sistemas
