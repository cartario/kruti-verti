import React from 'react';
import { sessions } from '../mock';
import TopOnline from '../components/online-top';
import BottomOnline from '../components/online-bottom';
import Level from '../components/online-level';

const ContentOnline = () => {
  return (
    <div className="online__content">
      <div className="online__container">
        <Level title="1" sessions={sessions} />
        <Level title="2" sessions={sessions} disabled />
        <Level title="3" sessions={sessions} disabled />
        <Level title="4" sessions={sessions} disabled />
        <Level title="5" sessions={sessions} disabled />
        <Level title="6" sessions={sessions} disabled/>
      </div>
    </div>
  );
};

const OnlinePage = () => {
  React.useEffect(()=>{   
    const navbarClose = document.querySelector('.navbar__close');   
    navbarClose.setAttribute("style", "display:none");
  },[]);

  return (
    <div className="online">      
      <TopOnline />
      <ContentOnline />
      <BottomOnline />      
    </div>
  );
};

export default OnlinePage;
