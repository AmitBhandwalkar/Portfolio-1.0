import React from "react";
import './MobileNav.css'


const MobileNav = ({ isOpen, toggleMenu}) =>{
    return(
        <>
        <div className={`mobile-menu ${isOpen ? "active":""}`} onClick={toggleMenu} >
                <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
                  <img src="./logo-1.png" alt="" className="logo" />
                  <ul>
                    <li>
                        <a href="#" className="menu-item">Home</a>
                    </li>

                    <li>
                     <a className="menu-item">About</a>
                    </li>

                    <li>
                      <a className="menu-item">Skills</a>
                    </li>

                    <li>
                      <a className="menu-item">Projects</a>
                    </li>

                    <li>
                      <a className="menu-item">Work</a>
                    </li>

                    <li>
                      <a className="menu-item">Contact ME</a>
                    </li>

                  </ul>
                </div>
        </div>
        </>
    )
}


export default MobileNav 