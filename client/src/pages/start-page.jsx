import React, { useRef } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import NavOnline from '../components/online-nav';
import TopOnline from '../components/online-top';
import BottomOnline from '../components/online-bottom';
import { sessions } from '../mock';

const audioUrls= [
  "https://res.cloudinary.com/dxioiveim/video/upload/v1610205678/kruti-verti/online/music/Erik_B._and_Rakim_-_Dont_Sweat_The_Technique_p29fmc.mp3",
  "https://res.cloudinary.com/dxioiveim/video/upload/v1610202443/kruti-verti/online/music/attache_-_bassbin_ballerina_ynsug5.mp3",
  "https://res.cloudinary.com/dxioiveim/video/upload/v1610205544/kruti-verti/online/music/Boogie_Down_Productions_-_Jack_of_Spades_krcwtc.mp3",
  "https://res.cloudinary.com/dxioiveim/video/upload/v1610205533/kruti-verti/online/music/Show_A.G._-_Next_Level_l2ejyr.mp3",
  "https://res.cloudinary.com/dxioiveim/video/upload/v1610205529/kruti-verti/online/music/Fdel_-_Get_Up_On_Ya_Feet_w0v4i5.mp3"
];

const RANDOM_AUDIO_URL = audioUrls[Math.floor(Math.random() * audioUrls.length)];

const Result = () => {
  const history = useHistory();

  const handleSuccess = () => {
    history.goBack();
  };

  const handleFail = () => {
    history.go(0);
  };

  return (
    <div className="online__start-timer-result">
      <p>Оцени себя, это поможет сохранить твой прогресс!</p>
      <button onClick={handleSuccess}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="70%"
          width="70%"
          viewBox="1 -26 511.99975 511"
        >
          <path
            fill="white"
            d="m493.714844 97.953125c-11.792969-11.792969-27.46875-18.285156-44.148438-18.285156-16.675781 0-32.351562 6.492187-44.144531 18.285156l-211.023437 211.023437-87.851563-87.847656c-11.789063-11.792968-27.46875-18.289062-44.144531-18.289062-16.675782 0-32.351563 6.496094-44.144532 18.289062-24.34375 24.339844-24.34375 63.949219 0 88.289063l131.996094 131.996093c11.789063 11.792969 27.46875 18.285157 44.144532 18.285157 16.675781 0 32.355468-6.492188 44.144531-18.285157l255.171875-255.167968c11.789062-11.792969 18.285156-27.46875 18.285156-44.148438 0-16.675781-6.496094-32.351562-18.285156-44.144531zm-21.550782 66.742187-255.171874 255.167969c-6.035157 6.035157-14.058594 9.359375-22.59375 9.359375-8.535157 0-16.558594-3.324218-22.59375-9.359375l-131.996094-131.996093c-12.460938-12.457032-12.460938-32.730469 0-45.1875 6.035156-6.035157 14.058594-9.359376 22.59375-9.359376s16.558594 3.324219 22.59375 9.359376l98.625 98.625c5.953125 5.949218 15.601562 5.949218 21.550781 0l221.800781-221.800782c6.035156-6.035156 14.058594-9.359375 22.59375-9.359375s16.558594 3.324219 22.59375 9.359375 9.359375 14.058594 9.359375 22.59375c0 8.539063-3.320312 16.5625-9.355469 22.597656zm0 0"
          />
          <path
            fill="white"
            d="m89.628906 159.78125c12.851563 4.789062 24.300782 12.148438 34.03125 21.882812 9.714844 9.710938 17.078125 21.164063 21.886719 34.027344 2.222656 5.957032 7.914063 9.90625 14.273437 9.90625 6.359376 0 12.046876-3.945312 14.273438-9.902344 9.675781-25.882812 30.054688-46.265624 55.914062-55.917968 5.957032-2.222656 9.910157-7.914063 9.910157-14.273438s-3.949219-12.050781-9.90625-14.277344c-12.871094-4.8125-24.320313-12.175781-34.035157-21.90625-9.703124-9.691406-17.066406-21.136718-21.882812-34.027343-2.222656-5.953125-7.914062-9.902344-14.273438-9.902344-6.359374 0-12.046874 3.949219-14.273437 9.90625-4.816406 12.882813-12.175781 24.332031-21.894531 34.035156-9.703125 9.714844-21.15625 17.082031-34.03125 21.890625-5.960938 2.226563-9.910156 7.917969-9.910156 14.28125.003906 6.363282 3.957031 12.054688 9.917968 14.277344zm70.191406-46.398438c4.296876 6.226563 9.171876 12.066407 14.601563 17.488282 5.4375 5.445312 11.289063 10.328125 17.523437 14.632812-12.566406 8.667969-23.449218 19.554688-32.117187 32.125-4.300781-6.230468-9.179687-12.082031-14.617187-17.515625-5.441407-5.441406-11.285157-10.316406-17.503907-14.613281 6.226563-4.300781 12.070313-9.179688 17.496094-14.613281 5.4375-5.429688 10.316406-11.273438 14.617187-17.503907zm0 0"
          />
          <path
            fill="white"
            d="m240.503906 81.117188c9.683594 3.609374 18.3125 9.15625 25.648438 16.492187 7.320312 7.320313 12.871094 15.953125 16.496094 25.652344 2.226562 5.957031 7.917968 9.90625 14.277343 9.90625 6.355469 0 12.046875-3.949219 14.273438-9.90625 7.292969-19.507813 22.652343-34.871094 42.144531-42.148438 5.957031-2.222656 9.90625-7.914062 9.90625-14.273437.003906-6.359375-3.945312-12.050782-9.902344-14.277344-9.703125-3.625-18.332031-9.175781-25.65625-16.511719-7.3125-7.304687-12.863281-15.933593-16.492187-25.644531-2.226563-5.957031-7.914063-9.90625-14.273438-9.90625s-12.050781 3.949219-14.277343 9.902344c-3.628907 9.714844-9.179688 18.34375-16.5 25.660156-7.316407 7.324219-15.949219 12.875-25.652344 16.5-5.960938 2.226562-9.910156 7.917969-9.910156 14.28125.003906 6.363281 3.957031 12.054688 9.917968 14.273438zm47.195313-23.503907c3.335937-3.332031 6.414062-6.855469 9.226562-10.558593 2.808594 3.703124 5.882813 7.21875 9.214844 10.546874 3.335937 3.34375 6.863281 6.421876 10.570313 9.238282-7.46875 5.65625-14.125 12.316406-19.78125 19.785156-2.8125-3.703125-5.890626-7.230469-9.226563-10.566406-3.335937-3.335938-6.859375-6.410156-10.5625-9.222656 3.703125-2.8125 7.226563-5.886719 10.558594-9.222657zm0 0"
          />
        </svg>
      </button>
      <button onClick={handleFail}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          height="70%"
          width="70%"
          viewBox="0 0 305.836 305.836"
        >
          <g>
            <path
              fill="white"
              d="M152.924,300.748c84.319,0,152.912-68.6,152.912-152.918c0-39.476-15.312-77.231-42.346-105.564   c0,0,3.938-8.857,8.814-19.783c4.864-10.926-2.138-18.636-15.648-17.228l-79.125,8.289c-13.511,1.411-17.999,11.467-10.021,22.461   l46.741,64.393c7.986,10.992,17.834,12.31,22.008,2.937l7.56-16.964c12.172,18.012,18.976,39.329,18.976,61.459   c0,60.594-49.288,109.875-109.87,109.875c-60.591,0-109.882-49.287-109.882-109.875c0-19.086,4.96-37.878,14.357-54.337   c5.891-10.325,2.3-23.467-8.025-29.357c-10.328-5.896-23.464-2.3-29.36,8.031C6.923,95.107,0,121.27,0,147.829   C0,232.148,68.602,300.748,152.924,300.748z"
            />
          </g>
        </svg>
      </button>
      <div className="online__start-timer-result-text">
        <p>У меня все получилось (+5опыта)</p>
        <p>Я могу еще лучше (+15опыта)</p>
      </div>
    </div>
  );
};

