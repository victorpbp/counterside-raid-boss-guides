import './index.css';
import { useBosses } from '../../context/BossesContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';


//We should absolutely make a proper section explaining not only how to play the boss
//but also how many of each role and when to deploy
//Like how many defenders, when and why... that kind of stuff
//Make this section more like a "How to play" against the boss.


function ExtraBossInfo() {

  const content = useBosses();
  const [globalSelector] = useGlobalSelector();

  const current = content[globalSelector];

  return (
    <div class="extra-boss-section" id="extra-info">
      <h1>Boss Features</h1>

      <div class="information-box">

        <div class="box one">
          <h3>Boss Feature #1</h3>
          <p>{current.general_advice1}</p>
        </div>

        <div class="box two">
          <img class="feature-picture" src={`${current.features1}`}></img>
          <img class="feature-gif" src={`${current.video1}`}></img>
        </div>

        <div class="box three">
          <img class="feature-picture" src={`${current.features2}`}></img>
          <img class="feature-gif" src={`${current.video2}`}></img>
        </div>

        <div class="box four">
          <h3>Boss Feature #2</h3>
          <p>{current.general_advice2}</p>
        </div>
      </div>





    </div>
  );
}

export default ExtraBossInfo;
