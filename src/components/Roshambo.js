import React, { Component } from 'react';
import rnd  from 'pure-random';

import logo from '../logo.svg';
import './Roshambo.css';

import Player from './Player';
import Scoreboard from './Scoreboard';
import Computer from './Computer';
import { ROCK, PAPER, SCISSORS, WIN, DRAW, LOSS } from '../helpers/Constants';

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

  playerChoice = choice => {
    const { history } = this.state;
    const computerChoice = this.computerChoice();
    const outcome = this.gameOutcome( choice, computerChoice );

    // add the player's choice of shape to the `history` state
    history.push({
      player: choice,
      computer: computerChoice,
      outcome
    });

    // update the score state
    this.incrementScore( outcome );

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

  incrementScore = outcome => {
    let { win, draw, loss } = this.state.score;

    switch( outcome ){
      case WIN:
        win += 1;
        break;
      case DRAW:
        draw += 1;
        break;
      case LOSS:
        loss += 1;
        break;
    }

    this.setState({
      score: { win, draw, loss }
    });
  }

  render() {
    const { history } = this.state;
    const currentGame = ( history.length ) ? history[history.length - 1] : { player: "", computer: "", outcome: "" };

    return (
      <section className="Roshambo">
        <div className="Roshambo__container">
          <div className="Roshambo__panel">
            <header className="Roshambo__header">
              <h1 className="Roshambo__title">Roshambo</h1>
              <h2 className="Roshambo__subtitle">(Rock, Paper, Scissors)</h2>
            </header>
            <p className="Roshambo__intro">Rules of the game can be found on the <a href="https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors">Rock, Paper Scissors Wikipedia page</a>.</p>
            <div>
              <Player
                playerChoice={this.playerChoice}
                chosen={currentGame.player}
              />
              <Scoreboard
                score={this.state.score}
                resetGame={this.resetGame}
                history={history}
              />
              <Computer
                chosen={currentGame.computer} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Roshambo;
