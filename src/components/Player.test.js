import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Player from './Player';
import { ROCK, PAPER, SCISSORS } from '../helpers/Constants';

describe('Player', () => {
  const mockplayerChoice = jest.fn();
  const props = { playerChoice: mockplayerChoice };
  const player = shallow(<Player {...props} />);

  it('renders correctly', () => {
    expect(player).toMatchSnapshot();
  });

  describe('when clicking the `rock` button', () => {
    beforeEach( () => {
      player.find('.btn--rock').simulate('click');
    });

    it('calls the `playerChoice` callback', () => {
      expect(mockplayerChoice).toHaveBeenCalledWith(ROCK);
    });
  });

  describe('when clicking the `paper` button', () => {
    beforeEach( () => {
      player.find('.btn--paper').simulate('click');
    });

    it('calls the `playerChoice` callback', () => {
      expect(mockplayerChoice).toHaveBeenCalledWith(PAPER);
    });
  });

  describe('when clicking the `scissors` button', () => {
    beforeEach( () => {
      player.find('.btn--scissors').simulate('click');
    });

    it('calls the `playerChoice` callback', () => {
      expect(mockplayerChoice).toHaveBeenCalledWith(SCISSORS);
    });
  });
});