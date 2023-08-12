import React from 'react';
import { useBosses } from '../../context/BossesContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import './index.css';

function Navbar() {

  const content = useBosses();
  const [globalSelector, setGlobalSelector] = useGlobalSelector();

  const current = content[globalSelector];

  const handleGlobalSelector0 = () => {
    setGlobalSelector(0);
  }
  const handleGlobalSelector1 = () => {
    setGlobalSelector(1);
  }
  const handleGlobalSelector2 = () => {
    setGlobalSelector(2);
  }


  return (
    <div class="navigation-bar">

      <div class="navbar-images">
        <img onClick={handleGlobalSelector0} className={`${globalSelector===0 ? 'activeBoss' : ''}`} title="Inhibitor" src={content[0].avatar} alt= "Inhibitor Avatar"></img>
        <img onClick={handleGlobalSelector1} className={`${globalSelector===1 ? 'activeBoss' : ''}`} title="Britra" src={content[1].avatar}></img>
        <img onClick={handleGlobalSelector2} className={`${globalSelector===2 ? 'activeBoss' : ''}`} title="Tyrant" src={content[2].avatar} alt= "Tyrant Avatar"></img>
      </div>

      <div class="navigation-bar-links">
        <a href="#boss-description">
          <h2>Boss</h2>
        </a>

        <a href="#recommended-ships">
          <h2>Ships</h2>
        </a>

        <a href="#recommended-operators">
          <h2>Operators</h2>
        </a>

        <a href="#recommended-dps">
          <h2>DPS</h2>
        </a>

        <a href="#recommended-support">
          <h2>Support</h2>
        </a>

        <a href="#extra-info">
          <h2>Extra</h2>
        </a>

      </div>
      
    </div>
  );
}

export default Navbar;
