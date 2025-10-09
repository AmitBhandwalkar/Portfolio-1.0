import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav";


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const navLinks = (
    <>
      <li><a className="menu-item" href="#hero">Home</a></li>
      <li><a className="menu-item" href="#about">About</a></li>
      <li><a className="menu-item" href="#skills">Skills</a></li>
      <li><a className="menu-item" href="#project">Projects</a></li>
      <li><a className="menu-item" href="#workExperience">Work</a></li>
      <li><a className="menu-item" href="#contact">Contact ME</a></li>
    </>
  );

  return (
    <>
      {isMobile ? (
        <MobileNav/>
      ) : (
        <nav className="nav-wrapper">
          <div className="nav-content">
            <h2>Amit Bhandwalkar</h2>
            <ul>{navLinks}</ul>
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
