import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Roshambo from './Roshambo';
import { ROCK, PAPER, SCISSORS, WIN, DRAW, LOSS } from '../helpers/Constants';

describe('Roshambo', () => {
  const roshambo = shallow(<Roshambo />);

  it('renders correctly', () => {
    expect(roshambo).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Roshambo />, div);
  });

  it('initialises `state` with zeros for `draw`, `loss` and `win`', () => {
    expect(roshambo.state().score).toEqual({
      draw: 0,
      loss: 0,
      win: 0
    });
  });

  it('initialises `state` with an empty history', () => {
    expect(roshambo.state().history).toEqual([]);
  });

  describe('`Player` resets the game', () => {
    beforeEach( () => {
      roshambo.setState({
        score: {
          draw: 1,
          loss: 1,
          win: 1
        },
        history: [
          {player: 1, computer: 1},
          {player: 1, computer: 2},
          {player: 2, computer: 1}
        ]
      });

      roshambo.instance().resetGame();
    });

    it('scores reset to 0', () => {
      expect(roshambo.state().score).toEqual({
        draw: 0,
        loss: 0,
        win: 0
      });
    });

    it('history array emptied', () => {
      expect(roshambo.state().history).toEqual([]);
    });
  });

  describe('`Player` chooses a shape', () => {
    beforeEach( () => {
      roshambo.instance().resetGame();
    });

    it('rock', () => {
      roshambo.instance().playerChoice(ROCK);
      expect(roshambo.state().history[0].player).toEqual(ROCK);
    });

    it('paper', () => {
      roshambo.instance().playerChoice(PAPER);
      expect(roshambo.state().history[0].player).toEqual(PAPER);
    });

    it('scissors', () => {
      roshambo.instance().playerChoice(SCISSORS);
      expect(roshambo.state().history[0].player).toEqual(SCISSORS);
    });
  });

  describe('`Computer` chooses a shape', () => {
    let seed;

    // outcomes within required range
    it('rock', () => {
      // loop through 30 randomly generated outcomes
      for(let i = 0; i < 30; i++) {
        let random = roshambo.instance().computerChoice();
        expect(random).toBeGreaterThanOrEqual(1)
        expect(random).toBeLessThanOrEqual(3);
      }
    });

    // ROCK outcome
    it('rock', () => {
      // `seed` causes outcome of 1 (ROCK)
      seed = 1421904966;
      expect(roshambo.instance().computerChoice(seed)).toEqual(ROCK);
    });

    // PAPER outcome
    it('paper', () => {
      // `seed` causes outcome of 2 (PAPER)
      seed = 399219481;
      expect(roshambo.instance().computerChoice(seed)).toEqual(PAPER);
    });

    // SCISSORS outcome
    it('scissors', () => {
      // `seed` causes outcome of 3 (SCISSORS)
      seed = 3225582889;
      expect(roshambo.instance().computerChoice(seed)).toEqual(SCISSORS);
    });
  });

  describe('game outcome', () => {
    // rock combinations
    it('rock / rock', () => {
      expect(roshambo.instance().gameOutcome(ROCK, ROCK)).toEqual(DRAW);
    });
    it('rock / paper', () => {
      expect(roshambo.instance().gameOutcome(ROCK, PAPER)).toEqual(LOSS);
    });
    it('rock / scissors', () => {
      expect(roshambo.instance().gameOutcome(ROCK, SCISSORS)).toEqual(WIN);
    });

    // paper combinations
    it('paper / rock', () => {
      expect(roshambo.instance().gameOutcome(PAPER, ROCK)).toEqual(WIN);
    });
    it('paper / paper', () => {
      expect(roshambo.instance().gameOutcome(PAPER, PAPER)).toEqual(DRAW);
    });
    it('paper / scissors', () => {
      expect(roshambo.instance().gameOutcome(PAPER, SCISSORS)).toEqual(LOSS);
    });

    // scissors combinations
    it('scissors / rock', () => {
      expect(roshambo.instance().gameOutcome(SCISSORS, ROCK)).toEqual(LOSS);
    });
    it('scissors / paper', () => {
      expect(roshambo.instance().gameOutcome(SCISSORS, PAPER)).toEqual(WIN);
    });
    it('scissors / scissors', () => {
      expect(roshambo.instance().gameOutcome(SCISSORS, SCISSORS)).toEqual(DRAW);
    });
  });

  describe('`history` array updated with computer choice and outcome', () => {
    beforeAll( () => {
      roshambo.instance().resetGame();
    });

    it('item added', () => {
    roshambo.instance().playerChoice(ROCK);
      expect(roshambo.state().history.length).toEqual(1);
    });

    it('contains correct properties', () => {
    expect(roshambo.state().history[0]).toHaveProperty('player', ROCK);
      expect(roshambo.state().history[0]).toHaveProperty('computer');
      expect(roshambo.state().history[0]).toHaveProperty('outcome');
    });
  });

  describe('update `score` object', () => {
    it('`Player` draws', () => {
      const draws = roshambo.state().score.draw;
      roshambo.instance().incrementScore(DRAW);
      expect(roshambo.state().score.draw).toEqual(draws + 1);
    });

    it('`Player` wins', () => {
      const wins = roshambo.state().score.win;
      roshambo.instance().incrementScore(WIN);
      expect(roshambo.state().score.win).toEqual(wins + 1);
    });

    it('`Player` loses', () => {
      const losses = roshambo.state().score.loss;
      roshambo.instance().incrementScore(LOSS);
      expect(roshambo.state().score.loss).toEqual(losses + 1);
    });
  });

  it('correct scores', () => {
    roshambo.instance().resetGame();

    // run the game a few times
    roshambo.instance().playerChoice(ROCK);
    roshambo.instance().playerChoice(ROCK);
    roshambo.instance().playerChoice(ROCK);
    roshambo.instance().playerChoice(ROCK);
    roshambo.instance().playerChoice(ROCK);

    // calculate the scores from saved history
    const actualScore = roshambo.state().history.reduce((acc, curr) => {
      return {
        win: (curr.outcome === WIN) ? ++acc.win : acc.win,
        draw: (curr.outcome === DRAW) ? ++acc.draw : acc.draw,
        loss: (curr.outcome === LOSS) ? ++acc.loss : acc.loss
      };
    }, { win:0, draw:0, loss:0 });

    // check actual vs. calculated scores
    expect(roshambo.state().score).toHaveProperty('win', actualScore.win);
    expect(roshambo.state().score).toHaveProperty('draw', actualScore.draw);
    expect(roshambo.state().score).toHaveProperty('loss', actualScore.loss);
  });
});