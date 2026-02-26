import { z, defineCollection } from 'astro:content';

const proyectosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tech: z.string(),
    link: z.string().url(),
    orden: z.number().optional(),
  })
});

// NUEVO: Definimos la colección del blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(), // Zod validará que sea una fecha correcta (ej: 2026-02-26)
    description: z.string(),
    draft: z.boolean().default(false), // Útil para que Netlify no publique posts a medias
  })
});

export const collections = {
  'proyectos': proyectosCollection,
  'blog': blogCollection, // Registramos el blog
};