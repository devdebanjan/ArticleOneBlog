import React from 'react';
import { Link } from 'react-router-dom'; 
import { TypeAnimation } from 'react-type-animation';

// Make sure your path is correct
import '../../blog/Knockout/Knock.css';

// Media Imports
import video from '../Knockout/media/moment.mp4';
import neymar from '../Knockout/media/Neymar.jpeg';
import refferi from '../Knockout/media/legendRef.jpeg';
import card from '../Knockout/media/card.jpeg';
import Logo from '../../feature/media/author.jpeg';
import logo2 from '../../feature/media/Profilepictute.jpeg';
import Banner from '../Semifinalgames/media/banner.png';
import Messi from '../Semifinalanalysis/media/banner.mp4'

import banner from '../Finalmatch/media/banner.jpeg';

export default function HomeDashboard() {
  return (
    <div className="home-dashboard-container fade-in">
      
      {/* ─── HEADER TYPOGRAPHY ─── */}
      <div className="premium-article-header">
        <TypeAnimation
          sequence={[
            'Next Article 19th July at 10:00 AM', 2500,
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
      
      <h2 className="feed-section-heading">Top Trending</h2>
      
      <div className="hero-grid-layout">
        <section className="hero-feature-wrapper">
          <div className="hero-feature-card">
            <div className="hero-media-side">
              <img 
                src={banner} 
                alt="Semi Final Race"
                className="hero-video"
              />
              <div className="media-overlay"></div>
            </div>
            
            <div className="hero-content-side">
              <span className="tag"> Final Again Spain and Argentina</span>
              <h1 className="hero-title">Final Fight</h1>
              
              <div className="hero-meta">
                <span className="author-name">Debanjan Acharjee</span>
                <span className="publish-date">July 19, 2026 • 5 mins read</span>
              </div>
              
              <p className="hero-excerpt">
                <span className="cristiano-dropcap">P</span>The Final Showdown Against Spain: A Tactical Masterclass and a Heart-Stopping Finish. Spain's tactical brilliance dismantled France, while Argentina's late heroics against England set the stage for an epic final clash.
              </p>
              
              <Link to="/Finalmatch" className="feature-cta-btn hero-btn">
                Read Full Article <span>→</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="hero-feature-wrapper">
          <div className="hero-feature-card">
            <div className="hero-media-side">
              <video 
                src={Messi} autoPlay loop playsInline muted 
                className="hero-video"
              />
              <div className="media-overlay"></div>
            </div>
            
            <div className="hero-content-side">
              <span className="tag">Leo in Final Again</span>
              <h1 className="hero-title">Beyond the Paper: Tactical Discipline and Late Drama in the Semi Finals</h1>
              
              <div className="hero-meta">
                <span className="author-name">Debanjan Acharjee</span>
                <span className="publish-date">July 16, 2026 • 5 mins read</span>
              </div>
              
              <p className="hero-excerpt">
                <span className="cristiano-dropcap">P</span>redictions shattered as Spain and Argentina secured their place in the upcoming World Cup final. Spain delivered a complete tactical masterclass to dismantle a heavily favored France squad two to zero. Meanwhile, Argentina rallied with a late equalizer and a stunning stoppage time winner to break English hearts. Pure drama!..........
              </p>
              
              <Link to="/Semianalysis" className="feature-cta-btn hero-btn">
                Read Full Article <span>→</span>
              </Link>
            </div>
          </div>
        </section>
        {/* ─── HERO FEATURE 1 (Main Story) ─── */}
        <section className="hero-feature-wrapper">
          <div className="hero-feature-card">
            <div className="hero-media-side">
              <img 
                src={Banner} 
                alt="Semi Final Race"
                className="hero-video"
              />
              <div className="media-overlay"></div>
            </div>
            
            <div className="hero-content-side">
              <span className="tag">Final Race</span>
              <h1 className="hero-title">Semi Final Race Begins July 15th</h1>
              
              <div className="hero-meta">
                <span className="author-name">Debanjan Acharjee</span>
                <span className="publish-date">July 14, 2026 • 5 mins read</span>
              </div>
              
              <p className="hero-excerpt">
                <span className="cristiano-dropcap">S</span>emi-finals are here. Watching Argentina vs England is a special moment for all football fans. Meanwhile, Yamal's comments have added intense spice to the clash between European giants France and Spain...
              </p>
              
              <Link to="/Semipre" className="feature-cta-btn hero-btn">
                Read Full Article <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── HERO FEATURE 2 ─── */}
        <section className="hero-feature-wrapper">
          <div className="hero-feature-card">
            <div className="hero-media-side">
              <video 
                src={video} autoPlay loop playsInline muted 
                className="hero-video"
              />
              <div className="media-overlay"></div>
            </div>
            
            <div className="hero-content-side">
              <span className="tag tag-gold">Game of the Week</span>
              <h1 className="hero-title">Tears, Trophies, and a Timeless Legacy: Obrigado, Cristiano</h1>
              
              <div className="hero-meta">
                <span className="author-name">Debanjan Acharjee</span>
                <span className="publish-date">July 12, 2026 • 10 mins read</span>
              </div>
              
              <p className="hero-excerpt">
                <span className="cristiano-dropcap">C</span>R7's final dance. Watching Portugal’s 2026 World Cup clash against Spain felt like watching a piece of history slip away. When Mikel Merino’s stoppage-time goal sealed the defeat, it was the heartbreaking end of an era...
              </p>
              
              <Link to="/Ronaldo" className="feature-cta-btn hero-btn">
                Read Full Article <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </div>

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

        {/* Story 2: Match Report */}
        <div className="feature-card reverse-card">
          <div className="feature-image-container">
            <img src={refferi} alt="Referee Collina" className="feature-img" />
            <div className="feature-image-overlay"></div>
          </div>
          <div className="feature-content">
            <div className="feature-meta"><span className="feature-badge badge-blue">Match Report</span></div>
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
              Defending champions Argentina defeated Egypt 3-2 in a dramatic World Cup Round of 16 clash, mounting a historic 13-minute comeback after trailing 2-0. 
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
            <div className="feature-meta"><span className="feature-badge badge-purple">Analysis</span></div>
            <h2 className="feature-title">Tactical Breakdown: The Quarter Finals</h2>
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
              France vs. Morocco: Tactical Dominance & Spain vs. Belgium: A Dramatic Quarterfinal breakdown. Dive into the heatmaps and formations.
            </p>
            <Link to="/QaFinals" className="feature-cta-btn">Want to read <span>→</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}