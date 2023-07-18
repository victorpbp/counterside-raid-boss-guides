import React from 'react';
import { useContent } from '../../context/RaidGuideContext';

import './index.css';

function BossSection() {

  const content = useContent();

  //console.log(content);

  return (
    <div>This is the Boss Info Section {content[0].boss.name} </div>
  );
}

export default BossSection;
