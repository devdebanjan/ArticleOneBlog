import React from 'react';
import './TournamentTree.css';

const MatchCard = ({ team1, team2, flag1, flag2, score, bottomText, customClass = "" }) => (
  <div className={`v-match-card ${customClass}`}>
    <div className="v-flags">
      <div className="v-flag">{flag1}</div>
      <div className="v-flag">{flag2}</div>
    </div>
    <div className="v-teams">
      <span>{team1}</span>
      <span>{team2}</span>
    </div>
    <div className="v-score">{score}</div>
    {bottomText && <div className="v-bottom-text">{bottomText}</div>}
  </div>
);

export default function VerticalBracket() {
  return (
    <div className="v-bracket-wrapper fade-in">
      
      <div className="v-branch">
        
        {/* ════════ TOP HALF (Normal Tree) ════════ */}
        <div className="v-pair">
          
          {/* Top Left */}
          <div className="v-branch-side">
            <div className="v-branch">
              <div className="v-pair">
                <div className="v-branch-side">
                  <MatchCard team1="PAR" team2="FRA" flag1="🇵🇾" flag2="🇫🇷" score="0 : 1" />
                </div>
                <div className="v-branch-side">
                  <MatchCard team1="CAN" team2="MAR" flag1="🇨🇦" flag2="🇲🇦" score="0 : 3" />
                </div>
              </div>
              <div className="v-child">
                <MatchCard team1="FRA" team2="MAR" flag1="🇫🇷" flag2="🇲🇦" score="10 Jul" />
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="v-branch-side">
            <div className="v-branch">
              <div className="v-pair">
                <div className="v-branch-side">
                  <MatchCard team1="POR" team2="ESP" flag1="🇵🇹" flag2="🇪🇸" score="7 Jul" />
                </div>
                <div className="v-branch-side">
                  <MatchCard team1="USA" team2="BEL" flag1="🇺🇸" flag2="🇧🇪" score="7 Jul" />
                </div>
              </div>
              <div className="v-child">
                <MatchCard team1="W93" team2="W94" flag1="🛡️" flag2="🛡️" score="11 Jul" customClass="upcoming" />
              </div>
            </div>
          </div>
        </div>

        {/* ════════ MIDDLE: FINALS ROW ════════ */}
        <div className="v-child v-final-row">
          <div className="v-trophy-container">
            <span className="v-trophy">🏆</span>
          </div>

          <MatchCard 
            team1="W1" team2="W1" 
            flag1="🛡️" flag2="🛡️" 
            score="20 Jul" 
            bottomText="FINAL" 
            customClass="upcoming" 
          />

          <MatchCard 
            team1="L1" team2="L1" 
            flag1="🛡️" flag2="🛡️" 
            score="19 Jul" 
            bottomText="3rd place" 
            customClass="upcoming third-place" 
          />
        </div>

        {/* ════════ BOTTOM HALF (Inverted Tree) ════════ */}
        {/* The node directly below the trophy that feeds UP into it */}
        <div className="v-child v-reverse-root">
          <MatchCard team1="W99" team2="W10" flag1="🛡️" flag2="🛡️" score="16 Jul" customClass="upcoming" />
        </div>

        <div className="v-reverse-pair">
          
          {/* Bottom Left */}
          <div className="v-branch-side">
            <div className="v-branch">
              <div className="v-reverse-child">
                <MatchCard team1="NOR" team2="ENG" flag1="🇳🇴" flag2="🏴󠁧󠁢󠁥󠁮󠁧󠁿" score="12 Jul" />
              </div>
              <div className="v-reverse-pair">
                <div className="v-branch-side">
                  <MatchCard team1="BRA" team2="NOR" flag1="🇧🇷" flag2="🇳🇴" score="1 : 2" />
                </div>
                <div className="v-branch-side">
                  <MatchCard team1="MEX" team2="ENG" flag1="🇲🇽" flag2="🏴󠁧󠁢󠁥󠁮󠁧󠁿" score="2 : 3" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="v-branch-side">
            <div className="v-branch">
              <div className="v-reverse-child">
                <MatchCard team1="W95" team2="W96" flag1="🛡️" flag2="🛡️" score="12 Jul" customClass="upcoming" />
              </div>
              <div className="v-reverse-pair">
                <div className="v-branch-side">
                  <MatchCard team1="ARG" team2="EGY" flag1="🇦🇷" flag2="🇪🇬" score="7 Jul" />
                </div>
                <div className="v-branch-side">
                  <MatchCard team1="SUI" team2="COL" flag1="🇨🇭" flag2="🇨🇴" score="8 Jul" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}