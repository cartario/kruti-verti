import React from 'react';
import PopupMaterial from './popupMaterial';
import Popup from './online-popup';

const Session = ({ index, title, levelTitle, backgroundColor, backgroundImage }) => {
  const [open, setOpen] = React.useState(false);

  const handleClosePopup = () => {
    setOpen((prev) => !prev);
  };

  return (
    <li>
      <PopupMaterial open={open} setOpen={setOpen}>
        <Popup
          closePopup={handleClosePopup}
          bgColor={backgroundColor}
          popupObj={{ title, levelTitle, sessionNumber: index + 1 }}
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
