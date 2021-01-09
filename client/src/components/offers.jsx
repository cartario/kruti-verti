import React from 'react';
import Offer from '../components/offer';
import ShowMoreBtn from '../components/show-more';
import {useHistory} from 'react-router-dom';

const Offers = ({data}) => {
  const CLICK_BY_BTN = 3;
  const [visibleItems, setVisibleItems] = React.useState(3);
  const history = useHistory();

  const handleShowMoreClick = () => {

    setVisibleItems((prev)=>prev + CLICK_BY_BTN);

  }

  const handleClickOnline = () => {
    history.push('/p2')
  }

  return (
    <div className="offers">
      <h2>Предложения</h2>
      <ul className="offers__list">
        {data.slice(0, visibleItems).map((item) => (
          <li key={item._id} className="offers__item">
            <Offer {...item}/>
          </li>
        ))}
      </ul>
      {visibleItems >= data.length ? <button onClick={handleClickOnline} className="btn shake">Попробовать онлайн бесплатно</button>: <ShowMoreBtn handleShowMoreClick={handleShowMoreClick}/>}
    </div>
  );
};

export default Offers;
