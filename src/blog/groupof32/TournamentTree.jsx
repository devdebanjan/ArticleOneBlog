import React from 'react';
import './TournamentTree.css';

export default function SymmetricBracket() {
  return (
    <div className="bracket-wrapper">
      <div className="bracket-inner">
        
        {/* ─── LEFT SIDE BRACKET ─── */}
        <div className="bracket-side">
          {/* Round of 16 (Left Outermost) */}
          <div className="bracket-column r16">
            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇵🇾</span>
                <span className="circle-flag">🇫🇷</span>
              </div>
              <div className="team-codes">PAR  FRA</div>
              <div className="match-time status-upcoming">Score 0-1</div>
            </div>

            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇨🇦</span>
                <span className="circle-flag">🇲🇦</span>
              </div>
              <div className="team-codes">CAN  MAR</div>
              <div className="match-time status-live">Score 0-3</div>
            </div>

            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇵🇹</span>
                <span className="circle-flag">🇪🇸</span>
              </div>
              <div className="team-codes">POR  ESP</div>
              <div className="match-time">Jul 7</div>
            </div>

            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇺🇸</span>
                <span className="circle-flag">🇧🇪</span>
              </div>
              <div className="team-codes">USA  BEL</div>
              <div className="match-time">Jul 7</div>
            </div>
          </div>

          {/* Quarterfinals (Left Middle) */}
          <div className="bracket-column qf">
            <div className="match-card placeholder">
              <div className="flags-row">
                <span className="shield-icon">FRA🇫🇷 VS MAR🇲🇦</span>
                <span className="shield-icon"></span>
              </div>
              <div className="team-codes"></div>
              <div className="match-time">Jul 9</div>
            </div>

            <div className="match-card placeholder">
              <div className="flags-row">
                <span className="shield-icon">🛡️</span>
                <span className="shield-icon">🛡️</span>
              </div>
              <div className="team-codes">TBD  TBD</div>
              <div className="match-time">Jul 10</div>
            </div>
          </div>

          {/* Semifinals (Left Inner) */}
          <div className="bracket-column sf">
            <div className="match-card placeholder">
              <div className="flags-row">
                <span className="shield-icon">🛡️</span>
                <span className="shield-icon">🛡️</span>
              </div>
              <div className="team-codes">WQ1  WQ2</div>
              <div className="match-time">Jul 14</div>
            </div>
          </div>
        </div>

        {/* ─── CENTER FINALS ─── */}
        <div className="bracket-center">
          <div className="trophy-room">
            <span className="trophy-icon">🏆</span>
            <span className="trophy-label">CHAMPION</span>
          </div>

          <div className="match-card final-card">
            <div className="flags-row">
              <span className="shield-icon">🛡️</span>
              <span className="shield-icon">🛡️</span>
            </div>
            <div className="team-codes">WS1  WS2</div>
            <div className="match-time">Jul 19</div>
            <span className="badge-label final-badge">FINAL</span>
          </div>

          <div className="match-card bronze-card">
            <div className="flags-row">
              <span className="shield-icon">🛡️</span>
              <span className="shield-icon">🛡️</span>
            </div>
            <div className="team-codes">LS1  LS2</div>
            <div className="match-time">Jul 19</div>
            <span className="badge-label bronze-badge">BRONZE-FINAL</span>
          </div>
        </div>

        {/* ─── RIGHT SIDE BRACKET ─── */}
        <div className="bracket-side">
          {/* Semifinals (Right Inner) */}
          <div className="bracket-column sf">
            <div className="match-card placeholder">
              <div className="flags-row">
                <span className="shield-icon">🛡️</span>
                <span className="shield-icon">🛡️</span>
              </div>
              <div className="team-codes">WQ3  WQ4</div>
              <div className="match-time">Jul 15</div>
            </div>
          </div>

          {/* Quarterfinals (Right Middle) */}
          <div className="bracket-column qf">
            <div className="match-card placeholder">
              <div className="flags-row">
                <span className="shield-icon">🛡️</span>
                <span className="shield-icon">🛡️</span>
              </div>
              <div className="team-codes">TBD  TBD</div>
              <div className="match-time">Jul 12</div>
            </div>

            <div className="match-card placeholder">
              <div className="flags-row">
                <span className="shield-icon">🛡️</span>
                <span className="shield-icon">🛡️</span>
              </div>
              <div className="team-codes">TBD  TBD</div>
              <div className="match-time">Jul 12</div>
            </div>
          </div>

          {/* Round of 16 (Right Outermost) */}
          <div className="bracket-column r16">
            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇧🇷</span>
                <span className="circle-flag">🇳🇴</span>
              </div>
              <div className="team-codes">BRA  NOR</div>
              <div className="match-time status-upcoming">Tomorrow|1:30am</div>
            </div>

            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇲🇽</span>
                <span className="circle-flag">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span>
              </div>
              <div className="team-codes">MEX  ENG</div>
              <div className="match-time">Tommorow</div>
            </div>

            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇦🇷</span>
                <span className="circle-flag">🇪🇬</span>
              </div>
              <div className="team-codes">ARG  EGY</div>
              <div className="match-time">Jul 7</div>
            </div>

            <div className="match-card">
              <div className="flags-row">
                <span className="circle-flag">🇨🇭</span>
                <span className="circle-flag">🇨🇴</span>
              </div>
              <div className="team-codes">SUI  COL</div>
              <div className="match-time">Jul 7</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}