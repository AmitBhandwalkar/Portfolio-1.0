import './App.css'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return(
    <div className='container'>
    
    <Navbar/>
     
    <section id='#hero'>
       <Hero/>
    </section>
     
     <section id='#about'> 
       <About/>
     </section>
          
      <section id='#skills' className='sSkills' >
        <Skills/>
      </section>

     <section id='#contact'>
     <Contact/>
     </section>

  


    </div>
  )

}

export default App
