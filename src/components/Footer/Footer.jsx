import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h2>Amit Bhandwalkar</h2>
          <p>Full Stack Developer | Crafting web experiences</p>
        </div>

        <div className="footer-icons">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f icon"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter icon"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in icon"></i></a></li>
            <li><a href="#"><i className="fab fa-google-plus-g icon"></i></a></li>
            <li><a href="#"><i className="fab fa-git icon"></i></a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 AmitBhandwlkar.com. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
