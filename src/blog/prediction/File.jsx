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

  // Note: Sliced to 4 options to perfectly match your sketch's 4 circles per row
  const bootContenders = ['Lionel Messi', 'Kylian Mbappé', 'Harry Kane', 'Jude Bellingham'];
  const ballContenders = ['Kylian Mbappé', 'Lionel Messi', 'Lamine Yamal', 'Jude Bellingham']; 
  const gloveContenders = ['Unai Simón', 'Emiliano Martínez', 'Jordan Pickford', 'Mike Maignan'];
  const ebooks = ['The Tactical Evolution of Soccer', 'World Cup Legends', 'Mastering the Mindset of a Champion'];

  const playerImages = {
    'Lionel Messi': 'https://a.espncdn.com/combiner/i?img=/i/headshots/soccer/players/full/45843.png',
    'Kylian Mbappé': 'https://imgs.search.brave.com/DB0Lm-79sDvPlXdTdcbcpL5Sb_Mz1ghoFzMFUezG0yI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NzU0NTc2MC9waG90/by9wYWRlcmJvcm4t/Z2VybWFueS1reWxp/YW4tbWJhcHBlLW9m/LWZyYW5jZS1wb3Nl/cy1mb3ItYS1wb3J0/cmFpdC1kdXJpbmct/dGhlLWZyYW5jZS1w/b3J0cmFpdC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TE9r/cmlnaHNxZFRGSHlr/c19mV0RQbGo1QXhP/RGVlREJ3NG1NRGRT/S3BWYz0',
    'Harry Kane': 'https://imgs.search.brave.com/j9PQOzw7LyCCiBFykghDdrjW4dYeZmqF70tgzyZBt7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NzI0NDE0Mi9waG90/by9ibGFua2VuaGFp/bi1nZXJtYW55LWhh/cnJ5LWthbmUtb2Yt/ZW5nbGFuZC1wb3Nl/cy1mb3ItYS1wb3J0/cmFpdC1kdXJpbmct/dGhlLWVuZ2xhbmQt/cG9ydHJhaXQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPV9J/UzVDTjA2eVg0ZW9D/XzltdTNORDItRGFP/NWJEejlHekVOQnhY/c01temM9',
    'Jude Bellingham': 'https://imgs.search.brave.com/EGbpwI82_8zDfXgvIr5BA0jMbGMt4C18uutlPhscQL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI4/MDc3Mzc2MS9waG90/by9wYWxtLWJlYWNo/LWZsb3JpZGEtanVk/ZS1iZWxsaW5naGFt/LW9mLWVuZ2xhbmQt/cG9zZXMtZm9yLWEt/cG9ydHJhaXQtZHVy/aW5nLXRoZS1vZmZp/Y2lhbC1maWZhLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/MFJhTXVSMnRpZDBR/Mm13bHZNaU5IVVBU/ZWhmQ3J0ZWlXWndD/dXEwSDk0PQ',
    'Lamine Yamal': 'https://imgs.search.brave.com/ESX_nSmAdVg_lTXcy5zwTou0ojG8EBBaT2CHDgrjDys/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI4/MTA2OTA4OS9waG90/by9jaGF0dGFub29n/YS10ZW5uZXNzZWUt/bGFtaW5lLXlhbWFs/LW9mLXNwYWluLXBv/c2VzLWZvci1hLXBv/cnRyYWl0LWR1cmlu/Zy10aGUtb2ZmaWNp/YWwtZmlmYS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9U0RJ/eDJ0VHVnazFILWt6/R1BwZzAzaGlpZkN4/Y2k5b3VkYWNlc2M0/YWVfOD0',
    'Unai Simón': 'https://imgs.search.brave.com/bMosgDbWvjnmcsIYQ-50mzC0pmB9-7WlMX6zYzDZ4Xc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjI4/MTA2OTA3Ni9waG90/by9jaGF0dGFub29n/YS10ZW5uZXNzZWUt/dW5haS1zaW1vbi1v/Zi1zcGFpbi1wb3Nl/cy1mb3ItYS1wb3J0/cmFpdC1kdXJpbmct/dGhlLW9mZmljaWFs/LWZpZmEtd29ybGQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PU9Fa0ZCckpRYnEx/S2R3Ql9YM2ZjanBI/RU9BWW9NZTJYT2lC/U0E0Wm5ZdWc9',
    'Emiliano Martínez': 'https://imgs.search.brave.com/YscE1yTV-1Hotqgll-KFU78y5RZsWpnHtFF195TutqQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE0/OTIyMjU4MS9waG90/by9saWxsZS1mcmFu/Y2UtZW1pbGlhbm8t/bWFydGluZXotb2Yt/YXN0b24tdmlsbGEt/Z2VzdHVyZXMtdG93/YXJkcy10aGUtbGls/bGUtZmFucy1kdXJp/bmctdGhlLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz11eHJa/LUktdFJPaktCMmlU/N3MwdElxWjNDTExD/UjlxalJrNnpYR0Vq/TGNBPQ',
    'Jordan Pickford': 'https://imgs.search.brave.com/hmQjODhzb5kNUhFPtGIvOI0AsFCe5i9QPa6IQPYskI4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/NDQyMTI4OS9waG90/by9idXJ0b24tdXBv/bi10cmVudC1lbmds/YW5kLWpvcmRhbi1w/aWNrZm9yZC1vZi1l/bmdsYW5kLXBvc2Vz/LWZvci1hLXBvcnRy/YWl0LWF0LXN0LWdl/b3JnZXMtcGFyay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LXNHdEJJVXZfUXl4/eGZfMnFxcmRlYWpZ/VlVWeFdfcXVZT0pu/MS1NaVVkND0',
    'Mike Maignan': 'https://imgs.search.brave.com/HUiEsf7ypETH1aWDwdZWaz5ARTLN1aQAsUtfxTbcRnk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE1/NzU0NTQ4MS9mci9w/aG90by9wYWRlcmJv/cm4tZ2VybWFueS1t/aWtlLW1haWduYW4t/b2YtZnJhbmNlLXBv/c2VzLWZvci1hLXBv/cnRyYWl0LWR1cmlu/Zy10aGUtZnJhbmNl/LXBvcnRyYWl0Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1q/SEViMThTVEY4eFRK/NW1sZjhTTEdXRVNO/S3l1WkN4Uk10cDhB/M2pSZzJvPQ'
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
    try {
      const { data: existingUsers, error: searchError } = await supabase.from('User_data').select('email').eq('email', formData.email);
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
    return (
      <label className={`tactical-token ${isChecked ? 'active' : ''}`}>
        <input type="radio" name={name} value={value} checked={isChecked} onChange={handleChange} required />
        <div className="token-avatar-wrapper">
          <img src={avatarUrl} alt={label} className="token-avatar" />
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

  const LootRadio = ({ label, name, value, icon }) => {
    const isChecked = formData[name] === value;
    return (
      <label className={`radio-tile loot-card ${isChecked ? 'active' : ''}`}>
        <input type="radio" name={name} value={value} checked={isChecked} onChange={handleChange} required />
        <span className="loot-icon">{icon}</span>
        <span className="radio-label-text">{label}</span>
      </label>
    );
  };

  return (
    <div className="stadium-environment">
      
      {/* 1. Header & Profile Section */}
      <div className="glass-panel profile-panel">
        <h1 className="neon-title">WORLD CUP PREDICTOR</h1>
        <p className="subtitle">Lock your tactics to unlock exclusive digital rewards.</p>
        
        <div className="form-group grid-2 mt-4">
          <div className="input-wrapper">
            <input type="text" name="name" value={formData.name} onChange={handleChange} required className="input-field" placeholder="Manager Name (Display Name)" />
          </div>
          <div className="input-wrapper">
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" placeholder="Email (For Prize Delivery)" />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="tactics-board-form">
        
        {/* 2. THE TACTICAL PITCH (Based on Sketch) */}
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
                <h3 className="zone-title">Golden Boot</h3>
                <div className="token-group">
                  {bootContenders.map((p, i) => <TacticalToken key={p} label={p} name="goldenBoot" value={p} avatarUrl={getAvatar(p)} number={i+1} />)}
                </div>
              </div>

              {/* ZONE 2: Golden Ball (Upper Midfield) */}
              <div className="tactic-row zone-midfield">
                <h3 className="zone-title">Golden Ball</h3>
                <div className="token-group">
                  {ballContenders.map((p, i) => <TacticalToken key={p} label={p} name="goldenBall" value={p} avatarUrl={getAvatar(p)} number={i+1} />)}
                </div>
              </div>

              {/* ZONE 3: Who Will Win (Center Circle) */}
              <div className="tactic-row zone-center">
                <h3 className="zone-title">Match Winner</h3>
                <div className="token-group versus-group">
                  <TeamToken label="Argentina" name="worldCupWinner" value="Argentina" flagUrl="https://flagcdn.com/w160/ar.png" />
                  <span className="vs-badge">VS</span>
                  <TeamToken label="Spain" name="worldCupWinner" value="Spain" flagUrl="https://flagcdn.com/w160/es.png" />
                </div>
                
                {/* Total Goals Mini-Input in Center */}
                <div className="goals-input-wrapper">
                  <label>Total Goals</label>
                  <input type="number" name="totalGoals" value={formData.totalGoals} onChange={handleChange} required className="goals-scoreboard" placeholder="0" min="0" max="15" />
                </div>
              </div>

              {/* ZONE 4: Golden Gloves (Bottom Penalty Area) */}
              <div className="tactic-row zone-defense">
                <div className="token-group">
                  {gloveContenders.map((p, i) => <TacticalToken key={p} label={p} name="goldenGlove" value={p} avatarUrl={getAvatar(p)} number={i+1} />)}
                </div>
                <h3 className="zone-title">Golden Gloves</h3>
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
              <label className="highlight-label">Wallpaper</label>
              <select name="wallpaperGenre" value={formData.wallpaperGenre} onChange={handleChange} required className="input-field custom-select">
                <option value="" disabled>Select Genre...</option>
                <option value="Sports">Sports</option>
                <option value="Lofi">Lofi</option>
                <option value="Nature">Nature</option>
              </select>
            </div>

            <div className="form-group">
              <label className="highlight-label">Stickers</label>
              <select name="stickerGenre" value={formData.stickerGenre} onChange={handleChange} required className="input-field custom-select">
                <option value="" disabled>Select Theme...</option>
                <option value="Sports">Stadium</option>
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