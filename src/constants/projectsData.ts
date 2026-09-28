import { ProjectItem } from "../@types";

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "deskify",
    title: "Deskify SaaS",
    slug: "deskify",
    category: "Full Stack",
    summary: "Plataforma SaaS de mercado e helpdesk corporativo desenvolvida com arquitetura robusta.",
    description: "Deskify é um sistema completo de gerenciamento de chamados e helpdesk voltado para otimizar o atendimento técnico. Conta com rotas backend escaláveis, autenticação JWT segura, mapeamento de dados com Prisma e uma interface moderna e responsiva.",
    highlights: [
      "Autenticação e controle de permissões por rotas protegidas com JWT",
      "Modelagem de dados relacional eficiente utilizando Prisma ORM e SQLite",
      "Dashboard administrativo fluido com componentes reutilizáveis em React e SCSS"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "Prisma", "SQLite", "SCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    links: [
      { label: "Repositório GitHub", url: "https://github.com/eduuesteves/deskify", type: "github" }
    ],
    metrics: [
      { label: "Arquitetura", value: "Fullstack MVC" },
      { label: "Banco de Dados", value: "Relacional (Prisma)" }
    ],
    githubRepo: "deskify",
    roadmap: [
      { phase: "Fase 1: Backend & Auth", description: "Configuração da API Node.js/Express, migrações com Prisma e sistema de autenticação JWT." },
      { phase: "Fase 2: Dashboard Frontend", description: "Construção do painel gerencial em React, tipagem estrita com TypeScript e estilização em SCSS." },
      { phase: "Fase 3: Refinamento & Testes", description: "Otimização de rotas, tratamento de erros centralizado e validações de formulário." }
    ]
  },
  {
    id: "builder-site",
    title: "Builder Site",
    slug: "builder-site",
    category: "SaaS & Automação",
    summary: "Gerador automatizado de websites baseado em parsing de prompts e templates customizados.",
    description: "Builder Site é uma ferramenta voltada para a criação ágil de estruturas web através de parâmetros de entrada. O sistema processa templates pré-definidos e gera páginas dinâmicas com alto desempenho e código limpo.",
    highlights: [
      "Motor de parsing de prompts para montagem dinâmica de layouts",
      "Estrutura modular altamente escalável em React e TypeScript",
      "Geração estática otimizada para SEO e carregamento instantâneo"
    ],
    techStack: ["React", "TypeScript", "SCSS", "Vite"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    featured: true,
    links: [
      { label: "Repositório GitHub", url: "https://github.com/eduuesteves/builder-site", type: "github" }
    ],
    metrics: [
      { label: "Foco", value: "Geração Dinâmica" },
      { label: "Performance", value: "SSG / Vite" }
    ],
    githubRepo: "builder-site",
    roadmap: [
      { phase: "Fase 1: Core & Templates", description: "Definição da estrutura base de templates e tipagens para os blocos de conteúdo." },
      { phase: "Fase 2: Motor de Parsing", description: "Desenvolvimento da lógica de interpretação de comandos para renderização modular." },
      { phase: "Fase 3: Polimento UI", description: "Ajustes visuais no design system e garantia de responsividade em diferentes telas." }
    ]
  },
  {
    id: "faz-rango-ss",
    title: "Faz Rango SS",
    slug: "faz-rango-ss",
    category: "Frontend",
    summary: "Aplicação web interativa focada em receitas culinárias e organização de cardápios.",
    description: "Faz Rango SS é uma aplicação desenvolvida para facilitar a busca, organização e exibição de receitas de forma prática. Conta com uma interface limpa, filtragem dinâmica e integração com ambiente Docker para automações locais.",
    highlights: [
      "Interface responsiva e intuitiva para navegação entre categorias de pratos",
      "Componentização avançada em React com gerenciamento de estado eficiente",
      "Ambiente integrado de automação com Docker e n8n"
    ],
    techStack: ["React", "TypeScript", "Docker", "n8n", "SCSS"],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
    featured: false,
    links: [
      { label: "Repositório GitHub", url: "https://github.com/eduuesteves/faz-rango-ss", type: "github" }
    ],
    metrics: [
      { label: "Plataforma", value: "Web App" },
      { label: "Automação", value: "Docker / n8n" }
    ],
    githubRepo: "faz-rango-ss",
    roadmap: [
      { phase: "Fase 1: Layout & Componentes", description: "Criação da interface de listagem de receitas e cartões interativos." },
      { phase: "Fase 2: Filtros & Estados", description: "Implementação de buscas em tempo real e separação modular de componentes." },
      { phase: "Fase 3: Infra & Automação", description: "Configuração do ambiente de suporte com Docker containers e fluxos no n8n." }
    ]
  }
];