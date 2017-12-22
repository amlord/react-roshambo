import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Roshambo from './Roshambo';
import { ROCK, PAPER, SCISSORS } from '../helpers/constants';

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
      seed = [3225582889, 3161022486, 617958775, 3943669506];
      expect(roshambo.instance().computerChoice(seed)).toEqual(ROCK);
    });

    // PAPER outcome
    it('paper', () => {
      // `seed` causes outcome of 2 (PAPER)
      seed = [1421904966, 3555913741, 725236340, 399219481];
      expect(roshambo.instance().computerChoice(seed)).toEqual(PAPER);
    });

    // SCISSORS outcome
    it('scissors', () => {
      // `seed` causes outcome of 3 (SCISSORS)
      seed = [2390802463, 2352622131, 965876151, 1929502849];
      expect(roshambo.instance().computerChoice(seed)).toEqual(SCISSORS);
    });
  });

  describe('outcomes', () => {
    /*
    ROCK / ROCK         = draw
    ROCK / PAPER        = loss
    ROCK / SCISSORS     = win

    PAPER / ROCK        = win
    PAPER / PAPER       = draw
    PAPER / SCISSORS    = loss

    SCISSORS / ROCK     = loss
    SCISSORS / PAPER    = win
    SCISSORS / SCISSORS = draw
    */
  });
});