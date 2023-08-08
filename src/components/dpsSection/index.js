import './index.css';
import { useDPS } from '../../context/DpsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../cards/standardcard';
import StandoutCard from '../cards/standoutcard';

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
            { if (index<5) return (
                <StandoutCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='carddisplayDPS standardDPS'>
          {content[globalSelector].map((item, index) =>
            { if (index>=5) return (
                <StandardCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind}/>
              ); else return ("")
            }
          )}
        </div>

      </div>

    </div>
  );
}

export default DpsSection;
