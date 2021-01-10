import React from 'react';
import {Link} from 'react-router-dom';
import {offersData} from '../mock';
import Offers from '../components/offers';

const Page1 = () => {
  return (
    <div>
      <div className="offer-page__nav">
        <Link style={{color: "white"}} to="/">Назад</Link>
      </div>
      
      
      <Offers data={offersData}/>
      
    </div>
  );
};

export default Page1;
