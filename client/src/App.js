import {Route} from 'react-router-dom';
import './styles/index.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

function App() {
  return (
    <div className="App">
      <div className="App__content">
        <Navbar/>
        <Route path="/" exact>
          content
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
