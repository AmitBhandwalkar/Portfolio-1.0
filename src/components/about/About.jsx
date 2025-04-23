import "./about.css";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import { motion, useInView } from "motion/react";
import { useRef } from "react";


const About = () => {
 
    const textVariants = {
        initial: {
          x: -100,
          y: -100,
          opacity: 0,
        },
        animate: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
            duration: 1,
          },
        },
      };

      const listVariants = {
        initial: {
          x: -100,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 2,
            staggerChildren: 0.5,
          },
        },
      };
      
      const dButtonVariants = {
        initial: {
          x: -200,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 3,
            staggerChildren: 0.5,
          },
        },
      };


      const ref = useRef();
      const isInView = useInView(ref, { margin: "-200px" });

  return (
    <div className="about" ref={ref}>

      <div className="aSection left">
        <div className="about__container">
          {/* <div className="about__image">
            <img src="/your-photo.jpg" alt="About me" />
          </div> */}
          <div className="about__content">

            <motion.h2 className="about__title"
             variants={textVariants}
             animate={isInView ? "animate" : "initial"}
            >
              About <span>Me</span>
            </motion.h2>

            <motion.p className="about__description"
             variants={listVariants}
             animate={isInView ? "animate" : "initial"}
            >
            I bring a high level of expertise in web design and development, 
            with a strong focus on creating visually engaging, user-centric digital experiences. 
            From concept to deployment, I consistently deliver clean, scalable, 
            and high-performance websites and applications
            </motion.p>
            <motion.p className="about__description"
            variants={listVariants}
            animate={isInView ? "animate" : "initial"}
            >
              Beyond code, I’m a problem solver, a design thinker, and always
              eager to learn the next big thing. Let's build something amazing
              together.
            </motion.p>

            <motion.a
              variants={dButtonVariants}
              animate={isInView ? "animate" : "initial"}
              download=""
              href="files/Amit Bhandwalkar-cv.pdf"
              className="about__button "
            >
              <span>Download CV </span>
              <i className="fa-solid fa-download"></i>
            </motion.a>
          </div>
        </div>
      </div>


      <div className="aSection right">
       
          <ComputerModelContainer />
        
      </div>

    </div>
  );
};

export default About;
