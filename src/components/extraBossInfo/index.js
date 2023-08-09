import './index.css';
import { useBosses } from '../../context/BossesContext';


//We should absolutely make a proper section explaining not only how to play the boss
//but also how many of each role and when to deploy
//Like how many defenders, when and why... that kind of stuff
//Make this section more like a "How to play" against the boss.

function ExtraBossInfo() {

  const content = useBosses();

  return (
    <div id="extra-info">This is the Extra Boss Info Section {content[0].general_advice}</div>
  );
}

export default ExtraBossInfo;
