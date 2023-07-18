import './index.css';
import { useOps } from '../../context/OpsContext';

function OpsSection() {

  const content = useOps();
  
  return (
    <div>This is the Best Operators Section {content[0][0].name}</div>
  );
}

export default OpsSection;
