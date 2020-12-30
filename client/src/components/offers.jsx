import React from 'react';
import Offer from '../components/offer';

const Offers = ({data}) => {
  return (
    <div className="offers">
      <h2>Предложения</h2>
      <ul className="offers__list">
        {data.map((item) => (
          <li key={item._id} className="offers__item">
            <Offer {...item}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Offers;
