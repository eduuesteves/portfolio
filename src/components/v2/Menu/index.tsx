import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

import s from './styles.module.scss';

export function Menu2({ id="menu", onClose = () => {} }) {
    const handleClose = (e: SyntheticEvent) => {
        if (e.currentTarget.id === id) onClose();
    }

    return(
        <div id={id} onClick={handleClose} className={s.menu}>
            <nav className={s.menuBox}>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/v2/projects">
                    <li>Projects</li>
                </Link>
                <Link to="/v1">
                    <li>Versão 1.0</li>
                </Link>
            </nav>
            <button className={s.menuClose} onClick={onClose} >Fechar Menu</button> 
        </div>
    )
}