import React from 'react';
import { useHistory } from 'react-router-dom';

const Popup = ({ popupObj, closePopup, bgColor }) => {
  const { title, levelTitle, sessionNumber } = popupObj;
  const [tutorialVisible, setTutorialVisible] = React.useState(false);
  const history = useHistory();

  const handleToggleTutorialVisible = () => {
    setTutorialVisible((prev) => !prev);
  };

  const handleStartClick = () => {
    history.push('/start');

    //TODO добавить в редакс выбранный обьект
  }

  return (
    <div className="online__popup">
      <div className="online__popup-inner" style={{ background: `radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, ${bgColor} 100%)`}}>
        <div className="online__popup-top">
          <span onClick={closePopup}>+</span>
        </div>
        <div className="online__popup-info">
          <h3>{title}</h3>
          <p>
            Level-{levelTitle} <span>Session-{sessionNumber}</span>
          </p>
        </div>
        <div className="online__popup-controls">
          <button className="online__popup-controls--start" style={{ color: bgColor }} onClick={handleStartClick}>
            START
          </button>
          <button className="online__popup-controls--cancel" style={{ color: 'black' }} onClick={closePopup}>
            CANCEL
          </button>
          <button
            className="online__popup-controls--tutorial"
            onClick={handleToggleTutorialVisible}
          >
            {tutorialVisible ? 'СКРЫТЬ TUTORIAL' : 'TUTORIAL'}
          </button>
          {tutorialVisible && (
            <div className="online__popup-video-tutorial">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gGl92ThhoVs"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Popup;
