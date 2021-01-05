import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NavOnline from '../components/online-nav';
import TopOnline from '../components/online-top';
import BottomOnline from '../components/online-bottom';
import videoSrc from '../media/online/test-task.mp4';
import { sessions } from '../mock';

const Result = () => {
  const history = useHistory();

  const handleSuccess = () => {
    history.goBack();
  }

  const handleFail = () => {
    history.go(0);
  }

  return (
    <div className="online__start-timer-result">
      <p>Успех?</p>
      <button onClick={handleSuccess}>Да</button>
      <button onClick={handleFail}>Нет</button>
    </div>
  );
};

const Timer = ({ time , handler}) => {
  const [count, setCount] = React.useState(time);

  React.useEffect(() => {
    const addTimer = setInterval(() => {
      setCount((prev) => {
        if (prev === 0) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timer = count > 0 && addTimer;

    handler&&handler(count);

    return () => clearInterval(timer);
  }, [count]);

  return <h2>{`00:${count < 10 ? `0${count}` : count}`}</h2>;
};

const StartPage = () => {
  const history = useHistory();
  const id = useParams().id;
  const [runingTimer, setRuningTimer] = React.useState(false);
  const [countTimer, setCountTimer] = React.useState(null);

  const currentSession = sessions.find((session) => session._id === id);

  const handleClose = () => {
    history.goBack();
  };

  const handleCountTimer = (value) => {
    if(value===0){
      setCountTimer(0);  
    } 
  }

  React.useEffect(() => {
    setTimeout(() => {
      setRuningTimer(true);
    }, 5000);
  }, []);

  return (
    <div>
      <NavOnline />
      <TopOnline />
      <section className="online__start">
        <div className="online__container">
          <div className="online__start-video">
            <h2 className="online__start-video-close" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <path
                  d="M21.945 16.501L32.1539 6.29205C33.2819 5.16406 33.2819 3.33531 32.1539 2.20909L30.793 0.848105C29.6646 -0.280234 27.8359 -0.280234 26.7097 0.848105L16.501 11.0567L6.29205 0.84599C5.16406 -0.281997 3.33531 -0.281997 2.20909 0.84599L0.84599 2.20698C-0.281997 3.33531 -0.281997 5.16406 0.84599 6.29029L11.0567 16.501L0.848105 26.7097C-0.280234 27.838 -0.280234 29.6667 0.848105 30.793L2.20909 32.1539C3.33708 33.2819 5.16582 33.2819 6.29205 32.1539L16.501 21.945L26.7097 32.1539C27.838 33.2819 29.6667 33.2819 30.793 32.1539L32.1539 30.793C33.2819 29.6646 33.2819 27.8359 32.1539 26.7097L21.945 16.501Z"
                  fill="#5A1CA9"
                />
              </svg>
            </h2>
            {runingTimer ? (
              <video width="260" height="150" autoPlay muted playsInline>
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <div className="online__start-video-countdown">
                <Timer time={5} />
              </div>
            )}
          </div>
          <div className="online__start-timer">
            {runingTimer&&countTimer!==0 && <Timer time={60} handler={handleCountTimer}/>}
            {countTimer===0&&<Result/>}
            <h3>{currentSession.title}</h3>
          </div>
        </div>
      </section>
      <BottomOnline />
    </div>
  );
};

export default StartPage;
