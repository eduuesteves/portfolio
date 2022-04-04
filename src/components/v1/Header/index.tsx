import s from './styles.module.scss';

import { Link } from 'react-router-dom';

import { Navbar1 } from '../Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

export function Header1() {

    const { user } = useContext(AuthContext);
    
    return (
        <header className={s.header}>
            <div>
                <Link to="/v1">
                    <img className={s.perfil} src={user?.avatar_url} alt={user?.name} />
                </Link>
                <div className={s.nav}>
                    <Navbar1 />
                </div>
            </div>
        </header>
    )
}