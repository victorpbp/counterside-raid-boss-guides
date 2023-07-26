import './index.css';
import { useOps } from '../../context/OpsContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';

function OpsSection() {

  const content = useOps();
  const [globalSelector] = useGlobalSelector();
  console.log(content);

  //TODO Make the crucial and normal cards be components of their own.
  //This will help in with the hovering/clicking elements as well as organization.
  
  return (
    <div className='overallsection'>

      <h1>Operators</h1>

      <div className='allcards'>

        <div className='standout'>
          {content[globalSelector].map((item, index) =>
            { if (index<4) return (
                <div className='individualcard-crucial'>
                  <h3>{item.name} - {item.tier}</h3>
                  <img src={item.image} alt="" width="180px" height="180px"/>
                  <p>{item.description}</p>
                </div>
              ); else return ("")
            }
          )}
        </div>

        <div className='standard'>
          {content[globalSelector].map((item, index) =>
            { if (index>=4) return (
                <div className='individualcard'>
                  <h3>{item.name} - {item.tier}</h3>
                  <img src={item.image} alt="" width="120px" height="120px"/>
                </div>
              ); else return ("")
            }
          )}
        </div>

      </div>

    </div>
  );
}

export default OpsSection;
