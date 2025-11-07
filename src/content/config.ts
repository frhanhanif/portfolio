import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

const experienceSchema = z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string().optional(),
    tech: z.array(z.string()).optional(),
    description: z.array(z.string()).optional(),
    projects: z.array(z.object({
        name: z.string(),
        details: z.array(z.string()).optional(),
    })).optional(),
});

const educationSchema = z.object({
    id: z.string(),
    institution: z.string(),
    degree: z.string(),
    start: z.string(),
    end: z.string(),
    location: z.string().optional(),
    publication: z.string().optional(),
    awards: z.array(z.string()).optional(),
});

const hobbyProjectSchema = z.object({
    title: z.string(),
    img: z.string(),
    desc: z.string(),
    url: z.string(),
    tag: z.array(z.string()).optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type ExperienceSchema = z.infer<typeof experienceSchema>;
export type EducationSchema = z.infer<typeof educationSchema>;
export type HobbyProjectSchema = z.infer<typeof hobbyProjectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const experienceCollection = defineCollection({ schema: experienceSchema });
const educationCollection = defineCollection({ schema: educationSchema });
const hobbyProjectCollection = defineCollection({ schema: hobbyProjectSchema });

export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'experience': experienceCollection,
    'education': educationCollection,
    'hobby-project': hobbyProjectCollection,
}