# Guía de trabajo: ramas, commits y despliegue

Esta guía explica cómo hacer cambios en el sitio de Jade Medicina sin afectar lo que está publicado.

## Ramas

| Rama | Para qué sirve | Despliegue en Vercel |
| --- | --- | --- |
| `main` | Lo que está **publicado** en el dominio del cliente. Siempre estable. | **Production** (automático al recibir cambios) |
| `develop` | Integración: aquí se juntan los cambios aprobados antes de pasarlos a producción. | **Preview** (URL de prueba) |
| `feature/<descripcion>` | Un cambio nuevo (sección, servicio, profesional, página). Sale de `develop`. | Preview propio |
| `fix/<descripcion>` | Corrección no urgente. Sale de `develop`. | Preview propio |
| `hotfix/<descripcion>` | Corrección **urgente** en producción. Sale de `main`. | Preview propio |

Nombres en minúsculas, con guiones y sin tildes: `feature/nuevo-servicio-neurologia`, `fix/telefono-footer`, `hotfix/enlace-whatsapp-roto`.

**Nunca se hace commit directo en `main`.** Todo entra por Pull Request.

## Flujo para un cambio normal

```bash
git checkout develop
git pull
git checkout -b feature/descripcion-del-cambio

# ... cambios ...
npm run lint && npm run typecheck && npm run build

git add .
git commit -m "feat: descripción corta del cambio"
git push -u origin feature/descripcion-del-cambio
```

1. Abrir un Pull Request de `feature/...` hacia **`develop`**.
2. Vercel genera una URL de vista previa; revisarla (y compartirla con el cliente si debe aprobar).
3. Hacer merge a `develop`.
4. Cuando el cliente apruebe, abrir un Pull Request de **`develop` → `main`**. Al hacer merge, Vercel publica en producción.
5. Etiquetar la versión (ver **Versiones**) y anotar el cambio en `CHANGELOG.md`.

## Flujo para una corrección urgente (hotfix)

```bash
git checkout main
git pull
git checkout -b hotfix/descripcion
# ... corrección ...
git push -u origin hotfix/descripcion
```

1. Pull Request de `hotfix/...` → `main`, merge y verificar en producción.
2. Llevar la misma corrección a `develop` (Pull Request `main` → `develop`) para que no se pierda.

## Mensajes de commit

Formato [Conventional Commits](https://www.conventionalcommits.org/es/), en español:

| Prefijo | Uso |
| --- | --- |
| `feat:` | Algo nuevo (sección, servicio, profesional) |
| `fix:` | Corrección |
| `content:` | Solo cambio de textos o imágenes |
| `style:` | Ajuste visual sin cambiar contenido |
| `refactor:` | Reorganización de código sin cambio visible |
| `docs:` | Documentación |
| `chore:` | Dependencias, configuración |

Ejemplos: `content: actualiza horario de atención`, `feat: agrega servicio de neurología`.

## Versiones

Se usa versionado semántico con etiquetas de git (`vMAYOR.MENOR.PARCHE`):

- **PARCHE** (`v1.0.1`): correcciones y cambios de texto.
- **MENOR** (`v1.1.0`): nuevo servicio, profesional, sección.
- **MAYOR** (`v2.0.0`): rediseño o cambio de alcance (por ejemplo, panel de administración).

```bash
git checkout main && git pull
git tag -a v1.0.1 -m "v1.0.1: descripción"
git push origin v1.0.1
```

## Antes de cada Pull Request

- [ ] `npm run lint`, `npm run typecheck` y `npm run build` pasan sin errores.
- [ ] Revisado en celular y escritorio en la URL de vista previa.
- [ ] Textos nuevos en `src/ui/content/` (no en el JSX); colores solo desde `theme.ts`.
- [ ] Fotos de pacientes solo con autorización escrita.
- [ ] `CHANGELOG.md` actualizado.

## Vercel

- **Production Branch:** `main`.
- Variables de entorno (Project → Settings → Environment Variables):

| Variable | Production | Preview |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://<dominio-del-cliente>` | (vacía o URL de preview) |
| `NEXT_PUBLIC_SITE_INDEXABLE` | `true` (solo tras la entrega final) | `false` |

Las vistas previas nunca deben ser indexables.

## Accesos

- Repositorio: organización de GitHub **Jade-Medicina** (propiedad del cliente). OPTYNK tiene acceso como administrador del repositorio.
- Vercel: cuenta/equipo del cliente; OPTYNK como miembro.
- Nunca subir archivos `.env*` (salvo `.env.example`) ni contraseñas al repositorio.
