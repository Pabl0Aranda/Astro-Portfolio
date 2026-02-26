# Portafolio Profesional & Blog Minimalista

Un portafolio personal y blog de alto rendimiento construido con [Astro](https://astro.build/) y [Tailwind CSS v4](https://tailwindcss.com/). Diseñado con un enfoque minimalista y de alto contraste, utilizando una paleta cromática basada en Negro, Blanco y Albero (#E5B13A).

## Características Principales

* **Rendimiento Extremo:** Generación de sitios estáticos (SSG) por defecto gracias a Astro, logrando métricas perfectas en Core Web Vitals.
* **Estilizado Moderno:** Construido con la nueva versión de Tailwind CSS (v4) para un diseño de utilidades sin archivos de configuración pesados.
* **Gestión de Contenido (CMS):** Uso de *Astro Content Collections* y esquemas de validación estrictos (Zod) para administrar el portafolio de proyectos y los artículos del blog usando archivos Markdown (`.md`).
* **Animaciones Nativas y Eficientes:**
    * Fondo de cuadrícula interactivo que reacciona a la posición del ratón.
    * Animaciones de aparición al hacer scroll (*Scroll Reveal*) usando `IntersectionObserver`.
    * Cursor personalizado con efecto "anillo" magnético sobre elementos interactivos.
    * Implementado con CSS puro y Vanilla JS (`requestAnimationFrame`) para garantizar 60fps sin librerías externas.
* **CI/CD Ready:** Arquitectura Jamstack preparada para despliegue continuo.

## Stack Tecnológico

* **Framework:** Astro 
* **Estilos:** Tailwind CSS v4 (con `@tailwindcss/typography` para el blog)
* **Lógica:** TypeScript / Vanilla JavaScript
* **Estructura de Datos:** Markdown / Zod (Content Collections)
* **Despliegue recomendado:** Netlify / Vercel

## Arquitectura del Proyecto

El proyecto sigue una estructura basada en componentes altamente escalable:

```text
/
├── public/               # Assets estáticos (favicon, imágenes)
├── src/
│   ├── components/       # Componentes de UI (Header, ProjectCard...)
│   │   └── sections/     # Secciones modulares de la página principal (Hero, Experience, etc.)
│   ├── content/          # Colecciones de contenido Markdown (blog/ y proyectos/)
│   ├── layouts/          # Plantillas de diseño base e inyección de scripts globales
│   ├── pages/            # Enrutamiento basado en archivos (index, /blog)
│   └── styles/           # CSS Global y configuración de Tailwind v4 (@theme)
└── package.json
```

## Instalación y Desarrollo Local
Si deseas clonar y ejecutar este proyecto en tu entorno local, sigue estos pasos:

Clona el repositorio:
```Bash
git clone https://github.com/Pabl0Aranda/Astro-Portfolio
```
Instala las dependencias:
```Bash
npm install
```
Inicia el servidor de desarrollo:
```Bash
npm run dev
```

Abre http://localhost:4321 en tu navegador.

## Cómo añadir nuevo contenido
Gracias a las Content Collections, no necesitas tocar el código HTML para actualizar la web.

Para añadir un Proyecto: Crea un archivo .md en src/content/proyectos/ con los campos title, tech y link en el frontmatter.

Para publicar en el Blog: Crea un archivo .md en src/content/blog/ con title, date y description. Todo el contenido se estilizará automáticamente.

## Licencia
Este proyecto está bajo la Licencia MIT - siéntete libre de usarlo con propósitos educativos o como base para tu propio portafolio.