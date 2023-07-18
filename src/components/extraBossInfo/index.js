import './index.css';
import { useBosses } from '../../context/BossesContext';


function ExtraBossInfo() {

  const content = useBosses();

  return (
    <div>This is the Extra Boss Info Section {content[0].general_advice}</div>
  );
}

export default ExtraBossInfo;
