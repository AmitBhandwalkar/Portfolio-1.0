import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import "./MobileNav.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: "Home", icon: <FaHome />, href: "#hero" },
    { label: "About", icon: <FaUser />, href: "#about" },
    { label: "Skills", icon: <FaLaptopCode />, href: "#skills" },
    { label: "Projects", icon: <FaProjectDiagram />, href: "#project" },
    { label: "Work", icon: <FaBriefcase />, href: "#workExperience" },
    { label: "Contact Me", icon: <FaEnvelope />, href: "#contact" },
  ];

  return (
    <div className="fab-nav">
   <button className={`fab-btn ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
  {isOpen ? <IoMdClose /> : "Menu"}
</button>

      <ul className={`fab-menu ${isOpen ? "open" : ""}`}>
        {menuItems.map((item, i) => (
          <li key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
            <a href={item.href} onClick={() => setIsOpen(false)}>
              {item.icon}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
