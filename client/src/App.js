import { Route } from 'react-router-dom';

import './styles/index.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Welcome from './components/welcome';
import SayHello from './components/say-hello';
import InfoMustHave from './components/info-must-have';
import Advantages from './components/advantages';
import PersonalKeyBlock from './components/personal-key-block';
import TimeBlock from './components/time-block';
import QuoteBlock from './components/quote-block';
import Coach from './components/coach';
import Gallery from './components/gallery';
import Offers from './components/offers';
import MapBlock from './components/map';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import StartPage from './pages/start-page';
import OfferPage from './pages/offer.jsx'
import { galleryData, galleryPlaceData, offersData } from './mock';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Navbar />
        <Route path="/" exact>
          <Welcome />
          <SayHello />
          <InfoMustHave />
          <Advantages />
          <PersonalKeyBlock />
          <TimeBlock />
          <QuoteBlock text="@Крути-верти - безопасно делать и быстро расти!">
            Для занятий не требуется специальный реквизит - достаточно базовых фундаментальных
            движений +<br />
            <span style={{ color: '#5A1CA9' }}>мотивация</span>
            <br />
            <span style={{ color: '#02FF86' }}>настойчивость</span>
            <br />
            <span style={{ color: '#FFE700' }}>собственное воображение</span>
            <br /> - и вот вы уже создаете свою вселенную
          </QuoteBlock>
          <Coach />
          
          <Gallery title="Галерея" bgColor="#5A1CA9" colorTitle="white" galleryData={galleryData} autoPlay={false}>
            <iframe
              title="promo"
              width="auto"
              height="100%"
              src="https://www.youtube.com/embed/pPUJcwceBOw"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Gallery>
          
          <QuoteBlock>
            Одновременно с физическим ростом ты развиваешь и умственные навыки , на групповых
            занятиях - развиваются социальные навыки и работа в команде.
          </QuoteBlock>
          <Gallery title="Залы" galleryData={galleryPlaceData} />
          <Offers data={offersData}/>
          <MapBlock/>
        </Route>
        <Route path="/p1" exact component={Page1} />
        <Route path="/p2" exact component={Page2} />
        <Route path="/p3" exact component={Page3} />
        <Route path="/offer/:id">
          <OfferPage />
        </Route>
        <Route path="/start/:id">
          <StartPage />
        </Route>
      </div>
      <div className="App__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
