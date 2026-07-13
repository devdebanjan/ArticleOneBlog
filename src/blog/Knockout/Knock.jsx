import React from 'react';
import { Link } from 'react-router-dom'; 
import { TypeAnimation } from 'react-type-animation';

import '../../blog/Knockout/Knock.css';

// Media Imports
import video from '../Knockout/media/moment.mp4';
import neymar from '../Knockout/media/Neymar.jpeg';
import refferi from '../Knockout/media/legendRef.jpeg';
import card from '../Knockout/media/card.jpeg';
import Logo from '../../feature/media/author.jpeg';
import logo2 from '../../feature/media/Profilepictute.jpeg';

export default function HomeDashboard() {
  return (
    <div className="home-dashboard-container fade-in">
      
      {/* ─── HEADER TYPOGRAPHY ─── */}
      <div className="premium-article-header">
        <TypeAnimation
          sequence={[
            'Next Article Tommorow at 10',2500,
            'Football News', 1000, 
            'World Cup Updates', 1000,
            'Match Analysis', 1000,
            'Player Tributes', 1000
          ]}
          wrapper="span"
          speed={50}
          className="animated-type-subtitle"
          repeat={Infinity}
        />
      </div>
          <h2 className="feed-section-heading">Top Trendings </h2>
      {/* ─── HERO FEATURE (Main Story) ─── */}
      <section className="hero-feature-wrapper">
        <div className="hero-feature-card">
          <div className="hero-media-side">
            <video 
              src={video} autoPlay loop playsInline muted 
              className="hero-video"
            />
          </div>
          
          <div className="hero-content-side">
            <span className="tag">Game of the Week</span>
            <h1 className="hero-title">Tears, Trophies, and a Timeless Legacy: Obrigado, Cristiano</h1>
            
            <div className="hero-meta">
              <span className="author-name">Debanjan Acharjee</span>
              <span className="publish-date">July 12, 2026 • 10 mins read</span>
            </div>
            
            <p className="hero-excerpt">
              <span className="cristiano-dropcap">CR7</span> Watching Portugal’s 2026 World Cup clash against Spain felt like watching a piece of my childhood slip away. When Mikel Merino’s stoppage-time goal sealed that agonizing 1-0 defeat, it wasn't just a match lost; it was the heartbreaking end of an era...
            </p>
            
            <Link to="/Ronaldo" className="feature-cta-btn hero-btn">
              Read Full Article <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      <div className="ornate-divider"></div>

      {/* ─── LATEST STORIES FEED ─── */}
      <section className="latest-stories-feed">
        <h2 className="feed-section-heading">Latest Stories</h2>

        {/* Story 1: The Bengali Feature */}
        <div className="feature-card">
          <div className="feature-image-container">
            <img src={neymar} alt="Neymar Last Dance" className="feature-img" />
            <div className="feature-image-overlay"></div>
          </div>
          <div className="feature-content">
            <div className="feature-meta"><span className="feature-badge">Special Feature</span></div>
            <h2 className="feature-title">স্বপ্ন কখনো মিথ্যে হয় না</h2>
            <div className="feature-author">
              <div className="author-text">
                <img className="author-avatar" src={Logo} alt="Anirban Mallick" />
                <div>
                  <strong>Anirban Mallick</strong>
                  <span>July 12, 2026 • 10 mins read</span>
                </div>
              </div>
            </div>
            <p className="feature-excerpt">
              আজ আর ফুটবল খেলি না , খেলতে পারি না বলাই ভালো পুরানো চোটের কারণে কিন্তু আজ ও নেইমারকে দেখে শক্তি পাই , লড়াই করার শেষ চেষ্টা করার।
            </p>
            <Link to="/Features" className="feature-cta-btn">Full Read <span>→</span></Link>
          </div>
        </div>

        {/* Story 2: Argentina vs Egypt (Converted to a clean card) */}
        <div className="feature-card reverse-card">
          <div className="feature-image-container">
            <img src={refferi} alt="Referee Collina" className="feature-img" />
            <div className="feature-image-overlay"></div>
          </div>
          <div className="feature-content">
            <div className="feature-meta"><span className="feature-badge">Match Report</span></div>
            <h2 className="feature-title">Argentina's Miracle Comeback Overcomes Egypt Amid VAR Drama</h2>
            <div className="feature-author">
              <div className="author-text">
                <div>
                  <strong>Editorial Team</strong>
                  <span>July 8, 2026 • 6 mins read</span>
                </div>
              </div>
            </div>
            <p className="feature-excerpt">
              Defending champions Argentina defeated Egypt 3-2 in a dramatic World Cup Round of 16 clash, mounting a historic 13-minute comeback after trailing 2-0. The match was severely marred by officiating controversies...
            </p>
            <Link to="/Reffari" className="feature-cta-btn">Full Read <span>→</span></Link>
          </div>
        </div>

        {/* Story 3: Quarter Final Analysis */}
        <div className="feature-card">
          <div className="feature-image-container">
            <img src={logo2} alt="Quarter Final Analysis" className="feature-img" />
            <div className="feature-image-overlay"></div>
          </div>
          <div className="feature-content">
            <div className="feature-meta"><span className="feature-badge">Quarter Final Analysis</span></div>
            <h2 className="feature-title">Full Match Analysis</h2>
            <div className="feature-author">
              <div className="author-text">
                <img className="author-avatar" src={logo2} alt="Anirban Mallick" />
                <div>
                  <strong>Anirban Mallick</strong>
                  <span>July 12, 2026 • 10 mins read</span>
                </div>
              </div>
            </div>
            <p className="feature-excerpt">
              France vs. Morocco: Tactical Dominance & Spain vs. Belgium: A Dramatic Quarterfinal breakdown.
            </p>
            <Link to="/QaFinals" className="feature-cta-btn">Want to read <span>→</span></Link>
          </div>
        </div>

      </section>
    </div>
  );
}