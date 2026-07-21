import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Sort key — higher shows first.
    order: z.number().default(0),
    // Category the project is listed under on the projects page.
    group: z
      .enum(['Robotics', 'Mechatronics', 'Backend Web Development', 'Other'])
      .default('Other'),
    tags: z.array(z.string()).default([]),
    // Card / hero image (path under /public).
    image: z.string().optional(),
    // Render the card thumbnail on a transparent background (for logos/icons).
    transparentThumb: z.boolean().default(false),
    // Optional links surfaced in the project header.
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    docs: z.string().url().optional(),
    paper: z.string().url().optional(),
    // YouTube video id embedded at the top of the detail page.
    youtube: z.string().optional(),
    // Path to a .glb model under /public — renders an interactive 3D viewer.
    model: z.string().optional(),
    // Optional per-project 3D viewer tuning (matches the old three.js viewer).
    modelHeight: z.number().default(500),
    modelDistance: z.number().default(2.5),
    modelFov: z.number().default(60),
    wip: z.boolean().default(false),
  }),
});

export const collections = { projects };
