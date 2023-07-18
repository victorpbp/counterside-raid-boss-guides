import './index.css';
import { useSupports } from '../../context/SupportsContext';

function SupportsSection() {

  const content = useSupports();

  return (
    <div>This is the Best Supports Section {content[0][0].name}</div>
  );
}

export default SupportsSection;
