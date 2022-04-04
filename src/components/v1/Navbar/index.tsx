import { useState } from 'react';

import { Link } from 'react-router-dom';

import s from './styles.module.scss';

import ImgGithub from '../../images/github.png';
import ImgInstagram from '../../images/instagram.png';
import ImgLinkdin from '../../images/linkdin.png';

export function Navbar1() {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className={s.navbar}onClick={showSidebar}>
            <li className={sidebar ? '' : `${s.row}`}></li>
            <nav className={sidebar ? `${s.navMenu} ${s.active}` : `${s.navMenu}`}>
                <ul className={s.navMenuItems}>
                    <Link to="/v1">
                        <li className={s.navText}>
                            <a>
                                Início
                            </a>
                        </li>
                    </Link>
                    <Link to="/v1/projects">
                        <li className={s.navText}>
                            <a>                                
                                Projetos
                            </a>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className={s.navText}>
                            <a>
                                Acessar versão 2.0
                            </a>
                        </li>
                    </Link>                      
                </ul>
                <div className={s.social}>
                    <a href="https://github.com/eduddz" target="_blank">
                        <img src={ImgGithub} alt="logo do github"/>
                    </a>
                    <a href="https://www.instagram.com/eduuesteves"  target="_blank">
                        <img src={ImgInstagram} alt="logo do instagram"/>
                    </a>
                    <a href="https://linkedin.com/in/eduardoesteves04"  target="_blank">
                        <img src={ImgLinkdin} className={s.linkdin} alt="logo do linkdin"/>
                    </a>
                </div>
            </nav>
        </div>
    )
}