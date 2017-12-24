import React, { Component } from 'react';

import './Player.css';
import { ROCK, PAPER, SCISSORS, Translate } from '../helpers/Constants';

class Player extends Component {
  render() {
    return (
      <section className="Player">
        <header>
          <h1 className="Player__title">Player</h1>
        </header>
        <div className="Player__choice">
          <h2 className="Player__ChosenShape">{Translate.choice(this.props.chosen)}</h2>
        </div>
        <button className="btn--rock" onClick={() => this.props.playerChoice(ROCK)}>Rock</button>
        <button className="btn--paper" onClick={() => this.props.playerChoice(PAPER)}>Paper</button>
        <button className="btn--scissors" onClick={() => this.props.playerChoice(SCISSORS)}>Scissors</button>
      </section>
    );
  }
}

export default Player;
