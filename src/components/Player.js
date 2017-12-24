import React, { Component } from 'react';

import './Player.css';
import { ROCK, PAPER, SCISSORS, Translate } from '../helpers/Constants';

class Player extends Component {
  render() {
    const chosen = Translate.choice(this.props.chosen);

    return (
      <section className="Player">
        <div className="Player__panel">
          <header>
            <h1 className="Player__title">Player</h1>
          </header>
          <div className="Player__choice">
            <h2 className={"Player__ChosenShape" + ((chosen) ? " Player__ChosenShape--" + chosen.toLowerCase() : "")}>{chosen}</h2>
          </div>
        </div>
        <div className="Player__choiceButtons">
          <h3 className="Player__choiceButtonsTitle">Choose your shape:</h3>
          <div>
            <button className="Player__button Player__button--rock btn" onClick={() => this.props.playerChoice(ROCK)}>Rock</button>
            <button className="Player__button Player__button--paper btn" onClick={() => this.props.playerChoice(PAPER)}>Paper</button>
            <button className="Player__button Player__button--scissors btn" onClick={() => this.props.playerChoice(SCISSORS)}>Scissors</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Player;
