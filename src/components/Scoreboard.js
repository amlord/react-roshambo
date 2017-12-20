import React, { Component } from 'react';
import './Scoreboard.css';

class Scoreboard extends Component {
  render() {
    return (
      <div className="Scoreboard">
        <header>
          <h1>Scoreboard Component</h1>
        </header>
        <button className="btn--reset" onClick={this.props.resetGame}>Reset Game</button>
      </div>
    );
  }
}

export default Scoreboard;
