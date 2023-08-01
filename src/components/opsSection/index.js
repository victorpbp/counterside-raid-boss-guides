import './index.css';
import { useOps } from '../../context/OpsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../standardcard';
import StandoutCard from '../standoutcard';

function OpsSection() {

  const content = useOps();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='sectionOps'>

      <h1>Operators</h1>

      <div className='allcardsOps'>

        <div className='carddisplayOps standoutOps'>
          {content[globalSelector].map((item, index) =>
            { if (index<4) return (
                <StandoutCard name={item.name} tier={item.tier} image={item.image} description={item.description}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='carddisplayOps standardOps'>
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

export default OpsSection;
