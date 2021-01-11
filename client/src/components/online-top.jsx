import React from 'react';
import {Operations} from '../store/main/operations';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '../components/material-dialog';
import starImg from '../media/online/star.png';
import eduImg from '../media/online/edu.png';
import feedbackImg from '../media/online/feedback.png';
import logoImg from '../media/logo.png';
import infoImg from '../media/online/info.png';

const TopOnline = () => {
  const dispatch = useDispatch();
  const score = useSelector(({main}) => main.score);  

  React.useEffect(() => {
    dispatch(Operations.fetchScore());
  }, []);

  return (
    <section className="online__top">
      <div className="online__container">
        <ul>
          <li>
            <Dialog
              transition="down"
              description="
            Выполни все задания текущего уровня - чтобы открыть следующий"
              title="Текущий уровень"
            >
              <img src={starImg} alt="online-img" />
              <span>1</span>
            </Dialog>
          </li>
          <li>
            <Dialog
            
              transition="down"
              description="
              Шкала опыта показывает насколько хорошо ты прокачал навык. 
              Задания имеют несколько уровней сложности, чем больше опыта - тем более сложные задания становятся доступны"
              title="Опыт"
            >
              <img src={eduImg} alt="online-img" />
              <span>{score}</span>
            </Dialog>
          </li>
          <li>
          <Dialog
              transition="left"
              description="
              Можно задать любой вопрос, исправить неточность, похвалить или похейтить, разрешается писать абсолютно все"
              title="Обратная связь FeedBack"
            >
            <img style={{maxWidth: "75px"}} src={logoImg} alt="online-img" />
            
             </Dialog>
          </li>
          <li>
          <Dialog
              transition="left"
              description="Это раздел Онлайн-подписк. В бесплатной версии вам доступно 6 обучающих видео.
              Задания структурированы и имеют несколько уровней сложности, чтобы открыть новый уровень - необходимо выполнить все
              задания текущего.
              В первую очередь необходимо посмотреть TUTORIAL, затем нажать START.
              Через 5 сек - начнется запуск видео(звук по умолчанию выключен).
              Повторяй за тренером движения в течении указанного времени,
              очень важно в конце каждого упражнения поставить себе оценку - это накапливает 
              твой опыт и делает доступными новые задания.
              Если коротко:  -> смотри туториал -> start -> повторяй движения -> поставь себе оценку -> двигайся дальше.
              Удачи! У тебя все получится!
              
              "
              title="Как пользоваться приложением?"
            >
            <img width="40" style={{maxWidth: "75px"}} src={infoImg} alt="online-img" />
            
             </Dialog>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopOnline;
