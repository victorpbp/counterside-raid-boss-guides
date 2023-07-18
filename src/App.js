//CONTEXT IMPORTS
import { RaidGuideProvider } from './context/RaidGuideContext';

//COMPONENTS IMPORTS
import Navbar from './components/navbar';
import BossSection from './components/bossSection';
import ShipsSection from './components/shipsSection';
import OpsSection from './components/opsSection';
import DpsSection from './components/dpsSection';
import SupportsSection from './components/supportsSection';
import ExtraBossInfo from './components/extraBossInfo';
import Footer from './components/footer';


function App() {
  return (
    <RaidGuideProvider>
      <Navbar />
      <BossSection />
      <ShipsSection />
      <OpsSection />
      <DpsSection />
      <SupportsSection />
      <ExtraBossInfo />
      <Footer />
    </RaidGuideProvider>
  );
}

export default App;
