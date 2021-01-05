import React from 'react';
import bookImg from '../media/online/book.png';
import userImg from '../media/online/user.png';
import ratingImg from '../media/online/rating.png';

const BottomOnline = () => {
  return (
    <div className="online__bottom">
      <div className="online__container">
        <ul>
          <li>
            <img src={bookImg} alt="online-img" />
          </li>
          <li>
            <img src={userImg} alt="online-img" />
          </li>
          <li>
            <img src={ratingImg} alt="online-img" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomOnline;
