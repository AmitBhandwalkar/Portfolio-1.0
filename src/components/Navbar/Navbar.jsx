import React, { useState } from "react";
import './Navbar.css'
import MobileNav from "./MobileNav";


const Navbar = ()=>{

  const[openMenu,setOpenMenu] = useState(false);

  const toggleMenu = ()=>{
    setOpenMenu(!openMenu);
  }

  return(
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className="nav-wrapper">
            <nav className="nav-content">
                {/* <img src="./logo-2.png"></img>*/} 
                <h2>Amit Bhandwalkar</h2> 
                <ul>
                    <li >
                      <a className="menu-item" href="#hero">Home</a>
                      </li>
                    <li>
                      <a className="menu-item" href="#about">About</a>
                      </li>
                    <li>
                      <a className="menu-item" href="#skills">Skills</a>
                    </li>
                    <li>
                      <a className="menu-item" href="#project">Projects</a>
                    </li>
                    <li>
                      <a className="menu-item" href="#workExperience" >Work</a>
                    </li>
                    <li>
                      <a className="menu-item" href="#contact">Contact ME</a>
                    </li>
                </ul>
                <button className="menu-btn" onClick={toggleMenu}>
                 <span className="material-symbols-outlined" style={{fontSize:"1.8rem"}}>
                  {openMenu ? "close" :"menu"}
                  </span>
                </button>
            </nav>
        </nav>
    </>
  )
}



export default Navbar