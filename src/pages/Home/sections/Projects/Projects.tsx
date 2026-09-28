import React, { useState } from "react";
import { 
    FolderSimpleIcon, 
    FolderIcon,
    FileCodeIcon,
    CodeBlockIcon,
    GithubLogoIcon, 
    GlobeIcon, 
    SparkleIcon, 
    DesktopIcon,
    DeviceTabletIcon,
    DeviceMobileIcon,
    ArrowUpRightIcon,
    ListChecksIcon,
    GitBranchIcon,
    MapTrifoldIcon,
    CodeIcon,
    CheckIcon,
    CheckCircleIcon,
    LightbulbIcon
} from "@phosphor-icons/react";
import { PROJECTS_DATA } from "../../../../constants";
import { ProjectItem } from "../../../../@types";
import { useGitHubRepoTree } from "../../../../hooks/useGitHubRepoTree";
import { Card } from "../../../../components/ui/Card/Card";
import { Button } from "../../../../components/ui/Button/Button";
import styles from "./Projects.module.scss";
import { SectionHeader } from "../../../../components/ui/SectionHeader/SectionHeader";

export const Projects: React.FC = () => {
    const [activeProject, setActiveProject] = useState<ProjectItem | null>(
        PROJECTS_DATA && PROJECTS_DATA.length > 0 ? PROJECTS_DATA[0] : null
    );
    const [activeTab, setActiveTab] = useState<"story" | "roadmap" | "challenges" | "structure" | "highlights">("story");
    const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
    const [copiedRepo, setCopiedRepo] = useState(false);

    const { tree, loading: treeLoading } = useGitHubRepoTree(activeProject?.githubRepo || "");

    const githubLink = activeProject?.links.find(l => l.type === "github");
    const liveLink = activeProject?.links.find(l => l.type === "live");

    const handleCopyRepo = () => {
        if (!activeProject) return;
        navigator.clipboard.writeText(`https://github.com/eduuesteves/${activeProject.githubRepo}`);
        setCopiedRepo(true);
        setTimeout(() => setCopiedRepo(false), 2000);
    };

    if (!PROJECTS_DATA || PROJECTS_DATA.length === 0) {
        return (
            <section className="section-normal" id="projects">
                <SectionHeader 
                    title="Projetos em Destaque"
                    subtitle="Aplicações reais, MVPs e sistemas desenvolvidos com foco em engenharia de software e performance."
                />

                <div className={styles.projectsSectionWrapper}>
                    <Card variant="glass" className={styles.emptyProjectsCard}>
                        <div className={styles.emptyContent}>
                            <FolderSimpleIcon size={48} weight="duotone" />
                            <h3>Novos projetos em breve</h3>
                            <p>
                                Esta seção está sendo preparada com muito cuidado. Em breve, novos sistemas, MVPs e aplicações reais desenvolvidas com foco em performance e engenharia de software serão publicados aqui. Fique ligado!
                            </p>
                        </div>
                    </Card>
                </div>
            </section>
        );
    }

    return (
        <section className="section-normal" id="projects">
            <SectionHeader 
                title="Projetos em Destaque"
                subtitle="Aplicações reais, MVPs e sistemas desenvolvidos com foco em engenharia de software e performance."
            />

            <div className={styles.projectsSectionWrapper}>
                <div className={styles.projectsTopBarGrid}>
                    {PROJECTS_DATA.map((project) => {
                        const isActive = activeProject?.id === project.id;
                        return (
                            <div
                                key={project.id}
                                className={`${styles.projectSelectorCard} ${isActive ? styles.active : ""}`}
                                onClick={() => setActiveProject(project)}
                            >
                                <div className={styles.selectorTop}>
                                    <strong>{project.title}</strong>
                                    <span className={styles.selectorArrow}>&rarr;</span>
                                </div>
                                <p>{project.summary}</p>
                            </div>
                        );
                    })}
                </div>

                {activeProject && (
                    <Card variant="glass" className={styles.projectDetailCard}>
                        <div className={styles.splitContentLayout}>
                            
                            <div className={styles.infoColumn}>
                                <header className={styles.detailHeader}>
                                    <div className={styles.detailTitles}>
                                        <h3>{activeProject.title}</h3>
                                        <span className={styles.categorySubtitle}>{activeProject.category}</span>
                                    </div>
                                    <div className={styles.detailActions}>
                                        {githubLink && (
                                            <Button 
                                                as="a" 
                                                href={githubLink.url} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                variant="secondary" 
                                                size="sm"
                                            >
                                                <GithubLogoIcon size={15} weight="duotone" /> Código
                                            </Button>
                                        )}
                                        {liveLink && (
                                            <>
                                                <Button 
                                                    as="a" 
                                                    href={liveLink.url} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    variant="primary" 
                                                    size="sm"
                                                >
                                                    <GlobeIcon size={15} weight="duotone" /> Demo
                                                </Button>
                                                <Button 
                                                    as="a" 
                                                    href={liveLink.url} 
                                                    target="_blank" 
                                                    rel="noreferrer" 
                                                    variant="secondary" 
                                                    size="sm"
                                                >
                                                    Visitar Site <ArrowUpRightIcon size={13} weight="bold" />
                                                </Button>
                                            </>
                                        )}
                                    </div>
                                </header>

                                <nav className={styles.detailTabs} aria-label="Abas de detalhes do projeto">
                                    <button
                                        className={`${styles.tabItem} ${activeTab === "story" ? styles.active : ""}`}
                                        onClick={() => setActiveTab("story")}
                                    >
                                        <SparkleIcon size={14} weight="duotone" /> <span>Visão Geral</span>
                                    </button>
                                    <button
                                        className={`${styles.tabItem} ${activeTab === "roadmap" ? styles.active : ""}`}
                                        onClick={() => setActiveTab("roadmap")}
                                    >
                                        <MapTrifoldIcon size={14} weight="duotone" /> <span>Roadmap</span>
                                    </button>
                                    <button
                                        className={`${styles.tabItem} ${activeTab === "challenges" ? styles.active : ""}`}
                                        onClick={() => setActiveTab("challenges")}
                                    >
                                        <LightbulbIcon size={14} weight="duotone" /> <span>Desafios</span>
                                    </button>
                                    <button
                                        className={`${styles.tabItem} ${activeTab === "structure" ? styles.active : ""}`}
                                        onClick={() => setActiveTab("structure")}
                                    >
                                        <FolderSimpleIcon size={14} weight="duotone" /> <span>Pastas & Git</span>
                                    </button>
                                    <button
                                        className={`${styles.tabItem} ${activeTab === "highlights" ? styles.active : ""}`}
                                        onClick={() => setActiveTab("highlights")}
                                    >
                                        <ListChecksIcon size={14} weight="duotone" /> <span>Destaques</span>
                                    </button>
                                </nav>

                                <div className={styles.detailBodyContent}>
                                    {activeTab === "story" && (
                                        <div className={styles.tabPane}>
                                            <span className={styles.paneLabel}>Contexto & Proposta</span>
                                            <p>{activeProject.description}</p>
                                            <div className={styles.techPillsRow}>
                                                {activeProject.techStack.map((tech: string) => (
                                                    <span key={tech} className={styles.techPill}>{tech}</span>
                                                ))}
                                            </div>
                                            {activeProject.metrics && activeProject.metrics.length > 0 && (
                                                <>
                                                    <span className={styles.paneLabel} style={{ marginTop: "0.2rem" }}>Ambiente & Métricas</span>
                                                    <div className={styles.metricsGrid}>
                                                        {activeProject.metrics.map((m: { label: string; value: string }, idx: number) => (
                                                            <div key={idx} className={styles.metricBox}>
                                                                <span>{m.label}</span>
                                                                <strong>{m.value}</strong>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )}

                                    {activeTab === "roadmap" && (
                                        <div className={styles.tabPane}>
                                            <span className={styles.paneLabel}>Roadmap de Criação & Desenvolvimento</span>
                                            <div className={styles.roadmapList}>
                                                {activeProject.roadmap.map((step: { phase: string; description: string }, idx: number) => (
                                                    <div key={idx} className={styles.roadmapItem}>
                                                        <div className={styles.timelineDot}></div>
                                                        <strong>{step.phase}</strong>
                                                        <span>{step.description}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "challenges" && (
                                        <div className={styles.tabPane}>
                                            <span className={styles.paneLabel}>Engenharia, Desafios & Soluções</span>
                                            <div className={styles.challengesCard}>
                                                <div className={styles.challengeIcon}>
                                                    <LightbulbIcon size={20} weight="duotone" color="var(--accent)" />
                                                </div>
                                                <div className={styles.challengeContent}>
                                                    <strong>Resolução de Gargalos Técnicos</strong>
                                                    <p>
                                                        Durante o desenvolvimento deste projeto, o maior foco foi garantir escalabilidade e consistência de estado. A implementação de boas práticas arquiteturais permitiu mitigar problemas de re-renderização e otimizar o fluxo de dados em tempo real.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "structure" && (
                                        <div className={styles.tabPane}>
                                            <span className={styles.paneLabel}>Arquitetura de Pastas</span>
                                            <div className={styles.folderTreeBlock}>
                                                <div className={styles.branchHeaderRow}>
                                                    <div className={styles.branchBadge}>
                                                        <GitBranchIcon size={14} weight="duotone" /> eduuesteves/{activeProject.githubRepo}
                                                    </div>
                                                    <button className={styles.copyRepoBtn} onClick={handleCopyRepo} title="Copiar URL do Repositório">
                                                        {copiedRepo ? <><CheckIcon size={12} color="#22c55e" /> Copiado!</> : "Copiar Link"}
                                                    </button>
                                                </div>
                                                {treeLoading ? (
                                                    <div className={styles.loadingText}>Sincronizando com GitHub API...</div>
                                                ) : tree.length > 0 ? (
                                                    tree.map((path: string, idx: number) => {
                                                        const isFile = path.includes('.');
                                                        return (
                                                            <div key={idx} className={styles.fileTreeItem}>
                                                                {isFile 
                                                                    ? <FileCodeIcon size={16} weight="duotone" /> 
                                                                    : <FolderIcon size={16} weight="fill" color="var(--accent)" />
                                                                }
                                                                <span>{path}</span>
                                                            </div>
                                                        );
                                                    })
                                                ) : (
                                                    <div className={styles.fileTreeItem}>
                                                        <FileCodeIcon size={16} weight="duotone" />
                                                        <span>src/App.tsx</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}

                                    {activeTab === "highlights" && (
                                        <div className={styles.tabPane}>
                                            <span className={styles.paneLabel}>Principais Realizações Técnicas</span>
                                            <ul className={styles.highlightsList}>
                                                {activeProject.highlights.map((item: string, idx: number) => (
                                                    <li key={idx}>
                                                        <CheckCircleIcon size={16} weight="duotone" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.mockupColumn}>
                                <div className={styles.mockupToolbar}>
                                    <span className={styles.mockupInfoLabel}>
                                        <CodeIcon size={14} weight="duotone" color="var(--accent)" /> Simulação 
                                        <span className={styles.liveStatusIndicator} title="Demonstração online ativa"></span>
                                    </span>
                                    <div className={styles.deviceButtonsGroup}>
                                        <button 
                                            className={`${styles.deviceBtn} ${deviceMode === "desktop" ? styles.active : ""}`}
                                            onClick={() => setDeviceMode("desktop")}
                                            title="Modo MacBook"
                                        >
                                            <DesktopIcon size={13} weight="duotone" /> <span>Mac</span>
                                        </button>
                                        <button 
                                            className={`${styles.deviceBtn} ${deviceMode === "tablet" ? styles.active : ""}`}
                                            onClick={() => setDeviceMode("tablet")}
                                            title="Modo iPad"
                                        >
                                            <DeviceTabletIcon size={13} weight="duotone" /> <span>iPad</span>
                                        </button>
                                        <button 
                                            className={`${styles.deviceBtn} ${deviceMode === "mobile" ? styles.active : ""}`}
                                            onClick={() => setDeviceMode("mobile")}
                                            title="Modo iPhone"
                                        >
                                            <DeviceMobileIcon size={13} weight="duotone" /> <span>iPhone</span>
                                        </button>
                                    </div>
                                </div>

                                <div className={`${styles.deviceFrameWrapper} ${styles[deviceMode + "Mode"]}`}>
                                    <div className={styles.appleDeviceFrame}>
                                        {deviceMode === "desktop" && (
                                            <div className={styles.macTopBar}>
                                                <div className={styles.windowControls}>
                                                    <span className={styles.close}></span>
                                                    <span className={styles.minimize}></span>
                                                    <span className={styles.maximize}></span>
                                                </div>
                                                <div className={styles.urlBar}>https://{activeProject.slug}.app</div>
                                            </div>
                                        )}
                                        {deviceMode === "tablet" && <div className={styles.cameraDot}></div>}
                                        {deviceMode === "mobile" && <div className={styles.dynamicIsland}></div>}

                                        <div className={styles.deviceScreen}>
                                            <div className={styles.placeholderScreen}>
                                                <CodeBlockIcon size={42} weight="duotone" className={styles.placeholderIcon} />
                                                <h4>{activeProject.title}</h4>
                                                <span>Preview em Desenvolvimento</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {liveLink && (
                                    <div className={styles.demoActionFooter}>
                                        <a 
                                            href={liveLink.url} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className={styles.btnDemoPulse}
                                        >
                                            <GlobeIcon size={16} weight="duotone" /> Acessar Demo Ao Vivo <ArrowUpRightIcon size={14} weight="bold" />
                                        </a>
                                    </div>
                                )}
                            </div>

                        </div>
                    </Card>
                )}
            </div>
        </section>
    );
};