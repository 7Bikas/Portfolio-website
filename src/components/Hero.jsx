import { motion } from 'framer-motion';
import './Hero.css';
import profileImg from '../assets/profile.png';
import cvFile from '../assets/Bikas Bhatta cv.pdf';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="greeting">Hi, my name is</span>
                    <h1 className="name">Bikas Bhatta.</h1>
                    <h2 className="subtitle">I build things for the web.</h2>
                    <p className="description">
                        I enjoy exploring new tools, building creative and functional solutions, and working on projects that address real-world needs.
                    </p>
                    <div className="cta-group">
                        <a href="#projects" className="btn btn-primary">View Projects</a>
                        <a href={cvFile} download="Bikas_Bhatta_CV.pdf" className="btn btn-outline">Download Resume</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="image-blob">
                        <img src={profileImg} alt="Profile" />
                    </div>
                </motion.div>
            </div >
        </section >
    );
};

export default Hero;
