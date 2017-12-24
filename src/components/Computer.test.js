import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Computer from './Computer';
import { ROCK, PAPER, SCISSORS } from '../helpers/Constants';

describe('Computer', () => {
  const computer = shallow(<Computer />);

  it('renders correctly', () => {
    expect(computer).toMatchSnapshot();
  });

  describe('no games played', () => {
    it('no chosen classes exist', () => {
      computer.setProps( { chosen: undefined } );
      expect( computer.find('.Computer__ChosenShape').hasClass("Computer__ChosenShape--rock") ).toBe(false);
      expect( computer.find('.Computer__ChosenShape').hasClass("Computer__ChosenShape--paper") ).toBe(false);
      expect( computer.find('.Computer__ChosenShape').hasClass("Computer__ChosenShape--scissors") ).toBe(false);
    });
  });

  describe('at least 1 game played', () => {
    it('`Rock` chosen by computer', () => {
      computer.setProps( { chosen: ROCK } );
      expect( computer.find('.Computer__ChosenShape').hasClass("Computer__ChosenShape--rock") ).toBe(true);
    });

    it('`Paper` chosen by computer', () => {
      computer.setProps( { chosen: PAPER } );
      expect( computer.find('.Computer__ChosenShape').hasClass("Computer__ChosenShape--paper") ).toBe(true);
    });

    it('`Scissors` chosen by computer', () => {
      computer.setProps( { chosen: SCISSORS } );
      expect( computer.find('.Computer__ChosenShape').hasClass("Computer__ChosenShape--scissors") ).toBe(true);
    });
  });
});