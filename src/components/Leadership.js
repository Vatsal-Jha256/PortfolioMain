import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Leadership.css';

const Leadership = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const leadershipRoles = [
    {
      organization: "Team Prometheus",
      role: "Founder & Vice-Captain",
      description: "I lead the technical overview of our research and development, guiding the team in creating innovative robotics solutions for competitions like RoboCup."
    },
    {
      organization: "Youth Red Cross VIT",
      role: "Chairperson (Current) & Vice Chairperson (Former)",
      description: "I have led the organization in conducting large-scale events, including blood donation camps that collected over 780 units and activities with over 3000 participants, fostering a spirit of community service."
    }
  ];

  return (
    <section id="leadership" className="section leadership">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Leadership & Activities</h2>
          
          <div className="leadership-grid">
            {leadershipRoles.map((item, index) => (
              <motion.div 
                className="leadership-card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                <h3>{item.organization}</h3>
                <p className="leadership-role">{item.role}</p>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership; 