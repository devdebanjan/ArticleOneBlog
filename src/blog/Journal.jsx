import React, { useState } from 'react';
import './Journal.css';
import faad from '../ComeBack/Neymar.jpg';
import Ney10 from '../ComeBack/Neymar2.jpg';
import sholay from '../ComeBack/messi-ronaldo.jpg';
import stands from '../ComeBack/Standing.png';

import LikeButton from '../components/JournallikeComment/JournalLike.jsx';

export default function Journal() {
  // 1. Lightbox State
  const [isBracketEnlarged, setIsBracketEnlarged] = useState(false);

  // Array holding all match data for clean rendering
  const groupMatches = [
    { group: "A", matches: ["South Africa 🇿🇦 VS South Korea 🇰🇷 || Final Score: 1-0", "Czechia 🇨🇿 VS Mexico 🇲🇽 || Final Score: 0-3"] },
    { group: "B", matches: ["Switzerland 🇨🇭 VS Canada 🇨🇦 || Final Score: 2-1", "Bosnia & Herz. 🇧🇦 VS Qatar 🇶🇦 || Final Score: 3-1"] },
    { group: "C", matches: ["Morocco 🇲🇦 VS Haiti 🇭🇹 || Final Score: 4-2"] },
    { group: "D", matches: ["Turkiye 🇹🇷 VS USA 🇺🇸 || Final Score: 3-2", "Paraguay 🇵🇾 VS Australia 🇦🇺 || Final Score: 0-0"] },
    { group: "E", matches: ["Curacao 🇨🇼 VS Ivory Coast 🇨🇮 || Final Score: 0-2", "Ecuador 🇪🇨 VS Germany 🇩🇪 || Final Score: 2-1"] },
    { group: "F", matches: ["Tunisia 🇹🇳 VS Netherlands 🇳🇱 || Final Score: 1-3", "Japan 🇯🇵 VS Sweden 🇸🇪 || Final Score: 1-1"] },
    { group: "G", matches: ["New Zealand 🇳🇿 VS Belgium 🇧🇪 || Final Score: 1-5", "Egypt 🇪🇬 VS Iran 🇮🇷 || Final Score: 1-1"] },
    { group: "H", matches: ["Cabo Verde 🇨🇻 VS Saudi Arabia 🇸🇦 || Final Score: 0-0", "Uruguay 🇺🇾 VS Spain 🇪🇸 || Final Score: 0-1"] },
    { group: "I", matches: ["Norway 🇳🇴 VS France 🇫🇷 || Final Score: 1-4", "Senegal 🇸🇳 VS Iraq 🇮🇶 || Final Score: 5-0"] },
    { group: "J", matches: ["Algeria 🇩🇿 VS Austria 🇦🇹 || Final Score: 1-1", "Jordan 🇯🇴 VS Argentina 🇦🇷 || Final Score: 1-3"] },
    { group: "K", matches: ["Uzbekistan 🇺🇿 VS DR Congo 🇨🇩 || Final Score: 1-3", "Colombia 🇨🇴 VS Portugal 🇵🇹 || Final Score: 0-0"] },
    { group: "L", matches: ["England 🏴󠁧󠁢󠁥󠁮󠁧󠁿 VS Panama 🇵🇦  || Final Score: 2-0", "Ghana 🇬🇭 VS Croatia 🇭🇷 || Final Score: 1-2"] } 
  ];
  const eliminatedTeams = [
  { group: "A", teams: ["Czechia 🇨🇿"] },
  { group: "B", teams: ["Qatar 🇶🇦"] },
  { group: "C", teams: ["Haiti 🇭🇹"] },
  { group: "D", teams: ["Turkiye 🇹🇳"] },
  { group: "E", teams: ["Curacao 🇨🇼"] },
  { group: "F", teams: ["Tunisia 🇹🇳",] },
  { group: "G", teams: ["New Zealand 🇳🇿"] },
  { group: "H", teams: ["Saudi Arabia 🇸🇦"] },
  { group: "I", teams: ["Iraq 🇮🇶"] },
  { group: "J", teams: ["Jordan 🇯🇴"] },
  { group: "K", teams: ["Uzbekistan 🇺🇿"] },
  { group: "L", teams: ["Panama 🇵🇦"] },
  {group:"3rd Place Team", teams:["South Korea 🇰🇷", "Iran 🇮🇷", "Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Uruguay 🇺🇾"]}
];

  return (
    <article className="journal-container fade-in">
      
      {/* NEYMAR SECTION */}
      <section className="article-section">
        <header className="article-header">
          <h2 className="main-heading">The Pain and the Joy: Neymar’s 981-Day Nightmare Ends</h2>
          <div className="image-gallery">
            <img className="banner-img" src={faad} alt="Neymar waving to fans" />
            <img className="banner-img" src={Ney10} alt="Neymar emotional on the pitch" />
          </div>
          <h6 className="image-caption">After 90 Mins Can't Hold The Tears </h6>
          <p className="author-date">Debanjan Acharjee | Jun 28, 2026, 10:00 AM</p>
        </header>
           <div className="article-footer">
             {/* This ID must be unique for each article so likes don't mix! */}
             <LikeButton articleId="journal-neymar-return" /> 
           </div>
        <hr className="custom-line" />

        <div className="content-block">
          <h4 className="match-score">Brazil 🇧🇷 VS Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿 || Final Scoreline ---- 3-0 </h4>
          <p>
            For 981 agonizing days, football lost its most vibrant artist. Neymar's nightmare began on October 17, 2023, when a terrible tackle against Uruguay tore his ACL and meniscus. He left the pitch in tears, leaving the football world in complete shock. <a href="https://www.beinsports.com/en-us" target="_blank" rel="noreferrer">Neymar10</a>
          </p>
          <p>
            The long road back to fitness was filled with physical and mental suffering, including a frustrating calf injury in May 2026. But in the 76th minute against Scotland, the painful waiting finally ended. Coming on for a brief 15-minute cameo, Neymar stepped back onto the pitch to a deafening roar from the crowd.
          </p>
          <p>
            While Vinícius Júnior dominated the scoreboard with two brilliant goals to seal the 3-0 victory, the night belonged to Neymar. At the final whistle, the immense weight of his journey poured out. As seen in the images above, he wept uncontrollably into his jersey—a beautiful testament to an indestructible human spirit. <a href="https://www.fifa.com/en" target="_blank" rel="noreferrer">FIFA</a>
          </p>
        </div>
      </section>

      <hr className="custom-line" />

      {/* MESSI SECTION */}
      <section className="article-section">
        <h3 className="section-title">Goat Race Between M10 & CR7</h3>
        <img className="feature-img" src={sholay} alt="Messi and Ronaldo Graphic" />
        <h4 className="match-score">Argentina 🇦🇷 VS Austria 🇦🇹 || Final Scoreline ---- 2-0 </h4>
        
        <div className="content-block">
          <p>
            On June 22, 2026, Argentina faced Austria in the <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings" target='_blank' rel="noreferrer">FIFA World Cup Group J</a>. Early in the match, <a href="https://www.instagram.com/leomessi" target='_blank' rel="noreferrer">Messi</a> did miss a penalty kick in the 8th minute. However, he quickly bounced back from that setback.
          </p>
          <p>
            He scored a brilliant goal in the 38th minute and added another deep into stoppage time (90'+5) to secure a 2-0 victory for Argentina. This brace was historic: it brought his total career <a href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/fifa-world-cup-all-time-leading-scorers" target='_blank' rel="noreferrer">World Cup goals to 18</a>. With these goals, he officially surpassed Germany's Miroslav Klose to become the all-time leading goal-scorer in <a href="https://www.nytimes.com/athletic/7380425/2026/06/22/lionel-messi-world-cup-goals-record-miroslav-klose/" target='_blank' rel="noreferrer">World Cup history.</a> The win guarantees Argentina a spot in the Round of 32.
          </p>
        </div>
      </section>

      <hr className="custom-line" />

      {/* RONALDO SECTION */}
      <section className="article-section">
        <h3 className="section-title">The King Returns: Cristiano Ronaldo’s Historic Comeback</h3>
        <h4 className="match-score">Portugal 🇵🇹 VS Uzbekistan 🇺🇿 || Final Scoreline --- 5-0 </h4>
        
        <div className="content-block">
          <p>
            After a difficult 1-1 draw against DR Congo, the noise surrounding <a href="https://www.instagram.com/cristiano/" target='_blank' rel="noreferrer">Cristiano Ronaldo</a> was deafening. Critics doubted him, and a 10-game international goal drought left many wondering if the 41-year-old legend's time had finally passed. Ronaldo himself admitted it was a "dark week" where he felt like he was "already retired".
          </p>
          <h4 className="highlight-text">But true champions respond on the pitch.</h4>
          <p>
            Before halftime, he struck again to complete a beautiful brace, finally unleashing his trademark celebration to the roar of the crowd. Portugal went on to win 5-0, but the night belonged to their captain. With these two goals, Ronaldo made history. He became the first male player to score in six different <a href="https://www.espn.in/football/story/_/id/49154970/portugal-cristiano-ronaldo-goal-first-score-six-world-cups-uzbekistan" target='_blank' rel="noreferrer">World Cups</a> and surpassed <a href="https://allportugalpress.com/article/2273fa4d-69d7-404d-99af-ddf5b0446448" target='_blank' rel="noreferrer">Eusébio</a> to become Portugal’s all-time top World Cup scorer with 10 goals.
          </p>
          <h4 className="highlight-text">Age is just a number for CR7. The king is officially back, proving that hard work and belief can conquer any criticism.</h4>
        </div>
      </section>

      <hr className="custom-line" />

      {/* RECAP GRID SECTION */}
      <section className="article-section">
        <h3 className="section-title">Others Match Recap With Scoreline</h3>
        <div className="recap-grid">
          {groupMatches.map((data, index) => (
            <div key={index} className="recap-card">
              <h3 className="group-title">Group {data.group}</h3>
              {data.matches.map((match, i) => (
                <h5 key={i} className="group-match">{match}</h5>
              ))}
            </div>
          ))}
        </div>
      </section>
      
      {/* STANDINGS SECTION */}
      <div className='standings'>
       <h3 className="section-title">Final Standings of 32 Teams</h3>
        
        {/* 2. Added onClick handler and the clickable-bracket class */}
        <img 
          className='feature-img clickable-bracket' 
          src={stands} 
          alt="Tournament Bracket"
          onClick={() => setIsBracketEnlarged(true)}
          title="Click to enlarge"
        />

        <h3 className="section-title">*Best Next Round Qualified Team (Individual perspective): <a href='https://www.aljazeera.com/sports/2026/6/27/cape-verde-break-record-as-smallest-nation-to-reach-world-cup-knockouts' target='_blank' rel="noreferrer">Cabo Verde 🇨🇻 </a>|| On there first Debiuted they qualify for the Next ROund *</h3>
      </div>

      {/* 3. The Lightbox Overlay (Only renders when state is true) */}
      {isBracketEnlarged && (
        <div className="lightbox-overlay" onClick={() => setIsBracketEnlarged(false)}>
          <span className="close-btn">&times;</span>
          <img 
            src={stands} 
            alt="Enlarged Tournament Bracket" 
            className="lightbox-img" 
            onClick={(e) => e.stopPropagation()} // Prevents clicks on the image itself from closing it
          />
        </div>
      )},
      <section className="article-section">
  <h3 className="section-title">End of the Road: Eliminated Teams</h3>
  
  <div className="eliminated-card">
    <div className="eliminated-header">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
      <h4>Knocked Out in Group Stages</h4>
    </div>

    <div className="eliminated-grid">
      {eliminatedTeams.map((data, index) => (
        <div key={index} className="eliminated-group">
          <span className="e-group-badge">Group {data.group}</span>
          <div className="e-team-list">
            {data.teams.map((team, i) => (
              <span key={i} className="e-team-name">
                {team}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </article>
  );
}