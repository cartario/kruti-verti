import React from 'react';
import Offers from '../components/offers';
import { useHistory } from 'react-router-dom';

const Page3 = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div>
      <p className="offer-page__nav" onClick={handleClick}>
        Назад
      </p>      
      <Offers title="для студий"/>      
    </div>
  );
};

export default Page3;
