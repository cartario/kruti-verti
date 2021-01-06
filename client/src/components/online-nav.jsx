import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

const NavOnline = () => {
  const pathname = window.location.pathname;  
  const history = useHistory();

  const handleClick = () => {
    history.goBack();    
  };  

  return (
    <div className="online__nav">
      <p onClick={handleClick}>Назад</p>
    </div>
  );
};

export default NavOnline;
