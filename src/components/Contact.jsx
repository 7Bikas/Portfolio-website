import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section-padding contact">
            <div className="container">
                <div className="contact-wrapper">
                    <motion.div
                        className="contact-content-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="contact-title">Let's Talk</h2>
                        <p className="contact-description">
                            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details-list">
                            <div className="contact-detail-item">
                                <div className="icon-box"><FaEnvelope /></div>
                                <div className="detail-text">
                                    <span className="label">Email</span>
                                    <a href="mailto:bhattabikas9@gmail.com">bhattabikas9@gmail.com</a>
                                </div>
                            </div>
                            <div className="contact-detail-item">
                                <div className="icon-box"><FaMapMarkerAlt /></div>
                                <div className="detail-text">
                                    <span className="label">Location</span>
                                    <span>Kavresthali, Kathmandu</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your Message"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
