import React, { Component } from 'react';

import './ScoreHistory.css';
import { Translate } from '../helpers/Constants';

class ScoreHistory extends Component {

  renderHistory = () => {
    let { history } = this.props;

    return (
        <table className="ScoreHistory__list">
          <tbody>
          {history.reverse().map((game, index) => {
              return (
            <tr>
              <td>{(history.length - index)}</td>
              <td>{Translate.choice(game.player)}</td>
              <td>{Translate.outcome(game.outcome)}</td>
              <td>{Translate.choice(game.computer)}</td>
            </tr>
              );
          })}
          </tbody>
        </table>
    );
  }

  renderEmptyHistory = () => {
    return (
      <div className="ScoreHistory__noGames">(no games played)</div>
    );
  }

  render() {
    let { history } = this.props;

    return (
      <section className="ScoreHistory">
        <h1 className="ScoreHistory__title">Game History:</h1>
        {(history.length) ? this.renderHistory() : this.renderEmptyHistory()}
      </section>
    );
  }
}

export default ScoreHistory;
