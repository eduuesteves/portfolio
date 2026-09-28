import React from "react";
import { SOCIAL_LINKS, NAVIGATION_LINKS } from "../../../constants";
import styles from "./Footer.module.scss";

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerV2}>
            <div className={styles.footerGridContainer}>
                <div className={styles.footerTopContent}>
                    <div className={styles.brandCol}>
                        <span className={styles.brandTitle}>Eduardo Esteves</span>
                        <p className={styles.brandBio}>
                            Desenvolvendo experiências digitais de alta performance com foco em engenharia limpa e escalabilidade.
                        </p>
                    </div>

                    <div className={styles.navigationColsGroup}>
                        <div className={styles.navColumnGroup}>
                            <span>Navegação</span>
                            {NAVIGATION_LINKS.map(link => (
                                <a key={link.href} href={link.href}>{link.label}</a>
                            ))}
                        </div>
                        <div className={styles.navColumnGroup}>
                            <span>Redes & Contato</span>
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href={`mailto:${SOCIAL_LINKS.email}`}>E-mail Direto</a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerDivider} />

                <div className={styles.footerBottomBar}>
                    <p className={styles.copyrightText}>
                        &copy; {currentYear} • Todos os direitos reservados.
                    </p>

                    <div className={styles.telemetryBadge}>
                        <span className={styles.livePing}></span>
                        <span>System Operational • SP/BR</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};