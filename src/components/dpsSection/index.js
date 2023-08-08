import React, { useState } from 'react';
import './index.css';
import { useDPS } from '../../context/DpsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../cards/standardcard';
import StandoutCard from '../cards/standoutcard';



function DpsSection() {

  const [selected, setSelected] = useState(false)
  const content = useDPS();
  const [globalSelector] = useGlobalSelector();
  console.log(content);

  const selectedOnHandler = () => {
    setSelected(true);
  }
  const selectedOffHandler = () => {
    setSelected(false);
  }
  
  return (
    <div className='section dpsColor'>

      <div className='topArea'>
        <h1>Damage Dealers</h1>
        <h3>Details: <span onClick={selectedOnHandler}>ON</span> <span onClick={selectedOffHandler} >OFF</span></h3>
      </div>

      <div className='allCards'>

        <div className='cardDisplay standoutCardDisplay'>
          {content[globalSelector].map((item, index) =>
            { if (index<4) return (
                <StandoutCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind} border={true} selected={selected}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='cardDisplay standardCardDisplay'>
          {content[globalSelector].map((item, index) =>
            { if (index>=4) return (
                <StandardCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind} selected={selected}/>
              ); else return ("")
            }
          )}
        </div>

      </div>

    </div>
  );
}

export default DpsSection;
