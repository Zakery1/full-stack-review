import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import routes from './routes'


class App extends Component {
  render() {
    return (
      <div>
        <Header /> 
        <Navigation />
        {routes()}
      </div>
    );
  }
}

export default App;
