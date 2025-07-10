import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const opportunities = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/opportunities" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    deadline: z.string(),
    link: z.string(),
  })
});

export const collections = { opportunities };
