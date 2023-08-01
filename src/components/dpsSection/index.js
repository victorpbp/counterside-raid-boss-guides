import './index.css';
import { useDPS } from '../../context/DpsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../standardcard';
import StandoutCard from '../standoutcard';

function DpsSection() {


  const content = useDPS();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='sectionDPS'>

      <h1>Damage Dealers</h1>

      <div className='allcardsDPS'>

        <div className='carddisplayDPS standoutDPS'>
          {content[globalSelector].map((item, index) =>
            { if (index<4) return (
                <StandoutCard name={item.name} tier={item.tier} image={item.image} description={item.description}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='carddisplayDPS standardDPS'>
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

export default DpsSection;