const Timer = ({ time, handler }) => {
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

    handler && handler(count);

    return () => clearInterval(timer);
  }, [count]);

  return <h2>{`00:${count < 10 ? `0${count}` : count}`}</h2>;
};

const StartPage = () => {
  const history = useHistory();
  const id = useParams().id;
  const [runingTimer, setRuningTimer] = React.useState(false);
  const [countTimer, setCountTimer] = React.useState(null);
  const [muted, setMuted] = React.useState(false);
  const videoRef = useRef();
  const audioRef = useRef();
  const TRAINING_TIME = 60;

  const currentSession = sessions.find((session) => session._id === id);

  const handleClose = () => {
    history.goBack();
  };

  const handleCountTimer = (value) => {
    if (value === 0) {
      setCountTimer(0);
    }
  };

  const handlePauseMusic = () => {
    setMuted((prev) => !prev);
    console.log(muted);
  };

  React.useEffect(() => {
    const navbarClose = document.querySelector('.navbar__close');
    navbarClose.classList.add('navbar__close--online');

    setTimeout(() => {
      setRuningTimer(true);
    }, 5000);
  }, []);

  React.useEffect(() => {
    if (videoRef.current) {
      setTimeout(() => {
        videoRef.current && videoRef.current.pause();
      }, TRAINING_TIME * 1000);
    }
  }, [runingTimer]);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
      setTimeout(() => {
        audioRef.current && audioRef.current.pause();
      }, TRAINING_TIME * 1000);
    }
  }, [runingTimer, muted]);

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
              <>
                <h2 className="online__start-video-music"  onClick={handlePauseMusic}>
                  {!muted ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      
                      enable-background="new 0 0 451.111 451.111"
                      height="33"
                      viewBox="0 0 451.111 451.111"
                      width="33"
                    >
                      <path d="m294.162 0-112.747 96.667h-84.74v257.778h84.741l112.746 96.667h60.275v-451.112z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      
                      enable-background="new 0 0 451.111 451.111"
                      height="33"
                      viewBox="0 0 451.111 451.111"
                      width="33"
                    >
                      <path d="m354.428 0h-60.275l-109.307 93.719 169.582 169.582z" />
                      <path d="m451.111 405.546-405.546-405.546-45.564 45.564 96.667 96.667v212.214h84.741l112.746 96.667h60.275v-51.118l51.118 51.118z" />
                    </svg>
                  )}
                </h2>
                <audio
                  ref={audioRef}
                  autoPlay
                  src={RANDOM_AUDIO_URL}
                ></audio>
                <video width="260" height="150" autoPlay loop muted playsInline ref={videoRef}>
                  <source src={currentSession.trainingVideo} type="video/mp4" />
                </video>                
              </>
            ) : (
              <>
                <div className="online__start-video-countdown">
                  <Timer time={5} />
                </div>
                <h3 className="online__start-video-letsgo">
                  Начинаем тренировку, повторяй за тренером
                </h3>
              </>
            )}
          </div>
          <div className="online__start-timer">
            {runingTimer && countTimer !== 0 && (
              <Timer time={TRAINING_TIME} handler={handleCountTimer} />
            )}
            {countTimer === 0 && <Result />}
            <h3>{currentSession.title}</h3>
          </div>
        </div>
      </section>
      <BottomOnline />
    </div>
  );
};

export default StartPage;
