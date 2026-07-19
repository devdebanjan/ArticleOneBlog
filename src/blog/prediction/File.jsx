import React, { useState } from 'react';
import { supabase } from '../../../supabaseClient.js';
import './prediction.css'; 

export default function Prediction() {
  const [formData, setFormData] = useState({
    name: '', email: '', worldCupWinner: '', totalGoals: '',
    goldenBoot: '', goldenBall: '', goldenGlove: '',
    wallpaperGenre: '', stickerGenre: '', ebookChoice: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Player lists
  const bootContenders = ['Lionel Messi', 'Kylian Mbappé', 'Harry Kane', 'Jude Bellingham'];
  const ballContenders = ['Kylian Mbappé', 'Lionel Messi', 'Lamine Yamal', 'Jude Bellingham']; 
  const gloveContenders = ['Unai Simón', 'Emiliano Martínez', 'Jordan Pickford', 'Mike Maignan'];
  const ebooks = ['Soccernomics', 'World Cup Legends', 'Mastering the Mindset of a Champion'];

  // Reliable ESPN headshot URLs
  const playerImages = {
    'Lionel Messi': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png',
    'Kylian Mbappé': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/229472.png',
    'Harry Kane': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148866.png',
    'Jude Bellingham': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/285516.png',
    'Lamine Yamal': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/329598.png',
    'Unai Simón': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/217983.png',
    'Emiliano Martínez': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/148906.png',
    'Jordan Pickford': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/140028.png',
    'Mike Maignan': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/178550.png'
  };

  const getAvatar = (name) => {
    if (playerImages[name]) return playerImages[name];
    return `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=1e293b&color=fbbf24&size=128&bold=true`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // --- STRICT VALIDATION TO PREVENT "EMPTY" SUBMISSIONS ---
    if (!formData.name.trim() || !formData.email.trim()) {
      setMessage({ type: 'error', text: 'Name and Email fields cannot be blank.' });
      setLoading(false);
      return;
    }

    if (!formData.worldCupWinner || !formData.totalGoals || !formData.goldenBoot || !formData.goldenBall || !formData.goldenGlove || !formData.wallpaperGenre || !formData.stickerGenre || !formData.ebookChoice) {
      setMessage({ type: 'error', text: 'Please complete all tactical predictions and loot choices.' });
      setLoading(false);
      return;
    }
    // --------------------------------------------------------

    try {
      const { data: existingUsers, error: searchError } = await supabase
        .from('User_data')
        .select('email')
        .eq('email', formData.email.trim());
      
      if (searchError) throw searchError;
      
      if (existingUsers && existingUsers.length > 0) {
        setMessage({ type: 'error', text: 'Prediction already locked in for this email.' });
        setLoading(false);
        return;
      }
      
      const { error: insertError } = await supabase.from('User_data').insert([formData]);
      if (insertError) throw insertError;
      
      setMessage({ type: 'success', text: 'Predictions secured! Watch your inbox after the finals.' });
      setFormData({ name: '', email: '', worldCupWinner: '', totalGoals: '', goldenBoot: '', goldenBall: '', goldenGlove: '', wallpaperGenre: '', stickerGenre: '', ebookChoice: '' });
    } catch (error) {
      setMessage({ type: 'error', text: 'System Error: ' + error.message });
    } finally {
      setLoading(false);
    }
  };

  // --- Tactical Token Component (For Players) ---
  const TacticalToken = ({ label, name, value, avatarUrl, number }) => {
    const isChecked = formData[name] === value;
    const fallbackAvatar = `https://ui-avatars.com/api/?name=${label.replace(' ', '+')}&background=1e293b&color=fbbf24&size=128&bold=true`;

    return (
      <label className={`tactical-token ${isChecked ? 'active' : ''}`}>
        <input type="radio" name={name} value={value} checked={isChecked} onChange={handleChange} required />
        <div className="token-avatar-wrapper">
          <img 
            src={avatarUrl} 
            alt={label} 
            className="token-avatar" 
            onError={(e) => { e.target.onerror = null; e.target.src = fallbackAvatar; }}
          />
          <div className="token-number">{number}</div>
        </div>
        <span className="token-label">{label.split(' ').pop()}</span>
      </label>
    );
  };

  // --- Center Circle Team Token ---
  const TeamToken = ({ label, name, value, flagUrl }) => {
    const isChecked = formData[name] === value;
    return (
      <label className={`team-token ${isChecked ? 'active' : ''}`}>
        <input type="radio" name={name} value={value} checked={isChecked} onChange={handleChange} required />
        <div className="team-flag-wrapper">
          <img src={flagUrl} alt={`${label} flag`} className="team-flag-circle" />
        </div>
        <span className="token-label">{label}</span>
      </label>
    );
  };

  return (
    <div className="stadium-environment">
      
      {/* 1. Header & Profile Section */}
      <div className="glass-panel profile-panel">
        <h1 className="neon-title">WORLD CUP PREDICTOR 100% GIFTS ASSURANCE</h1>
        <p className="subtitle">Lock your tactics to unlock exclusive digital rewards.</p>
        
        <div className="form-group grid-2 mt-4">
          <div className="input-wrapper">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Name (Your Name)" />
          </div>
          <div className="input-wrapper">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="Email (For Prize Delivery)" />
          </div>
        </div>
      </div>

      {/* ─── UPGRADED: PREMIUM RULES BAR ─── */}
      <h1 className="neon-title">Playing Criteria</h1>
      <div className="premium-rules-bar">
        <div className="rule-segment">
          <div className="rule-icon-pro target-icon">🎯</div>
          <div className="rule-info">
            <h4>How to Play</h4>
            <p>You have to predict all the fields, choose one player from each of the questions below 👇🏻</p>
          </div>
        </div>
        
        <div className="rule-segment">
          <div className="rule-icon-pro scale-icon">⚖️</div>
          <div className="rule-info">
            <h4>The Criteria</h4>
            <p>Score with high accuracy in all 5 categories to win.</p>
          </div>
        </div>
        
        <div className="rule-segment">
          <div className="rule-icon-pro gift-icon">🎁</div>
          <div className="rule-info">
            <h4>Digital Gifts</h4>
            <p>You can unlock all three gifts like 4K wallpapers, stickers & premium E-Books.</p>
          </div>
        </div>
      </div>
      {/* ─────────────────────────────────────── */}

      <form onSubmit={handleSubmit} className="tactics-board-form">
        
        {/* 2. THE TACTICAL PITCH */}
        <div className="pitch-wrapper">
          <div className="pitch-field">
            
            {/* CSS Drawn Field Markings */}
            <div className="pitch-markings">
              <div className="penalty-box top">
                <div className="goal-box top"></div>
                <div className="penalty-arc top"></div>
              </div>
              <div className="halfway-line"></div>
              <div className="center-circle"></div>
              <div className="penalty-box bottom">
                <div className="penalty-arc bottom"></div>
                <div className="goal-box bottom"></div>
              </div>
            </div>

            {/* Tactical Content Overlay */}
            <div className="tactical-zones">
              
              {/* ZONE 1: Golden Boot (Top Penalty Area) */}
              <div className="tactic-row zone-attack">
                <h3 className="zone-title">Golden Boot Winner?</h3>
                <div className="token-group">
                  {bootContenders.map((p, i) => <TacticalToken key={p} label={p} name="goldenBoot" value={p} avatarUrl={getAvatar(p)} number={i+1} />)}
                </div>
              </div>

              {/* ZONE 2: Golden Ball (Upper Midfield) */}
              <div className="tactic-row zone-midfield">
                <h3 className="zone-title">Golden Ball Winner?</h3>
                <div className="token-group">
                  {ballContenders.map((p, i) => <TacticalToken key={p} label={p} name="goldenBall" value={p} avatarUrl={getAvatar(p)} number={i+1} />)}
                </div>
              </div>

              {/* ZONE 3: Who Will Win (Center Circle) */}
              <div className="tactic-row zone-center">
                <h3 className="zone-title">Match Winner?</h3>
                <div className="token-group versus-group">
                  <TeamToken label="Argentina" name="worldCupWinner" value="Argentina" flagUrl="https://flagcdn.com/w160/ar.png" />
                  <span className="vs-badge">VS</span>
                  <TeamToken label="Spain" name="worldCupWinner" value="Spain" flagUrl="https://flagcdn.com/w160/es.png" />
                </div>
                
                {/* Total Goals Mini-Input in Center */}
                <div className="goals-input-wrapper">
                  <label>Total Goals On Final</label>
                  <input type="number" name="totalGoals" value={formData.totalGoals} onChange={handleChange} required className="goals-scoreboard" placeholder="0" min="0" max="15" />
                </div>
              </div>

              {/* ZONE 4: Golden Gloves (Bottom Penalty Area) */}
              <div className="tactic-row zone-defense">
                <div className="token-group">
                  {gloveContenders.map((p, i) => <TacticalToken key={p} label={p} name="goldenGlove" value={p} avatarUrl={getAvatar(p)} number={i+1} />)}
                </div>
                <h3 className="zone-title">Golden Gloves Winner?</h3>
              </div>

            </div>
          </div>
        </div>

        {/* 3. LOOT & SUBMISSION FOOTER */}
        <div className="glass-panel loot-panel">
          <div className="section-header">
            <h3>Claim Your Loot Preferences</h3>
          </div>
          
          <div className="grid-3 mb-4">
            <div className="form-group">
              <label className="highlight-label">Premium Wallpaper</label>
              <select name="wallpaperGenre" value={formData.wallpaperGenre} onChange={handleChange} required className="input-field custom-select">
                <option value="" disabled>Select Genre...</option>
                <option value="Sports">FIFA/Sports</option>
                <option value="Lofi">Lofi</option>
                <option value="Nature">Nature</option>
              </select>
            </div>

            <div className="form-group">
              <label className="highlight-label">Stickers</label>
              <select name="stickerGenre" value={formData.stickerGenre} onChange={handleChange} required className="input-field custom-select">
                <option value="" disabled>Select Theme...</option>
                <option value="Sports">Funny</option>
                <option value="Lofi">Café</option>
                <option value="Nature">Mountains</option>
              </select>
            </div>

            <div className="form-group">
              <label className="highlight-label">E-Book</label>
              <select name="ebookChoice" value={formData.ebookChoice} onChange={handleChange} required className="input-field custom-select">
                <option value="" disabled>Select Book...</option>
                {ebooks.map(book => <option key={book} value={book}>{book}</option>)}
              </select>
            </div>
          </div>

          <div className="form-actions">
            {message && <div className={`alert-box ${message.type === 'error' ? 'alert-error' : 'alert-success'}`}>{message.text}</div>}
            <button type="submit" disabled={loading} className="submit-btn glow-effect">
              {loading ? 'Processing Tactics...' : 'Lock In Predictions'}
            </button>
          </div>
        </div>

      </form>
    </div>
  );
}