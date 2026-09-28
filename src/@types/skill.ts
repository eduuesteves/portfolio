import { Icon } from "@phosphor-icons/react";

export type SkillCategory = 
  | "Frontend" 
  | "Backend & Dados" 
  | "Infra & DevOps" 
  | "IA & Produtividade"
  | "Soft Skills & Métodos";

export type SkillLevel = 
  | "Iniciante" 
  | "Intermediário" 
  | "Sólido" 
  | "Especialista";

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  icon: Icon;
  desc: string;
  level: SkillLevel;
  sinceYear: number;
  useCase: string;
  whyILike: string;
  codeSnippet: string;
  relatedSkillIds: string[];
  searchQuery: string;
}

export interface CategoryMeta {
  label: string;
  color: string;
  description: string;
}