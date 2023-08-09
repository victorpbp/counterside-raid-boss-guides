import './index.css';
import { useShips } from '../../context/ShipsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandoutCard from '../cards/standoutcard';

function ShipsSection() {


  const content = useShips();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div id="recommended-ships" className='section shipsColor'>

      <h1>Ships</h1>

      <div className='cardDisplay'>
        {content[globalSelector].map(item =>
          { return (
              <StandoutCard name={item.name} tier={item.tier} image={item.image} description={item.description} border={true} onlyStandout={true}/>
            )
          }
        )}
      </div>

    </div>
  );
}

export default ShipsSection;
