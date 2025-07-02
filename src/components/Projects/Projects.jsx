import React from 'react';
import './Projects.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Atlntix Exports',
    description: 'Designed and deploy a fully responsive website for Atlntix Exports, an agriculture export business, to showcase products and streamline client inquiries',
    image: './images/Atlntix Exports.webp',
    codeLink: '',
    liveLink: 'https://amitbhandwalkar.github.io/Atlntix-Exports/',
    techStack: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase projects and skills.',
    image: './images/Portfolio Website.webp',
    codeLink: '',
    liveLink: 'https://amitbhandwalkar.github.io/Portfolio-1.0/',
    techStack: ['React', 'Framer Motion', 'SCSS']
  },
  {
    title: 'StudyBudy',
    description: 'StudyBuddy is a collaborative Q&A platform where users create virtual rooms to ask questions, share answers, and engage in group discussions',
    image: './images/StudyBudy.webp',
    codeLink: 'https://github.com/AmitBhandwalkar/StudyBuddy',
    liveLink: '',
    techStack: ['Django', 'HTML/CSS', 'JavaScript' ,'SQLite' ]
  },
];

const Projects = () => {
  return (
    <div className="Projects-container">
      <motion.div
        className="Projects-title glow-underline"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Projects
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          className="Projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Projects;
