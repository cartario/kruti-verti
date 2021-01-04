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

const Session = ({ index, title, levelTitle, backgroundColor, backgroundImage }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li onClick={() => {      
      setOpen(!open)
    }}>
      <PopupMaterial open={open} setOpen={setOpen} obj={{ title, sessionTitle: index + 1, levelTitle }}/>
      <div className="online__session-bar">
        <div
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
