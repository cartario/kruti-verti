import React from 'react';
import img1 from '../media/info-mh1.png';
import img2 from '../media/info-mh2.png';
import img3 from '../media/info-mh3.png';

const InfoMustHave = () => {
  return (
    <div className="info-mh-block">
      <h2>Прежде всего необходимо знать:</h2>
      <ul>
        <li>
          <img src={img1} alt="info-img"/>
          <p>Брейк данс - в 2021 году правильно говорить «брейкинг».  
            Парней-исполнителей называют «бибой», девушек - «бигерл».</p>
        </li>
        <li>
          <img src={img2} alt="info-img"/>
          <p>Брейкинг - это танец</p>
        </li>
        <li>
          <img src={img3} alt="info-img"/>
          <p>Брейкинг(брейк данс) - официальный олимпийский	вид спорта, ближайшая олимпиада состоится в 2024 году в Париже.
            Первый олимпийский чемпион юношеских олимпийских игр - гражданин РФ</p>
        </li>
      </ul>
    </div>
  );
};

export default InfoMustHave;
