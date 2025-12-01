import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    const skills = {
        "Programming Languages": ["JavaScript", "HTML", "CSS", "Python", "C", "JAVA", "PHP"],
        "Frameworks & Libraries": ["Django", "React.js"],
        "Databases & Caching": ["MySQL"],
        "DevOps, Tools & Deployment": ["Git", "GitHub", "VS Code"],
        "API & Backend Development": ["RESTful APIs", "JSON", "Authentication (JWT, OAuth)"],
        "Others": ["Figma", "Canva", "API Integration", "Problem Solving", "Responsive Design"]
    };

    return (
        <section id="about" className="section-padding about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="number"></span> About Me
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p>
                            I am Bikas Bhatta, a motivated tech enthusiast with a strong passion for web development. I enjoy exploring new tools, building creative and functional solutions, and working on projects that address real-world needs.
                        </p>
                        <p>
                            I am eager to gain hands-on experience through an internship and continue growing both technically and professionally.
                        </p>

                        <h3 className="education-title">Education</h3>
                        <div className="education-list">
                            <div className="education-item">
                                <h4>National College of Computer Studies</h4>
                                <p>Bachelor’s of Information Management | 2021 - Present</p>
                            </div>
                            <div className="education-item">
                                <h4>Precious National Academy Secondary School</h4>
                                <p>Computer Science / Business Studies (CGPA - 3.27/4) | 2019 - 2021</p>
                            </div>
                        </div>

                        <h3 className="skills-title">Skills</h3>
                        <div className="skills-grid">
                            {Object.entries(skills).map(([category, items]) => (
                                <div key={category} className="skill-card">
                                    <h4>{category}</h4>
                                    <div className="skill-tags">
                                        {items.map((skill, index) => (
                                            <span key={index} className="skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
