import './index.css';
import { useShips } from '../../context/ShipsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandoutCard from '../standoutcard';

function ShipsSection() {


  const content = useShips();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='sectionShips'>

      <h1>Ships</h1>

      <div className='carddisplayShips'>
        {content[globalSelector].map((item, index) =>
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
