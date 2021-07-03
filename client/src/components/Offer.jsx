import React from 'react';
import { useHistory } from 'react-router-dom';
import starImg from '../media/star.png';

const Offer = ({
  _id,
  name,
  title,
  description,
  imgUrl,
  price,
  pricePer,
  disabled,
  subscriptionFree,
  personalSessions,
  newElements,
  longTimeMonths,
  type,
  onlineSessions,
}) => {
  const history = useHistory();

  const handleClick = (_id) => {
    history.push(`/offer/${_id}`);
  };
  
  return (
    <article
      onClick={() => handleClick(_id)}
      className={disabled ? 'offer offer--disabled' : 'offer'}
    >
      <div
        className={
          type === 'group'
            ? 'offer__img offer__img--group'
            : type === 'online'
            ? 'offer__img offer__img--online'
            : type === 'sub'
            ? 'offer__img offer__img--sub'
            : 'offer__img'
        }
      >
        <img
          src={imgUrl ? imgUrl : 'https://bayramix.ru/local/templates/bayramix_new/images/load.gif'}
          width="300"
          alt="offerImg"
        />
        <p>{name}</p>
      </div>
      <div className="offer__text">
        {longTimeMonths ? (
          <p>
            <i>Расчитано на {longTimeMonths} мес.</i>
          </p>
        ) : (
          <i></i>
        )}
        <div>
          {personalSessions && (
            <p className="offer__text-indiv">
              Индивидуальных тренировок <span>{personalSessions}</span>
            </p>
          )}
          {newElements && (
            <div className="offer__text-newElem">
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
            <p className="offer__text-online">
              Онлайн-тренировок <span>{onlineSessions}</span>{' '}
            </p>
          )}
        </div>
        <p className="offer__price">
          {price}
          {pricePer && `/${pricePer}`}
        </p>
      </div>
    </article>
  );
}

export default Offer;
