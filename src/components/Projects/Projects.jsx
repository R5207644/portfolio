import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            title: 'Student Management System',
            description: 'A comprehensive system to manage student records and academic data.',
            tags: ['Java', 'Spring Boot', 'MySQL'],
            link: 'https://github.com/R5207644/student-management-sysytem'
        },
        {
            title: 'Bank Management System',
            description: 'A secure application for handling banking transactions and user accounts.',
            tags: ['Java', 'JDBC', 'SQL'],
            link: 'https://github.com/R5207644/Bank-Management-System'
        },
        {
            title: 'TripPixel',
            description: 'A travel planning application with a modern user interface.',
            tags: ['MERN Stack', 'React', 'Node.js'],
            link: 'https://github.com/R5207644/TripPixel'
        },
        {
            title: 'Spotify Clone',
            description: 'A music streaming interface clone with responsive design.',
            tags: ['React', 'CSS', 'Frontend'],
            link: 'https://github.com/R5207644/spotify-clone'
        },
        {
            title: 'Video Comferencing Application',
            description: 'Real-time video conferencing application.',
            tags: ['Socket.io', 'Node.js', 'React'],
            link: 'https://github.com/R5207644/zoom'
        },
        {
            title: 'StudyWallet',
            description: 'Educational resource management tool.',
            tags: ['python', 'flask'],
            link: 'https://github.com/R5207644/StudyWallet'
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <h2 className={styles.heading}>My Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imagePlaceholder}></div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.tags}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>View Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
