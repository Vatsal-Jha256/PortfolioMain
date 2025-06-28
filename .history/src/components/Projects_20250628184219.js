import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "CA-AMFA: IoT Security System",
      description: "Developed contextual bandit-based authentication system for IoT devices, reducing false acceptance rates by 44.75%. Research under review at ICDSINC'25 NITR.",
      technologies: ["Python", "Machine Learning", "IoT", "Contextual Bandits"],
      github: "https://github.com/Vatsal-Jha256/CA-AMFA-Context-Aware-Adaptive-Multi-Factor-Authentication-for-IoT-Based-Household-Security-Systems",
      featured: true
    },
    {
      title: "HOMA: Multi-Agent Home Automation",
      description: "Built multilingual framework supporting 11+ languages with distributed architecture and Docker containerization for smart home automation.",
      technologies: ["Python", "Docker", "Multi-Agent Systems", "NLP"],
      github: "https://github.com/IISF-SIF/HOMA",
      featured: true
    },
    {
      title: "Traffic Optimization - Karnataka Police",
      description: "Implemented RL algorithms in SUMO simulator, achieving 50% reduction in waiting time. Top 3 Finalist in Karnataka Police Hackathon, presented at Microsoft Research, Bengaluru.",
      technologies: ["Python", "Reinforcement Learning", "SUMO", "Traffic Simulation"],
      github: "https://github.com/IISF-SIF/KSP-final",
      featured: true
    },
    {
      title: "EV SoC Consumption Estimation - Royal Academy Research",
      description: "Machine learning framework for battery SoC level prediction in electric two-wheelers achieving 99.71% accuracy. Research sponsored by Royal Academy of Engineering and published in Journal of Energy Storage (IF: 8.9).",
      technologies: ["Python", "Machine Learning", "XGBoost", "Energy Systems", "SVR"],
      github: "https://github.com/Vaav-ai/Generalized-EV-SoC-Consumption-Estimation-using-Machine-Learning",
      featured: true
    },
    {
      title: "BANDITS-IDS: Network Intrusion Detection",
      description: "Modular contextual bandit framework for network intrusion detection systems with adaptive learning capabilities.",
      technologies: ["Python", "Machine Learning", "Cybersecurity", "Contextual Bandits"],
      github: "https://github.com/Vatsal-Jha256/BANDITS-IDS-A-Modular-Contextual-Bandit-Framework-for-Network-Intrusion-Detection-Systems",
      featured: false
    },
    {
      title: "ScholarSynthesis",
      description: "Advanced research paper synthesis and analysis tool for academic research using NLP and ML techniques.",
      technologies: ["Python", "NLP", "Research Analytics", "Machine Learning"],
      github: "https://github.com/Vatsal-Jha256/ScholarSynthesis",
      featured: false
    },
    {
      title: "SkillSift",
      description: "AI-powered skill extraction and analysis platform for talent acquisition and workforce analytics.",
      technologies: ["Python", "NLP", "Skill Analytics", "Data Science"],
      github: "https://github.com/Vatsal-Jha256/SkillSift",
      featured: false
    },
    {
      title: "Narad - Voice Chatbot",
      description: "Developed multilingual chatbot with sub-40ms response time. Won 1st Prize in IISF-SIF (ISRO) and Samsung-PRISM Hackathons.",
      technologies: ["Python", "NLP", "Voice Processing", "Real-time Systems"],
      github: "https://github.com/IISF-SIF/Narad",
      featured: false
    },
    {
      title: "ChatterBot & PrompTrend",
      description: "Built scalable LLM solution using RayServe and VLLM, with FastAPI recommendation system using PostgreSQL and Redis for optimized performance.",
      technologies: ["Python", "LLM", "FastAPI", "PostgreSQL", "Redis"],
      github: "https://github.com/Vatsal-Jha256/ChatterBot",
      featured: false
    },
    {
      title: "PrompTrend",
      description: "Advanced prompt recommendation system with machine learning-based optimization and real-time analytics for improved AI interactions.",
      technologies: ["Python", "Machine Learning", "Analytics", "API Development"],
      github: "https://github.com/Vatsal-Jha256/PrompTrend",
      featured: false
    },
    {
      title: "Resume Analyzer",
      description: "AI-powered resume analysis and optimization tool with skill extraction and job matching capabilities.",
      technologies: ["Python", "NLP", "Resume Analysis", "Machine Learning"],
      github: "https://github.com/Vatsal-Jha256/resumeAnalyzer",
      featured: false
    },
    {
      title: "CEEW Solar Calculator",
      description: "Comprehensive solar energy optimization platform with financial modeling capabilities (IRR, payback period, LCOE) for renewable energy investment analysis.",
      technologies: ["Python", "Energy Analytics", "Financial Modeling", "Optimization"],
      github: "https://github.com/Vatsal-Jha256/ceew_solarcalculator",
      featured: false
    },
    {
      title: "CEEW Skill Clustering",
      description: "BERTopic pipeline with hyperparameter optimization to extract skills from 92,000 qualification documents, achieving 350 interpretable topics.",
      technologies: ["Python", "BERTopic", "Clustering", "NLP"],
      github: "https://github.com/Vatsal-Jha256/ceew_skillclustering",
      featured: false
    },
    {
      title: "HomeLock Project",
      description: "Smart home security system with IoT integration and real-time monitoring capabilities.",
      technologies: ["Python", "IoT", "Security", "Real-time Systems"],
      github: "https://github.com/Vatsal-Jha256/HomeLockProject",
      featured: false
    },
    {
      title: "KRVaayu",
      description: "Air quality monitoring and prediction system with machine learning-based bias correction achieving 80% error reduction.",
      technologies: ["Python", "Environmental Data", "Machine Learning", "Prediction"],
      github: "https://github.com/Vatsal-Jha256/KRVaayu",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <div className="featured-projects">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card featured-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * index }}
              >
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <h3 className="other-projects-title">Other Notable Projects</h3>
          <div className="other-projects grid grid-2">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                <div className="project-header">
                  <h4>{project.title}</h4>
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 