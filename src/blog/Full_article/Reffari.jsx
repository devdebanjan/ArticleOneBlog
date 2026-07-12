import React from 'react';

// Image Imports
import refferi from '../Knockout/media/legendRef.jpeg';
import card from '../Knockout/media/card.jpeg';

export default function ArgentinaEgyptMatchReport() {
  return (
    <div className="match-report-wrapper">
      
      {/* ─── INJECTED CSS ─── */}
      <style>
        {`
          .match-report-wrapper {
            background-color: #050508;
            min-height: 100vh;
            padding: 0 0 80px 0;
            font-family: var(--font-ui, 'Inter', sans-serif);
            color: #E2E8F0;
          }

          /* Hero Section */
          .hero-section {
            position: relative;
            width: 100%;
            height: 60vh;
            min-height: 400px;
            max-height: 700px;
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
            z-index: 1;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, rgba(5, 5, 8, 0.2) 0%, rgba(5, 5, 8, 0.8) 60%, rgba(5, 5, 8, 1) 100%);
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
            color: #A4FF00;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
          }

          .article-title {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 3.5rem;
            line-height: 1.15;
            color: #ffffff;
            margin: 0 0 25px 0;
            text-shadow: 0 4px 20px rgba(0,0,0,0.8);
          }

          .article-meta {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
            font-size: 0.95rem;
            color: #A0AEC0;
          }
          
          .article-meta strong {
            color: #fff;
          }

          /* Editorial Body */
          .article-body {
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            font-size: 1.2rem;
            line-height: 1.8;
            color: #CBD5E1;
          }

          .article-body p {
            margin-bottom: 30px;
            text-align: justify;
          }

          .dropcap {
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 5rem;
            float: left;
            line-height: 0.8;
            padding-right: 15px;
            padding-top: 10px;
            background: linear-gradient(135deg, #00E5FF 0%, #A4FF00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          /* Inline Image Showcase */
          .inline-image-showcase {
            margin: 60px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .inline-image {
            width: 100%;
            border-radius: 16px;
            object-fit: cover;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          }

          .image-caption {
            margin-top: 15px;
            font-size: 0.9rem;
            color: #64748B;
            font-style: italic;
            text-align: center;
            letter-spacing: 0.5px;
          }

          /* Dramatic Highlight Block */
          .highlight-block {
            border-left: 4px solid #A4FF00;
            padding-left: 25px;
            margin: 40px 0;
            background: linear-gradient(to right, rgba(164, 255, 0, 0.05), transparent);
            padding: 20px 20px 20px 30px;
            border-radius: 0 12px 12px 0;
          }

          .highlight-block p {
            margin: 0;
            font-family: var(--font-heading, 'Playfair Display', serif);
            font-size: 1.5rem;
            color: #fff;
            line-height: 1.5;
            text-align: left;
          }

          /* Mobile Adjustments */
          @media (max-width: 768px) {
            .article-title { font-size: 2.5rem; }
            .hero-section { height: 50vh; padding-bottom: 40px; }
            .article-body { font-size: 1.1rem; padding: 20px; }
            .highlight-block p { font-size: 1.3rem; }
          }
        `}
      </style>

      {/* ─── HERO SECTION ─── */}
      <header className="hero-section">
        <img src={card} alt="VAR Drama and Player Reactions" className="hero-image" />
        <div className="hero-overlay"></div>
        
        <div className="hero-content fade-in-up">
          <span className="article-tag">World Cup Round of 16</span>
          <h1 className="article-title">Argentina's Miracle Comeback Overcomes Egypt Amid VAR Drama</h1>
          
          <div className="article-meta">
            <strong>Debanjan Acharjee</strong>
            <span>•</span>
            <span>July 8, 2026</span>
            <span>•</span>
            <span>5 mins read</span>
          </div>
        </div>
      </header>

      {/* ─── EDITORIAL BODY ─── */}
      <article className="article-body">
        <p>
          <span className="dropcap">O</span>n July 7, 2026, defending champions Argentina defeated Egypt 3-2 in a dramatic World Cup Round of 16 clash. Egypt stunned the stadium early, building a commanding 2-0 lead with goals from Yasser Ibrahim in the 15th minute and Mostafa Ziko in the 67th minute.
        </p>
        
        <div className="highlight-block">
          <p>Facing absolute elimination, Argentina mounted a historic 13-minute comeback to keep their World Cup defense alive.</p>
        </div>

        <p>
          Cristian Romero ignited the spark, scoring a towering 79th-minute header. Just four minutes later, Lionel Messi found the equalizer in the 83rd minute, sending the crowd into a frenzy. The ultimate heartbreak for Egypt arrived in stoppage time when Enzo Fernández secured the miraculous victory with a 93rd-minute header.
        </p>
         <p>
          The spectacular match, however, was severely marred by officiating controversies surrounding referee François Letexier. Egypt's manager, Hossam Hassan, furiously condemned the refereeing as rigged, specifically citing a controversially disallowed goal and a denied penalty that could have shifted the momentum back to the Pharaohs. 
        </p>
        <p>
          In the aftermath of the chaotic finish, the Egyptian Football Association formally submitted a complaint to FIFA. Despite the intense backlash, refereeing chief Pierluigi Collina publicly defended the officials' integrity, firmly standing by the VAR decisions made on the pitch.
        </p>

        {/* Inline Referee Image */}
        <figure className="inline-image-showcase">
          <img src={refferi} alt="Pierluigi Collina FIFA Referee Chief" className="inline-image" />
          <figcaption className="image-caption">
            Legendary Referee Pierluigi Collina (FIFA Referee Chief) defended the integrity of the match officials.
          </figcaption>
        </figure>

       
        <h3>Pierluigi Collina (FIFA Referee Chief) Explained -----</h3>

        <p>
          🗣️ Pierluigi Collina (FIFA Referee Chief) explains two controversial decisions in the Argentina vs Egypt match:

          🔴 Egypt's goal was disallowed because Marwan Attia clearly stepped on Lisandro Martínez's foot before scoring. The referee made the correct decision to disallow the goal.

          🟢 The duel between Salah and Julián Álvarez was deemed normal contact in play, not a foul. The referee was right to let the game continue.

          🗣️ Pierluigi Collina:

          "After every goal, VAR checks the entire attacking phase. If there's a foul in the build-up that affects the goal, the referee will be directed to review it."

          "Marwan Attia clearly stepped on Lisandro Martínez's foot. A foul is still a foul."

          "Salah vs Álvarez incident? It was considered fair contact by the referee and VAR."
        </p>
      </article>

    </div>
  );
}