import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

export default defineConfig({
  site: "https://pabloaranda.netlify.app/", // Tu dominio real
  integrations: [sitemap()],

  // Configuración de Tailwind v4 mediante Vite
  vite: {
    plugins: [tailwindcss()],
  },

  // Configuración de Internacionalización (i18n)
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  // Configuración de Markdown
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
