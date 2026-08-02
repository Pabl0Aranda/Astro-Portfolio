---
title: "Portfolio & Blog"
description: "Desarrollo de un portafolio personal y plataforma de blog de alto rendimiento. Construido con arquitectura de islas (Astro), internacionalización (i18n), búsqueda estática y soporte MDX para contenido enriquecido."
tech: "Astro • TypeScript • Tailwind v4 • MDX • Pagefind"
link: "https://github.com/Pabl0Aranda/Astro-Portfolio"
orden: 1
---

## El Problema

A la hora de diseñar mi espacio personal en la web, me enfrenté al clásico dilema del desarrollo moderno: ¿Cómo construir una plataforma que soporte contenido técnico complejo (fórmulas matemáticas, diagramas, bloques de código interactivos) sin penalizar el rendimiento ni el SEO?

Las Single Page Applications (SPA) tradicionales basadas puramente en React o Vue.js suelen delegar demasiado trabajo al cliente, resultando en un exceso de JavaScript descargado, analizado y ejecutado. Necesitaba una plataforma más simple, capaz de alcanzar un **score perfecto (100/100) en Lighthouse**, que a la vez permitiera una experiencia de navegación moderna e interactiva para el usuario.

## Solución Arquitectónica

Tras evaluar múltiples SSG, me decanté por **Astro**, principalmente por su paradigma de **Islands Architecture**. Esta estrategia me permite pre-renderizar todo el contenido estático en el servidor durante la fase de compilación, inyectando JavaScript únicamente en los componentes que requieren interactividad, como el Command Palette o el renderizador de diagramas.

### El Ciclo de Vida de la Arquitectura

El funcionamiento del portfolio se divide en dos grandes fases para asegurar el rendimiento. En lugar de procesar todo en el navegador del usuario, delegamos el peso al proceso de compilación:

**1. Fase de Compilación**

- **Contenido:** Astro escanea todos los archivos `.mdx` del Blog y Proyectos. Extrae el _frontmatter_ validado por Zod y procesa las fórmulas matemáticas (KaTeX) convirtiéndolas a HTML estático.
- **Componentes:** Los componentes visuales (construidos con TypeScript y Tailwind v4) se fusionan con el contenido renderizado.
- **Salida Estática & Pagefind:** El compilador expulsa archivos `.html` y `.css` puros y minificados. En paralelo, el motor **Pagefind** rastrea estos archivos estáticos y genera un índice de búsqueda superligero.

**2. Fase de Ejecución**

- **Primer Renderizado Instantáneo:** Cuando un usuario visita la web, el servidor devuelve únicamente el HTML y CSS pre-construido. No hay frameworks pesados que inicializar. La página es funcional en milisegundos.
- **Islas:** Astro busca componentes que necesitan interactividad (por ejemplo, el simulador de rutas o la paleta de comandos `Ctrl+K`). Solo en esos fragmentos aislados inyecta los scripts de JavaScript necesarios, conectándose al instante con los índices generados por Pagefind sin entorpecer el resto de la interfaz estática.

### Características Principales

1. **Contenido Tipado:** Uso de esquemas de validación Zod para garantizar que todo el contenido markdown (Blog y Proyectos) posea el _frontmatter_ correcto antes de compilar.
2. **Motor de Búsqueda Local (Pagefind):** En lugar de depender de servicios de terceros, Pagefind construye un índice de búsqueda distribuido en archivos estáticos ligeros. El resultado es una búsqueda global instantánea que consume un ancho de banda insignificante.
3. **Soporte Científico Integrado:** Integración nativa mediante plugins de _Remark_ y _Rehype_ para soportar ecuaciones matemáticas (KaTeX), lectura de tiempo estimado y renderización en vivo de arquitecturas con Mermaid.
4. **Navegación Fluida:** Utilizando la API nativa del navegador soportada por Astro, la transición entre el home, los proyectos y los artículos del blog no requiere recargar la página completa, emulando la fluidez de una SPA.

## Tipado Estricto de Colecciones

Astro 5 introduce Content Collections que se integran a la perfección con TypeScript, evitando errores en tiempo de ejecución.

```typescript
// src/content/config.ts
import { z, defineCollection } from "astro:content";

// Definimos la estructura exacta que deben tener todos los artículos
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().max(160, "El SEO requiere max 160 caracteres"),
    draft: z.boolean().default(false),
    category: z.string().default("General"),
    heroImage: z.string().optional(),
    series: z.string().optional(),
    orderInSeries: z.number().optional(),
  }),
});

export const collections = { blog: blogCollection };
```

## Conclusión

El desarrollo de este portfolio reforzó mi decisión de que elegir la herramienta técnica adecuada para el caso de uso específico lo es todo en la ingeniería de software. Utilizar frameworks pesados (SPAs) para sitios predominantemente estáticos impulsados por contenido es un antipatrón común que penaliza el SEO y la retención del usuario.

Gracias a la Arquitectura de Islas de Astro, la flexibilidad semántica de MDX y el potente motor de Pagefind, logramos un equilibrio perfecto: el dinamismo y la interactividad de una aplicación web moderna, combinados con los tiempos de carga instantáneos y la fiabilidad de un sitio estático clásico. Este proyecto establece una base modular preparada para escalar sin acumular deuda técnica.
