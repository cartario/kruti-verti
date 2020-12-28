import {Route} from 'react-router-dom';
import './styles/index.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Welcome from './components/welcome';
import SayHello from './components/say-hello';
import InfoMustHave from './components/info-must-have';
import Advantages from './components/advantages';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Navbar/>
        <Route path="/" exact>
          <Welcome />
          <SayHello />
          <InfoMustHave />
          <Advantages />
        </Route>
        <Route path="/p1" exact component={Page1}/>
        <Route path="/p2" exact component={Page2}/>
        <Route path="/p3" exact component={Page3}/>
      </div>
      <div className="App__footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
