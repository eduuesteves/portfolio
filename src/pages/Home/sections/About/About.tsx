import React, { useState } from "react";
import { TerminalIcon, CpuIcon, SparkleIcon, FileArrowDownIcon, LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";
import { SOCIAL_LINKS } from "../../../../constants";
import styles from "./About.module.scss";
import { SectionHeader } from "../../../../components/ui/SectionHeader/SectionHeader";

export const About: React.FC = () => {
    const avatarUrl = "https://avatars.githubusercontent.com/u/40532597?v=4";
    const [activeTab, setActiveTab] = useState<"journey" | "mindset" | "workflow">("journey");

    return (
        <section className={styles.aboutSectionWrapper} id="about">
            <SectionHeader 
                title="Sobre mim"
                subtitle="Minha trajetória, fundamentos de engenharia e como transformo complexidade em software limpo."
            />
            
            <div className={styles.aboutCard}>
                {/* Coluna Esquerda */}
                <div className={styles.profileCol}>
                    <div className={styles.profileTopGroup}>
                        <div className={styles.photoWrapper}>
                            <div className={styles.photoFrame}></div>
                            <img loading="lazy" src={avatarUrl} alt="José Eduardo Dorta Esteves" className={styles.photo} />
                            <div className={styles.statusBadgeAbsolute}>
                                <span className={styles.pulseDot}></span>
                                Disponível
                            </div>
                        </div>

                        <div className={styles.profileTitles}>
                            <h3>Eduardo Esteves</h3>
                            <span className={styles.roleSub}>Software Developer & IT Tech</span>
                            <span className={styles.locationSub}>📍 SP, Brasil</span>
                        </div>
                    </div>

                    <div className={styles.profileBottomGroup}>
                        <div className={styles.actionsRow}>
                            <a 
                                href="/curriculo.pdf" 
                                download="Jose_Eduardo_Dorta_Esteves_Curriculo.pdf" 
                                className={styles.btnActionPrimary}
                                title="Baixar Currículo em PDF"
                            >
                                <FileArrowDownIcon size={16} weight="duotone" />
                                <span>Baixar CV</span>
                            </a>

                            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className={styles.socialBtn}>
                                <LinkedinLogoIcon size={18} weight="duotone" />
                            </a>
                            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" title="GitHub" className={styles.socialBtn}>
                                <GithubLogoIcon size={18} weight="duotone" />
                            </a>
                        </div>

                        <div className={styles.quickStatsRow}>
                            <div className={styles.qStat}>
                                <strong>31</strong>
                                <span>Anos</span>
                            </div>
                            <div className={styles.qDivider}></div>
                            <div className={styles.qStat}>
                                <strong>2020</strong>
                                <span>Ciência Comp.</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Coluna Direita */}
                <div className={styles.contentCol}>
                    <div className={styles.aboutTabs}>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === "journey" ? styles.active : ""}`}
                            onClick={() => setActiveTab("journey")}
                        >
                            <TerminalIcon size={15} weight="duotone" />
                            <span>1. Raízes & TI</span>
                        </button>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === "mindset" ? styles.active : ""}`}
                            onClick={() => setActiveTab("mindset")}
                        >
                            <CpuIcon size={15} weight="duotone" />
                            <span>2. Visão & Arquitetura</span>
                        </button>
                        <button 
                            className={`${styles.tabBtn} ${activeTab === "workflow" ? styles.active : ""}`}
                            onClick={() => setActiveTab("workflow")}
                        >
                            <SparkleIcon size={15} weight="duotone" />
                            <span>3. Workflow & IA</span>
                        </button>
                    </div>

                    <div className={styles.tabPaneContent}>
                        {activeTab === "journey" && (
                            <div className={styles.paneBody}>
                                <h4>Da Infraestrutura Corporativa ao Desenvolvimento Web</h4>
                                <p>
                                    Formado em Ciência da Computação em 2020, iniciei minha jornada no ecossistema de TI lidando com redes, servidores Linux, suporte técnico avançado e automação de ambientes. Essa base prática me deu um raciocínio lógico apurado para antecipar gargalos de performance e entender o software de ponta a ponta.
                                </p>
                                <p>
                                    Hoje, canalizo essa bagagem sólida para o desenvolvimento web moderno, construindo aplicações reativas, performáticas e focadas na experiência do usuário e do negócio (SaaS).
                                </p>
                            </div>
                        )}

                        {activeTab === "mindset" && (
                            <div className={styles.paneBody}>
                                <h4>Engenharia Pragmática & Foco em Qualidade</h4>
                                <p>
                                    Acredito que simplicidade é o grau máximo de sofisticação. Meu objetivo ao projetar um sistema não é apenas fazer funcionar, mas garantir que o código seja limpo, tipado com rigor e sustentável ao longo do tempo.
                                </p>
                                <p>
                                    Combinando minha rotina de estudos em inglês técnico para consumo de documentações internacionais com a criação constante de MVPs, busco sempre evoluir meu padrão de entrega.
                                </p>
                            </div>
                        )}

                        {activeTab === "workflow" && (
                            <div className={styles.paneBody}>
                                <h4>Metodologia Ágil e Inteligência Artificial no Dia a Dia</h4>
                                <p>
                                    Utilizo IA de forma estratégica como copiloto de engenharia e revisão de arquitetura, o que multiplica minha produtividade e capacidade de entrega:
                                </p>
                                <ul className={styles.aiPillarsList}>
                                    <li><strong>Micro-Tarefas:</strong> Divisão de grandes objetivos em blocos acionáveis de 15 a 30 minutos para manter constância cirúrgica.</li>
                                    <li><strong>Tipagem Estrita & Refatoração:</strong> Uso de TypeScript e testes rápidos para garantir robustez e zero regressão no código.</li>
                                    <li><strong>Stack Otimizada:</strong> React, Vite, SCSS Modules e Git para fluxos limpos, rápidos e semânticos.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};