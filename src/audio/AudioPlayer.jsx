import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css'; 

export default function ListenButton() {
  const articleText = `Who is Diogo Jota?
Diogo Jota (born Diogo José Teixeira da Silva) was a Portuguese professional footballer who played as a forward and winger, best known for his tenure at Liverpool FC and the Portugal national team. Born on 4 December 1996 in Porto, Portugal, he began his career at Paços de Ferreira before stints at Atlético Madrid, FC Porto (loan), and Wolverhampton Wanderers, where he helped secure Premier League promotion.

Match Highlights
One of the biggest shocks came when Paraguay eliminated four-time champions Germany 4-3 on penalties following a 1-1 draw. Morocco also triumphed in a dramatic shootout, sending the Netherlands home. Meanwhile, co-hosts Canada secured their first-ever World Cup knockout victory by defeating South Africa 1-0 with a stoppage-time winner, and Mexico broke a 40-year knockout drought by beating Ecuador 2-0. The United States advanced as well, overcoming a second-half red card to comfortably defeat Bosnia and Herzegovina 2-0.

Other matches showcased thrilling comebacks and late heroics. Belgium overturned a 2-0 deficit against Senegal to win 3-2 in extra time, while England relied on two second-half goals from Harry Kane to avoid an upset against DR Congo, winning 2-1. Brazil also left it late, edging Japan 2-1 with a 95th-minute strike.

European powerhouses France, Spain, and Portugal progressed with victories over Sweden, Austria, and Croatia, respectively, while defending champions Argentina navigated past Cabo Verde 3-2. The results have set the stage for an electrifying Round of 16.
    
1. Spain
Spain is the 2026 World Cup's gold standard. Unbeaten in 34 matches and boasting a flawless defensive record, La Roja is an impenetrable fortress. After a clinical 3-0 demolition of Austria, Lamine Yamal and Mikel Oyarzabal are primed for an ultimate, high-stakes Iberian derby against Portugal. Pure footballing perfection.

2. Argentina
The reigning champions are riding a wave of pure destiny. Led by Lionel Messi, who has a record-shattering seven goals, Argentina survived a heart-stopping 3-2 extra-time thriller against Cabo Verde. Next up: a mouthwatering, global blockbuster against Mohamed Salah’s Egypt. Can anyone stop the greatest of all time?

3. France
France is a terrifying, efficient football machine. Cruising past Sweden 3-0, Les Bleus possess a frightening attack fueled by Kylian Mbappé’s six goals and Michael Olise’s elite playmaking. Facing underdog Paraguay next, this complete and ruthless squad looks utterly unstoppable on their march toward a historic final.

4. Mexico
Weaponizing the altitude of the legendary Azteca, co-hosts Mexico are flying high. With four consecutive clean sheets and a historic 2-0 win over Ecuador, El Tri has broken a 40-year knockout curse. Now, a high-stakes, maximum-drama blockbuster against England awaits in a roaring Mexico City cauldron.

5. Belgium
If you love heart-stopping drama, Belgium is your team. Orchestrating a miraculous comeback from 2-0 down against Senegal, the Red Devils survived via an ice-cold 125th-minute VAR penalty. Romelu Lukaku’s physical dominance now leads them into a highly anticipated, high-stakes 2014 rematch against the United States.

6. Brazil
Five-time champions Brazil combine elite samba flair with late-game ice. After surviving a fierce Japanese test thanks to Gabriel Martinelli’s dramatic 95th-minute winner, Vinicius Junior’s lethal attack is rolling. A historic 1998 rematch against Erling Haaland’s physical Norway sets up a colossal Round of 16 blockbuster.

7. England
England specializes in dramatic, nerve-shredding salvation. After trailing DR Congo, captain Harry Kane emerged as the ultimate savior, scoring twice to rescue a 2-1 victory. While tactical questions linger, the Three Lions must now summon peak mental fortitude to face unbeaten co-hosts Mexico inside the terrifying Azteca cauldron.

8. Portugal
Portugal’s World Cup run is pure cinematic tension. Advancing through a chaotic 2-1 thriller against Croatia courtesy of Cristiano Ronaldo's composure and a 94th-minute winner, Roberto Martínez’s squad blends legendary experience with explosive youth. Next is the ultimate prize: a colossal, maximum-stakes Iberian derby against rivals Spain.

9. Colombia
Colombia has quietly evolved into the tournament's most dangerous dark horse. Boasting a suffocating defense that has conceded just once, they dismantled Ghana 1-0. Fueled by Luis Díaz’s electric pace and James Rodríguez’s magic, the unbeaten Cafeteros look to replicate their legendary 2014 run against pragmatic Switzerland.

10. Paraguay
Meet the ultimate Cinderella story. Paraguay shocked the globe by eliminating four-time champions Germany in a historic penalty shootout, triggering a national holiday. Led by Julio Enciso’s historic header and Orlando Gill’s heroic saves, this fearless David faces the ultimate Goliath in a blockbuster clash with France.

11. Switzerland
Switzerland is the absolute blueprint for collective tactical discipline. Unbeaten and completely unbothered, they systematically choked out Algeria in a clinical 2-0 masterclass. Orchestrated by midfield general Granit Xhaka, this structurally elite unit now faces a high-stakes, contrasting clash of styles against an athletic Colombia.

12. Morocco
Proving their 2022 magic was no fluke, Morocco remains an unshakeable tournament force. The Atlas Lions combined defensive steel with elite mental fortitude to eliminate the Netherlands in a grueling penalty shootout. Now, they bring their passionate support to Houston to crash Canada’s co-host fairytale.

13. United States
Driven by roaring home crowds, the United States showed immense grit by conquering Bosnia 2-0 despite a controversial red card. Malik Tillman’s stunning free-kick provided the magic. Now, the Americans enter a high-stakes Seattle cauldron, desperate for sweet revenge in a 2014 rematch against Belgium.

14. Norway
Norway is a vulnerable machine carrying the ultimate cheat code: Erling Haaland. With five goals alongside Martin Ødegaard’s elite vision, they dispatched Ivory Coast 2-1. Now, they face a monumental, romantic 1998 rematch against Brazil. Can Haaland write football folklore and shock the world?

15. Canada
Co-hosts Canada sparked absolute national euphoria with a historic, first-ever knockout victory over South Africa. Stephen Eustáquio’s dramatic 92nd-minute winner proved they can weaponize home-field momentum. Lacking experience but packed with athletic intensity, the Canadians now face a high-stakes, narrative-rich battle against a disciplined Moroccan side.

16. Egypt
Egypt ended a grueling 92-year wait, conquering Australia in a tense penalty shootout to reach their first-ever Round of 16. Open-play goals are scarce, but their resilience is legendary. Now, Mohamed Salah prepares for an iconic, unmissable global blockbuster against Lionel Messi’s Argentina. Ultimate narrative stakes.`; 
  
  const [isPlaying, setIsPlaying] = useState(false);

  const isPlayingRef = useRef(false);
  const chunkIndexRef = useRef(0);
  const chunksRef = useRef([]);

  useEffect(() => {
    // FIX 1: Better regex that safely slices the text without losing the end of sentences
    const rawChunks = articleText.match(/[^.!?]+[.!?]*/g) || [articleText];
    
    // Clean up invisible spaces and line breaks that crash the mobile engine
    chunksRef.current = rawChunks
      .map(c => c.trim().replace(/\n/g, ' '))
      .filter(c => c.length > 0);

    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, [articleText]);

  const playNextChunk = () => {
    if (!isPlayingRef.current || chunkIndexRef.current >= chunksRef.current.length) {
      setIsPlaying(false);
      isPlayingRef.current = false;
      return;
    }

    const chunk = chunksRef.current[chunkIndexRef.current];
    const utterance = new SpeechSynthesisUtterance(chunk);
    
    // FIX 2: Explicitly tell Android this is English so it stops crashing
    utterance.lang = 'en-US'; 
    utterance.rate = 1.0; 

    utterance.onend = () => {
      chunkIndexRef.current++;
      
      // FIX 3: Give the Android TTS engine a 100ms break before firing the next sentence!
      if (isPlayingRef.current) {
        setTimeout(() => {
          playNextChunk();
        }, 100); 
      }
    };

    utterance.onerror = (e) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
      isPlayingRef.current = false;
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleToggle = () => {
    if (!('speechSynthesis' in window)) {
      alert("Text-to-speech is not supported in your browser.");
      return;
    }

    window.speechSynthesis.cancel(); 

    if (isPlayingRef.current) {
      // STOP AUDIO
      setIsPlaying(false);
      isPlayingRef.current = false;
    } else {
      // START AUDIO
      setIsPlaying(true);
      isPlayingRef.current = true;
      chunkIndexRef.current = 0; 
      
      // Give the browser time to clear its memory before beginning
      setTimeout(() => {
        playNextChunk();
      }, 100);
    }
  };

  return (
    <button 
      className="minimal-listen-btn" 
      onClick={handleToggle}
      aria-label={isPlaying ? "Stop listening" : "Listen to article"}
    >
      {isPlaying ? (
        <svg className="action-icon stop-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h12v12H6z"/>
        </svg>
      ) : (
        <svg className="action-icon headphone-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9v7c0 1.1.9 2 2 2h4v-8H5v-1c0-3.87 3.13-7 7-7s7 3.13 7 7v1h-4v8h4c1.1 0 2-.9 2-2v-7c0-4.97-4.03-9-9-9z"/>
        </svg>
      )}
      <span className="listen-text">
        {isPlaying ? 'Stop listening' : 'Listen (6 mins)'}
      </span>
    </button>
  );
}