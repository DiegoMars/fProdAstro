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
    date: z.boolean(),
    deadline: z.string(),
    link: z.string(),
  }),
});

const farisaResearch = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/farisaResearch" }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    publicated: z.string(),
    journal: z.string(),
    picture: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    doi: z.string(),
  }),
});

const mediaFeatures = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/data/appearsOn"}),
  schema: z.object({
    title: z.string(),
    type: z.enum(["Interview", "Article", "Video", "Podcast", "Other"]),
    platform: z.string(),
    date: z.string(),
    url: z.string().url(),
    thumbnail: z.object({
      url: z.string().url(),
      alt: z.string(),
    }),
  }),
});

export const collections = { opportunities, farisaResearch, mediaFeatures };
