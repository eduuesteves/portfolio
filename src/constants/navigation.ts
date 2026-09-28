export interface NavLink {
  label: string;
  href: string;
}

export const NAVIGATION_LINKS: NavLink[] = [
  { label: "Visão Geral", href: "#hero" },
  { label: "Stack Técnica", href: "#skills" },
  { label: "Portfólio", href: "#projects" },
  { label: "Trajetória", href: "#about" },
  { label: "Conexão", href: "#contact" }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/eduuesteves",
  linkedin: "https://www.linkedin.com/in/eduardoesteves04/", // Ajustado conforme seu Hero
  email: "esteves-dorta@hotmail.com"
};