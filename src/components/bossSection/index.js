import React from 'react';
import { useBosses } from '../../context/BossesContext';

import './index.css';

function BossSection() {

  const content = useBosses();

  //console.log(content);

  return (
    <div>This is the Boss Info Section {content[0].name} </div>
  );
}

export default BossSection;
