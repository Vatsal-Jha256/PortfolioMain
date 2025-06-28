import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiPython, SiJavascript, SiCplusplus, SiC,
  SiPytorch, SiTensorflow, SiScikitlearn, SiNumpy, SiPandas,
  SiDocker, SiKubernetes, SiAmazonaws, SiLinux, SiGit,
  SiPostgresql, SiMongodb, SiFastapi, SiFlask, SiRedis,
  SiJupyter, SiLatex, SiRos, SiFigma
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
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 + 0.1 * index }}
                >
                  {cert}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 