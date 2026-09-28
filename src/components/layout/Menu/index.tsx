import { useEffect } from "react";
import { 
    GithubLogoIcon, 
    LinkedinLogoIcon, 
    XIcon, 
    CommandIcon, 
    HouseIcon, 
    UserIcon, 
    CompassIcon, 
    EnvelopeIcon,
    CodeIcon
} from "@phosphor-icons/react";
import { SOCIAL_LINKS, NAVIGATION_LINKS } from "../../../constants";
import { useScrollSpy } from "../../../hooks";
import "./style.scss";

interface IMenu {
    open: boolean;
    isOpenChildren: (state: boolean) => void;
}

// Mapeamento de ícones para cada seção correspondente da NAVIGATION_LINKS
const getIconForSection = (href: string) => {
    switch(href) {
        case "#hero": return HouseIcon;
        case "#skills": return CodeIcon;
        case "#projects": return CompassIcon;
        case "#about": return UserIcon;
        case "#contact": return EnvelopeIcon;
        default: return HouseIcon;
    }
}

export function Menu({ open, isOpenChildren }: IMenu) {
    const sectionIds = NAVIGATION_LINKS.map(link => link.href.substring(1));
    const activeSectionId = useScrollSpy(sectionIds, 150);

    const handleClick = () => {
        isOpenChildren(false);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && open) {
                isOpenChildren(false);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, isOpenChildren]);

    return (
        <>
            <div 
                className={`menu-overlay ${open ? "active" : ""}`} 
                onClick={handleClick}
            />

            <nav className={`menu-sidebar ${open ? "open" : ""}`} aria-label="Menu Navegação Móvel">
                <div className="sidebar-header">
                    <div className="sidebar-brand">
                        <CommandIcon size={18} weight="duotone" />
                        <span>Eduardo Esteves</span>
                    </div>
                    <button className="close-menu-btn" onClick={handleClick} title="Fechar (Esc)" aria-label="Fechar menu">
                        <XIcon size={16} weight="bold" />
                    </button>
                </div>

                <div className="menu-links">
                    {NAVIGATION_LINKS.map((link) => {
                        const sectionId = link.href.substring(1);
                        const isActive = activeSectionId === sectionId;
                        const IconComponent = getIconForSection(link.href);

                        return (
                            <a 
                                key={link.label} 
                                href={link.href} 
                                className={`nav-item ${isActive ? "active-link" : ""}`}
                                onClick={handleClick}
                            >
                                <div className="navIconBox">
                                    <IconComponent size={20} weight="duotone" />
                                </div>
                                <span>{link.label}</span>
                            </a>
                        );
                    })}
                </div>

                <div className="menu-footer">
                    <div className="status-pill">
                        <span className="pulse-dot"></span>
                        <span>Disponível para novos projetos</span>
                    </div>
                    <div className="social-links">
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href={SOCIAL_LINKS.github} 
                            onClick={handleClick}
                            className="social-btn"
                            title="GitHub"
                        >
                            <GithubLogoIcon size={20} weight="duotone" />
                        </a>
                        <a 
                            target="_blank" 
                            rel="noreferrer" 
                            href={SOCIAL_LINKS.linkedin} 
                            onClick={handleClick}
                            className="social-btn"
                            title="LinkedIn"
                        >
                            <LinkedinLogoIcon size={20} weight="duotone" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}