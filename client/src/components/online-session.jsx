import React from 'react';
import PopupMaterial from './popupMaterial';
import Popup from './online-popup';
import {useSelector} from 'react-redux';

const Session = ({ id, index, title, levelTitle, backgroundColor, backgroundImage, tutorialVideo}) => {
  const score = useSelector(({main})=>main.score);
  const [open, setOpen] = React.useState(false);
  const availableAmount = 60* (index+1);

  const handleClosePopup = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li className={ Number(score)< availableAmount ? 'online--disabled' : ""}>
      <PopupMaterial open={open} setOpen={setOpen}>
        <Popup
          closePopup={handleClosePopup}
          bgColor={backgroundColor}
          popupObj={{ id,title, levelTitle, sessionNumber: index + 1 ,tutorialVideo}}
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
            backgroundImage: `url(${backgroundImage})`,
          }}
        ></div>
      </div>
      <p>{title}</p>
    </li>
  );
};

export default Session;
