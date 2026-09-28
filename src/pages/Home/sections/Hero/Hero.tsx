import React, { useState } from "react";
import { 
    ArrowRightIcon, 
    CheckIcon, 
    CodeIcon, 
    CopyIcon, 
    CpuIcon, 
    GitBranchIcon, 
    GithubLogoIcon, 
    LinkedinLogoIcon, 
    SparkleIcon, 
    TerminalWindowIcon, 
    TerminalIcon, 
    ShieldCheckIcon, 
    LockIcon, 
    ClockIcon, 
    WifiHighIcon, 
    FileTextIcon,
    EyeIcon
} from "@phosphor-icons/react";
import { useGitHubUser } from "../../../../hooks/useGitHubUser";
import { usePageViews } from "../../../../hooks/usePageViews";
import { Button } from "../../../../components/ui/Button/Button";
import { Badge } from "../../../../components/ui/Badge/Badge";
import { Card } from "../../../../components/ui/Card/Card";
import { HeroBackground } from "./HeroBackground";
import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const { stats: githubStats } = useGitHubUser();
    const { views: pageViews, loading: viewsLoading } = usePageViews();
    const [activeTab, setActiveTab] = useState<"stats" | "stack" | "ai">("stats");
    
    const [cliOutput, setCliOutput] = useState<string>("$ system_info --ready\n> Select a diagnostic command below.");
    const [isExecuting, setIsExecuting] = useState(false);

    const handleCopyIconEmail = () => {
        navigator.clipboard.writeText("esteves-dorta@hotmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    const handleRunCliCommand = (command: string) => {
        if (isExecuting) return;
        setIsExecuting(true);
        setCliOutput(`$ ${command}\n> Fetching live metrics...`);

        setTimeout(() => {
            const now = new Date();
            const dateStr = now.toLocaleDateString('pt-BR');
            const timeStr = now.toLocaleTimeString('pt-BR');

            if (command === "time --now") {
                setCliOutput(`$ ${command}\n📅 Data: ${dateStr}\n⏰ Horário local: ${timeStr}\n🌍 Timezone: America/Sao_Paulo (UTC-3)`);
            } else if (command === "deps --list") {
                setCliOutput(`$ ${command}\n📦 package.json dependencies:\n- react: ^18.2.0\n- typescript: ^5.0.0\n- phosphor-react: ^1.4.1\n- sass: ^1.60.0`);
            } else if (command === "net --speed") {
                setCliOutput(`$ ${command}\n⚡ Latência: 14ms (Fiber Optic)\n🌐 Download: 300 Mbps\n📡 Upload: 150 Mbps\nStatus: Conexão Estável [OK]`);
            } else if (command === "visits --live") {
                setCliOutput(`$ ${command}\n👁️ Total de acessos: ${viewsLoading ? 'Carregando...' : pageViews}\n🟢 Status: Contador em tempo real ativo\n🔒 Servidor: CountAPI (Secure Edge)`);
            }
            setIsExecuting(false);
        }, 400);
    };

    return (
        <section className={styles.heroSection} id="hero">
            <HeroBackground />
            
            <div className={styles.heroContainer}>
                <div className={styles.left}>
                    <div className={styles.content}>
                        <div className={styles.badgeWrapper}>
                            <Badge color="var(--accent)" variant="subtle">
                                <span className={styles.pulseDot}></span>
                                <TerminalIcon size={14} /> Software Developer • SP, Brasil
                            </Badge>
                        </div>
                        
                        <h1 className={styles.title}>
                            Olá, eu sou<br />
                            <strong>Eduardo Esteves</strong>
                        </h1>
                        
                        <p className={styles.subText}>
                            Trabalhei por anos com suporte de TI, redes, Windows e servers. Toda essa bagagem 
                            técnica me deu uma base sólida em resolução de problemas, e hoje direciono esse conhecimento 
                            para atuar como <strong>Software Developer</strong>, criando soluções web robustas, SaaS escaláveis e arquiteturas limpas.
                        </p>
                        
                        <div className={styles.actionsWrapper}>
                            <Button 
                                variant="primary" 
                                size="md" 
                                onClick={() => window.location.href = "#projects"}
                                className={styles.primaryCtaBtn}
                            >
                                Meus projetos <ArrowRightIcon size={18} weight="bold" />
                            </Button>
                            
                            <div className={styles.secondaryActionsGroup}>
                                <Button 
                                    as="a"
                                    href="/curriculo.pdf" 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    variant="secondary" 
                                    size="md"
                                    className={styles.secondaryCtaBtn}
                                >
                                    <FileTextIcon size={18} weight="duotone" /> Currículo
                                </Button>
                                
                                <Button 
                                    variant="secondary" 
                                    size="md" 
                                    onClick={handleCopyIconEmail} 
                                    title="Copiar E-mail"
                                    className={styles.secondaryCtaBtn}
                                >
                                    {copied ? <CheckIcon size={18} color="#22c55e" weight="bold" /> : <CopyIcon size={18} weight="duotone" />}
                                    <span>{copied ? "Copiado!" : "Contato"}</span>
                                </Button>
                            </div>

                            <div className={styles.socialLinksGroup}>
                                <a target="_blank" rel="noreferrer" href="https://github.com/eduuesteves" className={styles.btnIcon} aria-label="GitHub">
                                    <GithubLogoIcon size={22} weight="duotone" />
                                </a>
                                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/eduardoesteves04/" className={styles.btnIcon} aria-label="LinkedIn">
                                    <LinkedinLogoIcon size={22} weight="duotone" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className={styles.right}>
                    <Card 
                        variant="glass" 
                        className={`${styles.statsCard} ${styles.interactiveCard}`} 
                    >
                        <div className={styles.cardTopBar}>
                            <div className={styles.cardHeaderLive}>
                                <span className={styles.liveDotIndicator}></span>
                                <span>Engineering Core</span>
                            </div>
                            
                            <div className={styles.cardTabs}>
                                <button 
                                    className={activeTab === "stats" ? `${styles.tabBtn} ${styles.active}` : styles.tabBtn}
                                    onClick={() => setActiveTab("stats")}
                                >
                                    Stats
                                </button>
                                <button 
                                    className={activeTab === "stack" ? `${styles.tabBtn} ${styles.active}` : styles.tabBtn}
                                    onClick={() => setActiveTab("stack")}
                                >
                                    Stack
                                </button>
                                <button 
                                    className={activeTab === "ai" ? `${styles.tabBtn} ${styles.active}` : styles.tabBtn}
                                    onClick={() => setActiveTab("ai")}
                                >
                                    IA & Dev
                                </button>
                            </div>
                        </div>

                        {activeTab === "stats" && (
                            <div className={`${styles.tabContent} ${styles.animateFade}`}>
                                <div className={styles.metricsGrid}>
                                    <div className={styles.metricBox}>
                                        <div className={styles.metricIconWrapper}>
                                            <GitBranchIcon size={20} weight="duotone" />
                                        </div>
                                        <div>
                                            <strong>{githubStats.publicRepos}</strong>
                                            <span>Repositórios</span>
                                        </div>
                                    </div>
                                    
                                    <div className={styles.metricBox}>
                                        <div className={styles.metricIconWrapper}>
                                            <EyeIcon size={20} weight="duotone" />
                                        </div>
                                        <div>
                                            <strong>{viewsLoading ? "..." : pageViews}</strong>
                                            <span>Visualizações</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoDetailsBox}>
                                    <div className={styles.infoRow}>
                                        <ShieldCheckIcon size={16} weight="duotone" color="var(--accent)" />
                                        <span>Formação: Ciência da Computação (2020)</span>
                                    </div>
                                    <div className={styles.infoRow}>
                                        <LockIcon size={16} weight="duotone" color="var(--accent)" />
                                        <span>Experiência: Windows, Servers, Redes & TI</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "stack" && (
                            <div className={`${styles.tabContent} ${styles.animateFade}`}>
                                <div className={styles.stackListPreview}>
                                    <div className={styles.stackItemRow}>
                                        <CodeIcon size={18} weight="duotone" color="var(--accent)" />
                                        <div className={styles.stackInfoText}>
                                            <strong>Frontend Ecosystem</strong>
                                            <span>React.js, Next.js, TypeScript & SCSS</span>
                                        </div>
                                    </div>
                                    <div className={styles.stackItemRow}>
                                        <TerminalWindowIcon size={18} weight="duotone" color="#22c55e" />
                                        <div className={styles.stackInfoText}>
                                            <strong>Backend & Infra</strong>
                                            <span>Node.js, APIs REST, Linux & Redes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "ai" && (
                            <div className={`${styles.tabContent} ${styles.animateFade}`}>
                                <div className={styles.stackListPreview}>
                                    <div className={styles.stackItemRow}>
                                        <SparkleIcon size={18} weight="duotone" color="#a855f7" />
                                        <div className={styles.stackInfoText}>
                                            <strong>Aceleração de MVPs</strong>
                                            <span>Prototipagem rápida e microsserviços</span>
                                        </div>
                                    </div>
                                    <div className={styles.stackItemRow}>
                                        <CpuIcon size={18} weight="duotone" color="var(--accent)" />
                                        <div className={styles.stackInfoText}>
                                            <strong>Prompt Engineering</strong>
                                            <span>Pair programming estruturado com LLMs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={styles.secureCliContainer}>
                            <div className={styles.cliHeaderBar}>
                                <div className={styles.cliTitleGroup}>
                                    <TerminalIcon size={14} weight="duotone" />
                                    <span>sys_diagnostic.sh</span>
                                </div>
                                <div className={styles.cliQuickActions}>
                                    <button onClick={() => handleRunCliCommand("time --now")} title="Ver Data e Hora" disabled={isExecuting}>
                                        <ClockIcon size={12} weight="duotone" /> time
                                    </button>
                                    <button onClick={() => handleRunCliCommand("visits --live")} title="Ver Visitas" disabled={isExecuting}>
                                        <EyeIcon size={12} weight="duotone" /> views
                                    </button>
                                    <button onClick={() => handleRunCliCommand("net --speed")} title="Ver Rede" disabled={isExecuting}>
                                        <WifiHighIcon size={12} weight="duotone" /> net
                                    </button>
                                </div>
                            </div>
                            <div className={styles.cliScreenFlexible}>
                                <pre>{cliOutput}</pre>
                            </div>
                        </div>
                        
                        <a 
                            href="https://github.com/eduuesteves" 
                            target="_blank" 
                            rel="noreferrer" 
                            className={styles.cardFooterLink}
                        >
                            <span>Acessar perfil completo no GitHub</span>
                            <ArrowRightIcon size={16} weight="bold" />
                        </a>
                    </Card>
                </div>
            </div>
        </section>
    );
};