import React, { useState } from 'react';
import './index.css';
import { useSupports } from '../../context/SupportsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../cards/standardcard';
import StandoutCard from '../cards/standoutcard';

function SupportsSection() {

  const [selected, setSelected] = useState(false)
  const content = useSupports();
  const [globalSelector] = useGlobalSelector();
  console.log(content);

  const selectedOnHandler = () => {
    setSelected(true);
  }
  const selectedOffHandler = () => {
    setSelected(false);
  }
  
  return (
    <div id="recommended-support" className='section supportsColor'>

      <div className='topArea'>
        <h1>Supports</h1>
        <h3>Details: <span onClick={selectedOnHandler}>ON</span> <span onClick={selectedOffHandler} >OFF</span></h3>
      </div>

      <div className='allCards'>

        <div className='cardDisplay standoutCardDisplay'>
          {content[globalSelector].slice(0,4).map(item =>
            { return (
                <StandoutCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind} border={true} selected={selected}/>
              );
            }
          )}
        </div>

        <div className='cardDisplay standardCardDisplay'>
          {content[globalSelector].slice(4).map(item =>
            { return (
                <StandardCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind} selected={selected}/>
              );
            }
          )}
        </div>

      </div>

    </div>
  );
}

export default SupportsSection;
