import React from 'react';
import meteorImg from '../media/meteor.png';
import child1 from '../media/personal-key-img1.png';
import child2 from '../media/personal-key-img2.png';
import child3 from '../media/personal-key-img3.png';
import exitImg from '../media/personal-key-exit.png';

const PersonalKeyBlock = () => {
  return (
    <div className="personal-key">
      <div className="personal-key-top">
        <div className="personal-key-top__img">
          <img src={meteorImg} alt="personal-block-img" />
        </div>
        <h2>Если ваш ребенок такой...</h2>
      </div>
      <ul className="personal-key-children">
        <li>
          <p>.</p>
          <img src={child1} alt="personal-key-children-img" />
        </li>
        <li>
          <p>или такой</p>
          <img className="shake-fast" src={child2} alt="personal-key-children-img" />
        </li>
        <li>
          <p>возможно такой</p>
          <img src={child3} alt="personal-key-children-img" />
        </li>
      </ul>
      <div className="personal-key-exit">
        <img className="shake" src={exitImg} alt="personal-key-exit-img" />
      </div>

      <h2>Для каждого найдется индивидуальный подход:</h2>
      <ul className="personal-key-description">
        <li>
          Невнимательный и летает в облаках - научим летать по настоящему! Под полным контролем
          тренера разумеется
        </li>
        <li>Гиперактивный - а вы устали от беготни и шума - научим бесшумно бегать на руках</li>
        <li>Девчонки тоже танцуют брейк - даже лучше некоторых парней</li>
      </ul>

      <h6>@Kruti-verti - брейк данc обучение и развитие</h6>
    </div>
  );
};

export default PersonalKeyBlock;
