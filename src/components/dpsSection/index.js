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
    <div className='section dpsColor'>

      <h1>Damage Dealers</h1>

      <div className='allCards'>

        <div className='cardDisplay standoutCardDisplay'>
          {content[globalSelector].map((item, index) =>
            { if (index<4) return (
                <StandoutCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind} border={true}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='cardDisplay standardCardDisplay'>
          {content[globalSelector].map((item, index) =>
            { if (index>=4) return (
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
