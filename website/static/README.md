# Favicon — opción 1b «Terminal»

Marca: chevron `>` en verde Night Owl con cursor cian sobre fondo `#011627`.

## Archivos

| Archivo | Uso |
| --- | --- |
| `favicon.svg` | Fuente vectorial. Es la que sirven los navegadores modernos. |
| `favicon-16.png` | Pestaña, tamaño clásico. |
| `favicon-32.png` | Pestaña en pantallas retina, barra de marcadores. |
| `favicon-48.png` | Acceso directo en escritorio (Windows). |
| `favicon-180.png` | `apple-touch-icon` — pantalla de inicio en iOS. |
| `favicon-192.png` | Android / PWA. |
| `favicon-512.png` | Splash de PWA, y la fuente si necesitas otros tamaños. |
| `site.webmanifest` | Manifiesto PWA con los colores de la paleta. |

## Instalación en SvelteKit

Copia todos los archivos a `website/static/` (reemplazando el `favicon.svg` actual) y pega esto en el `<head>` de `website/src/app.html`:

```html
<link rel="icon" href="%sveltekit.assets%/favicon.svg" type="image/svg+xml" />
<link rel="icon" href="%sveltekit.assets%/favicon-32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="%sveltekit.assets%/favicon-16.png" sizes="16x16" type="image/png" />
<link rel="apple-touch-icon" href="%sveltekit.assets%/favicon-180.png" />
<link rel="manifest" href="%sveltekit.assets%/site.webmanifest" />
<meta name="theme-color" content="#011627" />
```

El orden importa: el navegador toma el SVG si lo soporta y cae a los PNG si no.

## Colores

| Elemento | Hex |
| --- | --- |
| Fondo | `#011627` |
| Borde | `#1d3b53` |
| Chevron | `#addb67` |
| Cursor | `#7fdbca` |

## Regenerar los PNG

Todos salen de `favicon.svg`. Si cambias el vector, vuelve a rasterizar a 16, 32, 48, 180, 192 y 512 px.
