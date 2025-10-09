import React from 'react';
import { motion } from 'framer-motion';
import './WorkExperience.scss';

const workData = [
  {
    role: 'Pharmaceutical Web Applications',
    company: 'Silitzer Pharma, Pune',
    techStack: ['MERN Stack', 'React.js', 'Node.js', 'Express', 'MongoDB', 'Redux Toolkit', 'REST APIs'],
    highlights: [
      'Built and maintained full-stack MERN web apps, reducing manual work by 25%',
      'Developed responsive UIs in React.js, increasing engagement by 30%',
      'Created RESTful APIs, reducing sync issues by 40% and improving load time',
      'Optimized MongoDB queries, improving data retrieval by 35%',
      'Contributed in Agile sprints, achieving 95% on-time delivery',
    ],
  },
  {
    role: 'Agro Export Business Web Applications',
    company: 'Atlntix Exports',
    techStack: ['Html', 'Css', 'JavaScript', ],
    highlights: [
      'Designed and deployed a responsive product showcase website, streamlining client inquiries and improving product visibility',
    ],
  },
  {
    role: 'Farm Management Web Applications',
    company: 'B-Farm',
    techStack: ['React.js', 'FastApi', 'Postgresql'],
    highlights: [
      'Built a farm management system covering crop plantation, irrigation, spraying, and production tracking',
      'Automated irrigation and pesticide schedules to improve efficiency and reduce errors',
      'Developed dashboards for cost monitoring, yield forecasting, and data-driven decision-making',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="work-experience">
      <h2 className="section-title">Freelance Work Experience</h2>
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
              <p className="company">{item.company}</p>

              {/* 🔹 Tech Stack Section */}
              <div className="tech-stack">
                <strong>Tech Stack:</strong>
                <div className="tech-tags">
                  {item.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

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
