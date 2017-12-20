import React, { Component } from 'react';
import logo from '../logo.svg';
import './Roshambo.css';

import Player from './Player';
import Scoreboard from './Scoreboard';
import Computer from './Computer';

class Roshambo extends Component {
  constructor() {
    super();

    this.state = {
      score: {
        draw: 0,
        win: 0,
        loss: 0
      },
      history: []
    };
  }

  resetGame = () => {
    this.setState({
      score: {
        draw: 0,
        win: 0,
        loss: 0
      },
      history: []
    });
  }

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
        <div>
          <Player />
          <Scoreboard
            resetGame={this.resetGame}
          />
          <Computer />
        </div>
      </div>
    );
  }
}

export default Roshambo;
