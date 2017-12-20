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

  describe('user resets the game', () => {
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

  describe('user chooses a shape', () => {
    beforeEach( () => {
      roshambo.instance().resetGame();
    });

    it('rock', () => {
      roshambo.instance().playShape(ROCK);
      expect(roshambo.state().history[0].player).toEqual(ROCK);
    });

    it('paper', () => {
      roshambo.instance().playShape(PAPER);
      expect(roshambo.state().history[0].player).toEqual(PAPER);
    });

    it('scissors', () => {
      roshambo.instance().playShape(SCISSORS);
      expect(roshambo.state().history[0].player).toEqual(SCISSORS);
    });
  });
});