import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBook, FaExternalLinkAlt, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import './Publications.css';

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const publications = [
    {
      title: "ML-based State of Charge Prediction for Electric Two-wheelers in Indian Road Conditions",
      journal: "Journal of Energy Storage",
      impactFactor: "8.9",
      year: "2024",
      status: "Published",
      description: "Developed machine learning model achieving 99.71% accuracy in predicting SoC consumption for electric vehicles. Research sponsored by Royal Academy of Engineering.",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S2352152X24024708",
      type: "journal"
    },
    {
      title: "Multilingual LLM Agents for Edge Device Execution",
      conference: "ICCCNT'25 IIT Indore",
      year: "2025",
      status: "Accepted",
      description: "Research on end-to-end multilingual LLM agents focusing on efficient performance in resource-constrained environments with asynchronous framework design.",
      type: "conference"
    },
    {
      title: "Bias Correction Algorithms for AQI Chemical Forecast Models",
      conference: "IICAQM'24 IIT Madras",
      year: "2024",
      status: "Presented",
      description: "Developed machine learning-based bias correction achieving 80% error reduction in air quality index chemical forecast models.",
      type: "conference"
    },
    {
      title: "Context-Aware Adaptive Multi-Factor Authentication for IoT Security",
      conference: "ICDSINC'25 NITR",
      year: "2025",
      status: "Under Review",
      description: "IoT security system using contextual bandit-based authentication, reducing false acceptance rates by 44.75%.",
      type: "conference"
    },
    {
      title: "End-to-End Trainable OCR System for Handwritten Text Recognition",
      collaboration: "NTNU Norway",
      year: "2024",
      status: "Under Review",
      description: "OCR system using CNN and transformer architectures achieving 6% Character Error Rate on IAM Handwritten Dataset.",
      type: "research"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return '#10b981';
      case 'Accepted': return '#3b82f6';
      case 'Presented': return '#8b5cf6';
      case 'Under Review': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'journal': return <FaBook />;
      case 'conference': return <FaUniversity />;
      default: return <FaBook />;
    }
  };

  return (
    <section id="publications" className="section publications">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Publications & Research</h2>
          
          <div className="publications-grid">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="publication-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="publication-header">
                  <div className="publication-type">
                    {getTypeIcon(pub.type)}
                    <span className="type-label">{pub.type}</span>
                  </div>
                  <div 
                    className="publication-status"
                    style={{ color: getStatusColor(pub.status) }}
                  >
                    {pub.status}
                  </div>
                </div>

                <h3 className="publication-title">{pub.title}</h3>
                
                <div className="publication-venue">
                  {pub.journal && (
                    <div className="venue-info">
                      <strong>{pub.journal}</strong>
                      {pub.impactFactor && (
                        <span className="impact-factor">IF: {pub.impactFactor}</span>
                      )}
                    </div>
                  )}
                  {pub.conference && (
                    <div className="venue-info">
                      <strong>{pub.conference}</strong>
                    </div>
                  )}
                  {pub.collaboration && (
                    <div className="venue-info">
                      <strong>Collaboration: {pub.collaboration}</strong>
                    </div>
                  )}
                  <div className="publication-year">
                    <FaCalendarAlt /> {pub.year}
                  </div>
                </div>

                <p className="publication-description">{pub.description}</p>

                {pub.url && (
                  <div className="publication-links">
                    <a 
                      href={pub.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="publication-link"
                    >
                      <FaExternalLinkAlt /> View Publication
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="research-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="stat-item">
              <div className="stat-number gradient-text">5+</div>
              <div className="stat-label">Research Papers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number gradient-text">8.9</div>
              <div className="stat-label">Highest Impact Factor</div>
            </div>
            <div className="stat-item">
              <div className="stat-number gradient-text">3</div>
              <div className="stat-label">International Conferences</div>
            </div>
            <div className="stat-item">
              <a 
                href="https://scholar.google.com/citations?user=o9ErjT4AAAAJ&hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="scholar-link"
              >
                <SiGooglescholar />
                <span>Google Scholar</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications; 