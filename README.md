# Nidoo — web

Sitio web estático (HTML + CSS + JavaScript, sin backend) para Nidoo, el servicio
que convierte las fotos de un alojamiento turístico en un vídeo profesional para
Airbnb y Booking.

Dirección visual: **Mediterráneo cálido** (crema + terracota, títulos *Fraunces*, texto *Inter*).

---

## 1. Estructura de archivos

```
nidoo/
├── index.html              ← la página principal (todo el contenido está aquí)
├── css/styles.css          ← todos los estilos y colores
├── js/main.js              ← animaciones al hacer scroll y año del pie
├── assets/                 ← imágenes (ahora son de relleno)
│   ├── favicon.svg
│   ├── og-image.png        ← imagen al compartir en redes (sustituir)
│   ├── hero.svg            ← foto grande de la cabecera (sustituir)
│   ├── problem.svg
│   └── work-1.svg … work-6.svg  ← galería de trabajos (sustituir)
├── legal/
│   ├── aviso-legal.html
│   ├── privacidad.html
│   └── cookies.html
├── sitemap.xml
├── robots.txt
└── README.md
```

---

## 2. Cómo editar los textos

Todo el texto visible está en **`index.html`**. Ábrelo con cualquier editor
(VS Code, el Bloc de notas…), busca la frase que quieres cambiar y escríbela encima.
Las secciones están marcadas con comentarios tipo `<!-- ============ HERO ============ -->`.

Las páginas legales (`legal/*.html`) tienen sus textos dentro de cada archivo.

---

## 3. Cómo cambiar las imágenes

Las imágenes actuales son **de relleno** y están marcadas con `[PENDIENTE]`.
Para sustituirlas:

1. Prepara tus imágenes/vídeos reales.
2. **Optimízalas a WebP** (más ligeras y rápidas). Puedes usar
   [squoosh.app](https://squoosh.app) (gratis, en el navegador): sube la foto,
   elige formato **WebP** y descárgala.
3. Guárdalas en la carpeta `assets/` y, en `index.html`, cambia el nombre del
   archivo en el atributo `src` de la etiqueta `<img>`.
   Ejemplo: `src="assets/hero.svg"` → `src="assets/hero.webp"`.
4. Cambia también el texto alternativo (`alt="..."`) para que describa la imagen
   real (importante para accesibilidad y SEO).

> Las imágenes de la galería y la de problema ya llevan `loading="lazy"` (carga
> diferida), así que solo tienes que sustituir el archivo.

### Imagen para compartir en redes (`og-image.png`)
Crea una imagen de **1200 × 630 px** (JPG o PNG) con tu marca y guárdala como
`assets/og-image.png`. Es la que se ve al pegar el enlace en WhatsApp o Instagram.

---

## 4. Configurar el formulario (Formspree)

El formulario necesita un servicio externo porque la web no tiene servidor.

1. Entra en **https://formspree.io** y crea una cuenta gratuita.
2. Crea un formulario nuevo; te darán un código como `xdorwabc`.
3. En `index.html`, busca `TU_CODIGO` y sustitúyelo:
   ```html
   <form ... action="https://formspree.io/f/TU_CODIGO" method="POST">
   ```
   quedaría `action="https://formspree.io/f/xdorwabc"`.
4. En Formspree, indica el email donde quieres recibir las solicitudes.

---

## 5. Poner tu WhatsApp, email e Instagram

Busca y reemplaza en `index.html` (aparece varias veces):

- **WhatsApp:** cambia `TUNUMERO` por tu número con prefijo internacional y sin
  signos, por ejemplo `34612345678`. (Aparece en el botón de la cabecera, en
  contacto y en el botón flotante verde.)
- **Email:** cambia `TU_EMAIL@nidoostudio.es` por tu correo real.
- **Instagram:** cambia `TU_INSTAGRAM` por tu usuario.

> Consejo: usa “Buscar y reemplazar” del editor para cambiarlos todos de una vez.

---

## 6. Cambiar colores o tipografías

Todo está al principio de `css/styles.css`, en el bloque `:root`:

```css
--acento: #E07A5F;   /* el color terracota; cámbialo por otro si quieres */
--crema: #FBF7F0;    /* fondo */
--tinta: #211C16;    /* color del texto */
```

---

## 7. Publicar en GitHub Pages (gratis)

1. Crea una cuenta en https://github.com
2. Crea un repositorio nuevo (por ejemplo `nidoo`).
3. Sube **todo el contenido de esta carpeta** (que `index.html` quede en la raíz
   del repositorio). Puedes arrastrar los archivos en la web de GitHub con el
   botón **“Add file → Upload files”**.
4. En el repositorio, ve a **Settings → Pages**.
5. En **“Build and deployment”**, elige *Source: Deploy from a branch*, rama
   `main` y carpeta `/ (root)`. Guarda.
6. En un par de minutos tu web estará en
   `https://TU_USUARIO.github.io/nidoo/`.

### Dominio propio (`.es`)
Cuando tengas el dominio, en **Settings → Pages → Custom domain** escribe tu
dominio y sigue las instrucciones para configurar los DNS. Después, sustituye
`https://nidoostudio.es` por tu dominio real en: `index.html` (canonical y Open Graph),
`sitemap.xml` y `robots.txt`.

---

## 8. (Opcional) Alojar las tipografías en tu servidor

Por defecto las fuentes se cargan desde Google Fonts. Si quieres evitar que Google
reciba la IP de tus visitantes (más respetuoso con el RGPD), descarga las fuentes
*Fraunces* e *Inter* desde https://fonts.google.com, colócalas en `assets/fonts/`,
y sustituye el `<link>` de Google Fonts por un bloque `@font-face` en el CSS.
Si lo haces, puedes simplificar la política de cookies.

---

## 9. Qué te queda por rellenar

Mira el archivo **`PENDIENTE.md`**: es la lista completa de todo lo que debes
completar antes de publicar (marcadores `[PENDIENTE]`).
