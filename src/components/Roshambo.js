import React, { Component } from 'react';
import rnd  from 'pure-random';

import logo from '../logo.svg';
import './Roshambo.css';

import Player from './Player';
import Scoreboard from './Scoreboard';
import Computer from './Computer';
import { ROCK, PAPER, SCISSORS, WIN, DRAW, LOSS } from '../helpers/constants';

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

  playerChoice = shape => {
    const { history } = this.state;

    // add the player's choice of shape to the `history` state
    history.push({player: shape});

    this.setState({
      history
    });
  }

  computerChoice = seed => {
    // generate random number between 1 and 3 (repeatable with `seed` for testing)
    return rnd.random( seed || rnd.genCsSeed(), 1, 3 ).value;
  }

  gameOutcome = ( playerChoice, computerChoice ) => {
    // matching choices result in a draw
    if( playerChoice === computerChoice ) {
      return DRAW;
    }

    // combinations leading to a `Player` loss
    if( ( playerChoice === ROCK && computerChoice === PAPER ) ||
        ( playerChoice === PAPER && computerChoice === SCISSORS ) ||
        ( playerChoice === SCISSORS && computerChoice === ROCK ) ) {
      return LOSS;
    }

    // anything else is a win
    return WIN;
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
          <Player
            playerChoice={this.playerChoice}
          />
          <Scoreboard
            score={this.state.score}
            resetGame={this.resetGame}
          />
          <Computer />
        </div>
      </div>
    );
  }
}

export default Roshambo;
