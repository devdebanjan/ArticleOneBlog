import React, { useState, useEffect } from 'react'; // Added useEffect
import './Finalmatch.css';

import banner from './media/banner.jpeg';
import image from './media/mesi-yamal.jpeg';
import ring from './media/ring.jpeg';

import scaloni from '../Prematchanalysis/media/Scaloni.jpeg';
import Fuente from './media/Fuente.jpeg';

export default function WorldCupSemiFinalReport() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Automatically trigger the popup 5 seconds after the article loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  const togglePopup = (e) => {
    if (e) e.preventDefault();
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="match-report-wrapper">

      {/* ─── HERO SECTION ─── */}
      <header className="hero-section">
        <img src={banner} alt="World Cup Semifinal Banner" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="article-tag">World Cup 2026 FINAL</span>
          <h1 className="article-title">The Pre-Match Analysis: Final Showdown</h1>
          <div className="article-meta">
            <strong>Debanjan Acharjee</strong>
            <span className="meta-divider">•</span>
            <span>July 19, 2026</span>
            <span className="meta-divider">•</span>
            <span>5 mins read</span>
          </div>
        </div>
      </header>

      {/* ─── EDITORIAL BODY ─── */}
      <article className="article-body">
        <p>
          <span className="dropcap">T</span>he FIFA World Cup 2026 final is set. On Monday, July 20, European heavyweights Spain will clash with defending champions Argentina in a highly emotional fixture in New Jersey (12:30 AM IST).
        </p>

        {/* ─── SPAIN VS ARGENTINA ─── */}
        <h2>Spain vs Argentina: The Battle of Present and Future</h2>
        <p>
          As we witness this historic battle in 2026, let us leave behind the weight of what broke us. May this year be a quiet declaration to heal, grow, and start truly living with unwavering courage and hope.
        </p>
        <figure className="inline-image-showcase">
          <img src={image} alt="France Head Coach, Didier Deschamps" className="inline-image" />
          <figcaption className="image-caption">France Head Coach, Didier Deschamps</figcaption>
        </figure>

        <div className="quote-block">
          <span className="quote-speaker">God's Plan:</span>
          In 2007, a 20-year-old Lionel Messi posed for a UNICEF charity calendar photoshoot at Camp Nou. By pure chance, the local family who won a community raffle brought their infant son to the shoot: Lamine Yamal. The photographer captured a shy Messi gently bathing the baby in a small plastic tub.
          For years, this prophetic image remained forgotten in a drawer. Now, 19 years later, that serendipitous moment feels like football destiny. The baby in the bathtub has grown into Spain's teenage sensation, and on Sunday, he will face the legendary Messi on the ultimate stage: the 2026 FIFA World Cup final.
        </div>

        <p>
          🗣️Leo Messi talks about the famous photo of him bathing Lamine Yamal when he was only six months old:
          "That we're here today, Lamine and I, facing each other after a photo was taken of us when he was a baby, this is INSANITY for me."
        </p>

        <div className="quote-block">
          <span className="quote-speaker">🗣️Lamine Yamal (Spain):</span>
          Lamine Yamal describes facing his childhood idol, Lionel Messi, in the World Cup final as an unbelievable dream, especially given their famous shared photoshoot from when Yamal was a baby. He marvels at the **39-year-old's unmatched football intelligence** and ability to single-handedly rescue Argentina, as seen against England. While Yamal reveres Messi as the world's best player and grew up mimicking his moves, he insists that once the whistle blows, reverence will step aside as he fights for Spain's victory.
        </div>

        {/* ─── DASHBOARD WIDGET: H2H ─── */}
        <h3>Head-to-Head Analytics</h3>
        <div className="h2h-widget">
          
          <div className="h2h-header">
            <div className="team-identifier">
              <span className="team-flag">🇦🇷</span> Argentina
            </div>
            <div className="match-count">Last 5 Matches</div>
            <div className="team-identifier">
              Spain <span className="team-flag">🇪🇸</span>
            </div>
          </div>

          <div className="stat-distribution">
            <div className="distribution-labels">
              <span><span className="dot" style={{ backgroundColor: 'var(--color-argentina)' }}></span> 2 Wins</span>
              <span><span className="dot" style={{ backgroundColor: 'var(--color-draw)' }}></span> 1 Draw</span>
              <span>2 Wins <span className="dot" style={{ backgroundColor: 'var(--color-spain)' }}></span></span>
            </div>
            <div className="bar-container">
              <div className="bar-segment" style={{ width: '40%', backgroundColor: 'var(--color-argentina)' }}></div>
              <div className="bar-segment" style={{ width: '20%', backgroundColor: 'var(--color-draw)' }}></div>
              <div className="bar-segment" style={{ width: '40%', backgroundColor: 'var(--color-spain)' }}></div>
            </div>
          </div>

          <div className="recent-matches">
            <div className="recent-title">Match History Breakdown</div>
            <div className="match-history-grid">
              <div className="match-row">
                <span className="match-date-comp">Mar 2018 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Spain</span>
                  <span className="score-pill">6 : 1</span>
                  <span className="team-name-small">Argentina</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Sep 2010 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Argentina</span>
                  <span className="score-pill">4 : 1</span>
                  <span className="team-name-small">Spain</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Oct 2006 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Spain</span>
                  <span className="score-pill">2 : 1</span>
                  <span className="team-name-small">Argentina</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Nov 1999 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Spain</span>
                  <span className="score-pill">0 : 2</span>
                  <span className="team-name-small">Argentina</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Oct 1988 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Argentina</span>
                  <span className="score-pill">1 : 1</span>
                  <span className="team-name-small">Spain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── MATCH INSIGHTS ─── */}
        <h2>Match Insights</h2>
        <p>
          Match insights and news from the final match between Spain and Argentina. The tactical battle, player performances, and key moments that defined the clash will be analyzed in detail.
        </p>
         
        <figure className="inline-image-showcase">
          <img src={scaloni} alt="Argentina Head Coach, Lionel Scaloni" className="inline-image" />
          <figcaption className="image-caption">Argentina Head Coach, Lionel Scaloni</figcaption>
        </figure>

        <div className="quote-block-3">
          <span className="quote-speaker">🗣️ Lionel Scaloni(Argentina):</span>
          "How to stop Yamal? I wish we could lock him in his room!”. 
          “He’s amazing, a treasure, he's still so young, with so much more to offer.
          "He did so much for Spain, we hope not on Sunday, but like Messi he's very difficult to stop."
        </div>

        <figure className="inline-image-showcase">
          <img src={Fuente} alt="Spain Head Coach, Luis de la Fuente" className="inline-image" />
          <figcaption className="image-caption">Spain Head Coach, Luis de la Fuente</figcaption>
        </figure>

        <div className="quote-block-4">
          <span className="quote-speaker">🗣️ Luis de la Fuente (Spain):</span>
          "I met Messi when I was coaching the Sevilla youth team, he was young and top, very young."
          "At first, we marked him man-to-man... We were into the 70th minute, 0-0, then I replaced that player who was marking Messi. Minutes after, Messi scored FOUR goals against us... We lost." 
          "We’re not going to mark Messi man-to-man, but they’ll also be keeping a close eye on our players."
        </div>

        {/* ─── ADDITIONAL NEWS ─── */}
        <h2>Additional News</h2>
        <p style={{backgroundColor:" #b1f800" , padding:" 10px", borderRadius:" 5px", color:"#000000"}}>
          🏆 FIFA is elevating the World Cup like never before!
          <br/><br/>
          💍 Champions will now receive custom championship rings alongside the trophy and gold medals — a first in tournament history!
          <br/><br/>
          💎 Crafted in high-purity gold with dazzling diamond inlays, each ring is valued between $30,000 and $50,000. 
          <br/><br/>
          🏟️ The 30 winning players will get theirs custom-fitted after the final.
          <br/><br/>
          🛒 Plus, FIFA is releasing 1,996 limited-edition collectible rings, individually numbered from 1 to 2026 with official certificates of authenticity.
          <br/><br/>
          💍 Only 2,026 rings will ever exist.
          <br/><br/>
          🏆 The ultimate symbol of football immortality is coming.
          <br/><br/>
          💭 Which nation do you see raising both the Cup and the ring in 2026? <a href="/Prediction">👉🏻 Predict here</a>
        </p>

        <figure className="inline-image-showcase">
          <img src={ring} alt="Championship Ring" className="inline-image-ring" />
          <figcaption className="image-caption">Champion team championship ring $30,000 and $50,000</figcaption>
        </figure>

        {/* ─── FLOATING BUTTON (Click manually if closed) ─── */}
        <button onClick={togglePopup} className="floating-luck-btn" aria-label="Open Prediction Game">
          <img 
              src="https://imgs.search.brave.com/orQ5rzdh88Qs4kb_xrDMoOFzdA4QJpWMDfg6jeO7bfE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/YW5pbWF0aW9uLzIw/MjQvMDQvMjcvMTIv/MDYvMTItMDYtNTgt/MTU3XzUxMi5naWY.gif" 
              alt="Spinning Wheel" 
              className="spinner-gif" 
          />
          <span className="luck-text">Try your luck</span>
        </button>
        
        {/* ─── TIMER-BASED RESPONSIVE MODAL POPUP ─── */}
        {isPopupOpen && (
          <div className="prediction-overlay" onClick={togglePopup}>
            <div className="prediction-modal" onClick={(e) => e.stopPropagation()}>
              
              <button className="modal-close-btn" onClick={togglePopup}>&times;</button>
              
              <div className="modal-body">
                <span className="modal-icon">🎁</span>
                <h2>Win Exclusive  Gifts!</h2>
                <p>Participate in the Ultimate FIFA FINAL  2026 Prediction Game. Guess the question field and grab a chance to win 3 exciting gifts</p>
                
                <div className="modal-actions">
                  <a href="/Prediction" className="predict-choice-btn play-theme">Play Now</a>
                </div>
              </div>
            </div>
          </div>
        )}

      </article>
    </div>
  );
}