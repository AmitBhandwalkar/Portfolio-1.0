import "./skills.css";


const Skills = () => {

const skill_list = [

  { 
    title:"Python",
    icon:"./python-1.png",
    dis:"Familiar with frameworks like Django, and experienced in using Python for APIs, and problem-solving."
  },
  {
    title:"Java",
    icon:"./java.png",
    dis:"Proficient in Java for object-oriented programming, backend development, and building scalable applications."
  },
{
  title:"C++",
  icon:"./c++.png",
  dis:"Strong foundation in C++ for object-oriented programming, data structures and algorithms programming."
},
{
  title:"Express js",
  icon:"./express js.png",
  dis:"Experienced in building fast, scalable backend applications and RESTful APIs using Express js."
},
{
  title:"Html",
  icon:"./html.png",
  dis:"Proficient in writing clean, semantic HTML5 to build structured, accessible, and responsive web layouts."
},
{
  title:"CSS",
  icon:"./css.png",
  dis:"Skilled in responsive CSS for modern web design.with Flexbox, Grid, animations, and building mobile-friendly layouts."
},
{
  title:"JavaScript",
  icon:"./js.png",
  dis:"Proficient in ES6+ for building interactive, dynamic web applications. Skilled in DOM manipulation, event handling with APIs."
},
{
  title:"React",
  icon:"./react 64px.png",
  dis:"Experienced in building dynamic, component-based user interfaces using React."
},
{
  title:"Github",
  icon:"./github.png",
  dis:"Experienced in using GitHub for version control, collaboration, and project management."
},
{
  title:"MongoDB",
  icon:"./MongoDB.png",
  dis:"Experienced with CRUD operations, schema design, and integrating MongoDB with Node.js and Express"
},

]


  return (
    <div className="skills-container">
      <h1>Skills That Power My Digital Creations</h1>

      <div className="skills-list">


        {skill_list.map((skill)=>(
          
        <div className="skill-card" key={skill.title}>
        <div className="skill-card-icon">
          <div className="card">
            <div className="icon wrapper">
              <img src={skill.icon} alt="" className="cover-image" />
            </div>
            <img src={skill.icon} className="character" />
          </div>
        </div>
  
        <div className="skill-card-text">
          <div className="skill-title"> {skill.title} </div>
          <p> {skill.dis} </p>
        </div>
      </div>

        ))}


      </div>

    </div>
  );
};

export default Skills;
