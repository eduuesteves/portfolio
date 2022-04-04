import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu2 } from '../Menu';
import s from './styles.module.scss';

import data from '../data.json'
import { CgMenuGridO, GrClose } from '../Icons';

export function Header2() {
    const [menu, setMenu] = useState(false);

    return(
        <header>
            <div className={s.header}>
                <Link to="/">
                    <h1>{data.name}</h1>
                </Link>
                <div 
                    className={menu ? `${s.Menu} ${s.on}` : `${s.Menu}`} 
                    onClick={() => { setMenu(true) }}
                >
                    {
                        menu ?
                        null
                        :
                        <CgMenuGridO size="100%" />
                    }
                </div>
                {
                    menu ? 
                    <Menu2 onClose={() => setMenu(false) } /> 
                    : null
                }
            </div>
        </header>
    )
}