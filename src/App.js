import './App.css';

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
    <div className="App">
      <Navbar />
      <BossSection />
      <ShipsSection />
      <OpsSection />
      <DpsSection />
      <SupportsSection />
      <ExtraBossInfo />
      <Footer />
    </div>
  );
}

export default App;
