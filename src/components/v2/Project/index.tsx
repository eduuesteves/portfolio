import s from './styles.module.scss';

import { projects } from '../../../project';

import { Card2 } from '../Card';
import { Footer2 } from '../Footer';
import { Header2 } from '../Header';

export function Project2() {

    return (
        <>
        <Header2 />
        <main>
            <div className={s.project}>
                <div className={s.projectAlign}>
                    <div className={s.projectName}>
                        <h3>Projetos</h3>
                    </div>
                </div>

                <div className={s.projectCard}>
                    {
                        projects.map((p) => (
                            <Card2 
                                src={p.images[0]} 
                                alt={p.name}
                                title={p.name}
                                description={p.description}
                                icon={p.icons.map((i, value) => (
                                    <li 
                                        style={{background: `${i.color}`}} 
                                        key={value}
                                    >{i.icon}</li>
                                ))}
                                github={p.github}
                                site={p.website}
                            />
                        ))
                    }
                </div> 
            </div>
        </main>
        <Footer2 />
        </>
    )
}