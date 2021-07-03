import React from 'react';
import Offer from './Offer';
import ShowMoreBtn from './Show-more';
import {useHistory} from 'react-router-dom';

const Offers = ({ dataStudios, title}) => {
  const CLICK_BY_BTN = 3;
  const [visibleItems, setVisibleItems] = React.useState(3);
  const history = useHistory();
  const [data, setData] = React.useState();  

  const handleShowMoreClick = () => {
    setVisibleItems((prev)=>prev + CLICK_BY_BTN);
  }

  const handleClickOnline = () => {
    history.push('/app')
  }

  React.useEffect(()=>{
    async function fetchData(){
      const response = await fetch('/api/offers');
      const data = await response.json();
      setData(data.offers)
    }
    fetchData();
  }, []);

  if(!data){
    return ( <div className="offers">
    <h2>Предложения {title}</h2>
      <p style={{color: '#fff'}}>Loading...</p>
    </div>
    );
  }

  return (
    <div className="offers">
      <h2>Предложения {title}</h2>
      <ul className="offers__list">
        
        {!title ? data.filter((item)=>item.type!=='studios').slice(0, visibleItems).map((item) => (
          <li key={item._id} className="offers__item">
            <Offer {...item}/>
          </li>
        )) :
        data.filter((item)=>item.type==='studios').slice(0, visibleItems).map((item) => (
          <li key={item._id} className="offers__item">
            <Offer {...item}/>
          </li>
        ))
        }


      </ul>
      {visibleItems >= data.length ? <button onClick={handleClickOnline} className="btn shake">Попробовать онлайн бесплатно</button>: <ShowMoreBtn handleShowMoreClick={handleShowMoreClick}/>}
    </div>
  );
};

export default Offers;
