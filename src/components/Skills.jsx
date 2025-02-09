import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Front-end Development</h2>
            <div className="article-container">
              <article>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="Experience icon" className="icon" />
                <div><h3>HTML</h3></div>
              </article>
              <article>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="Experience icon" className="icon" />
                <div><h3>CSS</h3></div>
              </article>
              <article>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Experience icon" className="icon" />
                <div><h3>JavaScript</h3></div>
              </article>
              <article>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="Experience icon" className="icon" />
                <div><h3>React.js</h3></div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Back-end Development</h2>
            <div className="article-container">
              <article>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Experience icon" className="icon" />
                <div><h3>Java</h3></div>
              </article>
              <article>
                <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="Experience icon" className="icon" />
                <div><h3>MySQL</h3></div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;