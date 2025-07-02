import "./skills.css";
import { motion } from "framer-motion";

const skill_list = [
  {
    category: "Frontend",
    skills: [
      {
        title: "HTML",
        icon: "./html.png",
        dis: "Write clean, semantic HTML5 for responsive web layouts.",
      },
      {
        title: "CSS",
        icon: "./css.png",
        dis: "Skilled in Flexbox, Grid, animations, and mobile-first design.",
      },
      {
        title: "JavaScript",
        icon: "./js.png",
        dis: "Experienced in ES6+, DOM manipulation, and async APIs.",
      },
      {
        title: "React",
        icon: "./react 64px.png",
        dis: "Build component-based UIs and dynamic SPAs using React.",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        title: "Python",
        icon: "./python-1.png",
        dis: "Familiar with Django and APIs; strong in backend problem-solving.",
      },
      {
        title: "Java",
        icon: "./java.png",
        dis: "Proficient in OOP, backend systems, and scalable app development.",
      },
      {
        title: "C++",
        icon: "./c++.png",
        dis: "Strong in DSA and OOP concepts using C++.",
      },
      {
        title: "Express.js",
        icon: "./express js.png",
        dis: "Efficient in building scalable REST APIs with Express.",
      },
      {
        title: "MongoDB",
        icon: "./MongoDB.png",
        dis: "Proficient in schema design, CRUD operations, and integration.",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      {
        title: "GitHub",
        icon: "./github.png",
        dis: "Manage projects and collaborate via Git/GitHub efficiently.",
      },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills That Power My Digital Creations</h1>
      {skill_list.map((group, index) => (
        <motion.div
          key={group.category}
          className="skill-category-group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="skill-category-title"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {group.category}
          </motion.h2>
          <motion.div
            className="skills-list"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {group.skills.map((skill) => (
              <motion.div
                className="skill-card"
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="skill-card-icon">
                  <div className="card">
                    <div className="icon wrapper">
                      <img
                        src={skill.icon}
                        alt={skill.title}
                        className="cover-image"
                      />
                    </div>
                    <img src={skill.icon} className="character" alt="float" />
                  </div>
                </div>
                <div className="skill-card-text">
                  <div className="skill-title">{skill.title}</div>
                  <p>{skill.dis}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
