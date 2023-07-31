import React from 'react';
import { useBosses } from '../../context/BossesContext';

import './index.css';

function BossSection() {

  const content = useBosses();

  //console.log(content);

  return (
    <div class="boss-box" id="boss-description"> 

      <div class="img-swap">
        <img class="bg-picture" src='/assets/Bosspictures/Britra-long.png' alt= "Level 90 Britra"></img>
        <img class="second-picture" src='/assets/Bosspictures/Britra-short.png' alt= "Level 150 Britra"></img>  
      </div>

      <div class="overlay">
        <h2>Britra</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
      </div>  

    </div>
  );
}



export default BossSection;
