import React from 'react';
import './MatchStatsCard.css'; // Make sure you have this CSS file created

export default function MatchData({ matchInfo }) {
  // If no data is passed, render nothing to prevent crashes
  if (!matchInfo) return null;

  return (
    <div className="match-widget">
      
      {/* ─── TOP CARD: SCOREBOARD ─── */}
      <div className="widget-card top-card">
        <div className="widget-header">
          ⚽ {matchInfo.stage}
          <div className="widget-subheader">{matchInfo.date} • {matchInfo.venue}</div>
        </div>

        <div className="widget-scoreboard">
          {/* Home Team */}
          <div className="widget-team home-side">
            <span className="widget-team-name">{matchInfo.homeTeam}</span>
            <span className="widget-badge">FIFA #{matchInfo.homeRank}</span>
            <span className="widget-flag">{matchInfo.homeFlag}</span>
          </div>

          {/* Score */}
          <div className="widget-score-box">
            <div className="widget-score">{matchInfo.homeScore} - {matchInfo.awayScore}</div>
            <div className="widget-status">Full time</div>
          </div>

          {/* Away Team */}
          <div className="widget-team away-side">
            <span className="widget-flag">{matchInfo.awayFlag}</span>
            <span className="widget-team-name">{matchInfo.awayTeam}</span>
            <span className="widget-badge">FIFA #{matchInfo.awayRank}</span>
          </div>
        </div>

        {/* Scorers (Only shows if scorers exist) */}
        <div className="widget-scorers">
          {matchInfo.scorers && matchInfo.scorers.map((scorer, index) => (
            <div key={index} className="scorer-line">
              {scorer.name} {scorer.time} ⚽
            </div>
          ))}
        </div>
      </div>

      {/* ─── BOTTOM CARD: STATS ─── */}
      <div className="widget-card bottom-card">
        <div className="widget-stats-title">Top stats</div>
        
        {/* Possession Bar */}
        <div className="widget-stat-row">
          <div className="widget-stat-labels">
            <span className="stat-num">{matchInfo.stats.possession.home}%</span>
            <span className="widget-stat-name">Ball possession</span>
            <span className="stat-num">{matchInfo.stats.possession.away}%</span>
          </div>
          <div className="widget-progress-container">
            <div 
              className="widget-progress-home" 
              style={{ width: `${matchInfo.stats.possession.home}%` }}
            ></div>
            <div 
              className="widget-progress-away" 
              style={{ width: `${matchInfo.stats.possession.away}%` }}
            ></div>
          </div>
        </div>

        {/* Expected Goals (xG) */}
        <div className="widget-stat-text-row">
          <span className="stat-num">{matchInfo.stats.xg.home}</span>
          <span className="widget-stat-name">Expected goals (xG)</span>
          <span className="stat-num">{matchInfo.stats.xg.away}</span>
        </div>

        {/* Total Shots */}
        <div className="widget-stat-text-row">
          <span className="stat-num">{matchInfo.stats.shots.home}</span>
          <span className="widget-stat-name">Total shots</span>
          <span className="stat-num">{matchInfo.stats.shots.away}</span>
        </div>
      </div>
      
    </div>
  );
}