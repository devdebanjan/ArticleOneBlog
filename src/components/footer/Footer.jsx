import React from 'react';
import './Footer.css';

import logo from '../footer/image.svg'
export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        {/* Brand Section */}
        <div className="footer-brand">
          
<div className="footer-brand">
  <div className="brand-logo">
    <img 
      src={logo} 
      alt="Article One Logo" 
      style={{ height: '100px', width: 'auto' }} // Adjust size as needed
    />
    <div 
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '80px'
  }}
>
  <h2 
    style={{
      fontFamily: 'var(--font-heading, "Playfair Display", serif)',
      fontSize: '32px',
      fontWeight: 900,
      margin: 0,
      letterSpacing: '-1px',
      color: '#A4FF00', /* Your signature green */
      cursor: 'pointer'
    }}
  >
    ArticleONE
  </h2>
</div>
  </div>
  
</div>
          {/* <h2>ArticleOne is the essential<br />football website.</h2> */}
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">About</a></li>
            
          </ul>
        </div>

        {/* App Download Section */}
       
      </div>

      <div className="footer-bottom">
        {/* Copyright */}
        <div className="footer-copyright">
          © Copyright 2026 ArticleOne
        </div>

        {/* Legal Text */}
        <div className="footer-legal">
          <div className="legal-links">
            <a href="#">Terms of use</a> • <a href="#">Cookie policy</a> • <a href="#">Privacy policy</a> • <a href="#">Transparency act statement</a>
          </div>
          <div className="legal-disclaimer">
            The use of automatic services (robots, crawler, indexing etc.) as well as other methods for systematic or regular use is not permitted.
          </div>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <span>Follow us</span>
          <div className="social-icons">
            <a href="#" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 15.68a6.34 6.34 0 0 0 6.27 6.32 6.32 6.32 0 0 0 6.31-6.32V10.15a8.39 8.39 0 0 0 3.19.62V7.33a5.53 5.53 0 0 1-1.18-.64z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07c-4.36.2-6.78 2.62-6.98 6.98C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98C23.99 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm6.4-11.44a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
            </a>
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M22.67 0H1.33C.6 0 0 .6 0 1.33v21.34C0 23.4.6 24 1.33 24h11.49V14.71h-3.13v-3.62h3.13V8.41c0-3.1 1.89-4.8 4.66-4.8 1.33 0 2.46.1 2.79.14v3.24h-1.92c-1.5 0-1.79.71-1.79 1.76v2.31h3.59l-.47 3.62h-3.12V24h6.12c.73 0 1.33-.6 1.33-1.33V1.33C24 .6 23.4 0 22.67 0z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.33V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z"/></svg>
            </a>
            <a href="#" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.83L1.25 2.25h6.83l4.7 6.23zM15.7 20.08h1.83L7.08 4.1H5.11z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-production-hash">
        production:819ab00c618301e1a8cc50c7bd24b42813dc8d2e
      </div>
    </footer>
  );
}