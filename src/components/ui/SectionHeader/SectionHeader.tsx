import React from "react";
import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    align?: "center" | "left" | "right";
    className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    align = "center",
    className = "",
}) => {
    return (
        <header className={`${styles.headerContainer} ${styles[align]} ${className}`}>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </header>
    );
};