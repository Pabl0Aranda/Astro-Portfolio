import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Pablo Aranda | Blog',
    description: 'Articles about Machine Learning, Algorithms and Web Development',
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/en/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
