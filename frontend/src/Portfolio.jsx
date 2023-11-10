import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Software Portfolio - coming soon!</Link></li>
            <li><a href="https://github.com/Hachibroku" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/murphey-osmundson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li>Blog - coming soon!</li>
            <li>Photography - coming soon!</li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <img src="murphey2.jpeg" alt="Picture of Murphey" />
        <h1>Murphey Osmundson</h1>
        <p>
          Software engineering extraordinaire, creative mind, intuitive problem-solver, world traveller and generally
          likeable, well rounded dude. I'm a veteran of the US Navy, devoting six years as a Persian-Farsi cryptologic
          language analyst. Through that experience, I honed a unique analytical mindset, was taught to be a fearless leader,
          learned the value of discipline and the power of friendship. Currently pursuing a Computer Science degree as
          well as uitlizing the vast resources on the internet to further deepen my technical expertise. *opens front door*
          Hello MTV welcome to my <span class="crossed-out">crib</span> portfolio.
        </p>

      </section>
      <section className="featured-projects">
        <h2>Featured Projects</h2>

        <div className="projects-container">

          <div className="project">
            <h3>This Old Car</h3>
            <p>Not your average task tracking app, This Old Car has been designed by a home mechanic, for home mechanics.
              Utilizing Django's REST framework to provide a robust and reliable backend, React for a clean and intuitive
              user experience, and PostgreSQL for keeping all of those projects straight.</p>
            <img src="thisoldcarhome.png" alt="Project 1 screenshot" />
            <img src="addvehicle.png" alt="Project 1 screenshot" />
            <a href="https://github.com/Hachibroku/thisoldcar" target="_blank" rel="noopener noreferrer">Check out the source code here...</a>
          </div>

          <div className="project">
            <h3>GOOP: Gaming Oriented Opinion Portal</h3>
            <p>My capstone project from Hack Reactor, GOOP is a web-based, socialized polling and discussion platform
              designed to promote clear and concise discussion on topics surrounding the video games industry. Built with
              versatility and scalability in mind, we utilized FastAPI on the backend, React on the frontend and handled
              database duties with MongoDB.</p>
            <img src="goophome.png" alt="Project 2 screenshot" />
            <a href="https://github.com/Hachibroku/goop" target="_blank" rel="noopener noreferrer">Check out the source code here...</a>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Portfolio;
