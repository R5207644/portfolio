import React from 'react';
import styles from './Skills.module.css';
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaDatabase, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiMongodb, SiMysql, SiFlask } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'Java Full Stack', icon: <FaJava /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'MERN Stack', icon: <FaReact /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'SQL', icon: <FaDatabase /> },
    ];

    return (
        <section id="skills" className={styles.skills}>
            <h2 className={styles.heading}>My Skills</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{skill.icon}</div>
                        <p className={styles.name}>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
