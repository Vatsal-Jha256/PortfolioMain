import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';
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