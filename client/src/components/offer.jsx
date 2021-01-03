import React from 'react';
import {useHistory} from 'react-router-dom';

export default function ({_id, name, title, description, imgUrl, price}) {
  
  const history = useHistory();

  const handleClick = (_id) => {
    history.push(`/offer/${_id}`);
  }

  return (
    <article onClick = {()=>handleClick(_id)} className="offer">
      <div className="offer__img">
        <img src={imgUrl? imgUrl : "https://bayramix.ru/local/templates/bayramix_new/images/load.gif"} width="300" alt="offerImg" />
        <p>{name}</p>
      </div>
      <div className="offer__text">
        <p className="offer__description">
          {description ? description.substr(0, 180) : "Description"}...
        </p>
        <p className="offer__price">price</p>
      </div>
    </article>
  );
}