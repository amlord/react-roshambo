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
      player.find('.Player__button--rock').simulate('click');
    });

    it('calls the `playerChoice` callback', () => {
      expect(mockplayerChoice).toHaveBeenCalledWith(ROCK);
    });
  });

  describe('when clicking the `paper` button', () => {
    beforeEach( () => {
      player.find('.Player__button--paper').simulate('click');
    });

    it('calls the `playerChoice` callback', () => {
      expect(mockplayerChoice).toHaveBeenCalledWith(PAPER);
    });
  });

  describe('when clicking the `scissors` button', () => {
    beforeEach( () => {
      player.find('.Player__button--scissors').simulate('click');
    });

    it('calls the `playerChoice` callback', () => {
      expect(mockplayerChoice).toHaveBeenCalledWith(SCISSORS);
    });
  });
  
  describe('at least 1 game played', () => {
    it('`Rock` chosen by player', () => {
      player.setProps( { chosen: ROCK } );
      expect( player.find('.Player__ChosenShape').hasClass("Player__ChosenShape--rock") ).toBe(true);
    });

    it('`Paper` chosen by player', () => {
      player.setProps( { chosen: PAPER } );
      expect( player.find('.Player__ChosenShape').hasClass("Player__ChosenShape--paper") ).toBe(true);
    });

    it('`Scissors` chosen by player', () => {
      player.setProps( { chosen: SCISSORS } );
      expect( player.find('.Player__ChosenShape').hasClass("Player__ChosenShape--scissors") ).toBe(true);
    });
  });
});