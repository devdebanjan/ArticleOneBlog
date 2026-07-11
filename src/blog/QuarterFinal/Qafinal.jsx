import React from 'react';
import { 
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
  PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip 
} from 'recharts';
import './Qafinal.css';

// ─── THE MATCH DATA & ARTICLES ───
const matches = [
  {
    id: "fra-mar",
    title: "1.France vs. Morocco: Tactical Dominance",
    team1: { name: "FRANCE", flag: "🇫🇷", rating: 88, color: "#00E5FF", winProb: "100%", goals: 2 },
    team2: { name: "MOROCCO", flag: "🇲🇦", rating: 78, color: "#FF4D4D", winProb: "0%", goals: 0 },
    stats: [
      { category: 'Attack', FRANCE: 90, MOROCCO: 72, max: 100 },
      { category: 'Defense', FRANCE: 88, MOROCCO: 78, max: 100 },
      { category: 'Possession', FRANCE: 85, MOROCCO: 70, max: 100 },
      { category: 'Pace', FRANCE: 94, MOROCCO: 85, max: 100 },
      { category: 'Tactics', FRANCE: 89, MOROCCO: 80, max: 100 },
    ],
    article: "France secured a clinical 2-0 victory to reach the semifinals, demonstrating superior control and finishing. Tactically, France maintained dominance in possession and effectively neutralized Morocco’s defensive setup. Despite Kylian Mbappé missing a first-half penalty saved by Yassine Bounou, the French side remained composed. The breakthrough came on the hour mark when Mbappé curled a superb finish into the far corner. Shortly after, he turned provider, slipping a pass to Ousmane Dembélé, who composedly fired home. France’s ability to transition quickly between defense and attack proved too much for the Moroccan defense. Morocco struggled to create meaningful chances against a disciplined French backline led by Dayot Upamecano. This win marks France's third consecutive World Cup semifinal appearance, underscoring their consistency and tactical adaptability under Didier Deschamps."
  },
  {
    id: "esp-bel",
    title: "2.Spain vs. Belgium: A Dramatic Quarterfinal",
    team1: { name: "SPAIN", flag: "🇪🇸", rating: 86, color: "#FFD700", winProb: "100%", goals: 2 },
    team2: { name: "BELGIUM", flag: "🇧🇪", rating: 84, color: "#FF0055", winProb: "0%", goals: 1 },
    stats: [
      { category: 'Attack', SPAIN: 85, BELGIUM: 82, max: 100 },
      { category: 'Defense', SPAIN: 82, BELGIUM: 78, max: 100 },
      { category: 'Possession', SPAIN: 95, BELGIUM: 75, max: 100 },
      { category: 'Pace', SPAIN: 80, BELGIUM: 88, max: 100 },
      { category: 'Tactics', SPAIN: 92, BELGIUM: 80, max: 100 },
    ],
    article: "Spain defeated Belgium 2-1 in a tightly contested quarterfinal, decided by substitute Mikel Merino’s late intervention. Spain took the lead in the 30th minute through a rebound finish from Fabián Ruiz. Belgium responded tactically by finding gaps in transition, leading to Charles De Ketelaere’s equalizer in the 41st minute with a header. The match remained deadlocked until the dying moments. Luis de la Fuente’s tactical substitution of Merino in the 86th minute proved decisive; just two minutes later, Merino pounced on a loose ball to secure the victory. Spain’s dominance in ball retention and clever utilization of their bench were key to overcoming a resilient Belgian side. This result sends Spain into a highly anticipated semifinal clash against France. Merino’s goal established a historical record, making him the first player in FIFA World Cup history to score winning goals as a substitute in two different knockout matches in a single tournament."
  }
];

export default function QuarterFinalAnalysis() {
  return (
    <div className="analysis-page-container">
      <div className="analysis-header">
        <h2>QUARTER FINAL ANALYSIS</h2>
        <div className="header-underline"></div>
      </div>

      {matches.map((match) => (
        <section key={match.id} className="match-analysis-section">
          
          <h3 className="match-article-title">{match.title}</h3>

          {/* ─── THE RADAR CHART LAYOUT ─── */}
          <div className="matchup-layout">
            
            {/* TEAM 1 (Left) */}
            <div className="team-profile">
              <div className="team-flag">{match.team1.flag}</div>
              <h4 className="team-name" style={{ color: match.team1.color }}>{match.team1.name}</h4>
              <div className="overall-rating" style={{ backgroundColor: match.team1.color, boxShadow: `0 0 15px ${match.team1.color}66` }}>
                {match.team1.rating}
              </div>
              <div className="quick-stats">
                 <div className="stat-item"><span>WIN</span><strong>{match.team1.winProb}</strong></div>
                 <div className="stat-item"><span>GOALS</span><strong>{match.team1.goals}</strong></div>
              </div>
            </div>

            {/* THE RADAR CHART (Center) */}
            <div className="chart-container">
              <ResponsiveContainer width="99%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="65%" data={match.stats}>
                  <PolarGrid stroke="#2d3748" />
                  <PolarAngleAxis dataKey="category" tick={{ fill: '#A0AEC0', fontSize: 11, fontWeight: 600 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  
                  {/* Team 1 Shape */}
                  <Radar name={match.team1.name} dataKey={match.team1.name} stroke={match.team1.color} fill={match.team1.color} fillOpacity={0.4} strokeWidth={2} />
                  {/* Team 2 Shape */}
                  <Radar name={match.team2.name} dataKey={match.team2.name} stroke={match.team2.color} fill={match.team2.color} fillOpacity={0.4} strokeWidth={2} />
                  
                  <Tooltip contentStyle={{ backgroundColor: '#121418', border: '1px solid #333', borderRadius: '8px' }} itemStyle={{ color: '#fff', fontWeight: 'bold' }} />
                  <Legend wrapperStyle={{ paddingTop: '20px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* TEAM 2 (Right) */}
            <div className="team-profile">
              <div className="team-flag">{match.team2.flag}</div>
              <h4 className="team-name" style={{ color: match.team2.color }}>{match.team2.name}</h4>
              <div className="overall-rating" style={{ backgroundColor: match.team2.color, color: '#fff', boxShadow: `0 0 15px ${match.team2.color}66` }}>
                {match.team2.rating}
              </div>
              <div className="quick-stats">
                 <div className="stat-item"><span>WIN</span><strong>{match.team2.winProb}</strong></div>
                 <div className="stat-item"><span>GOALS</span><strong>{match.team2.goals}</strong></div>
              </div>
            </div>
            
          </div>

          {/* ─── THE ARTICLE TEXT ─── */}
          <div className="match-article-body">
            <p>{match.article}</p>
          </div>

        </section>
      ))}
    </div>
  );
}