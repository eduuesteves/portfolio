import React from "react";
import { Hero } from "./sections/Hero/Hero";
import { Skills } from "./sections/Skills/Skills";
import { Projects } from "./sections/Projects/Projects";
import styles from "./Home.module.scss";
import { Contact } from "./sections/Contact/Contact";
import { About } from "./sections/About/About";

export const Home: React.FC = () => {
    return (
        <main className={styles.homeContainer}>
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Contact />
        </main>
    );
};