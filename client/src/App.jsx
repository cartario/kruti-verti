import React from 'react';
import { Route } from 'react-router-dom';
import './styles/index.scss';
import {Home} from './pages';

const Content = () => {
  return (
    <div className="App__content">      
      <Route path="/" exact component={Home}/>
    </div>
  )
};

const Footer = () => {
  return (
    <div className="App__footer">
      Footer
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Content /> 
      <Footer />
    </div>
    )
};

export default App;
