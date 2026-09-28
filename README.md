<div align="center">

# 🚀 Developer Portfolio & Showcase

  <p align="center">
    <strong>Um ecossistema front-end moderno, ultra-responsivo e de alta performance projetado para destacar projetos, habilidades e a trajetória na engenharia de software.</strong>
  </p>

  <p align="center">
    <a href="https://github.com/eduuesteves/portfolio/stargazers"><img src="https://img.shields.io/github/stars/eduuesteves/portfolio?style=for-the-badge&color=8A2BE2&logo=github" alt="Stars Badge"/></a>
    <a href="https://github.com/eduuesteves/portfolio/network/members"><img src="https://img.shields.io/github/forks/eduuesteves/portfolio?style=for-the-badge&color=8A2BE2&logo=github" alt="Forks Badge"/></a>
    <a href="https://github.com/eduuesteves/portfolio/blob/main/LICENSE"><img src="https://img.shields.io/github/license/eduuesteves/portfolio?style=for-the-badge&color=8A2BE2" alt="License Badge"/></a>
    <img src="https://img.shields.io/badge/SCSS-Hot%20Pink?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS Badge"/>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 Badge"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript Badge"/>
  </p>

</div>

---

## 📖 Sobre o Projeto

O **Developer Portfolio** é uma aplicação web construída sob as melhores práticas da engenharia de software front-end. O projeto foi concebido para entregar uma experiência de usuário (UX) fluida, intuitiva e esteticamente refinada, sem comprometer os tempos de carregamento e a eficiência do código.

Com foco central em arquitetura **CSS/SCSS modular**, a aplicação utiliza o ecossistema SASS para abstrair variáveis Globais, Mixins de Responsividade, Configurações de Temas e Componentização limpa. Esta estrutura facilita a manutenção contínua, escalabilidade de design system e reutilização de código.

### 🎯 Objetivos de Arquitetura
* **Mobile-First Strategy**: Layout construído progressivamente a partir de dispositivos móveis para telas ultra-wide.
* **Baixa Latência & Performance**: Ausência de frameworks pesados desnecessários; entrega de CSS minificado e otimizado.
* **Acessibilidade (a11y)**: Conformidade com padrões de legibilidade, estruturas semânticas HTML5 e suporte a navegação via teclado.
* **Manutenibilidade**: Organização de arquivos com convenções rígidas de pastas e separação clara de responsabilidades.

---

## 📸 Demonstração / Screenshots Responsivas

A aplicação adapta-se perfeitamente a variadas resoluções e densidades de tela:

### 💻 Desktop View
![Desktop View](./src/screenshot/desktop.png)

### 📐 Tablet View
![Tablet View](./src/screenshot/tablet.png)

### 📱 Mobile View
![Mobile View](./src/screenshot/mobile.png)

---

## ✨ Recursos e Funcionalidades

- [x] **Arquitetura SCSS Modular**: Organização de estilos dividida em variáveis (`_variables.scss`), mixins (`_mixins.scss`), reset global e módulos de componentes.
- [x] **Design Totalmente Responsivo**: Layouts adaptáveis testados rigorosamente em uma vasta gama de resoluções de tela.
- [x] **Componentes Interativos**: Menu de navegação dinâmico, galerias de projetos e seções interativas com feedbacks visuais e animações suaves.
- [x] **Interface Otimizada (UI/UX)**: Tipografia clara, contraste adequado e padrão visual consistente.
- [x] **SEO e Tags Meta**: Estrutura otimizada para rastreadores de motores de busca e compartilhamento em redes sociais.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição / Uso no Projeto |
| :--- | :--- |
| **HTML5 Semântico** | Estruturação acessível e otimizada para motores de busca. |
| **SCSS / SASS** | Pré-processamento de CSS, variáveis de tema, mixins e arquitetura modular. |
| **JavaScript (ES6+)** | Lógica de manipulação de DOM, menus dinâmicos e comportamentos assíncronos/interativos. |
| **NPM / Build Tools** | Gerenciamento de dependências, compilação de scripts e minificação de assets. |

---

## 📋 Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente local:

* [Node.js](https://nodejs.org/) (Versão LTS recomendada, v16.x ou superior)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* Git para controle de versão

---

## 🚀 Guia de Instalação e Execução

Siga os passos abaixo para clonar e executar o projeto em seu ambiente de desenvolvimento local:

### 1. Clonar o Repositório

```bash
# Clone o repositório utilizando HTTPS
git clone https://github.com/eduuesteves/portfolio.git

# Acesse o diretório do projeto
cd portfolio
```

### 2. Instalar Dependências

```bash
# Instale as dependências via NPM
npm install

# Ou caso utilize Yarn
yarn install
```

### 3. Compilar SCSS e Iniciar o Servidor de Desenvolvimento

```bash
# Executa a compilação do SCSS e o modo watch para alterações em tempo real
npm run dev

# Ou se preferir usar o comando de build direto
npm run build
```

---

## 📂 Estrutura do Projeto

A organização de diretórios e arquivos do projeto segue uma estrutura limpa e intuitiva:

```text
portfolio/
├── index.html
├── package.json
├── README.md
└── src/
    ├── assets/
    │   ├── icons/
    │   └── images/
    ├── js/
    │   └── main.js
    ├── scss/
    │   ├── base/
    │   │   ├── _reset.scss
    │   │   └── _typography.scss
    │   ├── components/
    │   │   ├── _buttons.scss
    │   │   ├── _cards.scss
    │   │   └── _navbar.scss
    │   ├── utils/
    │   │   ├── _mixins.scss
    │   │   └── _variables.scss
    │   └── main.scss
    └── screenshot/
        ├── desktop.png
        ├── mobile.png
        └── tablet.png
```

---

## 💡 Como Usar e Personalizar

### Alterando Variáveis de Tema (Cores e Fontes)
Você pode personalizar toda a paleta de cores e tipografia da aplicação alterando o arquivo de variáveis globais:

1. Abra o arquivo `src/scss/utils/_variables.scss`.
2. Edite os valores das variáveis SCSS:

```scss
// Exemplo de personalização em src/scss/utils/_variables.scss

$primary-color: #8a2be2;
$secondary-color: #00f2fe;
$bg-dark: #0f172a;
$text-light: #f8fafc;

$font-primary: 'Inter', sans-serif;
$font-code: 'Fira Code', monospace;
```

3. O pré-processador recompilará automaticamente o arquivo `.css` resultante com as novas diretrizes visuais.

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/eduuesteves">Eduardo Esteves</a></p>
</div>