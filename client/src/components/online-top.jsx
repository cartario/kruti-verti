import React from 'react';
import starImg from '../media/online/star.png';
import eduImg from '../media/online/edu.png';
import feedbackImg from '../media/online/feedback.png';

const TopOnline = () => {
  return (
    <section className="online__top">
      <div className="online__container">
        <ul>
          <li>
            <img src={starImg} alt="online-img" />
            <span>1</span>
          </li>
          <li>
            <img src={eduImg} alt="online-img" />
            <span>15</span>
          </li>
          <li>
            <img src={feedbackImg} alt="online-img" />
            <span>1</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TopOnline;
