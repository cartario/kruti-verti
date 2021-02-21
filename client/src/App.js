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
import WhatsApp from './components/whatsapp';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Admin from './pages/admin';
import FeedbackPage from './pages/feedback';
import StartPage from './pages/start-page';
import OfferPage from './pages/offer.jsx';
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

          <Gallery
            title="Галерея"
            bgColor="#5A1CA9"
            colorTitle="white"
            galleryData={galleryData}
            autoPlay={false}
          >
            {/* <iframe
              title="promo"
              width="auto"
              height="100%"
              src="https://www.youtube.com/embed/kt-JEtc-WgI"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}

            <video
              width="280"
              height="200"
              controls
              autoPlay
              muted
              playsInline
              loop
              src="https://res.cloudinary.com/dwhyb2a2q/video/upload/q_auto:low/v1612423212/promoVideos/shapes-mob_-_SD_480p_k3wxyp_zh1hjt.mov"
            ></video>
          </Gallery>

          <QuoteBlock>
            Одновременно с физическим ростом ты развиваешь и умственные навыки , на групповых
            занятиях - развиваются социальные навыки и работа в команде.
          </QuoteBlock>
          <Gallery title="Залы" galleryData={galleryPlaceData} />
          <Offers data={offersData} />
          <MapBlock />
          <WhatsApp />
        </Route>
        <Route path="/offers" exact component={Page1} />
        <Route path="/app" exact component={Page2} />
        <Route path="/b2b" exact component={Page3} />
        <Route path="/admin" exact component={Admin} />
        <Route path="/feedback" exact component={FeedbackPage} />
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
