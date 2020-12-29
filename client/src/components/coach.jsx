import React from 'react';
import coachImg from '../media/coach.png';

const Coach = () => {
  return (
    <div className="coach">
      <div className="coach-row">
        <div className="coach-col coach-col--left">
          <img src="https://sun9-12.userapi.com/impf/c830308/v830308756/192ef7/GjJJAH2W1Hk.jpg?size=960x1280&quality=96&proxy=1&sign=42bbd26d4baf66087e02eba913df7df2&type=album" alt="coach-img"/>
          <h3>Василий Зайков</h3>

        </div>
        <div className="coach-col coach-col--right">
          <p>
          Тренер, опытный бибой - развиваю 
собственный стиль и авторские элементы, 
ценю оригинальную форму, креативный подход, 
стараюсь привносить новые движения.

Специализация - трикс, павермув.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coach;
