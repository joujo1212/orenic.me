import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    short_description: z.string().max(220),
    main_image: z.string(),
    gallery_images: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
