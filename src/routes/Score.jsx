import React, { useState, useEffect } from "react";
import './Score.css'; 

// const token = import.meta.env.Token ;   

// --- TIME FORMATTING HELPERS ---
const formatCenterTime = (utcDate) => {
    if (!utcDate) return '-';
    return new Date(utcDate).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

const formatFullMetaDate = (utcDate) => {
    if (!utcDate) return '-';
    const date = new Date(utcDate);
    const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true };
    return date.toLocaleDateString('en-US', options);
};

const getRelativeDayStatus = (utcDate, status) => {
    if (status === 'IN_PLAY') return 'LIVE';
    if (status === 'FINISHED') return 'Full Time';
    if (status === 'PAUSED') return 'Half Time';

    if (!utcDate) return '';
    const date = new Date(utcDate);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === tomorrow.toDateString()) return 'Tomorrow';
    
    return 'Upcoming';
};

const Scoreboard = () => {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    // --- REAL API FETCHING LOGIC ---
    const fetchData = async () => {
        try {
            // Note: Add ?dateFrom=2026-07-14&dateTo=2026-07-15 to the URL if you want to force specific dates
             const response = await fetch("/api/football/v4/matches", {
    headers: {
        // Make sure your key is wrapped in quotes like a string!
        "X-Auth-Token": import.meta.env.VITE_FOOTBALL_API_KEY 
                     }
                });

            const data = await response.json();
            
            setScores(data.matches || []); 
            setLoading(false);
        } catch (error) {
            console.error("Error fetching live scores:", error);
            setLoading(false);
        }
    }

    useEffect(() => {
        // 1. Fetch immediately when the page loads
        fetchData(); 
        
        // 2. Automatically poll the API every 60 seconds for live score updates
        const intervalId = setInterval(() => {
            fetchData();
        }, 60000); 
        
        // 3. Clean up the interval
        return () => clearInterval(intervalId);
    }, []);

    if (loading) return <div className="scoreboard-loading">Loading live matches...</div>;

    return (
        <div className="live-scoreboard-wrapper">
            <div className="matches-grid">
                
                {scores.length === 0 ? (
                    <div className="empty-scoreboard">
                        <p>No matches scheduled for today. Check back later!</p>
                    </div>
                ) : (
                    scores.map((match) => (
                        <div key={match.id} className="hero-match-card fade-in">
                            
                            {/* --- TOP BAR --- */}
                            <div className="hero-top-bar">
                                <div className="hero-back">
                                    
                                </div>
                                <div className="hero-competition">
                                    🏆 {match.competition?.name || 'FIFA World Cup Semi-final'}
                                </div>
                               
                            </div>

                            {/* --- META INFO BAR --- */}
                            <div className="hero-meta-bar">
                                <span>📅 {formatFullMetaDate(match.utcDate)}</span>
                                <span>🏟️ {match.venue || 'Dallas Stadium'}</span>
                                <span>🙋🏽‍♂️ {match.referees?.[0]?.name || 'Iván Arcides Barton Cisneros'}</span>
                            </div>

                            {/* --- MAIN MATCHUP DISPLAY --- */}
                            <div className="hero-main-matchup">
                                
                                {/* Home Team (Left) */}
                                <div className="hero-team home-team">
                                    <div className="hero-team-info">
                                        <span className="hero-team-name">{match.homeTeam?.name || 'Home Team'}</span>
                                        <span className="hero-team-sub">{match.homeTeam?.tla ? `${match.homeTeam.tla} Team` : 'FIFA'}</span>
                                    </div>
                                    <img src={match.homeTeam?.crest || 'https://via.placeholder.com/40'} alt="Home" className="hero-flag" />
                                </div>

                                {/* Center Score / Time */}
                                <div className="hero-score-center">
                                    <span className="hero-score-big">
                                        {/* If Live or Finished, show SCORE. Otherwise, show TIME. */}
                                        {match.status === 'IN_PLAY' || match.status === 'FINISHED' || match.status === 'PAUSED'
                                            ? `${match.score?.fullTime?.home ?? 0} - ${match.score?.fullTime?.away ?? 0}` 
                                            : formatCenterTime(match.utcDate)}
                                    </span>
                                    <span className="hero-score-status" style={{ color: match.status === 'IN_PLAY' ? '#ff4d4d' : '#94a3b8' }}>
                                        {getRelativeDayStatus(match.utcDate, match.status)}
                                    </span>
                                </div>

                                {/* Away Team (Right) */}
                                <div className="hero-team away-team">
                                    <img src={match.awayTeam?.crest || 'https://via.placeholder.com/40'} alt="Away" className="hero-flag" />
                                    <div className="hero-team-info">
                                        <span className="hero-team-name">{match.awayTeam?.name || 'Away Team'}</span>
                                        <span className="hero-team-sub">{match.awayTeam?.tla ? `${match.awayTeam.tla} Team` : 'FIFA'}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Scoreboard;