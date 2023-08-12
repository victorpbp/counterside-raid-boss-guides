import React from 'react';
import { useBosses } from '../../context/BossesContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import './index.css';

function BossSection() {

  const content = useBosses();
  const [globalSelector] = useGlobalSelector();

  const current = content[globalSelector];

  //console.log(content);

  return (
    <div class="boss-box" id="boss-description"> 

      <div class="img-swap">
        <img class="bg-picture" src={`${current.unawakened}`} alt= "Level 90 Britra"></img>
        <img class="second-picture" src={`${current.awakened}`} alt= "Level 150 Britra"></img>  
      </div>

      <div class="overlay">
        <div class="overlay-content-box">
          <h2>{current.name}</h2>
          <p>{current.description}</p>
        </div>
      </div>  

    </div>
  );
}



export default BossSection;
