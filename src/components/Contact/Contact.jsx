import React from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className={styles.contact}>
            <h2 className={styles.heading}>Contact Me</h2>
            <div className={styles.container}>
                <div className={styles.info}>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                    <div className={styles.socials}>
                        <a href="https://wa.me/8303959362" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}><FaWhatsapp /></a>
                        <a href="https://github.com/r5207644" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/r5207644/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <a href="https://instagram.com/style.toward" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="mailto:sarveshjnv5207644@gmail.com"><FaEnvelope /></a>
                    </div>
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
