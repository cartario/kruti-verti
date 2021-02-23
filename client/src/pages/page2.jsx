import React from 'react';
import TopOnline from '../components/online-top';
import BottomOnline from '../components/online-bottom';
import Level from '../components/online-level';
import { useSelector, useDispatch } from 'react-redux';
import { Operations } from '../store/lessons/operations';

const getUserLevel = (totalScore = 0, lessons) => {
  const MAX_SCORE_LESSON = 60;

  switch(true){
    case totalScore>4*60:
      return 3;
    case totalScore>2*60:
      return 2;
    default:
      return 1;
  }
}

const ContentOnline = () => {
  const {items: lessons, totalScore} = useSelector(({ lessons }) => lessons);
  const dispatch = useDispatch();

  const levels = [...new Set(lessons.map((item) => item.level))];
  const userLevel = getUserLevel(totalScore);

  React.useEffect(() => {
    dispatch(Operations.fetchLessons());
  }, [dispatch]);

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
  React.useEffect(() => {
    const navbarClose = document.querySelector('.navbar__close');
    navbarClose.setAttribute('style', 'display:none');
  }, []);

  return (
    <div className="online">
      <TopOnline />
      <ContentOnline />
      <BottomOnline />
    </div>
  );
};

export default OnlinePage;
