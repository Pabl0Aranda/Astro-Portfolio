# Portafolio Profesional & Blog

Un portafolio personal y blog de alto rendimiento construido con [Astro](https://astro.build/) y [Tailwind CSS v4](https://tailwindcss.com/). Diseñado con un enfoque minimalista y de alto contraste, utilizando una paleta cromática basada en Negro, Blanco y Albero (#E5B13A), enfocado en la mejor experiencia de usuario y rendimiento.

---

## Características Principales

- **Rendimiento:** Generación de sitios estáticos (SSG) por defecto gracias a Astro, logrando métricas perfectas en Core Web Vitals y tiempos de carga instantáneos gracias a Astro View Transitions.
- **Estilizado Moderno:** Construido con la nueva versión de Tailwind CSS (v4) para un diseño de utilidades sin archivos de configuración pesados, apoyado por `@tailwindcss/typography`.
- **Tema Claro/Oscuro Fluido:** Sistema de temas robusto implementado mediante un script en línea para evitar parpadeos (_flicker_) durante la carga inicial y navegación entre páginas.
- **Asistente Virtual Inteligente (Gemini AI):** Un Chatbot interactivo integrado con la API de Google Gemini, capaz de responder preguntas sobre la experiencia, habilidades y proyectos, guiando a los reclutadores de forma dinámica.
- **Internacionalización (i18n):** Soporte nativo para múltiples idiomas (Español e Inglés) con enrutamiento automático y traducciones de la interfaz de usuario.
- **Búsqueda Estática Avanzada:** Implementación de búsqueda _client-side_ súper rápida con **Pagefind** y una **Command Palette** (Ctrl+K) inspirada en los mejores editores de código, sin depender de servidores externos.
- **Gestión de Contenido (CMS) de Primer Nivel:**
  - Soporte completo para Markdown y **MDX**, permitiendo componentes interactivos dentro de los artículos.
  - _Astro Content Collections_ con esquemas de validación estrictos (Zod) para proyectos y artículos del blog.
  - Integración nativa con **KaTeX** y **remark-math** para renderizado de fórmulas matemáticas avanzadas.
  - Generación automática de Tablas de Contenido (TOC) y cálculo del tiempo de lectura.
- **Animaciones y Efectos 3D Eficientes:**
  - Efectos de inclinación 3D en las tarjetas de proyectos mediante `vanilla-tilt.js`.
  - Fondo de cuadrícula interactivo que reacciona a la posición del ratón.
  - Animaciones de aparición al hacer scroll (_Scroll Reveal_) usando `IntersectionObserver`.
  - Cursor personalizado con efecto magnético en elementos interactivos.
  - Rendimiento a 60fps constantes garantizado.
- **SEO & Accesibilidad:** Generación automática de `sitemap.xml`, feeds `rss.xml`, botones de compartir en redes sociales y etiquetas meta open-graph para una óptima indexación y distribución. Botón de "Volver arriba" y semántica HTML5 pura.

---

## Stack Tecnológico

- **Framework Core:** [Astro v5](https://astro.build/)
- **Estilos y UI:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Lógica e Interactividad:** TypeScript, Vanilla JavaScript, React (para componentes MDX específicos)
- **Procesamiento de Contenido:** MDX, Zod, remark-math, rehype-katex, mdast-util-to-string, reading-time
- **Búsqueda e Indexación:** [Pagefind](https://pagefind.app/)
- **Iconografía:** [Astro Icon](https://github.com/natemoo-re/astro-icon) (@iconify-json/fa6-brands, simple-icons, mdi)
- **Efectos:** Vanilla-tilt.js

---

## Arquitectura del Proyecto

El proyecto sigue una estructura modular altamente escalable basada en componentes:

```text
/
├── public/               # Assets estáticos globales (favicon, imágenes de proyectos/blog, fuentes)
├── src/
│   ├── components/       # Componentes de UI reusables
│   │   ├── interactive/  # Componentes interactivos para MDX (Visualizadores, demos)
│   │   ├── sections/     # Secciones principales de la página (Hero, Contact, Education, etc.)
│   │   ├── Chatbot.astro # Asistente virtual Gemini AI
│   │   ├── CommandPalette.astro # Buscador avanzado tipo modal
│   │   ├── Header.astro & Footer.astro
│   │   └── ProjectCard.astro, Search.astro, ShareButtons.astro...
│   ├── content/          # Colecciones de contenido validado con Zod (blog/ y proyectos/)
│   ├── i18n/             # Diccionarios de traducción (es/en) y lógica de enrutamiento
│   ├── layouts/          # Plantillas de diseño base e inyección de scripts globales (Theme)
│   ├── pages/            # Enrutamiento automático de Astro (index, /blog, /en/...)
│   ├── plugins/          # Plugins personalizados (remark/rehype)
│   └── styles/           # CSS Global, utilidades de cursor y configuración de Tailwind v4 (@theme)
├── astro.config.mjs      # Configuración general de Astro, integraciones y plugins
├── package.json          # Dependencias y scripts
└── README.md             # Esta documentación
```

---

## Instalación y Desarrollo Local

Si deseas clonar y ejecutar este proyecto en tu entorno local para explorarlo o modificarlo, sigue estos pasos:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Pabl0Aranda/Astro-Portfolio.git
   cd Astro-Portfolio
   ```

2. **Instala las dependencias:**
   Se recomienda usar npm.

   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade tu clave API de Gemini para el Chatbot interactivo:

   ```env
   PUBLIC_GEMINI_API_KEY=tu_clave_api_aqui
   ```

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   ```

5. **Genera los índices de búsqueda local (Opcional pero recomendado para probar Pagefind):**
   ```bash
   npm run build
   ```
   _Nota: La búsqueda de Pagefind opera sobre los archivos estáticos generados en `dist/`, por lo que se requiere construir el sitio para probar el buscador completamente._

Abre `http://localhost:4321` en tu navegador para ver el resultado en vivo.

---

## Cómo gestionar el contenido

Gracias a las colecciones de Astro y MDX, la gestión del contenido es muy sencilla y está completamente separada de la lógica de programación.

- **Añadir un Proyecto:** Crea un archivo `.md` en `src/content/proyectos/` rellenando su frontmatter con los campos obligatorios (`title`, `tech`, `link`, etc).
- **Publicar en el Blog:** Crea un archivo `.md` o `.mdx` en `src/content/blog/`. Requiere `title`, `date`, `description` y `heroImage`.
  - **Matemáticas en artículos:** Utiliza `$$` para bloques matemáticos completos o `$` para matemáticas en línea (ej. `$E = mc^2$`). Todo es renderizado velozmente gracias a KaTeX.
  - **Interactividad:** Aprovechando MDX, puedes importar componentes React, Vanilla o Astro y usarlos directamente en el cuerpo del post para demos o gráficos explicativos.

---

## Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo con propósitos educativos, forked para experimentar o como base arquitectónica para construir tu propio portafolio moderno.
