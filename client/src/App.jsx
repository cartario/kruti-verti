import React from 'react';
import { Route } from 'react-router-dom';
import './styles/index.scss';
import {Home} from './pages';
import {Navbar, Footer} from './components';

const Content = () => {
  return (
    <div className="App__content">   
      <Navbar/>   
      <Route path="/" exact component={Home}/>
    </div>
  )
};

const App = () => {
  return (
    <div className="App">
      <Content /> 
      <Footer/>
    </div>
    )
};

export default App;
