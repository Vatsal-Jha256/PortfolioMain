import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaGraduationCap, FaCode, FaRocket } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: <FaTrophy />,
      title: "National Topper",
      description: "Among 11,876 participants in Responsible & Safe AI Systems - IITM & IIITH (2024)"
    },
    {
      icon: <FaGraduationCap />,
      title: "9.26 CGPA",
      description: "Bachelor's in Computer Science & Engineering with IoT Specialization at VIT Vellore"
    },
    {
      icon: <FaCode />,
      title: "Research Published",
      description: "Published in Journal of Energy Storage (Impact Factor 8.9) and multiple conferences"
    },
    {
      icon: <FaRocket />,
      title: "Samsung R&D",
      description: "Research Intern working on multi-agentic systems and automated root cause analysis"
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                I'm a passionate <span className="gradient-text">Data Scientist and AI Researcher</span> currently pursuing my Bachelor's degree at VIT Vellore. My journey in technology is driven by curiosity and the desire to solve complex problems using data and artificial intelligence.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                With experience in <span className="gradient-text">machine learning, deep learning, and full-stack development</span>, I've worked on projects ranging from IoT security systems to multilingual AI agents. My research has been published in top-tier journals and presented at international conferences.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Beyond coding, I enjoy <span className="gradient-text">strumming my guitar, reading mythology novels, stargazing, and collaborating with fascinating minds</span>. I believe in the power of interdisciplinary thinking and continuous learning.
              </motion.p>
            </div>
          </div>
          
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="achievement-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="achievement-icon">
                  {achievement.icon}
                </div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 