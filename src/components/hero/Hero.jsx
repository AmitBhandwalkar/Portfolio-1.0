import "./Hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import Shape from "./Shape";
import { Suspense } from "react";

const Hero = () => {

  const awardVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const followVariants = {
    initial: {
      y: -100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="hero">
      <div className="hSection left">

        <motion.h1  
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="hTitle">
             Hey There, <br /> <span>i'm Amit Bhandwalkar</span>
        </motion.h1>

        <motion.div 
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="award">
          <h2>fullstack developer</h2>
          <p>
            High level experience in web design and <br />
            development knowledge,producing quality work.
          </p>
        </motion.div>

        <div className="home__scroll">
                    <motion.a 
                     animate={{ y: [0, 5], opacity: [0, 1, 0] }}
                     transition={{
                       repeat: Infinity,
                       duration: 5,
                       ease: "easeInOut",
                     }}
                    href="#about" className="home__scroll-button button--flex">
                    <i className="fa-solid fa-computer-mouse"></i>
                        <span className="home__scroll-name">Scroll down</span>
                        <i className="fa-solid fa-arrow-down"></i>
                    </motion.a>
          </div>


      </div>

      <div className="hSection right">

       <motion.div 
       variants={followVariants}
       initial="initial"
       animate="animate"
       className="follow">
        <a href="https://www.linkedin.com/in/amit-bhandwalkar/">
        <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/AmitBhandwalkar">
        <i className="fa-brands fa-github"></i>
        </a>
        <div className="followTextContainer">
          <div className="followText">FOLLOW ME</div>
        </div>
       </motion.div>

       <Speech />

         <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
         >
         <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
         >
         <svg viewBox="0 0 200 200" width="120" height="130" className="conBtn-svg">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Contact Me •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                   Hire Now •
                </textPath>
              </text>
            </svg>

            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>

         </motion.div>
         </motion.a>
         </div>
         <div className="bg">
         <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
          <div className="hImg">
            <img src="./images/hero(small).webp" alt="" />
          </div>
         </div>
    </div>
  );
};

export default Hero;
