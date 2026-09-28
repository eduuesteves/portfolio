# Eduardo Esteves

<p align="center">
  <img src="https://img.shields.io/github/languages/top/eduuesteves/new-portfolio?color=61DAFB&style=for-the-badge" alt="Top Language" />
  <img src="https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Sass-1.x-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/github/license/eduuesteves/new-portfolio?color=green&style=for-the-badge" alt="License" />
</p>

<h3 align="center">
  <em>High-Performance Frontend Architecture meeting Modern Design & Clean Code Standards.</em>
</h3>

---

## 📌 Sobre / Visão Geral

Este repositório contém o código-fonte da aplicação web que serve como o **Portfólio Pessoal e Profissional de Eduardo Esteves**. 

O projeto foi concebido com o objetivo de apresentar projetos, competências técnicas e trajetória de forma altamente performática, elegante e acessível. A arquitetura foi estruturada utilizando **React** e **TypeScript**, alavancada pelo ambiente de build ultrarrápido do **Vite**. A estilização adota **Sass (SCSS)** estruturado de forma modular para garantir alta manutenibilidade, encapsulamento de estilos e reuso de variáveis globais de temas.

### Principais Pilares da Arquitetura

- **Tipagem Estrita (Type Safety):** Uso integral de TypeScript para evitar erros em tempo de compilação, estruturar interfaces claras para componentes e garantir previsibilidade no fluxo de dados.
- **Styling Modular & Escalável:** Utilização do Sass com estratégias como BEM / CSS Modules, permitindo tokens de design centralizados (mídias de corte, paleta de cores e tipografia).
- **Bundle Optimization:** Build tooling configurado via Vite, entregando compilação instantânea em desenvolvimento (HMR) e empacotamento otimizado para produção.
- **Iconografia Consistente:** Integração nativa com a biblioteca `phosphor-react`, garantindo ícones vetoriais leves, customizáveis e acessíveis.

---

## 📸 Demonstração / Screenshots Responsivas

A interface foi projetada seguindo o paradigma **Mobile-First**, garantindo uma experiência de usuário (UX) fluida e consistente em qualquer tamanho de tela ou dispositivo.

### Desktop View
![Desktop View](./screenshot/desktop.png)

### Tablet View
![Tablet View](./screenshot/tablet.png)

### Mobile View
![Mobile View](./screenshot/mobile.png)

---

## 🚀 Recursos e Funcionalidades

- **⚡ Fast Engine (Vite):** Inicialização instantânea do servidor de desenvolvimento e pré-bundling eficiente de dependências.
- **🎨 Layout Totalmente Responsivo:** Grid e Flexbox dinâmicos adaptados com Sass media queries para smartphones, tablets e desktops.
- **🧩 Componentização Atômica:** Componentes altamente desacoplados e reutilizáveis (botões, cards de projetos, seções, modais).
- **🎯 Ícones Vetoriais Dinâmicos:** Utilização do `phosphor-react` para renderização leve e parametrizável de ícones UI.
- **🎯 Semântica e Acessibilidade (a11y):** Marcação HTML5 correta com uso de atributos ARIA para navegação acessível por leitores de tela e teclado.
- **🧱 Design System com Sass:** Arquivos centrais de variáveis (`_variables.scss`, `_mixins.scss`) facilitando a customização global de temas.

---

## 🛠️ Pré-requisitos e Guia de Instalação

Antes de iniciar, certifique-se de ter os seguintes ambientes configurados em sua máquina:

- **Node.js**: Versão `18.x` ou superior
- **Gerenciador de Pacotes**: `npm` (incluído no Node), `yarn` ou `pnpm`
- **Git**: Para clonagem do repositório

### Passo a Passo de Instalação

1. **Clonar o Repositório:**
   ```bash
   git clone https://github.com/eduuesteves/new-portfolio.git
   ```

2. **Navegar até o Diretório do Projeto:**
   ```bash
   cd new-portfolio
   ```

3. **Instalar as Dependências:**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

---

## 💻 Como Usar / Exemplos Práticos

Abaixo estão os comandos disponíveis para execução no ambiente local de desenvolvimento, compilação e pré-visualização da aplicação.

### 1. Iniciar o Servidor de Desenvolvimento
Inicia a aplicação localmente com suporte a *Hot Module Replacement (HMR)*.

```bash
npm run dev
```
Acesse no navegador através do endereço local padrão: `http://localhost:5173`

### 2. Gerar Build de Produção
Compila e otimiza a aplicação para implantação em produção (gera a pasta `/dist`).

```bash
npm run build
```

### 3. Pré-visualizar a Build Localmente
Testa o pacote compilado da pasta `/dist` em um servidor local simulando ambiente de produção.

```bash
npm run preview
```

---

## 📁 Estrutura de Diretórios Resumida

```scss
new-portfolio/
├── public/                # Ativos estáticos públicos
├── src/
│   ├── assets/            # Imagens e recursos do projeto
│   ├── components/        # Componentes reutilizáveis em React
│   ├── styles/            # Estilos em Sass (variáveis, mixins, globals)
│   ├── screenshot/        # Screenshots para documentação
│   ├── App.tsx            # Componente raiz da aplicação
│   └── main.tsx           # Ponto de entrada do React/DOM
├── index.html             # HTML Template
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configurações do TypeScript
└── vite.config.ts         # Configurações do Vite
```

---

## 📄 Licença

Este projeto está sob a licença [MIT](./LICENSE). Sinta-se à vontade para estudar o código e utilizá-lo como referência para suas próprias implementações.

---

<p align="center">
    Desenvolvido por <strong>Eduardo Esteves</strong>.
</p>