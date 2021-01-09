import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {offersData, offersDataForStudios} from '../mock';

const OfferPage = () => {  
  const offerId = useParams().id;
  const history = useHistory();
  const currentOffer = offersData.concat(offersDataForStudios).find((offer)=>offer._id===offerId);  

  const handleClick = () =>{
    history.goBack();
  }

  return (
    <div className="offer-page">
     <a href="#p1" onClick={handleClick}>Goback</a>
      <img width="200" src={currentOffer.imgUrl}/>
      <p>name: {currentOffer.name}</p>
      <p>title: {currentOffer.title}</p>
      <p>description: {currentOffer.description}</p>
      
    </div>
  );
};

export default OfferPage;
