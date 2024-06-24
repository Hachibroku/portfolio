import './Portfolio.css';


const Portfolio = () => {

  return (
    <div className="portfolio">
      <section className="hero">
        <img src="murphey2.jpeg" alt="Picture of Murphey" />
        <h1>Murphey Osmundson</h1>
        <p>
          Down-to-Earth Software Engineer, creative mind, intuitive problem-solver, aspiring world traveler and hobbyist philosopher. I am a veteran of the US Navy, having devoted six years of my life as a Persian-Farsi cryptologic linguist. Through that experience, I honed a unique analytical mindset, developed strong foundational leadership skills, learned the value of discipline, and the power of friendship. I am currently pursuing a Computer Science degree, while also utilizing the vast resources available on the internet to further enhance my technical knowledge.
        </p>

      </section>
      <section className="featured-projects">
        <h2>Featured Projects</h2>

        <div className="projects-container">

          <div className="project">
            <h3>This Old Car</h3>
            <p>This Old Car has been designed as a spin on the classic to-do app, optimized for home mechanics.
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
    </div>
  );
};

export default Portfolio;
