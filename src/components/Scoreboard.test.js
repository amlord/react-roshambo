import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  const mockReset = jest.fn();
  const props = { score: { win: 0, draw: 0, loss: 0 }, resetGame: mockReset };
  const scoreboard = shallow(<Scoreboard {...props} />);

  it('renders correctly', () => {
    expect(scoreboard).toMatchSnapshot();
  });

  describe('when clicking the `reset` button', () => {
    beforeEach( () => {
      scoreboard.find('.Scoreboard__reset').simulate('click');
    });

    it('calls the `resetGame` callback', () => {
      expect(mockReset).toHaveBeenCalled();
    });
  });

  describe('when the score changes', () => {
    it('`win` score label updates', () => {
      expect( scoreboard.find('.Scoreboard__scoreCount--win').text() ).toEqual("0");

      scoreboard.setProps( { score: { win: 1, draw: 0, loss: 0 } } );

      expect( scoreboard.find('.Scoreboard__scoreCount--win').text() ).toEqual("1");
    });

    it('`draw` score label updates', () => {
      expect( scoreboard.find('.Scoreboard__scoreCount--draw').text() ).toEqual("0");

      scoreboard.setProps( { score: { win: 0, draw: 2, loss: 0 } } );

      expect( scoreboard.find('.Scoreboard__scoreCount--draw').text() ).toEqual("2");
    });

    it('`loss` score label updates', () => {
      expect( scoreboard.find('.Scoreboard__scoreCount--loss').text() ).toEqual("0");

      scoreboard.setProps( { score: { win: 0, draw: 0, loss: 3 } } );

      expect( scoreboard.find('.Scoreboard__scoreCount--loss').text() ).toEqual("3");
    });
  });
});