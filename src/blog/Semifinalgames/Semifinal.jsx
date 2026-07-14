import React from 'react';

// Image Imports
import banner from '../Semifinalgames/media/banner.png';
import Didi from '../Prematchanalysis/media/Didier.jpeg';
import mbapee from '../Semifinalgames/media/mBAPEEpng.png';
import thomas from '../Prematchanalysis/media/HNBFruvWcAA_P7R.jpeg';
import scaloni from '../Prematchanalysis/media/Scaloni.jpeg';
import messi from '../Semifinalgames/media/mESSIbELLI.png';

export default function WorldCupSemiFinalReport() {
  return (
    <div className="match-report-wrapper">
      
      {/* ─── INJECTED CSS ─── */}
      <style>
        {`
          :root {
            --bg-color: #050508;
            --panel-bg: #0F1219;
            --panel-border: rgba(255, 255, 255, 0.08);
            --text-main: #E2E8F0;
            --text-muted: #94A3B8;
            --accent: #A4FF00;
            --accent-alt: #00E5FF;
            
            /* Team Colors */
            --color-france: #002395;
            --color-spain: #AA151B;
            --color-england: #CE1124;
            --color-argentina: #43A1D5;
            --color-draw: #475569;

            --font-ui: 'Inter', system-ui, sans-serif;
            --font-heading: 'Playfair Display', serif;
          }

          .match-report-wrapper {
            background-color: var(--bg-color);
            min-height: 100vh;
            padding: 0 0 80px 0;
            font-family: var(--font-ui);
            color: var(--text-main);
          }

          /* Hero Section */
          .hero-section {
            position: relative;
            width: 100%;
            height: 70vh;
            min-height: 400px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding-bottom: 60px;
            overflow: hidden;
          }

          .hero-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            z-index: 1;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(5,5,8,0.2) 0%, rgba(5,5,8,0.9) 75%, rgba(5,5,8,1) 100%);
            z-index: 2;
          }

          .hero-content {
            position: relative;
            z-index: 3;
            max-width: 900px;
            width: 100%;
            padding: 0 20px;
            text-align: center;
          }

          .article-tag {
            display: inline-block;
            background: rgba(164, 255, 0, 0.15);
            color: var(--accent);
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }

          .article-title {
            font-family: var(--font-heading);
            font-size: clamp(2rem, 5vw, 4rem); 
            line-height: 1.15;
            color: #ffffff;
            margin: 0 auto 20px auto;
            max-width: 95%;
          }

          .article-meta {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px; 
            font-size: 0.9rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .article-meta strong {
            color: #fff;
          }
          
          .meta-divider {
            color: rgba(255, 255, 255, 0.2);
          }

          /* Editorial Body */
          .article-body {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            font-size: 1.15rem;
            line-height: 1.7;
          }

          .article-body h2 {
            font-family: var(--font-heading);
            font-size: 2.2rem;
            color: #fff;
            margin: 50px 0 20px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 10px;
          }

          .article-body h3 {
            font-family: var(--font-ui);
            color: #fff;
            font-size: 1.2rem;
            margin: 40px 0 20px 0;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .article-body p {
            margin-bottom: 25px;
            color: #CBD5E1;
          }

          .dropcap {
            font-family: var(--font-heading);
            font-size: 4.5rem;
            float: left;
            line-height: 0.8;
            padding-right: 12px;
            padding-top: 8px;
            background: linear-gradient(135deg, var(--accent-alt) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Quotes */
          .quote-block {
            background: rgba(255,255,255,0.03);
            border-left: 4px solid var(--accent-alt);
            padding: 20px;
            margin: 30px 0;
            border-radius: 0 8px 8px 0;
            font-style: italic;
          }

          .quote-speaker {
            display: block;
            font-weight: 700;
            color: #fff;
            margin-bottom: 8px;
            font-style: normal;
          }

          /* Inline Images */
          .inline-image-showcase {
            margin: 40px 0;
            text-align: center;
          }

          .inline-image {
            width: 100%;
            border-radius: 12px;
            object-fit: cover;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }

          .image-caption {
            margin-top: 12px;
            font-size: 0.9rem;
            color: var(--text-muted);
            letter-spacing: 0.5px;
          }

          /* DASHBOARD STYLE H2H WIDGET */
          .h2h-widget {
            background: var(--panel-bg);
            border: 1px solid var(--panel-border);
            border-radius: 12px;
            padding: 24px;
            margin: 30px 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          }

          .h2h-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--panel-border);
            padding-bottom: 20px;
            margin-bottom: 20px;
          }

          .team-identifier {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.2rem;
            font-weight: 700;
            color: #fff;
          }

          .team-flag {
            font-size: 1.8rem;
            background: rgba(255,255,255,0.05);
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.1);
          }

          .match-count {
            font-size: 0.85rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
            background: rgba(255,255,255,0.05);
            padding: 4px 12px;
            border-radius: 20px;
          }

          .stat-distribution {
            margin-bottom: 30px;
          }

          .distribution-labels {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            margin-bottom: 8px;
            color: var(--text-muted);
          }

          .distribution-labels span {
            display: flex;
            align-items: center;
            gap: 6px;
          }

          .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            display: inline-block;
          }

          .bar-container {
            width: 100%;
            height: 12px;
            background: rgba(255,255,255,0.05);
            border-radius: 6px;
            display: flex;
            overflow: hidden;
          }

          .bar-segment {
            height: 100%;
            transition: width 0.5s ease-in-out;
          }

          .recent-matches {
            margin-top: 20px;
          }

          .recent-title {
            font-size: 0.85rem;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 12px;
          }

          .match-history-grid {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .match-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: rgba(255,255,255,0.02);
            padding: 10px 16px;
            border-radius: 8px;
            border: 1px solid rgba(255,255,255,0.03);
          }

          .match-date-comp {
            font-size: 0.8rem;
            color: var(--text-muted);
            width: 120px;
          }

          .match-score-block {
            display: flex;
            align-items: center;
            gap: 15px;
            flex: 1;
            justify-content: center;
          }
          
          .team-name-small {
            font-size: 0.9rem;
            font-weight: 600;
            width: 80px;
          }
          
          .team-name-small.right {
            text-align: right;
          }

          .score-pill {
            background: rgba(0,0,0,0.4);
            border: 1px solid rgba(255,255,255,0.1);
            padding: 4px 12px;
            border-radius: 6px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #fff;
          }

          /* ─── MOBILE RESPONSIVENESS FIXES ─── */
          @media (max-width: 768px) {
            .hero-section { 
              height: 55vh; /* Shortened slightly so it doesn't stretch too far down */
              min-height: 380px; 
              padding-bottom: 40px; 
            }
            .article-tag {
              font-size: 0.75rem;
              padding: 5px 12px;
              margin-bottom: 15px;
            }
            .article-title { 
              font-size: 1.75rem; /* Explicitly reduced for clean fit */
              line-height: 1.2;
              margin-bottom: 20px; 
            }
            
            /* The crucial fix for the author/date layout */
            .article-meta {
              flex-direction: column; /* Force vertical stacking */
              gap: 8px; /* Clean spacing between rows */
              font-size: 0.8rem;
            }
            .meta-divider {
              display: none; /* Removed entirely on mobile since items are stacked */
            }

            .article-body { 
              padding: 20px 15px; 
              font-size: 1.05rem; 
            }
            .article-body h2 { 
              font-size: 1.8rem; 
            }
            .h2h-widget { 
              padding: 15px; 
            }
            .team-identifier { 
              font-size: 1rem; 
            }
            .team-flag { 
              width: 36px; 
              height: 36px; 
              font-size: 1.2rem; 
            }
            .match-date-comp { 
              display: none; 
            }
            .team-name-small { 
              width: auto; 
            }
          }
        `}
      </style>

      {/* ─── HERO SECTION ─── */}
      <header className="hero-section">
        <img src={banner} alt="World Cup Semifinal Banner" className="hero-image" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="article-tag">World Cup 2026 Semifinals</span>
          <h1 className="article-title">The Pre-Match Analysis: Road to the Final</h1>
          <div className="article-meta">
            <strong>Debanjan Acharjee</strong>
            <span className="meta-divider">•</span>
            <span>July 13, 2026</span>
            <span className="meta-divider">•</span>
            <span>5 min read</span>
          </div>
        </div>
      </header>

      {/* ─── EDITORIAL BODY ─── */}
      <article className="article-body">
        <p>
          <span className="dropcap">T</span>he FIFA World Cup 2026 semi-finals are set. On July 15, European heavyweights France and Spain clash in Dallas (12:30 AM IST). The following day, England will face defending champions Argentina in a highly emotional fixture in Atlanta (12:30 AM IST). 
        </p>

        {/* ─── FRANCE VS SPAIN ─── */}
        <h2>France vs Spain: The Battle for Europe</h2>
        <p>
          Spain knocked France out of Euro 2024, and the tension ahead of their World Cup rematch is palpable. Spanish phenom Lamine Yamal added fuel to the fire during a recent press conference.
        </p>

        <div className="quote-block">
          <span className="quote-speaker">🗣️ Lamine Yamal (Spain):</span>
          "France wants revenge after the Euros? Good. Let them come. Spain already beat them once this cycle and we’re not scared. They can talk about redemption, but we’re here to win. This Spain side doesn’t repeat the same mistake twice."
        </div>

        <figure className="inline-image-showcase">
          <img src={Didi} alt="Didier Deschamps" className="inline-image" />
          <figcaption className="image-caption">France Head Coach, Didier Deschamps</figcaption>
        </figure>

        <p>
          France manager Didier Deschamps was quick to dismiss the young winger's comments, opting for a veteran's perspective on respect and humility in tournament football.
        </p>

        <div className="quote-block">
          <span className="quote-speaker">🗣️ Didier Deschamps (France):</span>
          "Lamine is an exceptional talent, but he still has a lot to learn. In football, you don’t prove you’re better with microphones—you prove it on the pitch. If he believes Spain are better, fantastic. We’ll answer in the only way that matters."
        </div>

        {/* ─── DASHBOARD WIDGET: FRANCE VS SPAIN ─── */}
        <h3>Head-to-Head Analytics</h3>
        <div className="h2h-widget">
          
          <div className="h2h-header">
            <div className="team-identifier">
              <span className="team-flag">🇫🇷</span> France
            </div>
            <div className="match-count">Last 5 Matches</div>
            <div className="team-identifier">
              Spain <span className="team-flag">🇪🇸</span>
            </div>
          </div>

          <div className="stat-distribution">
            <div className="distribution-labels">
              <span><span className="dot" style={{ backgroundColor: 'var(--color-france)' }}></span> 2 Wins</span>
              <span><span className="dot" style={{ backgroundColor: 'var(--color-draw)' }}></span> 0 Draws</span>
              <span>3 Wins <span className="dot" style={{ backgroundColor: 'var(--color-spain)' }}></span></span>
            </div>
            <div className="bar-container">
              <div className="bar-segment" style={{ width: '40%', backgroundColor: 'var(--color-france)' }}></div>
              <div className="bar-segment" style={{ width: '0%', backgroundColor: 'var(--color-draw)' }}></div>
              <div className="bar-segment" style={{ width: '60%', backgroundColor: 'var(--color-spain)' }}></div>
            </div>
          </div>

          <div className="recent-matches">
            <div className="recent-title">Match History Breakdown</div>
            <div className="match-history-grid">
              <div className="match-row">
                <span className="match-date-comp">Jun 2025 • UNL</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Spain</span>
                  <span className="score-pill">5 : 4</span>
                  <span className="team-name-small">France</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Jul 2024 • EURO</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Spain</span>
                  <span className="score-pill">2 : 1</span>
                  <span className="team-name-small">France</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Oct 2021 • UNL</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Spain</span>
                  <span className="score-pill">1 : 2</span>
                  <span className="team-name-small">France</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Mar 2017 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">France</span>
                  <span className="score-pill">0 : 2</span>
                  <span className="team-name-small">Spain</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">Sep 2014 • Frd</span>
                <div className="match-score-block">
                  <span className="team-name-small right">France</span>
                  <span className="score-pill">1 : 0</span>
                  <span className="team-name-small">Spain</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        


        {/* ─── ENGLAND VS ARGENTINA ─── */}
        <h2>England vs Argentina: The Historic Rivalry</h2>
        <p>
          The rivalry between Argentina and England carries a heavy history, stemming from the 1982 Falklands War and the legendary 1986 World Cup quarter-final where Diego Maradona scored both the "Hand of God" and the "Goal of the Century." This match in Atlanta will mark their first-ever meeting in a World Cup semi-final.
        </p>
         
        <figure className="inline-image-showcase">
          <img src={thomas} alt="Thomas Tuchel" className="inline-image" />
          <figcaption className="image-caption">England Head Coach, Thomas Tuchel</figcaption>
        </figure>

        <div className="quote-block">
          <span className="quote-speaker">🗣️ Thomas Tuchel (England):</span>
          "When you go against Argentina you need to be physically, psychologically, and emotionally prepared, because even the referees will test your patience. Messi will kill us if we lose focus."
        </div>

        <figure className="inline-image-showcase">
          <img src={scaloni} alt="Lionel Scaloni" className="inline-image" />
          <figcaption className="image-caption">Argentina Head Coach, Lionel Scaloni</figcaption>
        </figure>

        <p>
          Argentina manager Lionel Scaloni downplayed the geopolitical and historical weight of the fixture, attempting to shield his squad from the immense media pressure. 
        </p>

        <div className="quote-block">
          <span className="quote-speaker">🗣️ Lionel Scaloni (Argentina):</span>
          "It's just a football match. We respect England's quality, but our focus remains purely on what happens on the pitch."
        </div>

        {/* ─── DASHBOARD WIDGET: ENGLAND VS ARGENTINA ─── */}
        <h3>World Cup Head-to-Head Analytics</h3>
        <div className="h2h-widget">
          
          <div className="h2h-header">
            <div className="team-identifier">
              <span className="team-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span> England
            </div>
            <div className="match-count">Last 5 WC Meetings</div>
            <div className="team-identifier">
              Argentina <span className="team-flag">🇦🇷</span>
            </div>
          </div>

          <div className="stat-distribution">
            <div className="distribution-labels">
              <span><span className="dot" style={{ backgroundColor: 'var(--color-england)' }}></span> 3 Wins</span>
              <span><span className="dot" style={{ backgroundColor: 'var(--color-draw)' }}></span> 1 Draw</span>
              <span>1 Win <span className="dot" style={{ backgroundColor: 'var(--color-argentina)' }}></span></span>
            </div>
            <div className="bar-container">
              <div className="bar-segment" style={{ width: '60%', backgroundColor: 'var(--color-england)' }}></div>
              <div className="bar-segment" style={{ width: '20%', backgroundColor: 'var(--color-draw)' }}></div>
              <div className="bar-segment" style={{ width: '20%', backgroundColor: 'var(--color-argentina)' }}></div>
            </div>
          </div>

          <div className="recent-matches">
            <div className="recent-title">Historic World Cup Breakdown</div>
            <div className="match-history-grid">
              <div className="match-row">
                <span className="match-date-comp">2002 • Group</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Argentina</span>
                  <span className="score-pill">0 : 1</span>
                  <span className="team-name-small">England</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">1998 • R16</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Argentina</span>
                  <span className="score-pill">2 : 2</span>
                  <span className="team-name-small">England</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">1986 • QF</span>
                <div className="match-score-block">
                  <span className="team-name-small right">Argentina</span>
                  <span className="score-pill">2 : 1</span>
                  <span className="team-name-small">England</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">1966 • QF</span>
                <div className="match-score-block">
                  <span className="team-name-small right">England</span>
                  <span className="score-pill">1 : 0</span>
                  <span className="team-name-small">Argentina</span>
                </div>
              </div>
              <div className="match-row">
                <span className="match-date-comp">1962 • Group</span>
                <div className="match-score-block">
                  <span className="team-name-small right">England</span>
                  <span className="score-pill">3 : 1</span>
                  <span className="team-name-small">Argentina</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </article>
    </div>
  );
}