import React, { useState } from "react";
import { ListIcon, CodeIcon } from "@phosphor-icons/react";
import { Menu } from "../Menu";
import { ThemeSwitcher } from "../../ui/ThemeSwitcher/ThemeSwitcher";
import { NAVIGATION_LINKS } from "../../../constants";
import { useScrollSpy } from "../../../hooks";
import styles from "./Header.module.scss";

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sectionIds = NAVIGATION_LINKS.map(link => link.href.substring(1));
    const activeSectionId = useScrollSpy(sectionIds, 150);

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <a href="#hero" className={styles.brandLogo}>
                    <div className={styles.brandIconBox}>
                        <CodeIcon size={22} weight="bold" />
                    </div>
                    <div className={styles.brandTextWrapper}>
                        <span className={styles.brandName}>Eduardo</span>
                        <span className={styles.brandExtension}>.dev</span>
                    </div>
                </a>

                <nav className={styles.desktopNav} aria-label="Navegação Principal">
                    {NAVIGATION_LINKS.map((link) => {
                        const sectionId = link.href.substring(1);
                        const isActive = activeSectionId === sectionId;

                        return (
                            <a 
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.active : ""}`}
                            >
                                <span>{link.label}</span>
                            </a>
                        );
                    })}
                </nav>

                <div className={styles.headerActions}>
                    <ThemeSwitcher />

                    <button 
                        className={styles.menuToggleBtn}
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Abrir menu de navegação"
                        title="Menu"
                    >
                        <ListIcon size={24} weight="bold" />
                    </button>
                </div>
            </div>

            <Menu open={isMenuOpen} isOpenChildren={setIsMenuOpen} />
        </header>
    );
};