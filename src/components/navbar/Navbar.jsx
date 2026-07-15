import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({ theme, setTheme }) => {
    // State to handle the mobile sidebar drawer
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* ─── DESKTOP & MOBILE TOP BAR ─── */}
            <nav className={`navbar ${theme}`}>
                <div className="nav-container">
                    
                    {/* Hamburger Button (Visible only on Mobile) */}
                    <button className="hamburger-btn" onClick={toggleMenu} aria-label="Open Menu">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                        </svg>
                    </button>

                    {/* Center Brand Logo */}
                    <div className="brand-container">
                        <h2 className="brand-text">
                           <Link to={"/"}> Article<span>ONE</span> </Link>
                        </h2>
                    </div>

                    {/* Left Side: Navigation Links (Hidden on Mobile) */}
                    <ul className="nav-links desktop-only">
                        <li className="navitem"><Link to="/">Home</Link></li>
                        <li className="navitem"><Link to="/Scores">Scoreboard</Link></li>
                        <li className="navitem"><Link to="/Articales">Articles</Link></li>
                        <li className="navitem"><Link to="/About">About</Link></li>
                    </ul>

                    {/* Right Side: Search and Theme Toggle */}
                    <div className="nav-actions">
                        <form className="search-box desktop-only" action="/search" method="get">
                            <input type="text" name="q" placeholder="Search..." />
                            <button type="submit" aria-label="Search">🔍︎</button>
                        </form>
                        
                        <button className="theme-switch" onClick={toggleMode}>
                            {theme === 'dark' ? '💡 Light' : '🌜 Dark'}
                        </button>
                    </div>
                </div>
            </nav>

            {/* ─── MOBILE SLIDE-OUT SIDEBAR (ESPN STYLE) ─── */}
            
            {/* Dark Background Overlay */}
            <div 
                className={`nav-backdrop ${isMenuOpen ? 'open' : ''}`} 
                onClick={toggleMenu}
            ></div>

            {/* The Slide-Out Drawer (Inherits the current theme!) */}
            <div className={`nav-sidebar ${isMenuOpen ? 'open' : ''} ${theme}`}>
                
                <div className="sidebar-header">
                    <button className="close-btn" onClick={toggleMenu}>
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </button>
                    <h2 className="brand-text">Article<span>ONE</span></h2>
                </div>

                {/* Mobile Search Bar */}
                <form className="sidebar-search" action="/search" method="get">
                    <input type="text" name="q" placeholder="Search..." />
                    <button type="submit">🔍︎</button>
                </form>

                {/* Mobile Nav Links */}
                <ul className="sidebar-links">
                    {/* onClick triggers toggleMenu so the drawer closes when a link is clicked */}
                    <li onClick={toggleMenu}><Link to="/">Home</Link></li>
                    <li onClick={toggleMenu}><Link to="/Scores">Scoreboard</Link></li>
                    <li onClick={toggleMenu}><Link to="/Articales">Articles</Link></li>
                    <li onClick={toggleMenu}><Link to="/About">About</Link></li>
                </ul>

            </div>
        </>
    );
}

export default Navbar;