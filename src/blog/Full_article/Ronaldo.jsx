import React from 'react';

// Import your video file here
import matchVideo from '../Knockout/media/moment.mp4';

export default function RonaldoLegacyArticle() {
  return (
    <div className="legacy-article-wrapper fade-in">
      
      {/* ─── INJECTED CSS ─── */}
      <style>
        {`
          /* Base Wrapper */
          .legacy-article-wrapper {
            background-color: #050508;
            min-height: 100vh;
            font-family: var(--font-ui, 'Inter', sans-serif);
            color: #E2E8F0;
            padding-bottom: 80px;
          }

          /* ─── IMMERSIVE HERO WITH VIDEO BACKGROUND ─── */
          .immersive-hero {
            position: relative;
            width: 100%;
            height: 75vh;
            min-height: 500px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
            background-color: #000; /* Fallback */
          }

          /* Video background rules to span edge-to-edge behind text */
          .hero-bg-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 1;
            pointer-events: none; /* Prevents users from right-clicking/pausing video */
          }

          /* The seamless dark fade gradient overlay */
          .hero-gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              to bottom, 
              rgba(5, 5, 8, 0.2) 0%, 
              rgba(5, 5, 8, 0.6) 60%, 
              #050508 100-percent
            );
            background: linear-gradient(
              to bottom, 
              rgba(5, 5, 8, 0.2) 0%, 
              rgba(5, 5, 8, 0.6) 60%, 
              #050508 100%
            );
            z-index: 2;
          }

          .hero-content {
            position: relative;
            z-index: 3;
            max-width: 900px;
            padding: 0 20px;
            margin-top: 60px;
          }

          .hero-tag {
            display: inline-block;
            background: rgba(164, 255, 0, 0.15);
            color: #A4FF00;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 25px;
          }

          .hero-title {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 4.2rem;
            line-height: 1.15;
            color: #ffffff;
            margin: 0;
            text-shadow: 0 4px 20px rgba(0,0,0,0.6);
          }

          /* Thin layout divider line */
          .hero-divider {
            width: 80%;
            height: 1px;
            background: rgba(255, 255, 255, 0.15);
            margin: 30px auto;
          }

          .hero-meta {
            font-size: 0.9rem;
            color: #E2E8F0;
            font-weight: 600;
            letter-spacing: 1.5px;
            text-transform: uppercase;
          }
          
          .hero-meta strong {
            color: #ffffff;
            font-weight: 800;
          }

          /* ─── EDITORIAL BODY ─── */
          .editorial-body {
            max-width: 800px;
            margin: 20px auto 0;
            padding: 0 20px;
            font-size: 1.2rem;
            line-height: 1.9;
            color: #CBD5E1;
          }

          .editorial-body p {
            margin-bottom: 30px;
            text-align: justify;
          }

          .dropcap {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 5.5rem;
            float: left;
            line-height: 0.8;
            padding-right: 18px;
            padding-top: 12px;
            background: linear-gradient(135deg, #A4FF00 0%, #00E5FF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Highlight pull-quote */
          .highlight-block {
            border-left: 4px solid #A4FF00;
            background: linear-gradient(to right, rgba(164, 255, 0, 0.05), transparent);
            padding: 25px 30px;
            margin: 45px 0;
            border-radius: 0 12px 12px 0;
          }

          .highlight-block p {
            margin: 0;
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 1.45rem;
            color: #fff;
            line-height: 1.6;
            text-align: left;
          }

          /* ─── PREMIUM 2-TIER STATS DASHBOARD ─── */
          .premium-stats-section {
            max-width: 900px;
            margin: 60px auto 0 auto;
            display: flex;
            flex-direction: column;
            gap: 35px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            padding: 45px 30px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          }

          .stats-row {
            display: flex;
            justify-content: space-between;
          }

          .stats-row.primary-stats {
            padding-bottom: 35px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }

          .stat-block {
            text-align: center;
            flex: 1;
            border-right: 1px solid rgba(255, 255, 255, 0.05);
            padding: 0 15px;
          }

          .stat-block:last-child {
            border-right: none;
          }

          .stat-block strong {
            display: block;
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 3rem;
            line-height: 1;
            margin-bottom: 12px;
            background: linear-gradient(135deg, #ffffff 0%, #C5A059 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .stat-block span {
            color: #A0AEC0;
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: 700;
          }

          /* ─── MOBILE RESPONSIVENESS ─── */
          @media (max-width: 768px) {
            .hero-title { font-size: 2.8rem; }
            .immersive-hero { height: 60vh; }
            .hero-divider { width: 90%; }
            .hero-meta { font-size: 0.75rem; }
            .editorial-body { font-size: 1.1rem; }
            .highlight-block p { font-size: 1.25rem; }
            
            .stats-row { flex-direction: column; gap: 30px; }
            .stats-row.primary-stats { padding-bottom: 0; border-bottom: none; }
            .stat-block { border-right: none; padding: 0; margin-bottom: 25px; }
            .stat-block:last-child { margin-bottom: 0; }
          }
        `}
      </style>

      {/* ─── IMMERSIVE HERO WITH VIDEO BACKGROUND ─── */}
      <header className="immersive-hero">
        
        {/* HTML5 Video Backdrop Setup */}
        <video 
          src={matchVideo} 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-bg-video"
        />
        
        <div className="hero-gradient-overlay"></div>
        
        <div className="hero-content">
          <span className="hero-tag">End of an Era</span>
          <h1 className="hero-title">The Sun Sets on a Legend</h1>
          
          <div className="hero-divider"></div>
          
          <div className="hero-meta">
            <strong>DEBANJAN ACHARJEE</strong> &nbsp;•&nbsp; JULY 12, 2026 &nbsp;•&nbsp; 10 MINS READ
          </div>
        </div>
      </header>

      {/* ─── EDITORIAL BODY ─── */}
      <article className="editorial-body">
        <p>
          <span className="dropcap">T</span>he sun has finally set on the most prolific international career in football history. Following Portugal's agonizing 1-0 defeat to Spain in the 2026 World Cup Round of 16, Cristiano Ronaldo walked off the sport’s grandest stage for the final time. At 41 years old, he didn't just participate; he made history. 
        </p>
        
        <div className="highlight-block">
          <p>
            Across four matches and 351 minutes of grueling tournament play, Ronaldo shattered an impossible ceiling, becoming the first men's player to score in six different World Cup editions.
          </p>
        </div>

        <p>
          His campaign featured three goals—including a crucial penalty against Croatia to mark his first-ever knockout stage strike. Though Mikel Merino’s stoppage-time winner denied him the elusive golden trophy, Ronaldo’s legacy remains untouchable. He departs the World Cup arena with 11 total goals, leaving behind a 20-year trail of excellence that will likely never be replicated. Obrigado, Captain.
        </p>
      </article>

      {/* ─── UPGRADED 2-TIER STATS DASHBOARD ─── */}
      <div className="premium-stats-section">
        <div className="stats-row primary-stats">
          <div className="stat-block">
            <strong>4</strong>
            <span>Matches Played</span>
          </div>
          <div className="stat-block">
            <strong>351</strong>
            <span>Minutes Played</span>
          </div>
          <div className="stat-block">
            <strong>3</strong>
            <span>Tournament Goals</span>
          </div>
          <div className="stat-block">
            <strong>17</strong>
            <span>Total Shots</span>
          </div>
        </div>
        
        <div className="stats-row secondary-stats">
          <div className="stat-block">
            <strong>84.2%</strong>
            <span>Pass Accuracy</span>
          </div>
          <div className="stat-block">
            <strong>0</strong>
            <span>Chances Created</span>
          </div>
          <div className="stat-block">
            <strong>1st</strong>
            <span>Knockout Goal</span>
          </div>
          <div className="stat-block">
            <strong>6</strong>
            <span>World Cups Scored In</span>
          </div>
        </div>
      </div>

    </div>
  );
}