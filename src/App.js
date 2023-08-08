//CONTEXT IMPORTS
import { RaidGuideProvider } from './context/RaidGuideContext';
import { BossesProvider } from './context/BossesContext';
import { ShipsProvider } from './context/ShipsContext';
import { OpsProvider } from './context/OpsContext';
import { DpsProvider } from './context/DpsContext';
import { SupportsProvider } from './context/SupportsContext';


//COMPONENTS IMPORTS
import Navbar from './components/navbar';
import BossSection from './components/bossSection';
import ShipsSection from './components/shipsSection';
import OpsSection from './components/opsSection';
import DpsSection from './components/dpsSection';
import SupportsSection from './components/supportsSection';
import ExtraBossInfo from './components/extraBossInfo';
import Footer from './components/footer';

//GENERALIZED STYLES IMPORTS
import './app.css';


function App() {
  return (
    <RaidGuideProvider>
      <Navbar />
      <BossesProvider>
        <BossSection />
      </BossesProvider>
      <ShipsProvider>
        <ShipsSection />
      </ShipsProvider>
      <OpsProvider>
        <OpsSection />
      </OpsProvider>
      <DpsProvider>
        <DpsSection />
      </DpsProvider>
      <SupportsProvider>
        <SupportsSection />
      </SupportsProvider>
      <BossesProvider>
        <ExtraBossInfo />
      </BossesProvider>
      <Footer />
    </RaidGuideProvider>
  );
}

export default App;
