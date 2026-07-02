import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Translatable site pages.
 * Structure: src/content/pages/{en,de}/<slug>.md
 * English is the source of truth — German files are synced translations.
 */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    /** Optional header image, shown above the page content */
    image: z.string().optional(),
    draft: z.boolean().default(false),
    /** Homepage only: hero section (Avenco author section) */
    hero: z
      .object({
        title: z.string(),
        bio: z.string(),
        ctaText: z.string(),
        image: z.string().optional(),
      })
      .optional(),
  }),
});

/**
 * Design projects, shown on the homepage grid and /projects/.
 * Structure: src/content/projects/{en,de}/<slug>.md
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    image: z.string(),
    weight: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

/**
 * Events (workshops, sound journeys, retreats, lessons).
 * Structure: src/content/events/{en,de}/<slug>.md
 */
const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['workshop', 'sound-journey', 'retreat', 'lesson']),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    city: z.string(),
    price: z.string().optional(),
    bookingUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { pages, projects, events };
