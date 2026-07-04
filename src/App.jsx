import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar.jsx';
import ScrollTracker from './components/scrollbar/ScrollTracker.jsx'
import { Routes, Route } from 'react-router-dom'; 

// --- PAGES & ARTICLES ---
import Blog from './blog/Blog.jsx';              
import T20Article from './blog/T20Article.jsx';  /* <--- YOU NEED TO ADD THIS EXACT LINE */
import About from './routes/About.jsx';
import Articales from './routes/Articales.jsx';
import Recap from './blog/StrategicReviewArticle.jsx'
import Neymar from './blog/Journal.jsx'

import Roundof32 from './blog/groupof32/Blg.jsx'

import Footer from './components/footer/Footer.jsx'

// ... rest of your App.jsx code stays the same

const App = () => {
  const [theme, setTheme] = useState('dark');

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
     
      <Routes>
          {/* --- TOMORROW: Make T20Article the Home Page --- */}
          <Route path='/' element={<Roundof32 className={`content ${theme}`} />} />
          
          {/* Your archive links stay exactly the same */}
          <Route path='/fifa-memories' element={<Blog className={`content ${theme}`} />} />
          <Route path='/t20-world-cup' element={<T20Article className={`content ${theme}`} />} />
          <Route path='/Fifa-recap-week' element={<Recap className={`content ${theme}`} />}/>
          <Route path='/Fifa-roundof32' element={<Neymar className={`content ${theme}`} />}/>
          <Route path='/Fifa-knockout' element={<Roundof32 className={`content ${theme}`} />}/>
          
          {/* Menus */}
          <Route path='/About' element={<About className={`background ${theme}`}/>} />
          <Route path='/Articales' element={<Articales className={`background ${theme}`}/>} />
      </Routes>
      <ScrollTracker />
      <Footer/>
    </div>
  );
};

export default App;