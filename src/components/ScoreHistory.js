import React, { Component } from 'react';

import './ScoreHistory.css';
import { Translate } from '../helpers/Constants';

class ScoreHistory extends Component {

  renderHistory = () => {
    let { history } = this.props;

    return (
        <table className="gameHistory">
          {history.reverse().map((game, index) => {
              return (
                  <tr>
                      <td>{Translate.choice(game.player)}</td>
                      <td>{Translate.outcome(game.outcome)}</td>
                      <td>{Translate.choice(game.computer)}</td>
                  </tr>
              );
          })}
        </table>
    );
  }

  renderEmptyHistory = () => {
    return (
      <div>(no history)</div>
    );
  }

  render() {
    let { history } = this.props;

    return (
      <section className="ScoreHistory">
        {(history) ? this.renderHistory() : this.renderEmptyHistory()}
      </section>
    );
  }
}

export default ScoreHistory;
