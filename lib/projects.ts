export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  featured: boolean;
  status: 'Active' | 'Completed' | 'Research Prototype';
  updatedAt: string;
}

export const PROJECTS: Project[] = [];
