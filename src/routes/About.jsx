import Avatar from '../../src/routes/Avatar.jpeg'
import React, { useState, useEffect } from 'react';
import './about.css';

/* --- UPGRADED VINTAGE TYPEWRITER COMPONENT --- */
const TypewriterText = ({ text, delay = 0, speed = 50, hideCursorOnComplete = true }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [status, setStatus] = useState('waiting'); // 'waiting' | 'typing' | 'complete'

  useEffect(() => {
    let i = 0;
    const startTimer = setTimeout(() => {
      setStatus('typing');
      const typingInterval = setInterval(() => {
        
        // FIX: Slicing from the original string prevents React from dropping characters at high speeds!
        setDisplayedText(text.slice(0, i + 1)); 
        
        i++;
        if (i >= text.length) {
          clearInterval(typingInterval);
          setStatus('complete');
        }
      }, speed);
      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  return (
    <>
      {displayedText}
      {status === 'typing' && <span className="vintage-cursor typing"></span>}
      {status === 'complete' && !hideCursorOnComplete && <span className="vintage-cursor idle"></span>}
    </>
  );
};

const About = () => {
  return (
    <div className="vintage-editorial-container fade-in">
      <div className="vintage-paper-wrapper">
        
        {/* --- LEFT COLUMN: IMAGE & SOCIALS (Fades in at 1s) --- */}
        <div className="vintage-image-column fade-in-element" style={{ animationDelay: '1s' }}>
          <div className="vintage-photo-frame">
            <img 
              src={Avatar} 
              alt="Debanjan Acharjee" 
              className="vintage-avatar" 
            />
          </div>
          
         <div className="vintage-social-links">
              <a href="https://www.facebook.com/debanjan.acharyya.9" target="_blank" rel="noreferrera" className="vintage-social-btn">
                <span>Facebook</span>
              </a>

              <a href="https://www.instagram.com/debanjanacharjee07/" target="_blank" rel="noreferrer" className="vintage-social-btn">
                <span>Instagram</span>
              </a>
              
              <a href="mailto:workwithdebanjan07@gmail.com" className="vintage-social-btn email-variant">
                <span>Telegram / Post</span>
              </a>
            </div>
        </div>

        {/* --- RIGHT COLUMN: FULL PAGE TYPEWRITER --- */}
        <div className="vintage-text-column">
          
          <div className="typewriter-header">
            <span className="typewriter-tag">
               <TypewriterText text="[ FILE NO. 07: THE AUTHOR ]" delay={300} speed={40} />
            </span>
            
            <h1 className="vintage-main-title fade-in-element" style={{ animationDelay: '1.5s' }}>
              Debanjan Acharjee
            </h1>
            
            <h2 className="vintage-sub-title">
               <TypewriterText text="Engineer, Storyteller & Football Enthusiast" delay={1800} speed={40} />
            </h2>
            <div className="typewriter-divider fade-in-element" style={{ animationDelay: '3.5s' }}></div>
          </div>

          <div className="vintage-bio">
            <p>
              {/* Drop cap fades in right before paragraph starts typing */}
              <span className="vintage-drop-cap fade-in-element" style={{ animationDelay: '3.8s' }}>W</span>
              <TypewriterText 
                text="ith an engineering degree as my foundation, I have always been fascinated by how complex systems are built. But beyond the logic and structure of my academic background, my true passion has always resided in the vibrant, unstructured beauty of arts, global cultures, and sports." 
                delay={4000} 
                speed={10} 
              />
            </p>
            <p>
              <TypewriterText 
                text="Growing up in Bengal, India, football was never just a game—it was a month-long festival that painted the streets in team colors and brought people together. That early exposure to the sheer passion of the FIFA World Cup shaped my deep appreciation for how sports seamlessly intertwine with art and human emotion. Whether I am analyzing the tactical evolution of a match, exploring creative digital arts, or getting lost in immersive storytelling, I am always chasing the emotional core of an experience." 
                delay={7500} 
                speed={10} 
              />
            </p>
          </div>

          {/* Box fades in, then text inside types out */}
          <div className="vintage-invitation-box fade-in-element" style={{ animationDelay: '12.5s' }}>
            <h3 className="vintage-invitation-title">
              <TypewriterText text="My Story" delay={13000} speed={40} />
            </h3>
            <p>
              <TypewriterText 
                text="I built this space not just to document my own journey, but to listen to yours. Every fan, artist, and dreamer has a memory that shaped them. Was it a childhood ritual watching a game with your family? A breathtaking piece of art that moved you? A cultural festival you’ll never forget?" 
                delay={14000} 
                speed={10} 
              />
            </p>
            <p className="vintage-invitation-highlight">
              <TypewriterText 
                text="Don't keep those memories locked away. I am constantly looking to feature stories from fellow enthusiasts. Drop me an email or a message—let's celebrate our passions together." 
                delay={17000} 
                speed={10} 
              />
            </p>
          </div>

          <div className="vintage-skills-section">
            <h3 className="vintage-skills-title">
              <TypewriterText text="Exploration Genre:" delay={19500} speed={40} hideCursorOnComplete={false} />
            </h3>
            
            {/* The final tags pop in all at once at the very end */}
            <div className="vintage-skills-grid fade-in-element" style={{ animationDelay: '21s' }}>
              <span className="vintage-skill-tag">Sports Narratives</span>
              <span className="vintage-skill-tag">Cultural Impact</span>
              <span className="vintage-skill-tag">Digital Arts</span>
              <span className="vintage-skill-tag">Football History</span>
              <span className="vintage-skill-tag">Storytelling</span>
              <span className="vintage-skill-tag">Human Connection</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;