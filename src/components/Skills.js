import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiJavascript, SiCplusplus, SiC,
  SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas,
  SiDocker, SiKubernetes, SiAmazonaws, SiLinux, SiGit,
  SiPostgresql, SiMongodb, SiFastapi, SiFlask, SiRedis
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <SiPython />, level: 95 },
        { name: "C++", icon: <SiCplusplus />, level: 85 },
        { name: "JavaScript", icon: <SiJavascript />, level: 80 },
        { name: "Java", icon: <span>☕</span>, level: 75 },
        { name: "C", icon: <SiC />, level: 70 }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "PyTorch", icon: <SiPytorch />, level: 90 },
        { name: "TensorFlow", icon: <SiTensorflow />, level: 85 },
        { name: "Scikit-learn", icon: <SiScikitlearn />, level: 90 },
        { name: "NumPy", icon: <SiNumpy />, level: 95 },
        { name: "Pandas", icon: <SiPandas />, level: 95 }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Docker", icon: <SiDocker />, level: 85 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 75 },
        { name: "AWS", icon: <SiAmazonaws />, level: 80 },
        { name: "Linux", icon: <SiLinux />, level: 85 },
        { name: "Git", icon: <SiGit />, level: 90 }
      ]
    },
    {
      title: "Databases & Backend",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        { name: "FastAPI", icon: <SiFastapi />, level: 90 },
        { name: "Flask", icon: <SiFlask />, level: 85 },
        { name: "Redis", icon: <SiRedis />, level: 75 }
      ]
    }
  ];

  const certifications = [
    "HuggingFace DeepRL",
    "Generative AI with LLMs",
    "Machine Learning A-Z",
    "Reinforcement Learning - IITM",
    "AI for Investment - IITK",
    "Quantum Computing - IBM & IITM",
    "Responsible & Safe AI Systems"
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="skill-category card"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 * categoryIndex }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item"
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.1 * skillIndex }}
                    >
                      <div className="skill-header">
                        <div className="skill-info">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                        </div>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.3 + 0.1 * skillIndex }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="certifications-section"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="certifications-title">Certifications & Achievements</h3>
            <div className="certifications-categories">
              <div className="cert-category">
                <h4 className="cert-category-title">AI & Machine Learning</h4>
                <div className="certifications-grid">
                  <a href="https://drive.google.com/file/d/1Rs90iN-PP_q0qsi6xyC9tBMSDdIQkqCr/view" target="_blank" rel="noopener noreferrer" className="certification-item">
                    HuggingFace DeepRL
                  </a>
                  <a href="https://coursera.org/share/abd98e71f4b17faa5c391bc2aceff982" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Generative AI with LLMs
                  </a>
                  <a href="https://www.udemy.com/certificate/UC-352b144d-0a18-4bde-89b1-fd7826e6d1d8/" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Machine Learning A-Z
                  </a>
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS100S73230189820434211" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Reinforcement Learning - IITM
                  </a>
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24MG06S55230267930786392" target="_blank" rel="noopener noreferrer" className="certification-item">
                    AI for Investment - IITK
                  </a>
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS89S35280297704380237" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Deep Learning For Computer Vision - IITH
                  </a>
                </div>
              </div>
              
              <div className="cert-category">
                <h4 className="cert-category-title">Specialized Technologies</h4>
                <div className="certifications-grid">
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS67S24950041102774382" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Quantum Computing - IBM & IITM
                  </a>
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24GE35S116980018430786392" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Recommender Systems - IITKGP
                  </a>
                  <a href="https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS132S86570010804380237" target="_blank" rel="noopener noreferrer" className="certification-item">
                    Responsible & Safe AI Systems - IITM & IIITH
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 