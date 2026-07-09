# Portafolio Profesional & Blog Minimalista

Un portafolio personal y blog de alto rendimiento construido con [Astro](https://astro.build/) y [Tailwind CSS v4](https://tailwindcss.com/). Diseñado con un enfoque minimalista y de alto contraste, utilizando una paleta cromática basada en Negro, Blanco y Albero (#E5B13A).

## Características Principales

- **Rendimiento:** Generación de sitios estáticos (SSG) por defecto gracias a Astro, logrando métricas perfectas en Core Web Vitals.
- **Estilizado:** Construido con la nueva versión de Tailwind CSS (v4) para un diseño de utilidades sin archivos de configuración pesados, apoyado por `@tailwindcss/typography`.
- **Internacionalización (i18n):** Soporte nativo para múltiples idiomas (Español e Inglés) con enrutamiento automático.
- **Gestión de Contenido Avanzada (CMS):**
  - Soporte completo para Markdown y **MDX**, permitiendo componentes interactivos dentro de los artículos.
  - _Astro Content Collections_ con esquemas de validación estrictos (Zod).
  - Integración nativa con **KaTeX** y **remark-math** para renderizado de fórmulas matemáticas.
  - Cálculo automático del tiempo de lectura de los artículos.
- **Búsqueda Estática Rápida:** Implementación de búsqueda _client-side_ súper rápida con **Pagefind** sin depender de servidores de búsqueda externos.
- **Animaciones Nativas y Eficientes:**
  - Fondo de cuadrícula interactivo que reacciona a la posición del ratón.
  - Animaciones de aparición al hacer scroll (_Scroll Reveal_) usando `IntersectionObserver`.
  - Cursor personalizado con efecto de "anillo" magnético sobre elementos interactivos.
  - Implementado con CSS puro y Vanilla JS para garantizar 60fps sin librerías externas.
- **SEO & Distribución:** Generación automática de `sitemap.xml` y feeds `rss.xml` para una óptima indexación.

## Stack Tecnológico

- **Framework:** Astro (v5)
- **Estilos:** Tailwind CSS v4
- **Lógica & interactividad:** TypeScript / Vanilla JavaScript / React
- **Procesamiento de Contenido:** MDX, Zod, remark-math, rehype-katex
- **Búsqueda:** Pagefind

## Arquitectura del Proyecto

El proyecto sigue una estructura basada en componentes altamente escalable:

```text
/
├── public/               # Assets estáticos (favicon, imágenes, fuentes)
├── src/
│   ├── components/       # Componentes de UI (Header, ProjectCard, Search...)
│   │   └── interactive/  # Componentes interactivos para MDX (Visualizadores)
│   ├── content/          # Colecciones de contenido (blog/ y proyectos/) en .md y .mdx
│   ├── i18n/             # Diccionarios de traducción y utilidades
│   ├── layouts/          # Plantillas de diseño base e inyección de scripts globales
│   ├── pages/            # Enrutamiento basado en archivos (index, /blog, /en/...)
│   ├── plugins/          # Plugins personalizados de remark/rehype
│   └── styles/           # CSS Global y configuración de Tailwind v4 (@theme)
├── astro.config.mjs      # Configuración de Astro, i18n y plugins
└── package.json
```

## Instalación y Desarrollo Local

Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Pabl0Aranda/Astro-Portfolio
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Genera los índices de búsqueda local (necesario para probar Pagefind):
   ```bash
   npm run build
   ```

Abre http://localhost:4321 en tu navegador.

## Cómo añadir nuevo contenido

Gracias a las Content Collections y MDX, no necesitas tocar el código HTML para actualizar la web.

- **Para añadir un Proyecto:** Crea un archivo `.md` en `src/content/proyectos/` con los campos `title`, `tech` y `link` en el frontmatter.
- **Para publicar en el Blog:** Crea un archivo `.md` o `.mdx` en `src/content/blog/` con `title`, `date`, `description` y `heroImage`.
  - **Fórmulas matemáticas:** Utiliza `$$` para bloques matemáticos o `$` para matemáticas en línea (gracias a KaTeX). Asegúrate de escribir expresiones compatibles con Acorn JS o utilizar `(1 + e^{-z})^{-1}` si hay conflictos de parsing de llaves en MDX.
  - **Componentes interactivos:** Puedes importar y usar componentes directamente dentro del contenido del blog.

## Licencia

Este proyecto está bajo la Licencia MIT - siéntete libre de usarlo con propósitos educativos o como base para tu propio portafolio.
