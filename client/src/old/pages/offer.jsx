import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import starImg from '../../media/star.png';
import WhatsApp from '../components/whatsapp';
import Loader from '../components/Loader';

const OfferPage = () => { 
  const offerId = useParams().id;
  const history = useHistory();
  const [currentOffer, setCurrentOffer] = React.useState();

  const handleClick = () => {
    history.goBack();
  }; 
  
  React.useEffect(()=>{
    async function fetchData(){
      const response = await fetch(`/api/offers/${offerId}`);
      const data = await response.json();
      
      setCurrentOffer(data.offer);
    }
    fetchData();
  },[offerId]);  

  if(!currentOffer){
    return <Loader />;
  }

  const {
    name,   
    imgUrl,
    price,
    pricePer,    
    subscriptionFree,
    personalSessions,
    newElements,
    longTimeMonths,    
    onlineSessions,
  } = currentOffer;

  return (
    <div className="offer-page">
      <p className="offer-page__nav" onClick={handleClick}>
        Назад
      </p>
      <img width="200" src={imgUrl} alt='img'/>
      <h2>"{name}"</h2>

      <div>
        {longTimeMonths ? (
          <p className="offer-page__long">
            <i>Расчитано на {longTimeMonths} мес.</i>
          </p>
        ) : (
          <i></i>
        )}
      </div>

      <div>
        {personalSessions && (
          <p className="offer__text-indiv">
            Индивидуальных тренировок <span>{personalSessions}</span>
          </p>
        )}
        {newElements && (
          <div className="offer__text-newElem1">
            Новых элементов
            {Array.from({ length: Number(newElements) })
              .fill('')
              .map((star, i) => (
                <img src={starImg} alt="starImg" key={i} />
              ))}
          </div>
        )}

        {subscriptionFree && (
          <p className="offer__text-sub">
            Онлайн-подписка <span>бесплатно</span>
            <span>{subscriptionFree}мес.</span>{' '}
          </p>
        )}
        {onlineSessions && (
          <p className="offer__text-online1">
            Онлайн-тренировок <span>{onlineSessions}</span>{' '}
          </p>
        )}
      </div>
      <p className="offer__price">
        {price}
        {pricePer && `/${pricePer}`}
      </p>

      <WhatsApp title={name}/>
    </div>
  );
};

export default OfferPage;
