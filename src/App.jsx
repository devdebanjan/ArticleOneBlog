import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ScrollTracker from './components/scrollbar/ScrollTracker.jsx'
import FloatingFixtures from './components/fixture/FloatingFixtures.jsx';
import LiveScore from './/components/Livescore/ScoreButton.jsx'
import { Routes, Route } from 'react-router-dom'; 

import { Analytics } from '@vercel/analytics/react';

// --- PAGES & ARTICLES ---
import Blog from './blog/Blog.jsx';              
import T20Article from './blog/T20Article.jsx';  /* <--- YOU NEED TO ADD THIS EXACT LINE */
import About from './routes/About.jsx';
import Articales from './routes/Articales.jsx';
import Scoreboard from './routes/Score.jsx';
import Recap from './blog/StrategicReviewArticle.jsx'
import Neymar from './blog/Journal.jsx'

import Roundof32 from './blog/groupof32/Blg.jsx'
import Knockout from './blog/Knockout/Knock.jsx'
import Feature from './feature/01featue.jsx'
import Qafinal from './blog/QuarterFinal/Qafinal.jsx';
import Ronaldo from './blog/Full_article/Ronaldo.jsx'

import Reffari from './blog/Full_article/Reffari.jsx'
import Semipri from './blog/Semifinalgames/Semifinal.jsx'

import Footer from './components/footer/Footer.jsx'

import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';

// ... rest of your App.jsx code stays the same

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <ScrollToTop/>
     
      <Routes>
          {/* --- TOMORROW: Make T20Article the Home Page --- */}
          <Route path='/' element={<Knockout className={`content ${theme}`} />} />
          
          {/* Your archive links stay exactly the same */}
          <Route path='/fifa-memories' element={<Blog className={`content ${theme}`} />} />
          <Route path='/t20-world-cup' element={<T20Article className={`content ${theme}`} />} />
          <Route path='/Fifa-recap-week' element={<Recap className={`content ${theme}`} />}/>
          <Route path='/Fifa-roundof32' element={<Neymar className={`content ${theme}`} />}/>
          <Route path='/Fifa-knockout' element={<Roundof32 className={`content ${theme}`} />}/>
          <Route path='/Features' element={<Feature className={`content ${theme}`} />}/>
          <Route path='/QaFinals' element={<Qafinal className={`content ${theme}`} />}/>
          <Route path='/Ronaldo' element={<Ronaldo className={`content ${theme}`} />}/>
          <Route path='/Reffari' element={<Reffari className={`content ${theme}`} />}/>
          <Route path='/Semipre' element={<Semipri  className={`content ${theme}`} />}/>
          {/* Menus */}
          <Route path='/About' element={<About className={`background ${theme}`}/>} />
          <Route path='/Articales' element={<Articales className={`background ${theme}`}/>} />
          {/* <Route path='/Scores' element={<Scoreboard className={`background ${theme}`}/>} /> */}

      </Routes>
      <LiveScore/>
      <FloatingFixtures/>
      <ScrollTracker />
      <Analytics />
      
      <Footer/>
    </div>
  );
};

export default App;