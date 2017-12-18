import React, { Component } from 'react';
import logo from './logo.svg';
import './Roshambo.css';

class Roshambo extends Component {
  render() {
    return (
      <div className="Roshambo">
        <header className="Roshambo-header">
          <img src={logo} className="Roshambo-logo" alt="logo" />
          <h1 className="Roshambo-title">Welcome to Roshambo</h1>
        </header>
        <p className="Roshambo-intro">
          To get started, edit <code>src/Roshambo.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Roshambo;
