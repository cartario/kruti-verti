import React from 'react';
import { useHistory } from 'react-router-dom';
import { sessions } from '../mock';
import starImg from '../media/online/star.png';
import eduImg from '../media/online/edu.png';
import feedbackImg from '../media/online/feedback.png';
import bookImg from '../media/online/book.png';
import userImg from '../media/online/user.png';
import ratingImg from '../media/online/rating.png';
import PopupMaterial from '../components/popupMaterial';

const NavOnline = () => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };  

  return (
    <div className="online__nav">
      <p onClick={handleClick}>Назад</p>
    </div>
  );
};

const TopOnline = () => {
  return (
    <section className="online__top">
      <div className="online__container">
        <ul>
          <li>
            <img src={starImg} alt="online-img" />
            <span>1</span>
          </li>
          <li>
            <img src={eduImg} alt="online-img" />
            <span>15</span>
          </li>
          <li>
            <img src={feedbackImg} alt="online-img" />
            <span>1</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

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

const Level = ({ title, sessions, disabled }) => {
  return (
    <article className={disabled ? 'online__level online--disabled' : 'online__level'}>
      <h2>
        <span>Level {title}</span>
      </h2>

      <ul className="online__session">
        {sessions &&
          sessions.map((session, index) => (
            <Session
              index={index}
              key={session.title}
              title={session.title}
              levelTitle={title}
              backgroundColor={session.backgroundColor}
              backgroundImage={session.backgroundImage}
            />
          ))}
      </ul>
    </article>
  );
};

const ContentOnline = () => {
  return (
    <div className="online__content">
      <div className="online__container">
        <Level title="1" sessions={sessions} />
        <Level title="2" sessions={sessions} disabled />
        <Level title="3" sessions={sessions} disabled />
        <Level title="4" sessions={sessions} disabled />
        <Level title="5" sessions={sessions} disabled />
        <Level title="6" sessions={sessions} />
      </div>
    </div>
  );
};

const BottomOnline = () => {
  return (
    <div className="online__bottom">
      <div className="online__container">
        <ul>
          <li>
            <img src={bookImg} alt="online-img" />
          </li>
          <li>
            <img src={userImg} alt="online-img" />
          </li>
          <li>
            <img src={ratingImg} alt="online-img" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const OnlinePage = () => {
  return (
    <div className="online">
      <NavOnline />
      <TopOnline />
      <ContentOnline />
      <BottomOnline />      
    </div>
  );
};

export default OnlinePage;
