import React from 'react';
import './projects.css';

const projectsData = [
  {
    title: 'Signature Verification and Forgery Detection',
    technology: 'Python',
    githubLink: 'https://github.com/signature-project'
  },
  {
    title: 'Movie Trailer Hub',
    technology: 'Python',
    githubLink: 'https://github.com/movie-hub'
  },
  {
    title: 'E-commerce Website',
    technology: 'React, Node.js',
    githubLink: 'https://github.com/ecommerce-website'
  },
  {
    title: 'AI Chatbot',
    technology: 'Python, NLP',
    githubLink: 'https://github.com/ai-chatbot'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projectsData.map((project, index) => (
            <div key={index} className="details-container color-container">
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <p className="sign">{project.technology}</p>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 btn2"
                  onClick={() => window.location.href = project.githubLink}
                >
                  GitHub
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;