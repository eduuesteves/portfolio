import { ReactNode } from 'react';
import s from './styles.module.scss';

interface CardProps {
    src?: string;
    alt?: string;
    icon?: ReactNode;
    title?: string;
    description?: string;
    site?: string;
    github?: string;
}

export function Card2({ src, alt, icon, title, description, site, github }: CardProps) {
    return (
        <div className={s.card}>
                    <img src={src} alt={alt} loading="lazy" />
                    <div className={s.tecIcon}>
                        {icon}
                    </div>
                    <div className={s.projectDescription}>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                    <div className={s.projectButton}>
                        <a href={`https://${site}.vercel.app/`}>
                            <button>Visualizar</button>
                        </a>
                        <a href={`https://github.com/eduddz/${github}`} >
                            <button>Código</button>
                        </a>
                    </div>
                </div>
    )
}