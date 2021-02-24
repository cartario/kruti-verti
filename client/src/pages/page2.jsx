import React from 'react';
import TopOnline from '../components/online-top';
import BottomOnline from '../components/online-bottom';
import Level from '../components/online-level';
import { useSelector, useDispatch } from 'react-redux';
import { Operations } from '../store/lessons/operations';
import Loader from '../components/Loader';
import {getUserLevel} from '../utils';

const ContentOnline = ({userLevel, lessons}) => {
  const levels = [...new Set(lessons.map((item) => item.level))];
  
  return (
    <div className="online__content">
      <div className="online__container">
        {levels &&
          levels.map((level) => (
            <Level
              title={level}
              sessions={lessons.filter((lesson) => lesson.level === level)}
              key={level}
              disabled={userLevel < level}
            />
          ))}
      </div>
    </div>
  );
};

const OnlinePage = () => {
  const {items: lessons, totalScore} = useSelector(({ lessons }) => lessons);
  const dispatch = useDispatch();

  const userLevel = getUserLevel(totalScore, lessons);  

  React.useEffect(() => {
    const navbarClose = document.querySelector('.navbar__close');
    navbarClose.setAttribute('style', 'display:none');
  }, []);

  React.useEffect(() => {
    dispatch(Operations.fetchLessons());
  }, [dispatch]);

  if(!totalScore ||!lessons){
    return <Loader/>
  }

  return (
    <div className="online">
      <TopOnline userLevel={userLevel}/>
      <ContentOnline userLevel={userLevel} lessons={lessons}/>
      <BottomOnline />
    </div>
  );
};

export default OnlinePage;
