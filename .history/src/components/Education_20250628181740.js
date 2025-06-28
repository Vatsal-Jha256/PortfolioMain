import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCertificate, FaTrophy } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science & Engineering",
      specialization: "with Specialization in IoT",
      institution: "Vellore Institute of Technology",
      location: "Vellore, India",
      period: "2022 - Present",
      cgpa: "9.26",
      courses: ["Algorithms", "Data Structures", "Object Oriented Programming", "Web Programming"]
    },
    {
      degree: "Class 12",
      specialization: "ISC Board",
      institution: "St. Xavier's School",
      location: "India",
      period: "2020 - 2022",
      percentage: "96%",
      courses: []
    }
  ];

  const achievements = [
    "National Topper among 11,876 participants - Responsible & Safe AI Systems (IITM & IIITH)",
    "National Topper among 10,749 participants - AI for Investment (IIT Kanpur)",
    "Raman Research Award - ₹10,000 cash prize for published research from VIT",
    "National Topper among 6,455 participants - Reinforcement Learning (IIT Madras)"
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Education</h2>
          
          <div className="education-content">
            <div className="education-list">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card card"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  <div className="education-icon">
                    <FaGraduationCap />
                  </div>
                  <div className="education-details">
                    <h3>{edu.degree}</h3>
                    {edu.specialization && (
                      <h4 className="specialization">{edu.specialization}</h4>
                    )}
                    <h4 className="gradient-text">{edu.institution}</h4>
                    <div className="education-meta">
                      <span className="period">{edu.period}</span>
                      <span className="location">{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="grade">
                        <strong>CGPA: {edu.cgpa}</strong>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="grade">
                        <strong>Percentage: {edu.percentage}</strong>
                      </div>
                    )}
                    {edu.courses.length > 0 && (
                      <div className="courses">
                        <strong>Key Courses:</strong>
                        <div className="course-tags">
                          {edu.courses.map((course, courseIndex) => (
                            <span key={courseIndex} className="course-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="achievements-section"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="achievements-title">
                <FaTrophy /> Academic Achievements
              </h3>
              <div className="achievements-list">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="achievement-item"
                    initial={{ opacity: 0, x: -30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + 0.1 * index }}
                  >
                    <div className="achievement-bullet">
                      <FaTrophy />
                    </div>
                    <span>{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 