import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.scss';

const workData = [
  {
    role: 'Web Application Developer',
    company: 'Silitzer Pharma, Pune',
    period: 'Feb 2023 – Present',
    highlights: [
      'Built and maintained full-stack MERN web apps, reducing manual work by 25%',
      'Developed responsive UIs in React.js, increasing engagement by 30%',
      'Created RESTful APIs, reducing sync issues by 40% and improving load time',
      'Optimized MongoDB queries, improving data retrieval by 35%',
      'Contributed in Agile sprints, achieving 95% on-time delivery',
    ],
  },
  // Add more work items here if needed
];

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2 className="section-title">Work Experience</h2>
      <div className="timeline">
        {workData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="company">{item.company} | {item.period}</p>
              <ul>
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
