import React from 'react';
import Offer from '../components/offer';
import ShowMoreBtn from '../components/show-more';

const Offers = ({data}) => {
  const CLICK_BY_BTN = 3;
  const [visibleItems, setVisibleItems] = React.useState(3);

  const handleShowMoreClick = () => {

    setVisibleItems((prev)=>prev + CLICK_BY_BTN);

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
      {visibleItems >= data.length ? "": <ShowMoreBtn handleShowMoreClick={handleShowMoreClick}/>}
    </div>
  );
};

export default Offers;
