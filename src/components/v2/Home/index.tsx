import { useContext } from 'react';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';

import FotoPerfil from "../../images/Foto-de-Perfil.webp";

import data from '../data.json';

import { 
    AiFillHtml5, 
    SiTypescript, 
    SiStyledcomponents,  
    SiJavascript,
    SiGithub,
    SiFirebase,
    DiCss3,
    DiSass,
    GrReactjs,
    AiFillCode,
    GiMaterialsScience,
    BsCreditCard2Front,
    BsStack
} from '../Icons/index';

import { AuthContext } from '../../../Context/AuthContext';

import { Weather2 } from '../Weather';
import { Pokedex2 } from '../Pokedex';
import { Header2 } from '../Header';
import { Footer2 } from '../Footer';

export const Home2 = () => {  

    const { user } = useContext(AuthContext);  

    return (
        <>
        <Header2 />
        <main>
        <div className={s.home}>
            <div className={s.profile}>
            <div className={`${s.homeCard} ${s.img}`}>
                <img loading="lazy" src={FotoPerfil} width="auto" height="auto" alt={user?.name} />
            </div>
            <div className={`${s.homeCard} ${s.name}`}>
                <h2>{user?.name}</h2>
                <p><GiMaterialsScience color="white" size={30} />Ciência da Computação</p>
                <p><AiFillCode color="white" size={30} />Desenvolvedor web</p>
                <p><BsCreditCard2Front color="white" size={30} />Frontend</p>
                <p><BsStack color="white" size={30} />Fullstack</p>
            </div>
            <div className={`${s.homeCard} ${s.weather}`}>
                <Weather2 />
            </div>
            <div className={`${s.homeCard} ${s.homeProjects}`}>
                Já desenvolvi
                <span>+ de {user?.public_repos} Projetos</span>
                no github
            </div>
            <div className={`${s.homeCard} ${s.bio}`}>
                <p><span>Foco:</span> "{user?.bio}"</p>
            </div>
            <div className={`${s.homeCard} ${s.pokemon}`}>
                <p>Escolha seu pokemon:</p>
                <p>(1 a 898)</p>
                <Pokedex2 />
            </div>

            </div>
            <div className={s.profilDescription}>
                <div className={`${s.homeCard} ${s.description}`}>
                <h3>Olá, tudo bem?? Seja Bem-Vindo(a)!</h3>
                <p>Sou o Eduardo, mas pode me chamar de Edu. Esse é o meu portfólio e clicando no botão abaixo ou navegando pelo menu superior a direita, encontrará vários projetos que participei/criei.</p>
                <Link to="/projects">
                    <button className={s.button}>Meus Projetos</button>
                </Link>
            </div>
            <div className={`${s.homeCard} ${s.skills}`}>
                <h3>Skills:</h3>
                <ul>
                    <li style={{backgroundColor: "orange"}}><AiFillHtml5 size={50} color="white" /></li>
                    <li style={{backgroundColor: "#00BFFF"}}><DiCss3 size={50} color="white" /></li>
                    <li style={{backgroundColor: "pink"}}><DiSass size={50} color="white" /></li>
                    <li style={{backgroundColor: "#DC143C"}}><SiStyledcomponents size={50} color="white" /></li>
                    <li style={{backgroundColor: "gold"}}><SiJavascript size={50} color="white" /></li>
                    <li style={{backgroundColor: "navy"}}><GrReactjs size={50} color="white" /></li>
                    <li style={{backgroundColor: "chocolate"}}><SiFirebase size={50} color="white" /></li>
                    <li style={{backgroundColor: "black"}}><SiGithub size={50} color="white" /></li>
                    <li style={{backgroundColor: "#1E90FF"}}><SiTypescript size={50} color="white" /></li>
                    <li style={{backgroundColor: "#fff"}}>Axios</li>
                    <li style={{backgroundColor: "#fff"}}>Express</li>
                    <li style={{backgroundColor: "#fff"}}>Context API</li>
                    <li style={{backgroundColor: "#fff"}}>Mysql</li>
                    <li style={{backgroundColor: "#fff"}}>Mysqlite</li>
                    <li style={{backgroundColor: "#fff"}}>React Router Dom</li>
                    <li style={{backgroundColor: "#fff"}}>Vite</li>
                </ul>
            </div>

            <div className={`${s.homeCard} ${s.version}`}>
                <p>
                    Esse portfólio está na versão v{data.version}. Quais as novidades?
                </p>
                <ul>
                    <li>DarkMode</li>
                    <li>Personalize você mesmo</li>
                    <li>Carregamento 2.5x mais rápido</li>
                    <li>Componentes na medida certa para seu dispositivo</li>
                    <li>Mais organizado</li>
                    <li>API de temperatura em tempo real</li>
                    <li>API de pokedex em tempo real</li>
                    <li>API do github com minhas informações em tempo real</li>
                    <li>Context API com weather</li>
                </ul>
                <p>Mas fica ligado(a) que vem muuuuita novidade por aí :)</p>

            </div>
            </div>
        </div>
        </main>
        <Footer2 />
        </>
    )
}