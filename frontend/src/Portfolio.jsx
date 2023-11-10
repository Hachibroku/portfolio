import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Photography</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1>Murphey Osmundson</h1>
        <p>Full Stack Software Engineer proficient in web development with Python and JavaScript...</p>
      </section>
      <section className="projects">
        <div className="project" />
        <div className="project" />
      </section>
    </div>
  );
};

export default Portfolio;
