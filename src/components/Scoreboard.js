import React, { Component } from 'react';
import './Scoreboard.css';

import ScoreHistory from './ScoreHistory';

class Scoreboard extends Component {
  render() {
    return (
      <section className="Scoreboard">
        <header>
          <h1>Scoreboard</h1>
        </header>
        <div className="scores">
          <div className="score score--win">
            <h2>Win</h2>
            <div className="scoreCount scoreCount--win">{this.props.score.win}</div>
          </div>
          <div className="score score--draw">
            <h2>Draw</h2>
            <div className="scoreCount scoreCount--draw">{this.props.score.draw}</div>
          </div>
          <div className="score score--loss">
            <h2>Loss</h2>
            <div className="scoreCount scoreCount--loss">{this.props.score.loss}</div>
          </div>
        </div>
        <button className="btn--reset" onClick={this.props.resetGame}>Reset Game</button>
        <ScoreHistory
          history={this.props.history} />
      </section>
    );
  }
}

export default Scoreboard;
