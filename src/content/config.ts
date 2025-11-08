import { z, defineCollection } from "astro:content";

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

export type ExperienceSchema = z.infer<typeof experienceSchema>;
export type EducationSchema = z.infer<typeof educationSchema>;
export type HobbyProjectSchema = z.infer<typeof hobbyProjectSchema>;

const experienceCollection = defineCollection({ schema: experienceSchema });
const educationCollection = defineCollection({ schema: educationSchema });
const hobbyProjectCollection = defineCollection({ schema: hobbyProjectSchema });

export const collections = {
    'experience': experienceCollection,
    'education': educationCollection,
    'hobby-project': hobbyProjectCollection,
}