import React from 'react';
import img from '../media/advantages-freeze.png';

const Advantages = () => {
  return (
    <div className="advantages">
      <p className="advantages__top">
        Kurt-Verti - это концентрат многолетнего опыта, который <span>поможет вам </span>избегать меньше ошибок и
        достичь цели быстрее самым <span>наилучшим образом</span>
      </p>
      <div className="advantages__img">
        <img src={img} alt="advantages-freeze" />
      </div>
      <ul>
        <li className="advantages__item">Онлайн и офлайн занятия</li>
        <li className="advantages__item">Прогресс уже на первом занятии</li>
        <li className="advantages__item">Позитивная среда</li>
      </ul>
    </div>
  );
};

export default Advantages;
