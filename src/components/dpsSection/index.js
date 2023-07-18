import './index.css';
import { useDPS } from '../../context/DpsContext';

function DpsSection() {

  const content = useDPS();

  return (
    <div>This is the Best DPS's Section {content[0][0].name}</div>
  );
}

export default DpsSection;
