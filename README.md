# Jade Medicina y Rehabilitación: sitio web

Sitio corporativo de Jade Medicina y Rehabilitación (IPS en Popayán, Cauca), desarrollado por OPTYNK.
Es la versión de producción del diseño aprobado en la fase 1 (HTML/CSS/JS), pasado a Next.js.

## Stack

| Capa | Tecnología |
| --- | --- |
| Framework | Next.js 16 (App Router, `src/`, TypeScript estricto, Cache Components) |
| Estilos | styled-components (registry SSR + `theme` centralizado) |
| Tipografía | Montserrat con `next/font` (manual de marca) |
| Imágenes | `next/image` (AVIF/WebP automáticos) |
| Validación | yup (variables de entorno) |

Nivel del proyecto: **1 (sitio informativo)**. Sin base de datos, sin login y sin formulario: todo el contacto va por WhatsApp (decisión del 05/11/2026). Las carpetas `core/` e `infrastructure/` quedan listas para crecer.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Portada, accesos rápidos, servicios, beneficios, sede, convenios y contacto |
| `/servicios` | Índice de los 7 servicios |
| `/servicios/[slug]` | Un servicio: portada, profesional, condiciones, ruta de atención, qué llevar, cómo agendar |
| `/equipo` | Foto del equipo y profesionales con su formación |
| `/contacto` | Mapa, datos de contacto y galería de la sede (`#sede`) |
| `/sitemap.xml`, `/robots.txt` | SEO |

Slugs de servicios: `fisioterapia`, `otorrinolaringologia`, `medicina-interna`, `ortopedia-infantil`, `ortopedia-general`, `pie-tobillo`, `plantillas-ortomec`.

## Estructura

```
src/
├── app/
│   ├── layout.tsx                 # fuente, metadata global, JSON-LD MedicalClinic, registry
│   ├── not-found.tsx, sitemap.ts, robots.ts
│   ├── (main)/
│   │   ├── layout.tsx             # PublicLayout (cabecera, pie, botón flotante)
│   │   ├── page.tsx               # Inicio
│   │   └── (public)/servicios, servicios/[slug], equipo, contacto
│   ├── core/application/{dto,ports}/          # vacías (nivel 2+)
│   └── infrastructure/
│       ├── config/env.ts          # validación yup de variables de entorno
│       └── services, utils, validation/       # vacías (nivel 2+)
├── models/content.model.ts        # tipos del contenido
└── ui/
    ├── content/                   # TODOS los textos, datos de contacto e imágenes
    ├── atoms/ molecules/ organisms/ template/ layouts/
    ├── hooks/useMobileMenu.ts     # menú lateral (equivale a js/sitio.js del diseño)
    └── styles/                    # theme, GlobalStyles, registry
public/images/                     # fotos y logos usados por el sitio
```

**Para cambiar textos** edita `src/ui/content/` (`site.ts`, `home.ts`, `services.ts`, `team.ts`, `contact.ts`). Los colores y fuentes están en `src/ui/styles/theme.ts`.

## Desarrollo local

Requisitos: Node.js 20.9 o superior.

```bash
npm install
cp .env.example .env.local
npm run dev        # http://localhost:3000
```

En PowerShell:

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Scripts: `npm run dev`, `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Variables de entorno

| Variable | Uso | Valor por defecto |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL pública (canonical, Open Graph, sitemap) | `http://localhost:3000` |
| `NEXT_PUBLIC_SITE_INDEXABLE` | `true` para permitir que Google indexe el sitio | `false` (noindex y robots bloqueado) |

Mientras el sitio no esté publicado en el dominio final, deja `NEXT_PUBLIC_SITE_INDEXABLE=false`.

## Despliegue

Se despliega en **Vercel** (cuenta del cliente) conectado a este repositorio:

- `main` → **producción** (dominio del cliente). Cada merge a `main` publica automáticamente.
- `develop` y ramas `feature/*`, `fix/*`, `hotfix/*` → **vistas previas** (URL de prueba).

Antes de activar la indexación: definir `NEXT_PUBLIC_SITE_URL` con el dominio y `NEXT_PUBLIC_SITE_INDEXABLE=true` solo en el entorno *Production* de Vercel.

El flujo de ramas, el formato de commits y las versiones están en [CONTRIBUTING.md](CONTRIBUTING.md). El historial de cambios, en [CHANGELOG.md](CHANGELOG.md).

También funciona en cualquier hosting con Node.js (`npm run build && npm start`).

Seguridad: cabeceras (CSP, HSTS, X-Frame-Options, etc.) en `next.config.ts`. La CSP solo permite el iframe de Google Maps como contenido externo.

## Licencia

© 2026 Jade Medicina y Rehabilitación. Todos los derechos reservados. Desarrollado por OPTYNK.
El código es visible públicamente, pero el contenido, las fotografías y los logos no pueden reutilizarse sin autorización.
