import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
      setNavOpen(!navOpen);
    };

    return (
        <>
              <header className={`portfolio-header ${navOpen ? "nav-open" : ""}`}>
        <nav>
          <div className="hamburger" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul id="nav-list" className={navOpen ? "open" : ""}>
            <li><Link to="/">Home</Link></li>
            <li>Software Portfolio - coming soon!</li>
            <li><a href="https://github.com/Hachibroku" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/murphey-osmundson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><Link to="/blog">Blog</Link></li>
            <li>Photography - coming soon!</li>
          </ul>
        </nav>
      </header>
        </>
    )
}

export default Header