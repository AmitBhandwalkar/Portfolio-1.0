import { TypeAnimation } from 'react-type-animation';
import { motion } from "motion/react";

const Speech = ()=>{


    return(
        <motion.div 
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2 }}
        className="bubbleContainer">

            <div className="bubble">
            <TypeAnimation
      sequence={[
        'Motivated and detail-oriented Computer Science graduate with hands-on experience ',
        2000, 
        'in full-stack web development, data analysis, and software engineering.',
        1000,
      ]}
      wrapper="span"
      speed={40}
      deletionSpeed={60}
          // omitDeletionAnimation
      repeat={Infinity}
    />
            </div>
            <img src="./hero-round.jpeg" alt="" />
        </motion.div>
    )
}



export default Speech