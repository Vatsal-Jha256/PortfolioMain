import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "vatsaljha17@gmail.com",
      link: "mailto:vatsaljha17@gmail.com"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91-7992465848",
      link: "tel:+917992465848"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Vellore, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vatsal-jha-6a669724b/",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/Vatsal-Jha256",
      color: "#333"
    },
    {
      icon: <SiGooglescholar />,
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=o9ErjT4AAAAJ&hl=en",
      color: "#4285f4"
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-content">
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3>Let's Connect!</h3>
              <p>
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about data science, AI, and technology. Feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
                  >
                    <div className="contact-icon">
                      {contact.icon}
                    </div>
                    <div className="contact-details-text">
                      <span className="contact-label">{contact.label}</span>
                      {contact.link ? (
                        <a href={contact.link} className="contact-value">
                          {contact.value}
                        </a>
                      ) : (
                        <span className="contact-value">{contact.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="contact-card card">
                <h3>Quick Message</h3>
                <p>Want to send a quick message? Use the links below or drop me an email directly!</p>
                
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="social-icon">{social.icon}</div>
                      <span className="social-name">{social.name}</span>
                    </motion.a>
                  ))}
                </div>

                <motion.div
                  className="cta-section"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <h4>Ready to collaborate?</h4>
                  <p>Let's build something amazing together!</p>
                  <a 
                    href="mailto:vatsaljha17@gmail.com?subject=Collaboration Opportunity&body=Hi Vatsal,%0D%0A%0D%0AI'd love to discuss..."
                    className="btn-primary cta-button"
                  >
                    <FaEnvelope /> Send Message
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 