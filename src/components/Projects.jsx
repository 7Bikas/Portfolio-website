import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Table Booking and Food Ordering System',
            description: 'A fully functional web-based application that digitizes restaurant operations through streamlined table booking and online food ordering features. Implemented secure user authentication, dynamic menu management, and efficient order processing.',
            tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            github: 'https://github.com/7Bikas/Table-Booking-And-Food-Ordering-System',
            external: '#',
        },
        {
            title: 'QR Code Generator',
            description: 'A responsive QR Code Generator application using React, emphasizing a clean and intuitive user interface. Implemented React Hooks and Context API for efficient state management.',
            tech: ['React', 'Context API', 'CSS'],
            github: '#',
            external: '#',
        },
        {
            title: 'Quiz Application',
            description: 'An interactive Quiz Application using Java, focusing on smooth user interaction and accurate scoring. Implemented core features such as user login/signup, quiz selection, timed question handling, and real-time score calculation.',
            tech: ['Java', 'Swing', 'MySQL'],
            github: 'https://github.com/7Bikas/Quiz-Application-Using-Java',
            external: '#',
        },
    ];

    return (
        <section id="projects" className="section-padding projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number"></span> Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="project-top">
                                <div className="folder-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="project-links">
                                    <a href={project.github} aria-label="GitHub Link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    {/* <a href={project.external} aria-label="External Link" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a> */}
                                </div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <div className="project-description">
                                <p>{project.description}</p>
                            </div>
                            <ul className="project-tech-list">
                                {project.tech.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
