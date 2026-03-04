import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://pabloaranda.netlify.app/', // Tu dominio real
  
  // Configuración de Tailwind v4 mediante Vite
  vite: {
    plugins: [tailwindcss()],
  },
  
  // Configuración de Internacionalización (i18n)
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, 
    }
  }
});