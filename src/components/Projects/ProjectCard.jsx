import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.scss';

const ProjectCard = ({ title, description, image, codeLink, liveLink, techStack }) => {
  return (
    <div className="project-card-wrapper">
      <motion.div
        className="project-card-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{
          scale: 1.02,
          rotate: [0, 1, -1, 0],
          boxShadow: '0 0 30px #00ffff'
        }}
      >
        <motion.div
          className="project-image"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img src={image} alt={title} />
        </motion.div>

        <motion.div
          className="project-info"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h1 className="project-title hover-underline">{title}</h1>
          <p className="project-description">{description}</p>

          {techStack && (
            <div className="tech-stack">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="project-links">
            <a href={codeLink} target="_blank" rel="noopener noreferrer">
              🔗 Code
            </a>
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              🚀 Live
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
