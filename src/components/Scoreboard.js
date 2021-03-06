import React, { Component } from 'react';
import './Scoreboard.css';

import ScoreHistory from './ScoreHistory';

class Scoreboard extends Component {
  render() {
    return (
      <section className="Scoreboard">
        <header>
          <h1 className="Scoreboard__title">Scoreboard</h1>
        </header>
        <div className="Scoreboard__scores">
          <div className="Scoreboard__score Scoreboard__score--win">
            <h2 className="Scoreboard__scoreTitle">Win</h2>
            <div className="Scoreboard__scoreCount Scoreboard__scoreCount--win">{this.props.score.win}</div>
          </div>
          <div className="Scoreboard__score Scoreboard__score--draw">
            <h2 className="Scoreboard__scoreTitle">Draw</h2>
            <div className="Scoreboard__scoreCount Scoreboard__scoreCount--draw">{this.props.score.draw}</div>
          </div>
          <div className="Scoreboard__score Scoreboard__score--loss">
            <h2 className="Scoreboard__scoreTitle">Loss</h2>
            <div className="Scoreboard__scoreCount Scoreboard__scoreCount--loss">{this.props.score.loss}</div>
          </div>
        </div>
        <button className="Scoreboard__reset btn" onClick={this.props.resetGame}>Reset Game</button>
        <ScoreHistory
          history={this.props.history} />
      </section>
    );
  }
}

export default Scoreboard;
