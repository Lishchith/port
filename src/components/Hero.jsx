import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <img src=".././public/Lishchith.jpg" alt="Lishchith K R" className="profile-pic" />
      <div className="hero-content">
        <h2>Hi, I'am </h2>
        <h1>Lishchith K R</h1>
        <p>Passionate Web Developer | Innovator | Problem Solver</p>
        <div className="hero-buttons">
          <a href="#resume" className="resume-button" onClick={() => window.open("./src/assets/LISHCHITH.pdf")}>My Resume</a>
          <a href="#contact" className="contact-button">Contact Me</a>
        
        <div className="social-icons">
          <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
