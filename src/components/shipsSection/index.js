import './index.css';
import { useShips } from '../../context/ShipsContext';

function ShipsSection() {

  const content = useShips();

  return (
    <div>This is the Best Ships Section {content[0][0].name}</div>
  );
}

export default ShipsSection;
