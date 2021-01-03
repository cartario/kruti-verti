import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {offersData} from '../mock';

const OfferPage = () => {  
  const offerId = useParams().id;
  const history = useHistory();
  const currentOffer = offersData.find((offer)=>offer._id===offerId);  

  return (
    <div className="offer-page">
     <a href="#p1" onClick={()=>history.goBack()}>Goback</a>
      <p>name: {currentOffer.name}</p>
      <p>title: {currentOffer.title}</p>
      <p>description: {currentOffer.description}</p>
      
    </div>
  );
};

export default OfferPage;
