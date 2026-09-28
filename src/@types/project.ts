export type ProjectCategory = 
  | "Full Stack" 
  | "Frontend" 
  | "Backend & Infra" 
  | "Mobile & Apps" 
  | "SaaS & Automação";

export interface ProjectLink {
  label: string;
  url: string;
  type: "github" | "live" | "docs" | "figma";
}

export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  image: string;
  featured: boolean;
  links: ProjectLink[];
  metrics?: {
    label: string;
    value: string;
  }[];
  roadmap: {
    phase: string;
    description: string;
  }[];
  githubRepo: string; // Nome do repositório exato no GitHub para busca automatizada via API
}