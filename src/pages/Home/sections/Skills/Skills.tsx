import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
    BriefcaseIcon, 
    CodeIcon, 
    HeartIcon, 
    GithubLogoIcon, 
    ArrowUpRightIcon, 
    CheckIcon, 
    ClipboardIcon,
    MagnifyingGlassIcon,
    CaretDownIcon,
    CaretUpIcon,
} from "@phosphor-icons/react";
import { SKILLS_DATA, CATEGORY_META } from "../../../../constants";
import { SkillItem } from "../../../../@types";
import { Badge } from "../../../../components/ui/Badge/Badge";
import { Card } from "../../../../components/ui/Card/Card";
import { Button } from "../../../../components/ui/Button/Button";
import styles from "./Skills.module.scss";
import { SectionHeader } from "../../../../components/ui/SectionHeader/SectionHeader";

const GITHUB_USERNAME = "eduuesteves";

export const Skills: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeSkill, setActiveSkill] = useState<SkillItem>(SKILLS_DATA[0]);
    const [activeTab, setActiveTab] = useState<"context" | "code" | "why">("context");
    const [copied, setCopied] = useState(false);
    const [isMobileListOpen, setIsMobileListOpen] = useState(false);
    
    const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    const tabsContainerRef = useRef<HTMLDivElement>(null);

    // Efeito de micro-movimento (bounce sutil) para indicar scroll horizontal nas abas no mobile
    useEffect(() => {
        const isMobile = window.innerWidth < 960;
        if (isMobile && tabsContainerRef.current) {
            const timer = setTimeout(() => {
                if (tabsContainerRef.current) {
                    tabsContainerRef.current.scrollTo({ left: 60, behavior: 'smooth' });
                    setTimeout(() => {
                        if (tabsContainerRef.current) {
                            tabsContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                        }
                    }, 400);
                }
            }, 800);

            return () => clearTimeout(timer);
        }
    }, []);

    const filteredSkills = useMemo(() => {
        if (!searchQuery.trim()) return SKILLS_DATA;
        const query = searchQuery.toLowerCase();
        return SKILLS_DATA.filter(
            (s) => s.name.toLowerCase().includes(query) || s.category.toLowerCase().includes(query) || s.desc.toLowerCase().includes(query)
        );
    }, [searchQuery]);

    const groupedSkills = useMemo(() => {
        const groups: Record<string, SkillItem[]> = {};
        filteredSkills.forEach((skill) => {
            if (!groups[skill.category]) {
                groups[skill.category] = [];
            }
            groups[skill.category].push(skill);
        });
        return groups;
    }, [filteredSkills]);

    useEffect(() => {
        if (filteredSkills.length > 0 && !filteredSkills.find((s) => s.id === activeSkill.id)) {
            setActiveSkill(filteredSkills[0]);
        }
    }, [filteredSkills, activeSkill.id]);

    useEffect(() => {
        setCopied(false);
    }, [activeSkill, activeTab]);

    const yearsLabel = (sinceYear: number) => {
        const years = new Date().getFullYear() - sinceYear;
        return years <= 1 ? "1 ano" : `${years} anos`;
    };

    const earliestYear = Math.min(...SKILLS_DATA.map((s) => s.sinceYear));

    const relatedSkills = activeSkill.relatedSkillIds
        .map((id) => SKILLS_DATA.find((s) => s.id === id))
        .filter((s): s is SkillItem => Boolean(s));

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(activeSkill.codeSnippet);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            // Falha silenciosa
        }
    };

    const focusSkill = (id: string) => {
        itemRefs.current[id]?.focus();
    };

    const handleListKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (filteredSkills.length === 0) return;
        const idx = filteredSkills.findIndex((s) => s.id === activeSkill.id);
        if (idx === -1) return;

        if (e.key === "ArrowDown" || e.key === "ArrowRight") {
            e.preventDefault();
            const next = filteredSkills[(idx + 1) % filteredSkills.length];
            setActiveSkill(next);
            focusSkill(next.id);
        } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
            e.preventDefault();
            const prev = filteredSkills[(idx - 1 + filteredSkills.length) % filteredSkills.length];
            setActiveSkill(prev);
            focusSkill(prev.id);
        }
    };

    const ActiveIcon = activeSkill.icon;
    const catMeta = CATEGORY_META[activeSkill.category];
    const catColor = catMeta?.color || "var(--accent)";

    return (
        <section className={styles.skillsSection} id="skills">
            <SectionHeader 
                title="Habilidades & Stack Técnica"
                subtitle={`${yearsLabel(earliestYear)} projetando soluções e mantendo sistemas, combinando hard skills modernas com inteligência artificial e produtividade.`}
            />

            <div className={styles.skillsLayout}>
                {/* Coluna Esquerda: Buscador + Lista Categorizada */}
                <div className={styles.skillsSidebar}>
                    <div className={styles.searchInputContainer}>
                        <MagnifyingGlassIcon size={16} weight="bold" />
                        <input 
                            type="text" 
                            placeholder="Pesquisar tecnologia, framework..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Filtrar habilidades"
                        />
                        <button 
                            type="button"
                            className={styles.mobileToggleBtn}
                            onClick={() => setIsMobileListOpen(!isMobileListOpen)}
                            aria-label="Mostrar ou ocultar lista de habilidades"
                        >
                            {isMobileListOpen ? (
                                <>
                                    <CaretUpIcon size={14} weight="fill" />
                                    <span>Skills</span>
                                </>
                            ) : (
                                <>
                                    <CaretDownIcon size={14} weight="fill" />
                                    <span>Skills</span>
                                </>
                            )}
                        </button>
                    </div>

                    <div 
                        className={`${styles.skillsListContainer} ${isMobileListOpen ? styles.mobileOpen : ""}`}
                        role="listbox"
                        aria-label="Lista de habilidades por setor"
                        onKeyDown={handleListKeyDown}
                    >
                        {Object.keys(groupedSkills).length === 0 ? (
                            <div className={styles.noResultsMsg}>Nenhum resultado para "{searchQuery}"</div>
                        ) : (
                            Object.entries(groupedSkills).map(([categoryName, skills]) => {
                                const groupMeta = CATEGORY_META[categoryName];
                                const groupColor = groupMeta?.color || "var(--accent)";

                                return (
                                    <div key={categoryName} className={styles.categoryGroup} style={{ "--cat-color": groupColor } as React.CSSProperties}>
                                        <span className={styles.categoryHeaderLabel}>{categoryName}</span>
                                        <ul className={styles.skillsList}>
                                            {skills.map((skill) => {
                                                const IconComponent = skill.icon;
                                                const isActive = activeSkill.id === skill.id;

                                                return (
                                                    <li key={skill.id}>
                                                        <button
                                                            ref={(el) => {
                                                                itemRefs.current[skill.id] = el;
                                                            }}
                                                            role="option"
                                                            aria-selected={isActive}
                                                            className={`${styles.skillRow} ${isActive ? styles.active : ""}`}
                                                            onClick={() => {
                                                                setActiveSkill(skill);
                                                                setIsMobileListOpen(false);
                                                            }}
                                                        >
                                                            <IconComponent size={20} weight="duotone" />
                                                            <span className={styles.skillRowName}>{skill.name}</span>
                                                            <span className={styles.skillRowYears}>{yearsLabel(skill.sinceYear)}</span>
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Coluna Direita: Card de Detalhes */}
                <Card 
                    variant="glass" 
                    className={styles.skillDetailCard} 
                    style={{ "--cat-color": catColor } as React.CSSProperties}
                >
                    <header className={styles.detailHeader}>
                        <div className={styles.iconBoxWrapper}>
                            <ActiveIcon size={36} weight="duotone" />
                        </div>
                        <div className={styles.detailHeading}>
                            <h3>{activeSkill.name}</h3>
                            <div className={styles.detailTags}>
                                <Badge color={catColor} variant="subtle">{activeSkill.category}</Badge>
                                <Badge color="var(--text-secondary)" variant="outline">{activeSkill.level}</Badge>
                            </div>
                        </div>
                    </header>

                    <nav 
                        ref={tabsContainerRef}
                        className={styles.detailTabs} 
                        aria-label="Detalhes da habilidade"
                    >
                        <button 
                            className={activeTab === "context" ? styles.active : ""} 
                            onClick={() => setActiveTab("context")}
                        >
                            <BriefcaseIcon size={16} weight="duotone" /> Contexto de Uso
                        </button>
                        <button 
                            className={activeTab === "code" ? styles.active : ""} 
                            onClick={() => setActiveTab("code")}
                        >
                            <CodeIcon size={16} weight="duotone" /> Exemplo / Abordagem
                        </button>
                        <button 
                            className={activeTab === "why" ? styles.active : ""} 
                            onClick={() => setActiveTab("why")}
                        >
                            <HeartIcon size={16} weight="duotone" /> Por que utilizo
                        </button>
                    </nav>

                    <div className={styles.detailBody}>
                        {activeTab === "context" && (
                            <div className={styles.contextPane}>
                                <p className={styles.detailUsecase}>{activeSkill.useCase}</p>

                                <div className={styles.metricsGridCards}>
                                    <div className={styles.metricCard}>
                                        <span className={styles.metricLabel}>Prática / Vivência</span>
                                        <strong className={styles.metricValue}>{yearsLabel(activeSkill.sinceYear)}</strong>
                                    </div>
                                    <div className={styles.metricCard}>
                                        <span className={styles.metricLabel}>Aplicação</span>
                                        <strong className={styles.metricValue}>Produção / Fluxo</strong>
                                    </div>
                                    <div className={styles.metricCard}>
                                        <span className={styles.metricLabel}>Nível de Domínio</span>
                                        <strong className={`${styles.metricValue} ${styles.metricBadge}`}>{activeSkill.level}</strong>
                                    </div>
                                </div>

                                <div className={styles.contextFooterActions}>
                                    {activeSkill.searchQuery && activeSkill.searchQuery !== "ai" && activeSkill.searchQuery !== "learning" && activeSkill.searchQuery !== "productivity" && (
                                        <a
                                            className={styles.exploreReposBtn}
                                            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories&q=${encodeURIComponent(activeSkill.searchQuery)}`}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <GithubLogoIcon size={18} weight="fill" />
                                            <span>Ver implementações com {activeSkill.name}</span>
                                            <ArrowUpRightIcon size={16} weight="bold" />
                                        </a>
                                    )}
                                </div>

                                {relatedSkills.length > 0 && (
                                    <div className={styles.detailRelated}>
                                        <span className={styles.relatedLabel}>Stack / Habilidade complementar:</span>
                                        <div className={styles.relatedChips}>
                                            {relatedSkills.map((related) => (
                                                <button
                                                    key={related.id}
                                                    className={styles.relatedChip}
                                                    onClick={() => setActiveSkill(related)}
                                                >
                                                    {related.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === "code" && (
                            <div className={styles.codePane}>
                                <div className={styles.codePaneHeader}>
                                    <span>Demonstração / Padrão de Uso</span>
                                    <Button size="sm" variant="secondary" onClick={handleCopy}>
                                        {copied ? <CheckIcon size={16} weight="bold" /> : <ClipboardIcon size={16} />} 
                                        {copied ? "Copiado!" : "Copiar"}
                                    </Button>
                                </div>
                                <pre>
                                    <code>{activeSkill.codeSnippet}</code>
                                </pre>
                            </div>
                        )}

                        {activeTab === "why" && (
                            <div className={styles.whyPane}>
                                <div className={styles.whyCardInner}>
                                    <span className={styles.whyBadge}>Perspectiva Técnica</span>
                                    <p>{activeSkill.whyILike}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </section>
    );
};