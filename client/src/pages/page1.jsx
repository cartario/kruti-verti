import React from 'react';
import {Link} from 'react-router-dom';
import {offersData} from '../mock';
import Offers from '../components/offers';

const Page1 = () => {
  return (
    <div>
      
      <Link to="/">Назад</Link>
      
      <Offers data={offersData}/>
      
    </div>
  );
};

export default Page1;
