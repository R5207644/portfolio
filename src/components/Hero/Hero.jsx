import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h1 className={styles.name}>Sarvesh Kumar</h1>
                <h2 className={styles.title}>Java Full Stack Developer</h2>
                <h3 className={styles.subtitle}>MERN Stack Developer | Spring Boot Developer</h3>
                <div className={styles.buttons}>
                    <a href="#contact" className={styles.btnPrimary}>Contact Me</a>
                    <a href="Sarvesh_Kumar_Resume.pdf" className={styles.btnSecondary} download>Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
