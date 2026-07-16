import React, { useState } from 'react';
import './Semianalysis.css';

{/** Video and images  */}
import video from '../Semifinalanalysis/media/banner.mp4';
import mbappe from '../Semifinalanalysis/media/Mbappe.jpeg';
import Lautaro from '../Semifinalanalysis/media/Lautaro.jpeg';
import messi from '../Semifinalanalysis/media/messi.mp4';
import chakra from '../Semifinalanalysis/media/Rotating_Konarka_chaka.gif';

import Rath from '../Semifinalanalysis/media/Rath.mp4'

// Add your Ratha Yatra video here!
import rathaYatraVideo from '../Semifinalanalysis/media/banner.mp4'; // Replace with your actual video path

export default function Semianalysis() {
  // State to control if the video modal is open or closed
  const [showRathaVideo, setShowRathaVideo] = useState(false);

  return (
     <div className="legacy-article-wrapper fade-in">
        <header className="immersive-hero">
                {/* HTML5 Video Backdrop Setup */}
                <video 
                  src={video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="hero-bg-video"
                />
                <div className="hero-gradient-overlay"></div>
                <div className="hero-content">
                  <span className="hero-tag">LEO Magics</span>
                  <h1 className="hero-title">Unbeaten LEO</h1>
                  <div className="hero-divider"></div>
                  <div className="hero-meta">
                    <strong>DEBANJAN ACHARJEE</strong> &nbsp;•&nbsp; JULY 16, 2026 &nbsp;•&nbsp; 5 MINS READ
                  </div>
                </div>
        </header>

        {/* ─── EDITORIAL BODY ─── */}
        <article className="editorial-body">
          <p>
            <span className="dropcap">T</span>he 2026 FIFA World Cup semi-finals proved once again that soccer isn't played on paper—it’s a game of grit, tactics, and unpredictable on-field execution. Both matchups delivered tremendous drama, completely defying expectations.
          </p>
          
          <h2>Spain 🇪🇸 2 - 0 France 🇫🇷</h2>
          <div>
               <p>
             Heading into the tournament, France was arguably the most formidable team on paper. However, Spain dismantled them with clinical precision and flawless defending. Lamine Yamal drew an early penalty, which Mikel Oyarzabal converted in the 22nd minute. Pedro Porro then sealed the upset with a second goal in the 58th minute. Spain frustrated the heavily favored French squad at every turn, proving that tactical discipline and teamwork can completely neutralize pure star power.
            </p>
          </div>
          
          <div className="highlight-block">
              <img
                  src={mbappe}
                  alt="Kylian Mbappe"
                  style={{height:'500px', width:"550px"}}
               />
            <div>
                <h3> On July 15 Mbappe address the media </h3>
             <p>🚨🗣️ Kylian Mbappe: "When you don't do what you're supposed to do in a World Cup semifinal, you don't win."</p>
              <p>"Spain stayed true to their game plan. If we are honest, we did not have what it takes to go to the final."</p>
             <p>"With our elimination, I'm going to root for Messi to win his second World Cup. I'm a fan of his, he deserves it"</p>
            </div>
          </div>
          
          <h2>Argentina 🇦🇷 2 - 1 England 🏴󠁧󠁢󠁥󠁮󠁧󠁿</h2>
          <p>
           If the first semi-final was a tactical masterclass, the second was pure, heart-stopping chaos. England looked destined for the final after Anthony Gordon put them ahead in the 55th minute. But Argentina’s resilience showcased the true heart of a defending champion. In a crazy final stretch, Lionel Messi set up Enzo Fernández for an 85th-minute equalizer, before assisting Lautaro Martínez's dramatic stoppage-time header (90+2') to win the match.
          </p>
          
          <div className="highlight-block">
              <img
                  src={Lautaro}
                  alt="Lautaro Martinez"
                  style={{height:'500px', width:"550px"}}
               />
            <div  className = "highlight-block-p"style={{backgroundColor:"#bdf81d", color:"#000000", padding: "20px", borderRadius: "8px", marginTop: "20px"}}>
                <h3 style={{color: "#000000", marginTop: 0}}>Post match Lautaro addresses the media </h3>
                  <p>🎙️ Reporter: “Lautaro, can you tell us what Lionel Messi said to you after you came on?”</p>
                  <p>🗣️ Lautaro Martínez:</p>
                  <p>“People see the assists, the dribbles and the magic, but they don’t see what Leo does with his words.</p>
                  <p>When I came onto the pitch, he walked over to me and said, ‘Attack the space between the defenders. Go for the headers. Keep making those runs.’</p>
                  <p>I tried it the first time and it didn’t work. I looked at him, and instead of telling me to change, he kept giving me signs to keep believing. He knew the opportunity would come.</p>
                  <p>We were 1–1 with less than five minutes to play. Leo looked at the scoreboard, then looked straight at me and nodded. He didn’t even have to speak. I knew exactly what he wanted. I knew the assignment.</p>
            </div>
            
            <video
              src={messi} 
              autoPlay 
              loop 
              muted 
              playsInline
              style={{marginTop: "20px", width: "100%"}} 
            />
            
            <div style={{marginTop: "20px"}}>
              <p>🎙️ Reporter: "Leo, how do you always manage to find teammates like Enzo and Lautaro in those moments?"</p>
              <p>Messi: "That's part of my job. If the opposition stops me from scoring, then I'll create chance for my teammates. It doesn't matter who gets the goal"</p>
            </div>
             <p>--------------------------------------------</p>
          </div>
          
        </article>
       

        {/* ─── RATHA YATRA FLOATING WIDGET ─── */}
        <div 
          className="ratha-yatra-fab" 
          onClick={() => setShowRathaVideo(true)}
        >
          <span className="ratha-msg">Click here 👉🏻 Happy Ratha Yatra 2026 |🙏🏻 ⭕⊍⭕| </span>
          
          <img src={chakra} alt="Spinning Chakra" className="spinning-chakra" />
        </div>

        {/* ─── RATHA YATRA VIDEO MODAL ─── */}
        {showRathaVideo && (
          <div className="ratha-video-overlay" onClick={() => setShowRathaVideo(false)}>
            <div className="ratha-video-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-video-btn" onClick={() => setShowRathaVideo(false)}>
                &times;
              </button>
              <video 
                src={Rath} 
                controls 
                autoPlay 
                className="modal-video-player"
              />
              <h3 className="modal-wish-text">Jai Jagannath 🙏🏻 ⭕⊍⭕ | Happy Ratha Yatra 2026 </h3>
            </div>
          </div>
        )}
        
     </div>
  );
}