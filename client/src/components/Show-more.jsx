import React from 'react';

const ShowMoreBtn = ({handleShowMoreClick}) => {
  return (
    <div className="show-more-btn">
      <button onClick={handleShowMoreClick}>Показать еще</button>
    </div>
  );
};

export default ShowMoreBtn;