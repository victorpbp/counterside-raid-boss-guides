import './index.css';
import { useShips } from '../../context/ShipsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../standardcard';
import StandoutCard from '../standoutcard';

function ShipsSection() {


  const content = useShips();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='sectionShips'>

      <h1>Ships</h1>

      <div className='allcardsShips'>

        <div className='carddisplayShips standoutShips'>
          {content[globalSelector].map((item, index) =>
            { if (index<5) return (
                <StandoutCard name={item.name} tier={item.tier} image={item.image} description={item.description}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='carddisplayShips standardShips'>
          {content[globalSelector].map((item, index) =>
            { if (index>=4) return (
                <StandardCard name={item.name} tier={item.tier} image={item.image} description={item.description}/>
              ); else return ("")
            }
          )}
        </div>

      </div>

    </div>
  );
}

export default ShipsSection;
