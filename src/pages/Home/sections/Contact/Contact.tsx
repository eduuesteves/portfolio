import React, { useState } from "react";
import { 
    LinkedinLogoIcon, 
    GithubLogoIcon, 
    PaperPlaneRightIcon, 
    CheckCircleIcon, 
    ArrowUpRightIcon,
    WarningCircleIcon
} from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import styles from "./Contact.module.scss";
import { SOCIAL_LINKS } from "../../../../constants";
import { Card } from "../../../../components/ui/Card/Card";
import { Button } from "../../../../components/ui/Button/Button";
import { SectionHeader } from "../../../../components/ui/SectionHeader/SectionHeader";

// 1. Definição do Schema de Validação (Zod)
const contactSchema = z.object({
    name: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
    email: z.string().email("Insira um endereço de e-mail válido."),
    message: z.string().min(10, "A mensagem precisa ser um pouco mais detalhada (mínimo de 10 caracteres)."),
    botcheck: z.boolean().optional() // Campo Honeypot para evitar spam
});

// Inferência automática de tipos via Zod
type ContactFormData = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
    const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

    // 2. Inicialização do React Hook Form
    const { 
        register, 
        handleSubmit, 
        reset, 
        formState: { errors, isSubmitting } 
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onBlur" // Valida o campo quando o usuário tira o foco
    });

    // 3. Função de Submissão Segura
    const onSubmit = async (data: ContactFormData) => {
        // Bloqueia bots que marcam o honeypot
        if (data.botcheck) {
            setFeedback({ type: "success", text: "Mensagem enviada com sucesso!" }); // Falso positivo para enganar o bot
            reset();
            return;
        }

        setFeedback(null);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    subject: `Nova mensagem de ${data.name} - Portfólio`
                })
            });

            const result = await response.json();
            
            if (result.success) {
                setFeedback({ type: "success", text: "Proposta despachada com sucesso!" });
                reset(); // Limpa os campos magicamente sem re-renderizar a tela
            } else {
                setFeedback({ type: "error", text: result.message || "Erro de servidor. Tente novamente." });
            }
        } catch {
            setFeedback({ type: "error", text: "Falha de rede. Verifique sua conexão." });
        } finally {
            setTimeout(() => setFeedback(null), 6000);
        }
    };

    return (
        <section className="section-normal" id="contact">
            <SectionHeader 
                title="Vamos Construir o Futuro?"
                subtitle="Conecte-se para parcerias, oportunidades de engenharia de software ou projetos escaláveis."
            />

            <div className={styles.contactLayoutV2}>
                <div className={styles.bentoInfoColumn}>
                    <div className={styles.bentoCard}>
                        <div className={styles.bentoHeader}>
                            <div className={styles.statusPill}>
                                <span className={styles.liveDot}></span>
                                <span>Disponível</span>
                            </div>
                            <span className={styles.localTimeTag}>UTC-3 (SP)</span>
                        </div>
                        <div className={styles.bentoBody}>
                            <h4>Engenharia & Arquitetura</h4>
                            <p>Especialista em ecossistemas modernos, React, TypeScript e sistemas web de alta performance.</p>
                        </div>
                    </div>

                    <div className={styles.quickSocialGrid}>
                        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className={styles.socialActionCard}>
                            <GithubLogoIcon size={22} weight="duotone" />
                            <span>GitHub</span>
                            <ArrowUpRightIcon size={13} />
                        </a>
                        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className={styles.socialActionCard}>
                            <LinkedinLogoIcon size={22} weight="duotone" />
                            <span>LinkedIn</span>
                            <ArrowUpRightIcon size={13} />
                        </a>
                    </div>
                </div>

                <Card variant="glass" className={styles.formCardV2}>
                    <div className={styles.formHeaderV2}>
                        <h3>Inicie uma Conversa</h3>
                        <p>Envie uma mensagem direta. Resposta ágil para propostas e demandas técnicas.</p>
                    </div>

                    <form className={styles.contactFormV2} onSubmit={handleSubmit(onSubmit)}>
                        
                        {/* Honeypot Field (Invisível para humanos, armadilha para bots) */}
                        <input type="checkbox" {...register("botcheck")} style={{ display: 'none' }} />

                        <div className={styles.inputWrapper}>
                            <label htmlFor="name">Nome / Empresa</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Seu nome" 
                                className={errors.name ? styles.inputError : ""}
                                {...register("name")}
                            />
                            {errors.name && <span className={styles.errorText}>{errors.name.message}</span>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <label htmlFor="email">E-mail Corporativo</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="seu@email.com" 
                                className={errors.email ? styles.inputError : ""}
                                {...register("email")}
                            />
                            {errors.email && <span className={styles.errorText}>{errors.email.message}</span>}
                        </div>

                        <div className={styles.inputWrapper}>
                            <label htmlFor="message">Detalhes do Projeto</label>
                            <textarea 
                                id="message" 
                                placeholder="Conte sobre os objetivos, prazos ou tecnologias..." 
                                className={errors.message ? styles.inputError : ""}
                                {...register("message")}
                            />
                            {errors.message && <span className={styles.errorText}>{errors.message.message}</span>}
                        </div>

                        {feedback && (
                            <div className={`${styles.feedbackAlert} ${feedback.type === "success" ? styles.successAlert : styles.errorAlert}`}>
                                {feedback.type === "success" ? <CheckCircleIcon size={18} weight="fill" /> : <WarningCircleIcon size={18} weight="fill" />}
                                <span>{feedback.text}</span>
                            </div>
                        )}

                        <Button 
                            type="submit" 
                            variant="primary" 
                            size="md" 
                            isLoading={isSubmitting}
                            style={{ width: "100%", justifyContent: "center", marginTop: "4px" }}
                        >
                            <PaperPlaneRightIcon size={16} weight="duotone" />
                            <span>Enviar Proposta</span>
                        </Button>
                    </form>
                </Card>
            </div>
        </section>
    );
};