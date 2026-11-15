@AGENTS.md

# Jade Medicina y Rehabilitación: sitio web (OPTYNK)

Este proyecto sigue la skill `nextjs-estructura` (nivel 1: sitio informativo, sin BD, sin login, sin formulario).

## Comandos

- `npm run dev` / `npm run build` / `npm start`
- `npm run lint` (eslint flat config) y `npm run typecheck` (`tsc --noEmit`)

## Reglas del proyecto

- Next.js 16 con `cacheComponents`: lee `node_modules/next/dist/docs/` antes de usar APIs nuevas. `params` es Promise; `dynamicParams` no existe; las rutas de servicio salen de `generateStaticParams`.
- Todo texto visible vive en `src/ui/content/` (no en el JSX). Tipos en `src/models/content.model.ts`.
- Colores, fuentes, sombras y breakpoints solo desde `src/ui/styles/theme.ts` (colores del manual de marca: menta #8CCCB0, turquesa #00AEAC, gris #454545; #007F7D para texto/botones por contraste; #003535 en portadas).
- Componentes con styled-components llevan `"use client"`; las `page.tsx` son de servidor y solo devuelven un template.
- Metadata por página con `buildPageMetadata` (`src/ui/content/seo.ts`).
- Imágenes en `public/images/` con nombres en minúsculas sin espacios; siempre `next/image` con `sizes`.

## Reglas del cliente (sector salud)

- No inventar datos del cliente (teléfonos, registros, REPS, cifras).
- No prometer resultados ni curas. No usar fotos de pacientes sin autorización escrita.
- El sitio no recolecta datos personales: no agregar formularios, registro ni analítica sin aprobación.
- No alterar los logos (ni estirar, recolorear o recortar).

## Repositorio público

Este repositorio es **público**. No escribir aquí notas internas, comerciales, de pagos ni de pendientes del cliente: van en `CLAUDE.local.md` (no versionado).
