import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Research Intern",
      company: "Samsung MAGPIE R&D",
      location: "Samsung R&D Bangalore",
      period: "May 2025 - Present",
      description: [
        "Researched and designed asynchronous architecture of multi-agentic system for automated root cause analysis in distributed systems using Google ADK",
        "Designed 5 MCP Servers for Prometheus, Kubernetes, Jaeger, OpenSearch, and MilvusDB to aid the model with infrastructure analysis and diagnosis capabilities"
      ]
    },
    {
      title: "Research Intern",
      company: "Samsung PRISM R&D",
      location: "Hybrid",
      period: "Oct 2024 - May 2025",
      description: [
        "Directed a team of three in designing end-to-end multilingual LLM agents for edge device execution",
        "Designed an asynchronous framework with an SLM functioning as an orchestrator, coordinating task management",
        "Generated synthetic datasets for training agents, including device classification and prompt type identification",
        "Recognized as one of the chosen teams to be awarded with an excellent worklet for outstanding performance"
      ]
    },
    {
      title: "Data Science Intern",
      company: "Council of Energy, Environment and Water",
      location: "CEEW, Delhi",
      period: "Jun 2024 - Aug 2024",
      description: [
        "Developed BERTopic pipeline with hyperparameter optimization to extract skills from 92,000 qualification documents",
        "Developed machine learning-based bias correction algorithms for AQI chemical forecast models, achieving 80% error reduction",
        "Developed comprehensive solar energy optimization platform with financial modeling capabilities"
      ]
    },
    {
      title: "AI Research Intern",
      company: "NTNU Norway and BITS Pilani",
      location: "Remote",
      period: "Mar 2024 - Present",
      description: [
        "Developed end-to-end trainable OCR system using CNN and transformer architectures",
        "Achieved 6% Character Error Rate (CER) on IAM Handwritten Dataset",
        "Implemented robust processing pipeline with sliding window architecture for efficient inference"
      ]
    },
    {
      title: "Robotics Software Engineer Intern",
      company: "Wingway Autonomy",
      location: "Remote",
      period: "Dec 2023 - Feb 2024",
      description: [
        "Optimized robot control parameters and developed preliminary controller and path planning algorithms",
        "Contributed to autonomous navigation systems development"
      ]
    },
    {
      title: "Machine Learning Research Intern",
      company: "King Saud University & VIT",
      location: "Hybrid",
      period: "Dec 2022 - Feb 2024",
      description: [
        "Developed ML model to predict State of Charge (SoC) consumption for electric two-wheelers with 99.71% accuracy",
        "Research sponsored by Royal Academy of Engineering and published in Journal of Energy Storage (Impact Factor 8.9)"
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content card">
                  <div className="timeline-header">
                    <h3>{exp.title}</h3>
                    <h4 className="gradient-text">{exp.company}</h4>
                    <div className="timeline-meta">
                      <span className="timeline-period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                      <span className="timeline-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <div className="timeline-description">
                    <ul>
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 