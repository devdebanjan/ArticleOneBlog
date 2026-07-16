import React, { useState, useEffect } from 'react';
import './FloatingFixtures.css';

export default function FloatingFixtures() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* ─── THE FLOATING SPINNING FOOTBALL ─── */}
      <button 
        className="floating-ball-btn" 
        onClick={() => setIsModalOpen(true)}
        aria-label="View Match Fixtures"
      >
        <div className="football-wrapper">
          <span className="spinning-football">⚽</span>
        </div>
        <span className="ball-tooltip">Fixtures</span>
      </button>

      {/* ─── THE POPUP MODAL (BRACKET VIEW) ─── */}
      {isModalOpen && (
        <div className="fixture-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="fixture-modal-content bracket-mode fade-in-up" onClick={(e) => e.stopPropagation()}>
            
            <div className="fixture-modal-header">
              <h3>Knockout Stage</h3>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                &times;
              </button>
            </div>

            <div className="bracket-scroll-container">
              
              {/* --- TOP HALF --- */}
              <div className="bracket-section">
                <div className="match-row qf-row">
                  <MatchBox team1="FRA" flag1="🇫🇷" score1="2" team2="MAR" flag2="🇲🇦" score2="0" status="2 - 0" />
                  <MatchBox team1="ESP" flag1="🇪🇸" score1="2" team2="BEL" flag2="🇧🇪" score2="1" status="2 - 1" />
                </div>
                
                {/* Connecting Lines */}
                <div className="connector-fork-down"></div>
                <div className="connector-line-vertical"></div>

                <div className="match-row sf-row">
                  <MatchBox team1="FRA" flag1="🇫🇷" score1="0" team2="ESP" flag2="🇪🇸" score2="2" status="Jul 15" />
                </div>
                
                <div className="connector-line-vertical"></div>
              </div>

              {/* --- FINALS ROW --- */}
              <div className="match-row finals-row">
                <div className="finals-left">
                  <MatchBox team1="FRA" flag1="🇫🇷" score1="-" team2="ENG" flag2="🏴󠁧󠁢󠁥󠁮󠁧󠁿" score2="-" status="Jul 19" badge="BRONZE-FINAL" badgeColor="blue" />
                </div>
                <div className="finals-center">
                  <MatchBox team1="ESP" flag1="🇪🇸" score1="-" team2="ARG" flag2="🇦🇷" score2="-" status="Jul 19" badge="FINAL" badgeColor="gold" />
                </div>
                <div className="finals-right trophy-section">
                  <div className="trophy-icon">🏆</div>
                  <span>CHAMPION</span>
                </div>
              </div>

              {/* --- BOTTOM HALF --- */}
              <div className="bracket-section">
                <div className="connector-line-vertical"></div>
                
                <div className="match-row sf-row">
                  <MatchBox team1="ENG" flag1="🏴󠁧󠁢󠁥󠁮󠁧󠁿" score1="1" team2="ARG" flag2="🇦🇷" score2="2" status="Jul 16" active={true} />
                </div>

                <div className="connector-line-vertical"></div>
                <div className="connector-fork-up"></div>

                <div className="match-row qf-row">
                  <MatchBox team1="NOR" flag1="🇳🇴" score1="1" team2="ENG" flag2="🏴󠁧󠁢󠁥󠁮󠁧󠁿" score2="2" status="Today" />
                  <MatchBox team1="ARG" flag1="🇦🇷" score1="3" team2="SUI" flag2="🇨🇭" score2="1" status="Today" />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* Reusable Component for the Dark Match Boxes */
function MatchBox({ team1, flag1, score1, team2, flag2, score2, status, active, badge, badgeColor }) {
  return (
    <div className={`match-box ${active ? 'active-match' : ''}`}>
      <div className="match-teams">
        <div className="team-col">
          <span className="flag">{flag1}</span>
          <span className="team-code">{team1}</span>
          <span className="score">{score1}</span>
        </div>
        <div className="team-col">
          <span className="flag">{flag2}</span>
          <span className="team-code">{team2}</span>
          <span className="score">{score2}</span>
        </div>
      </div>
      <div className="match-status">{status}</div>
      {badge && <div className={`match-badge badge-${badgeColor}`}>{badge}</div>}
    </div>
  );
}