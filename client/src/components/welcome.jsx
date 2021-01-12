import React from 'react';
import { useHistory } from 'react-router-dom';

const WelcomeBlock = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/app');
  };

  return (
    <section className="welcome">
      <div className="welcome__overlay overlay">
        <div className="row">
          <div className="col col-75">
            <h1>KRUTI-VERTI</h1>
            <h4>
              Прогрессивные, безопасные, индивидуальные и групповые тренировки по
              брейкингу(брейк-данс) для детей разного уровня подготовки в онлайн/оффлайн формате
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col col-50">
            <button onClick={handleClick} className="btn">
              Попробовать онлайн
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeBlock;
