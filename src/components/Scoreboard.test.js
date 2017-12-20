import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  const mockReset = jest.fn();
  const props = { resetGame: mockReset };
  const scoreboard = shallow(<Scoreboard {...props} />);

  it('renders correctly', () => {
    expect(scoreboard).toMatchSnapshot();
  });

  describe('when clicking the `reset` button', () => {
    beforeEach( () => {
      scoreboard.find('.btn--reset').simulate('click');
    });

    it('calls the `resetGame` callback', () => {
      expect(mockReset).toHaveBeenCalled();
    });
  });
});