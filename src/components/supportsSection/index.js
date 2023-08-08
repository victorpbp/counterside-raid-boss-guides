import './index.css';
import { useSupports } from '../../context/SupportsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandardCard from '../cards/standardcard';
import StandoutCard from '../cards/standoutcard';

function SupportsSection() {

  const content = useSupports();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='section supportsColor'>

      <h1>Supports</h1>

      <div className='allCards'>

        <div className='cardDisplay standoutCardDisplay'>
          {content[globalSelector].map((item, index) =>
            { if (index<5) return (
                <StandoutCard name={item.name} role={item.role} image={item.image} description={item.description} rearm={item.rearm} kind={item.kind}/>
              ); else return ("")
            }
          )}
        </div>

        <div className='cardDisplay standardCardDisplay'>
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

export default SupportsSection;
