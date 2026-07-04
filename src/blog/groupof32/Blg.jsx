import React from 'react';
import './blog.css';
import MatchData from './Matachdata.jsx';
import banner from './images/banner.jpeg';
import Fixture from './TournamentTree.jsx';

import Audio from '../../audio/AudioPlayer.jsx'
import LikeButton from '../../components/JournallikeComment/JournalLike.jsx';

export default function Blg() {
  const matchDetails = {
    spain: { homeTeam: "Spain", awayTeam: "Austria", homeScore: "3", awayScore: "0", homeFlag: "🇪🇸", awayFlag: "🇦🇹", homeRank: "2", awayRank: "24", stage: "Round of 32", venue: "Los Angeles Stadium", date: "July 3", scorers: [{name: "Oyarzabal", time: "36', 89'"}, {name: "Porro", time: "66'"}], stats: { possession: {home: 64, away: 36}, xg: {home: 2.80, away: 0.32}, shots: {home: 23, away: 5} } },
    argentina: { homeTeam: "Argentina", awayTeam: "Cabo Verde", homeScore: "3", awayScore: "2", homeFlag: "🇦🇷", awayFlag: "🇨🇻", homeRank: "1", awayRank: "65", stage: "Round of 32", venue: "Miami Stadium", date: "July 4", scorers: [], stats: { possession: {home: 60, away: 40}, xg: {home: 2.1, away: 0.9}, shots: {home: 15, away: 8} } },
    france: { homeTeam: "France", awayTeam: "Sweden", homeScore: "3", awayScore: "0", homeFlag: "🇫🇷", awayFlag: "🇸🇪", homeRank: "3", awayRank: "20", stage: "Round of 32", venue: "New Jersey", date: "July 4", scorers: [], stats: { possession: {home: 55, away: 45}, xg: {home: 2.5, away: 0.5}, shots: {home: 18, away: 6} } },
    mexico: { homeTeam: "Mexico", awayTeam: "Ecuador", homeScore: "2", awayScore: "0", homeFlag: "🇲🇽", awayFlag: "🇪🇨", homeRank: "12", awayRank: "30", stage: "Round of 32", venue: "Estadio Azteca", date: "July 4", scorers: [], stats: { possession: {home: 52, away: 48}, xg: {home: 1.8, away: 0.7}, shots: {home: 12, away: 9} } },
    belgium: { homeTeam: "Belgium", awayTeam: "Senegal", homeScore: "3", awayScore: "2", homeFlag: "🇧🇪", awayFlag: "🇸🇳", homeRank: "4", awayRank: "18", stage: "Round of 32", venue: "Seattle Stadium", date: "July 5", scorers: [], stats: { possession: {home: 58, away: 42}, xg: {home: 2.2, away: 1.5}, shots: {home: 16, away: 11} } },
    brazil: { homeTeam: "Brazil", awayTeam: "Japan", homeScore: "2", awayScore: "1", homeFlag: "🇧🇷", awayFlag: "🇯🇵", homeRank: "5", awayRank: "15", stage: "Round of 32", venue: "Houston", date: "July 5", scorers: [], stats: { possession: {home: 62, away: 38}, xg: {home: 2.0, away: 0.8}, shots: {home: 19, away: 7} } },
    england: { homeTeam: "England", awayTeam: "DR Congo", homeScore: "2", awayScore: "1", homeFlag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", awayFlag: "🇨🇩", homeRank: "6", awayRank: "60", stage: "Round of 32", venue: "Atlanta Stadium", date: "July 5", scorers: [{name: "Kane", time: "68', 82'"}], stats: { possession: {home: 65, away: 35}, xg: {home: 2.4, away: 0.6}, shots: {home: 21, away: 4} } },
    portugal: { homeTeam: "Portugal", awayTeam: "Croatia", homeScore: "2", awayScore: "1", homeFlag: "🇵🇹", awayFlag: "🇭🇷", homeRank: "7", awayRank: "10", stage: "Round of 32", venue: "Toronto Stadium", date: "July 6", scorers: [], stats: { possession: {home: 54, away: 46}, xg: {home: 1.6, away: 1.2}, shots: {home: 14, away: 10} } },
    colombia: { homeTeam: "Colombia", awayTeam: "Ghana", homeScore: "2", awayScore: "0", homeFlag: "🇨🇴", awayFlag: "🇬🇭", homeRank: "14", awayRank: "45", stage: "Round of 32", venue: "Kansas City Stadium", date: "July 6", scorers: [], stats: { possession: {home: 51, away: 49}, xg: {home: 1.4, away: 0.8}, shots: {home: 11, away: 9} } },
    paraguay: { homeTeam: "Paraguay", awayTeam: "Germany", homeScore: "1 (4)", awayScore: "1 (3)", homeFlag: "🇵🇾", awayFlag: "🇩🇪", homeRank: "35", awayRank: "8", stage: "Round of 32", venue: "Foxborough", date: "July 6", scorers: [], stats: { possession: {home: 35, away: 65}, xg: {home: 0.9, away: 2.1}, shots: {home: 6, away: 18} } },
    switzerland: { homeTeam: "Switzerland", awayTeam: "Algeria", homeScore: "2", awayScore: "0", homeFlag: "🇨🇭", awayFlag: "🇩🇿", homeRank: "15", awayRank: "32", stage: "Round of 32", venue: "BC Place", date: "July 7", scorers: [], stats: { possession: {home: 56, away: 44}, xg: {home: 1.7, away: 0.5}, shots: {home: 13, away: 6} } },
    morocco: { homeTeam: "Morocco", awayTeam: "Netherlands", homeScore: "1 (5)", awayScore: "1 (4)", homeFlag: "🇲🇦", awayFlag: "🇳🇱", homeRank: "11", awayRank: "9", stage: "Round of 32", venue: "Monterrey", date: "July 7", scorers: [], stats: { possession: {home: 45, away: 55}, xg: {home: 1.1, away: 1.4}, shots: {home: 10, away: 14} } },
    usa: { homeTeam: "United States", awayTeam: "Bosnia & Herz.", homeScore: "2", awayScore: "0", homeFlag: "🇺🇸", awayFlag: "🇧🇦", homeRank: "13", awayRank: "55", stage: "Round of 32", venue: "San Francisco", date: "July 7", scorers: [], stats: { possession: {home: 48, away: 52}, xg: {home: 1.5, away: 0.7}, shots: {home: 12, away: 8} } },
    norway: { homeTeam: "Norway", awayTeam: "Ivory Coast", homeScore: "2", awayScore: "1", homeFlag: "🇳🇴", awayFlag: "🇨🇮", homeRank: "25", awayRank: "40", stage: "Round of 32", venue: "Dallas Stadium", date: "July 8", scorers: [], stats: { possession: {home: 50, away: 50}, xg: {home: 1.8, away: 1.2}, shots: {home: 14, away: 12} } },
    canada: { homeTeam: "Canada", awayTeam: "South Africa", homeScore: "1", awayScore: "0", homeFlag: "🇨🇦", awayFlag: "🇿🇦", homeRank: "40", awayRank: "50", stage: "Round of 32", venue: "Los Angeles Stadium", date: "July 8", scorers: [], stats: { possession: {home: 47, away: 53}, xg: {home: 1.0, away: 0.6}, shots: {home: 9, away: 7} } },
    egypt: { homeTeam: "Egypt", awayTeam: "Australia", homeScore: "1", awayScore: "0", homeFlag: "🇪🇬", awayFlag: "🇦🇺", homeRank: "30", awayRank: "25", stage: "Round of 32", venue: "Dallas Stadium", date: "July 8", scorers: [], stats: { possession: {home: 42, away: 58}, xg: {home: 0.8, away: 1.1}, shots: {home: 7, away: 10} } }
  };

  return (
    <article>
      {/* Changed class from 'container' to 'editorial-container fade-in' */}
      <div className='editorial-container fade-in'>
        
        <header className="article-header">
          <span className="category-tag">World Cup 2026</span>
          <h1 className='main-title'>Game of the Week</h1>
          <p className="sub-title">End of Round32 | Knockouts and Game Drama analysis</p>
          
          <img className='banner-image' src={banner} alt="Banner" />
          <p className='banner-caption'>Portugal national team players along manager and all stuffs tribute to Diogo Jota</p>
          
          <div>
    <h4 className="author-name">Debanjan Acharjee</h4>
    <p className="publish-date">
        July 5, 2026, 10:00 AM | 10 mins read
    </p>
</div>

<div className="article-actions">
    <Audio />
    <LikeButton articleId="journal-neymar-return" />
</div>
        </header>

        

        <section className='intro-wrapper'>
          <div className='text-column'>
            <h2 className="section-heading">Who is Diogo Jota?</h2>
            <p className="drop-cap">
              <a href='#'>Diogo Jota</a> (born Diogo José Teixeira da Silva) was a Portuguese professional footballer who played as a forward and winger, best known for his tenure at Liverpool FC and the Portugal national team. Born on 4 December 1996 in Porto, Portugal, he began his career at Paços de Ferreira before stints at Atlético Madrid, FC Porto (loan), and Wolverhampton Wanderers, where he helped secure Premier League promotion.
            </p>
          </div>
        </section>

        
        
        <div className="ornate-divider"></div>

        <section className='article-section'>
          <div className='highlights text-column'>
            <h3 className='section-heading'>Match Highlights</h3>
            <p>
              One of the biggest shocks came when Paraguay eliminated four-time champions Germany 4-3 on penalties following a 1-1 draw. Morocco also triumphed in a dramatic shootout, sending the Netherlands home. Meanwhile, co-hosts Canada secured their first-ever World Cup knockout victory by defeating South Africa 1-0 with a stoppage-time winner, and Mexico broke a 40-year knockout drought by beating Ecuador 2-0. The United States advanced as well, overcoming a second-half red card to comfortably defeat Bosnia and Herzegovina 2-0.
            </p>
            <p>
              Other matches showcased thrilling comebacks and late heroics. Belgium overturned a 2-0 deficit against Senegal to win 3-2 in extra time, while England relied on two second-half goals from Harry Kane to avoid an upset against DR Congo, winning 2-1. Brazil also left it late, edging Japan 2-1 with a 95th-minute strike.
            </p>
            <p>
              European powerhouses France, Spain, and Portugal progressed with victories over Sweden, Austria, and Croatia, respectively, while defending champions Argentina navigated past Cabo Verde 3-2. The results have set the stage for an electrifying Round of 16.
            </p>
          </div>
        </section>

        <section className="matches-section">
          <div className='rankings opinion-highlight'>
            <span className="opinion-badge">Editor's Note</span>
            <h2 className='opinion-title'>Ranking Criteria</h2>
            {/* Fixed the HTML list syntax */}
            <ul>
              <li><strong>Fixtures:</strong> This measures the context and drama surrounding the match. A game gets a high score here if it features a heavy historical rivalry, a massive underdog story, or record-breaking stakes.</li>
              <li><strong>Goals:</strong> This isn't just about the sheer number of goals; it is about the timing, importance, and quality of the strikes.</li>
              <li><strong>Quality:</strong> This captures the tactics, technical execution, and flow of the game. Sometimes a 0-0 draw is a tactical masterclass, and sometimes a 4-3 game is just full of sloppy defensive errors.</li>
              <li><strong>Drama & Turning Points:</strong> While "Goals" covers the final score, this metric captures the emotional rollercoaster. It accounts for the chaotic moments that don't always end up in the back of the net but define how we remember the game.</li>
              <li><strong>Individual Brilliance (The "Hero" Factor):</strong> Sometimes a match's overall quality is average, but it becomes legendary because one player puts the entire team on their back and does something unforgettable.</li>
            </ul>
          </div>

          <div className="match-blocks">
            <div className="match-article">
              <h2>1. Spain</h2>
              <MatchData matchInfo={matchDetails.spain} />
              <p>
                Spain is the 2026 World Cup's gold standard. Unbeaten in 34 matches and boasting a flawless defensive record, La Roja is an impenetrable fortress. After a clinical 3-0 demolition of Austria, Lamine Yamal and Mikel Oyarzabal are primed for an ultimate, high-stakes Iberian derby against Portugal. Pure footballing perfection.
              </p>
            </div>

            <div className="match-article">
              <h2>2. Argentina</h2>
              <MatchData matchInfo={matchDetails.argentina} />
              <p>
                The reigning champions are riding a wave of pure destiny. Led by Lionel Messi, who has a record-shattering seven goals, Argentina survived a heart-stopping 3-2 extra-time thriller against Cabo Verde. Next up: a mouthwatering, global blockbuster against Mohamed Salah’s Egypt. Can anyone stop the greatest of all time?
              </p>
            </div>

            <div className="match-article">
              <h2>3. France</h2>
              <MatchData matchInfo={matchDetails.france} />
              <p>
                France is a terrifying, efficient football machine. Cruising past Sweden 3-0, Les Bleus possess a frightening attack fueled by Kylian Mbappé’s six goals and Michael Olise’s elite playmaking. Facing underdog Paraguay next, this complete and ruthless squad looks utterly unstoppable on their march toward a historic final.
              </p>
            </div>

            <div className="match-article">
              <h2>4. Mexico</h2>
              <MatchData matchInfo={matchDetails.mexico} />
              <p>
            Weaponizing the altitude of the legendary Azteca, co-hosts Mexico are flying high. With four consecutive clean sheets and a historic 2-0 win over Ecuador, El Tri has broken a 40-year knockout curse. Now, a high-stakes, maximum-drama blockbuster against England awaits in a roaring Mexico City cauldron.
              </p>
            </div>

            <div className="match-article">
              <h2>5. Belgium</h2>
              <MatchData matchInfo={matchDetails.belgium} />
              <p>
                If you love heart-stopping drama, Belgium is your team. Orchestrating a miraculous comeback from 2-0 down against Senegal, the Red Devils survived via an ice-cold 125th-minute VAR penalty. Romelu Lukaku’s physical dominance now leads them into a highly anticipated, high-stakes 2014 rematch against the United States.
              </p>
            </div>

            <div className="match-article">
              <h2>6. Brazil</h2>
              <MatchData matchInfo={matchDetails.brazil} />
              <p>
                Five-time champions Brazil combine elite samba flair with late-game ice. After surviving a fierce Japanese test thanks to Gabriel Martinelli’s dramatic 95th-minute winner, Vinicius Junior’s lethal attack is rolling. A historic 1998 rematch against Erling Haaland’s physical Norway sets up a colossal Round of 16 blockbuster.
              </p>
            </div>

            <div className="match-article">
              <h2>7. England</h2>
              <MatchData matchInfo={matchDetails.england} />
              <p>
                England specializes in dramatic, nerve-shredding salvation. After trailing DR Congo, captain Harry Kane emerged as the ultimate savior, scoring twice to rescue a 2-1 victory. While tactical questions linger, the Three Lions must now summon peak mental fortitude to face unbeaten co-hosts Mexico inside the terrifying Azteca cauldron.
              </p>
            </div>

            <div className="match-article">
              <h2>8. Portugal</h2>
              <MatchData matchInfo={matchDetails.portugal} />
              <p>
                Portugal’s World Cup run is pure cinematic tension. Advancing through a chaotic 2-1 thriller against Croatia courtesy of Cristiano Ronaldo's composure and a 94th-minute winner, Roberto Martínez’s squad blends legendary experience with explosive youth. Next is the ultimate prize: a colossal, maximum-stakes Iberian derby against rivals Spain.
              </p>
            </div>

            <div className="match-article">
              <h2>9. Colombia</h2>
              <MatchData matchInfo={matchDetails.colombia} />
              <p>
                Colombia has quietly evolved into the tournament's most dangerous dark horse. Boasting a suffocating defense that has conceded just once, they dismantled Ghana 1-0. Fueled by Luis Díaz’s electric pace and James Rodríguez’s magic, the unbeaten Cafeteros look to replicate their legendary 2014 run against pragmatic Switzerland.
              </p>
            </div>

            <div className="match-article">
              <h2>10. Paraguay</h2>
              <MatchData matchInfo={matchDetails.paraguay} />
              <p>
                Meet the ultimate Cinderella story. Paraguay shocked the globe by eliminating four-time champions Germany in a historic penalty shootout, triggering a national holiday. Led by Julio Enciso’s historic header and Orlando Gill’s heroic saves, this fearless David faces the ultimate Goliath in a blockbuster clash with France.
              </p>
            </div>

            <div className="match-article">
              <h2>11. Switzerland</h2>
              <MatchData matchInfo={matchDetails.switzerland} />
              <p>
                Switzerland is the absolute blueprint for collective tactical discipline. Unbeaten and completely unbothered, they systematically choked out Algeria in a clinical 2-0 masterclass. Orchestrated by midfield general Granit Xhaka, this structurally elite unit now faces a high-stakes, contrasting clash of styles against an athletic Colombia.
              </p>
            </div>

            <div className="match-article">
              <h2>12. Morocco</h2>
              <MatchData matchInfo={matchDetails.morocco} />
              <p>
                Proving their 2022 magic was no fluke, Morocco remains an unshakeable tournament force. The Atlas Lions combined defensive steel with elite mental fortitude to eliminate the Netherlands in a grueling penalty shootout. Now, they bring their passionate support to Houston to crash Canada’s co-host fairytale.
              </p>
            </div>

            <div className="match-article">
              <h2>13. United States</h2>
              <MatchData matchInfo={matchDetails.usa} />
              <p>
                Driven by roaring home crowds, the United States showed immense grit by conquering Bosnia 2-0 despite a controversial red card. Malik Tillman’s stunning free-kick provided the magic. Now, the Americans enter a high-stakes Seattle cauldron, desperate for sweet revenge in a 2014 rematch against Belgium.
              </p>
            </div>

            <div className="match-article">
              <h2>14. Norway</h2>
              <MatchData matchInfo={matchDetails.norway} />
              <p>
                Norway is a vulnerable machine carrying the ultimate cheat code: Erling Haaland. With five goals alongside Martin Ødegaard’s elite vision, they dispatched Ivory Coast 2-1. Now, they face a monumental, romantic 1998 rematch against Brazil. Can Haaland write football folklore and shock the world?
              </p>
            </div>

            <div className="match-article">
              <h2>15. Canada</h2>
              <MatchData matchInfo={matchDetails.canada} />
              <p>
                Co-hosts Canada sparked absolute national euphoria with a historic, first-ever knockout victory over South Africa. Stephen Eustáquio’s dramatic 92nd-minute winner proved they can weaponize home-field momentum. Lacking experience but packed with athletic intensity, the Canadians now face a high-stakes, narrative-rich battle against a disciplined Moroccan side.
              </p>
            </div>

            <div className="match-article">
              <h2>16. Egypt</h2>
              <MatchData matchInfo={matchDetails.egypt} />
              <p>
                Egypt ended a grueling 92-year wait, conquering Australia in a tense penalty shootout to reach their first-ever Round of 16. Open-play goals are scarce, but their resilience is legendary. Now, Mohamed Salah prepares for an iconic, unmissable global blockbuster against Lionel Messi’s Argentina. Ultimate narrative stakes.
              </p>
            </div>
          </div>
          
          <div className="fixture-wrapper" style={{ marginTop: '60px' }}>
            <h2 className="section-heading">Knockout Tree</h2>
            <Fixture />
          </div>
        </section>
      </div>
    </article>
  );
}