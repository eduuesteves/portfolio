import s from './styles.module.scss';

import { Card1 } from '../Card';
import { Header1 } from '../Header';
import { Footer1 } from '../Footer';

import { projects } from "../../../project";

export function Projects1() {
    return (
      <>
        <Header1 />
        <h2 className={s.h2}>Projetos</h2>
        <div className={s.project}>

          {
            projects.map((p) => (
              <Card1 
                name={p.name}
                src={p.images[0]}
                acessarGit={p.github}
                acessarPagina={p.website}
              >
                {p.icons.map((i, value) => (
                  <li 
                      style={{background: `${i.color}`}} 
                      key={value}
                  >{i.icon}</li>
                ))}
                </Card1>
            ))
          }
      </div>
      <Footer1 />
    </>
  )
}