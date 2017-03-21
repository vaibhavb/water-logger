import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Drink!</h2>
        </div>
        <p className="App-intro">
         Click the following button when you want to log water.
        </p>
        <button> Glass Drank!</button>
      </div>
    );
  }
}

export default App;
