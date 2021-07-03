import React from 'react';
import lang from '../data';

const QuoteBlock = ({children, text}) => {
  return (
    <div className="quote-block">
      <p>
        {lang(['quotes', '1', 'main'])}
        {children}
      </p>
      <h6>{text?text:""}</h6>
    </div>
  );
};

export default QuoteBlock;
