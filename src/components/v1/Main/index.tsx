import s from './styles.module.scss';

import { Link } from 'react-router-dom';
import { Header1 } from '../Header';
import { Footer1 } from '../Footer';

export function Main1() {
    return (
        <>
        <Header1 />
        <div className={s.main}>
            <div className={s.box}>
                <h2>Olá, tudo bem?? Seja Bem-Vindo(a)!</h2>
                <p>Sou o Eduardo, mas pode me chamar de Edu. Esse é o meu portfólio e clicando no botão abaixo ou navegando pelo menu superior a direita, encontrará vários projetos que participei/criei.</p>
                <p>Ahhh, também tem um formulário onde você pode me mandar mensagem. Vou adorar respondê-lo(a).</p>
                <Link to="/v1/projects">
                    <button className={s.button}>Meus Projetos</button>
                </Link>
            </div>
        </div>
        <Footer1 />
        </>

    )
}