import React, { Component } from 'react';

import './Player.css';
import { ROCK, PAPER, SCISSORS } from '../helpers/constants';

class Player extends Component {
  render() {
    return (
      <section className="Player">
        <header>
          <h1>Player</h1>
        </header>
        <button className="btn--rock" onClick={() => this.props.playShape(ROCK)}>Rock</button>
        <button className="btn--paper" onClick={() => this.props.playShape(PAPER)}>Paper</button>
        <button className="btn--scissors" onClick={() => this.props.playShape(SCISSORS)}>Scissors</button>
      </section>
    );
  }
}

export default Player;
