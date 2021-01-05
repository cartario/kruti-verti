import React from 'react';
import { useHistory } from 'react-router-dom';

const NavOnline = () => {
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
