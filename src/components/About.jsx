import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        Hey there! I'm Lishchith K R, a Bachelor of Engineering (B.E.) graduate
        passionate about web development, focusing on both front-end and
        back-end technologies. I have hands-on experience in languages like
        Java, JavaScript, SQL, and I’m skilled in frameworks such as React. I'm
        excited to leverage my skills in real-world projects and contribute to
        creative and impactful solutions.
      </p>

      <div className="education-content">
        <h3>Education</h3>
        <h4>KVG College of Engineering</h4>
        <p>Bachelor of Engineering - Computer Science and Engineering</p>
        <p className="duration">December 2020 - July 2024</p>
      </div>
    </section>
  );
};

export default About;
