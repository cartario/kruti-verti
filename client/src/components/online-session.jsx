import React from 'react';
import PopupMaterial from './popupMaterial';
import Popup from './online-popup';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

const MAX_SCORE = 60;

const Session = ({
  id,
  index,
  title,
  score,
  levelTitle,
  backgroundColor, 
  tutorialVideo,
}) => {
  
  
  const [open, setOpen] = React.useState(false);
  
  const handleClosePopup = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li className={false ? 'online--disabled' : ''}>
      <PopupMaterial open={open} setOpen={setOpen}>
        <Popup
          closePopup={handleClosePopup}
          bgColor={backgroundColor}
          popupObj={{ id, title, levelTitle, sessionNumber: index + 1, tutorialVideo }}
        />
      </PopupMaterial>

      <div className="online__session-bar">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="online__session-circle"
          style={{
            backgroundColor,
            
          }}
        >
          <CircularProgress
            thickness={5.5}
            style={{ color: `rgba(0,0,0,0.3)`, position: `absolute`, left: 0, top: 0 }}
            variant="static"
            value={100}
            size={90}
          ></CircularProgress>
          <CircularProgress
            thickness={5.0}
            style={{ color: `tomato`, position: `absolute`, left: 0, top: 0 }}
            variant="static"
            value={score/MAX_SCORE >1 ? 100 : score/MAX_SCORE *100}
            size={90}
          ></CircularProgress>
        </div>
      </div>

      <p>{title}</p>
    </li>
  );
};

export default Session;
