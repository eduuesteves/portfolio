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
  id: "edulang",
  title: "EduLang",
  slug: "edulang",
  category: "Backend & Infra",
  summary: "Linguagem de programação educacional criada do zero em TypeScript, com sintaxe própria, interpretador e arquitetura preparada para evolução multiplataforma.",
  description: "EduLang é uma linguagem de programação educacional desenvolvida para tornar os conceitos fundamentais de programação, compiladores e execução de código mais acessíveis. O projeto implementa sua própria análise léxica, análise sintática, AST, ambiente de execução e interpretador, utilizando TypeScript como linguagem de implementação. A arquitetura foi pensada para evoluir futuramente para um compilador com diferentes backends, permitindo que uma única aplicação EduLang possa ser direcionada para Web, Windows, Android e outras plataformas.",
  highlights: [
    "Linguagem com sintaxe e regras próprias, desenvolvida do zero para fins educacionais",
    "Pipeline completo envolvendo código-fonte, lexer, parser, AST, ambiente de execução e interpretador",
    "Sistema de variáveis, condições, operadores, entrada de dados, saída de dados e retorno de funções",
    "Mensagens de erro didáticas para ajudar o programador a entender problemas no código",
    "Arquitetura preparada para evoluir de um interpretador para uma ferramenta de desenvolvimento multiplataforma",
    "Possibilidade futura de utilizar diferentes backends para executar uma mesma aplicação em Web, Windows e dispositivos móveis"
  ],
  techStack: [
    "TypeScript",
    "Node.js",
    "Lexer",
    "Parser",
    "AST",
    "Interpreter",
    "Compiler Architecture"
  ],
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
  featured: true,
  links: [
    {
      label: "Repositório GitHub",
      url: "https://github.com/eduuesteves/edulang",
      type: "github"
    }
  ],
  metrics: [
    {
      label: "Tipo",
      value: "Linguagem de Programação"
    },
    {
      label: "Implementação",
      value: "TypeScript"
    },
    {
      label: "Execução atual",
      value: "Interpretador"
    },
    {
      label: "Objetivo",
      value: "Desenvolvimento Multiplataforma"
    }
  ],
  githubRepo: "edulang",
  roadmap: [
    {
      phase: "Fase 1: Fundamentos da Linguagem",
      description: "Definição da sintaxe própria da EduLang e implementação de variáveis, valores, operadores, saída e entrada de dados."
    },
    {
      phase: "Fase 2: Lexer & Parser",
      description: "Implementação do processamento do código-fonte, transformação em tokens e validação da estrutura sintática da linguagem."
    },
    {
      phase: "Fase 3: AST & Interpretador",
      description: "Construção da Abstract Syntax Tree e implementação do ambiente de execução responsável por interpretar e executar os programas EduLang."
    },
    {
      phase: "Fase 4: Controle de Fluxo & Funções",
      description: "Expansão da linguagem com condições, repetições, funções, parâmetros, escopo e retorno de valores."
    },
    {
      phase: "Fase 5: Compilador JavaScript",
      description: "Criação de um backend capaz de transformar programas EduLang em JavaScript, permitindo aproveitar o ecossistema e a portabilidade da plataforma."
    },
    {
      phase: "Fase 6: Universal Intermediate Representation",
      description: "Introdução de uma representação intermediária própria para separar a linguagem dos diferentes destinos de execução."
    },
    {
      phase: "Fase 7: Plataforma EduLang",
      description: "Criação de ferramentas de desenvolvimento, CLI, gerenciamento de projetos, servidor de desenvolvimento e comandos para diferentes plataformas."
    },
    {
      phase: "Fase 8: Multiplataforma",
      description: "Evolução da arquitetura para permitir que um único projeto EduLang possa gerar aplicações para Web, Windows, Android e outras plataformas."
    }
  ]
},
  {
    id: "faz-rango",
    title: "Faz Rango",
    slug: "faz-rango",
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