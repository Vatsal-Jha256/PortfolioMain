import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Data Scientist',
    'ML Engineer',
    'AI Researcher',
    'Full Stack Developer'
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  });

  const handleType = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="particles"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Vatsal Jha</span>
            </h1>
            <h2 className="hero-subtitle">
              I'm a <span className="typed-text gradient-text">{text}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="hero-description">
              4th year undergraduate at VIT Vellore passionate about data science and machine learning. 
              I love building intelligent systems that unlock insights from data and solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-buttons"
          >
            <button className="btn-primary" onClick={scrollToContact}>
              Get In Touch
            </button>
            <a 
              href="https://drive.google.com/uc?export=download&id=1WTfaQC1qQVb9R239xTbGxehsOClhHw11" 
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-social"
          >
            <a href="https://github.com/Vatsal-Jha256" target="_blank" rel="noopener noreferrer" className="social-link-text">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/vatsal-jha-6a669724b/" target="_blank" rel="noopener noreferrer" className="social-link-text">
              LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=o9ErjT4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="social-link-text">
              Google Scholar
            </a>
            <a href="mailto:vatsaljha17@gmail.com" className="social-link-text">
              Email
            </a>
            <a href="https://leetcode.com/u/vatsaljha28/" target="_blank" rel="noopener noreferrer" className="social-link-text">
              LeetCode
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 