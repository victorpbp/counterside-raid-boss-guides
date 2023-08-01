import './index.css';
import { useSupports } from '../../context/SupportsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../standardcard';
import StandoutCard from '../standoutcard';

function SupportsSection() {

  const content = useSupports();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='sectionSupports'>

      <h1>Supports</h1>

      <div className='allcardsSupports'>

        <div className='carddisplaySupports standoutSupports'>
          {content[globalSelector].map((item, index) =>
            { if (index<4) return (
                <StandoutCard name={item.name} tier={item.tier} image={item.image} description={item.description}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='carddisplaySupports standardSupports'>
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

export default SupportsSection;
