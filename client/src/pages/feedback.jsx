import React from 'react';
import Offers from '../components/offers';
import {offersDataForStudios} from '../mock';
import { useParams, useHistory } from 'react-router-dom';
import FeedbackComponent from '../components/feedback';

const Feedback = () => {
  const history = useHistory();
  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="feedback">
      <p className="offer-page__nav" onClick={handleClick}>
        Назад
      </p>
      
      <h2>Обратная связь</h2>
<div className="container">
<FeedbackComponent/>
</div>
      
      
    </div>
  );
};

export default Feedback;
