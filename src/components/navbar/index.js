import './index.css';
import { useGlobalSelector } from '../../context/RaidGuideContext';


function Navbar() {

  const [globalSelector, setGlobalSelector] = useGlobalSelector();

  const handleGlobalSelector0 = () => {
    setGlobalSelector(0);
  }
  const handleGlobalSelector1 = () => {
    setGlobalSelector(1);
  }
  const handleGlobalSelector2 = () => {
    setGlobalSelector(2);
  }

  return (
    <div class="navigation-bar">

      <div class="navbar-images">
        <img onClick={handleGlobalSelector0} className={`${globalSelector===0 ? 'activeBoss' : ''}`} title="Britra" src='/assets/Bosspictures/Britra-avatar.png' alt= "Britra Avatar"></img>
        <img onClick={handleGlobalSelector1} className={`${globalSelector===1 ? 'activeBoss' : ''}`} title="Inhibitor" src='/assets/Bosspictures/Inhibitor-avatar.png' alt= "Inhibitor Avatar"></img>
        <img onClick={handleGlobalSelector2} className={`${globalSelector===2 ? 'activeBoss' : ''}`} title="Worm" src='/assets/Bosspictures/Worm-avatar.png' alt= "Worm Avatar"></img>
      </div>

      <div class="navigation-bar-links">
        <a href="#boss-description">
          <h2>Boss Details</h2>
        </a>

        <a href="#recommended-ships">
          <h2>Ships</h2>
        </a>

        <a href="#recommended-operators">
          <h2>Operators</h2>
        </a>

        <a href="#recommended-dps">
          <h2>DPS</h2>
        </a>

        <a href="#recommended-support">
          <h2>Support</h2>
        </a>

        <a href="#extra-info">
          <h2>Extra</h2>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
