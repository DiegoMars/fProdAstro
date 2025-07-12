import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const opportunities = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/opportunities" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    deadline: z.string(),
    link: z.string(),
  }),
});

const farisaResearch = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/farisaResearch" }),
  schema: z.object({
    title: z.string(),
    publicated: z.string(),
    journal: z.string(),
    picture: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = { opportunities, farisaResearch };
