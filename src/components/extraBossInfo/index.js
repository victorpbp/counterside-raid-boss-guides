import './index.css';
import { useBosses } from '../../context/BossesContext';
import { useGlobalSelector } from '../../context/RaidGuideContext';


function ExtraBossInfo() {

  const content = useBosses();
  const [globalSelector] = useGlobalSelector();

  const current = content[globalSelector];

  return (
    <div class="extra-boss-section" id="extra-info">
      <h1>Boss Features</h1>

      {current.extra_info.map((extraInfo, index) => {

        if (index%2 === 0) {
          return (
            <div class="information-box">

              <div class="infoTexts">
                <h3>Boss Feature #{index+1}</h3>
                <p className="rightText">{extraInfo.text}</p>
              </div>

              <div class="infoImages">
                <img class="infoFeaturedArea infoPicture" src={`${extraInfo.static}`}></img>
                <img class="infoFeaturedArea infoGif" src={`${extraInfo.video}`}></img>
              </div>

            </div>
          )
        } else {
          return (
            <div class="information-box">

              <div class="infoImages">
                <img class="infoFeaturedArea infoPicture" src={`${extraInfo.static}`}></img>
                <img class="infoFeaturedArea infoGif" src={`${extraInfo.video}`}></img>
              </div>

              <div class="infoTexts">
                <h3>Boss Feature #{index+1}</h3>
                <p className="leftText">{extraInfo.text}</p>
              </div>

            </div>
          )
        }

      })}

    </div>
  );
}

export default ExtraBossInfo;
