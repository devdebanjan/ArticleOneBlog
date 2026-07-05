import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

import logo from '../../blog/groupof32/images/The world studios.png'

const Navbar = ({ theme, setTheme }) => {
    const toggleMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        /* The navbar now accepts the theme as a class (e.g., 'navbar light' or 'navbar dark') */
        <nav className={`navbar ${theme}`}>
            <div className="nav-container">
                {/* Left Side: Navigation Links */}
                <div 
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px'
  }}
>
  <h2 
    style={{
      fontFamily: 'var(--font-heading, "Playfair Display", serif)',
      fontSize: '32px',
      fontWeight: 900,
      margin: 0,
      letterSpacing: '-1px',
      color: '#03eb03', /* Your signature green */
      cursor: 'pointer'
    }}
  >
    ArticleONE
  </h2>
</div>
                <ul className="nav-links">
                    <li className="navitem"><Link to="/">Home</Link></li>
                    <li className="navitem"><Link to="/Articales">Articles</Link></li>
                    <li className="navitem"><Link to="/About">About</Link></li>
                </ul>

                {/* Right Side: Search and Theme Toggle */}
                <div className="nav-actions">
                    <form className="search-box" action="/search" method="get">
                        <input type="text" name="q" placeholder="Search..." />
                        <button type="submit" aria-label="Search">🔍</button>
                    </form>
                    
                    <button className="theme-switch" onClick={toggleMode}>
                        {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;