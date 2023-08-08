import './index.css';
import { useOps } from '../../context/OpsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

import StandoutCard from '../cards/standoutcard';

function OpsSection() {

  const content = useOps();
  const [globalSelector] = useGlobalSelector();
  console.log(content);
  
  return (
    <div className='section opsColor'>

      <h1>Operators</h1>

      <div className='cardDisplay'>
        {content[globalSelector].map((item, index) =>
          { return (
              <StandoutCard name={item.name} activation={item.activation} image={item.image} description={item.description} border={true} onlyStandout={true}/>
            )
          }
        )}
      </div>

    </div>
  );
}

export default OpsSection;
