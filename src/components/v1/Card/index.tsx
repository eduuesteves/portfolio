import { ReactNode } from 'react';

import s from './styles.module.scss';

import Github from '../../images/github.png';

interface ICard {
    src: string;
    name: string;
    children: ReactNode;
    acessarPagina: string;
    acessarGit: string;
}

export function Card1({
    src,
    name, 
    children,
    acessarPagina, 
    acessarGit
}: ICard) {
    return (
        <div className={s.card}>
            <img src={src} alt={name} loading="lazy" />
            <h3>{name}</h3>
            <div className={s.div}>
                {children}
            </div>
            <div className={s.acessar}>
                <a href={acessarPagina}>
                    <button>Ver</button>
                </a>
                <a className={s.a} href={acessarGit}>
                    <img src={Github} alt="logo github" />
                </a>
            </div>
        </div>
    )
}