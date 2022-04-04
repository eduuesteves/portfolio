import s from './styles.module.scss';

import {
  portfolio,
  columnCard,
  articlePreview,
  blocoNotas,
  borderColor,
  calculadora,
  contador,
  devflix,
  faqCard,
  instagramPage,
  profileCard,
  randomColor,
  slideGallery,
  interative,
  loopstudio,
  snakeGame,
  socialProof,
  base,
  four,
  intro,
  order,
  ping,
  single,
  stats,
  sunnyside,
  tip,
  huddle
} from '../../images/export';

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
          {/* <Card1 
            name="Sunnyside Agency Landing Page" 
            src={sunnyside} 
            acessarPagina="https://sunnyside-agency-landing-pagee.vercel.app/"
            acessarGit="https://github.com/eduddz/sunnyside-agency-landing-page"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>mobile first</li>
            </div>
          </Card1>

          <Card1 
            name="Tip Calculator App" 
            src={tip} 
            acessarPagina="https://tip-calculator-appp.vercel.app/"
            acessarGit="https://github.com/eduddz/tip-calculator-app"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>mobile first</li>
            </div>
          </Card1>

          <Card1 
            name="Huddle Landing Page With Single Introductory Section" 
            src={huddle} 
            acessarPagina="https://huddle-landing-page-with-single-introductory-sectionn.vercel.app/"
            acessarGit="https://github.com/eduddz/huddle-landing-page-with-single-introductory-section"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>mobile first</li>
            </div>
          </Card1>

          <Card1 
            name="Ping Coming Soon Page" 
            src={ping} 
            acessarPagina="https://ping-coming-soon-pagee.vercel.app/"
            acessarGit="https://github.com/eduddz/ping-coming-soon-page"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>mobile first</li>
            </div>
          </Card1>

          <Card1 
            name="Single Price Grid Component" 
            src={single} 
            acessarPagina="https://single-price-grid-componentt.vercel.app/"
            acessarGit="https://github.com/eduddz/single-price-grid-component"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>mobile first</li>
            </div>
          </Card1>

          <Card1 
            name="Intro Component With Sign Up Form" 
            src={intro}
            acessarPagina="https://intro-component-with-sign-up-formm.vercel.app/"
            acessarGit="https://github.com/eduddz/intro-component-with-sign-up-form"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Base Apparel Coming Soon Page" 
            src={base}
            acessarPagina="https://base-apparel-coming-soon-pagee.vercel.app/"
            acessarGit="https://github.com/eduddz/base-apparel-coming-soon-page"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Four Card1 Feature Section" 
            src={four}
            acessarPagina="https://four-card1-feature-sectionn.vercel.app/"
            acessarGit="https://github.com/eduddz/four-card1-feature-section"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Stats Preview Card1 Component" 
            src={stats}
            acessarPagina="https://stats-preview-card1-componentt.vercel.app/"
            acessarGit="https://github.com/eduddz/stats-preview-card1-component"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Order Summary Card1" 
            src={order}
            acessarPagina="https://order-summary-card1d.vercel.app/"
            acessarGit="https://github.com/eduddz/order-summary-card1"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>


          <Card1 
            name="Portfólio (Beta)" 
            src={portfolio}
            acessarPagina="https://portfolio-nextjs-amber.vercel.app/"
            acessarGit="https://github.com/eduddz/portfolio-nextjs"
          >
            <div>
              <li>html</li>
              <li>styled-components</li>
              <li>javascript</li>
              <li>reactjs</li>
              <li>nextjs</li>
            </div>
          </Card1>

          <Card1 
            name="Devflix" 
            src={devflix}
            acessarPagina="https://devflix-clone-netflix.vercel.app/"
            acessarGit="https://github.com/eduddz/devflix-clone-netflix"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>jquery</li>
              <li>owl-carousel</li>
            </div>
          </Card1>

          <Card1 
            name="Snake Game" 
            src={snakeGame}
            acessarPagina="https://snake-jscript.vercel.app/"
            acessarGit="https://github.com/eduddz/snake-js"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>canvas</li>
            </div>
          </Card1>

          <Card1 
            name="Calculadora" 
            src={calculadora}
            acessarPagina="https://calculator-jscript.vercel.app/"
            acessarGit="https://github.com/eduddz/calculator-js"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </div>
          </Card1>

          <Card1 
            name="Article Preview" 
            src={articlePreview}
            acessarPagina="https://article-preview-component-masterr.vercel.app/"
            acessarGit="https://github.com/eduddz/article-preview-component-master"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </div>
          </Card1>

          <Card1 
            name="Social Proof" 
            src={socialProof}
            acessarPagina="https://social-proof-section-masterr.vercel.app/"
            acessarGit="https://github.com/eduddz/social-proof-section-master"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Faq Card1" 
            src={faqCard}
            acessarPagina="https://faq-accordion-card1-mainn.vercel.app/"
            acessarGit="https://github.com/eduddz/faq-accordion-card1-main"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </div>
          </Card1>

          <Card1 
            name="Profile Card1" 
            src={profileCard} 
            acessarPagina="https://profile-card1-component-mainn.vercel.app/"
            acessarGit="https://github.com/eduddz/profile-card1-component-main"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="3 Column Card1" 
            src={columnCard}
            acessarPagina="https://3-column-preview-card1-componentt.vercel.app/"
            acessarGit="https://github.com/eduddz/3-column-preview-card1-component"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Instagram Page" 
            src={instagramPage}
            acessarPagina="https://landing-page-instagramm.vercel.app/"
            acessarGit="https://github.com/eduddz/landing-page-instagram"
          >
            <div>
              <li>html</li>
              <li>css</li>
            </div>
          </Card1>

          <Card1 
            name="Border and Color" 
            src={borderColor}
            acessarPagina="https://border-and-color-js.vercel.app/"
            acessarGit="https://github.com/eduddz/border-and-color-js"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </div>
          </Card1>

          <Card1 
            name="Slide Gallery" 
            src={slideGallery}
            acessarPagina="https://slide-gallery-js.vercel.app/"
            acessarGit="https://github.com/eduddz/slide-gallery-js"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </div>
          </Card1>

          <Card1 
            name="Random Color" 
            src={randomColor}
            acessarPagina="https://random-background-js.vercel.app"
            acessarGit="https://github.com/eduddz/random-background-js"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
            </div>
          </Card1>

          <Card1 
            name="Bloco de Notas" 
            src={blocoNotas}
            acessarPagina="https://blocodenotas-blue.vercel.app/"
            acessarGit="https://github.com/eduddz/bloco-de-notas-js"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>js-dom</li>
            </div>
          </Card1>

          <Card1 
            name="Contador" 
            src={contador} 
            acessarPagina="https://contador-javascript.vercel.app/"
            acessarGit="https://github.com/eduddz/contador-js-"
          >
            <div>
              <li>html</li>
              <li>css</li>
              <li>javascript</li>
              <li>js-dom</li>
            </div>
          </Card1> */}
      </div>
      <Footer1 />
    </>
  )
}