import React from 'react';
import Offers from '../components/offers';
import {offersDataForStudios} from '../mock';

const Page3 = () => {
  return (
    <div>
      <Offers data={offersDataForStudios}/>
      
    </div>
  );
};

export default Page3;
