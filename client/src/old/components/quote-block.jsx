import React from 'react';

const QuoteBlock = ({children, text}) => {
  return (
    <div className="quote-block">
      <p>
        {children}
      </p>
      <h6>{text?text:""}</h6>
    </div>
  );
};

export default QuoteBlock;
