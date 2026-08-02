import { Client, isFullPage } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export interface UnifiedPost {
  id: string; // The Notion ID or MDX ID
  slug: string; // The unified URL path
  sourceType: "notion" | "mdx";
  title: string;
  date: Date;
  description: string;
  category: string;
  draft: boolean;
  heroImage?: string;
  series?: string;
  orderInSeries?: number;
  renderMdx?: () => Promise<any>; // Only for local files
}

// Inicializamos los clientes consumiendo las variables de entorno
const notion = new Client({ auth: import.meta.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });

// Función 1: Obtener los metadatos de los artículos publicados
export async function getPublishedPosts(): Promise<UnifiedPost[]> {
  const databaseId = import.meta.env.NOTION_DATABASE_ID;
  if (!databaseId) {
    throw new Error("NOTION_DATABASE_ID is missing in environment variables.");
  }

  // En la versión 5.x.x del SDK de Notion, 'databases' ha sido renombrado a 'dataSources'
  const response = await notion.dataSources.query({
    data_source_id: databaseId, // El parámetro también cambia a data_source_id
    filter: {
      property: "draft",
      status: {
        equals: "Publicado",
      },
    },
    sorts: [
      {
        property: "date",
        direction: "descending", // Ordena cronológicamente (más recientes primero)
      },
    ],
  });

  const posts: UnifiedPost[] = [];

  for (const page of response.results) {
    if (!isFullPage(page)) {
      continue;
    }

    const titleProperty = page.properties.title;
    const dateProperty = page.properties.date;
    const descriptionProperty = page.properties.description;
    const categoryProperty = page.properties.category;
    const heroImageProperty =
      page.properties.heroImage || page.properties.heroimage;
    const seriesProperty = page.properties.series;
    const orderInSeriesProperty = page.properties.orderInSeries;

    const titleText =
      titleProperty?.type === "title"
        ? titleProperty.title[0]?.plain_text
        : undefined;

    const title = titleText || "Sin título";

    // Generamos el slug automáticamente a partir del título
    const generatedSlug = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
      .replace(/[^a-z0-9]+/g, "-") // Sustituye espacios y símbolos por guiones
      .replace(/^-+|-+$/g, ""); // Limpia guiones sobrantes

    const dateStr =
      dateProperty?.type === "date" ? dateProperty.date?.start : undefined;

    const description =
      descriptionProperty?.type === "rich_text"
        ? descriptionProperty.rich_text[0]?.plain_text
        : undefined;

    const category =
      categoryProperty?.type === "select"
        ? categoryProperty.select?.name
        : undefined;

    let heroImage = undefined;
    if (heroImageProperty?.type === "url") {
      heroImage = heroImageProperty.url || undefined;
    } else if (heroImageProperty?.type === "rich_text") {
      heroImage = heroImageProperty.rich_text[0]?.plain_text || undefined;
    }

    const series =
      seriesProperty?.type === "rich_text"
        ? seriesProperty.rich_text[0]?.plain_text
        : undefined;

    const orderInSeries =
      orderInSeriesProperty?.type === "number"
        ? orderInSeriesProperty.number || undefined
        : undefined;

    posts.push({
      id: page.id,
      slug: generatedSlug,
      sourceType: "notion",
      title: title,
      date: dateStr ? new Date(dateStr) : new Date(),
      description: description || "",
      category: category || "General",
      draft: false, // Como filtramos por Publicado, ya sabemos que no es borrador
      heroImage: heroImage,
      series: series,
      orderInSeries: orderInSeries,
    });
  }

  return posts;
}

// Función 2: Extraer el contenido y convertirlo a Markdown
export async function getPostContent(pageId: string): Promise<string> {
  const mdblocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString.parent || "";
}
