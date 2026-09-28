import React, { useState } from "react";
import { MoonIcon, SunIcon, LightningIcon, UserIcon } from "@phosphor-icons/react";
import styles from "./ThemeSwitcher.module.scss";
import { ThemeType, useTheme } from "../../../hooks/useTheme";

export const ThemeSwitcher: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const themes: { id: ThemeType; label: string; icon: React.ReactNode }[] = [
        { id: "dark", label: "Dark", icon: <MoonIcon size={16} weight="duotone" /> },
        { id: "light", label: "Light", icon: <SunIcon size={16} weight="duotone" /> },
        { id: "neon", label: "Neon", icon: <LightningIcon size={16} weight="duotone" /> },
        { id: "eduardo", label: "Eduardo", icon: <UserIcon size={16} weight="duotone" /> }
    ];

    const currentTheme = themes.find(t => t.id === theme) || themes[0];

    return (
        <div className={styles.switcherContainer}>
            <button 
                className={styles.switcherTrigger}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Selecionar tema"
                title={`Tema atual: ${currentTheme.label}`}
            >
                <span className={styles.themeIconWrapper}>
                    {currentTheme.icon}
                </span>
                <span className={styles.currentLabel}>{currentTheme.label}</span>
            </button>

            {isOpen && (
                <div className={styles.dropdown}>
                    {themes.map((item) => (
                        <button
                            key={item.id}
                            className={`${styles.dropdownItem} ${theme === item.id ? styles.active : ""}`}
                            onClick={() => {
                                toggleTheme(item.id);
                                setIsOpen(false);
                            }}
                        >
                            <span className={styles.dropdownIcon}>
                                {item.icon}
                            </span>
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};