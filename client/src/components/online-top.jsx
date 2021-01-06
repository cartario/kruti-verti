import React from 'react';
import Dialog from '../components/material-dialog';
import starImg from '../media/online/star.png';
import eduImg from '../media/online/edu.png';
import feedbackImg from '../media/online/feedback.png';
import logoImg from '../media/logo.png'

const TopOnline = () => {
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
              <span>15</span>
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
        </ul>
      </div>
    </section>
  );
};

export default TopOnline;
