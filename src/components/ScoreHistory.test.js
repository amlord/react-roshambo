import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import ScoreHistory from './ScoreHistory';
import { ROCK, PAPER, SCISSORS, WIN, DRAW, LOSS, Translate } from '../helpers/Constants';

describe('ScoreHistory', () => {
  const props = { history: [
    {player: ROCK, computer: PAPER, outcome: LOSS},
    {player: SCISSORS, computer: PAPER, outcome: WIN},
    {player: PAPER, computer: PAPER, outcome: DRAW}
  ]};

  describe('no history', () => {
    const scoreboard = shallow(<ScoreHistory history={[]} />);

    it('renders correctly', () => {
      expect(scoreboard).toMatchSnapshot();
    });

    it('does not show table rows', () => {
      expect( scoreboard.find('.ScoreHistory__list tr').length ).toEqual(0);
    });
  });

  describe('history', () => {
    const scoreboard = shallow(<ScoreHistory {...props} />);

    it('renders correctly', () => {
      expect(scoreboard).toMatchSnapshot();
    });

    it('shows 3 table rows', () => {
      expect( scoreboard.find('.ScoreHistory__list tr').length ).toEqual(3);
    });

    it('cell 1 shows player choice', () => {
      const txtRock = Translate.choice(ROCK);
      const txtPlayerChoice = scoreboard.find('.ScoreHistory__list tr').at(2).find('td').at(1).text();

      expect( txtPlayerChoice ).toEqual( txtRock );
    });

    it('cell 2 shows game outcome', () => {
      const txtLoss = Translate.outcome(LOSS);
      const txtOutcome = scoreboard.find('.ScoreHistory__list tr').at(2).find('td').at(2).text();
      
      expect( txtOutcome ).toEqual( txtLoss );
    });

    it('cell 3 shows computer choice', () => {
      const txtPaper = Translate.choice(PAPER);
      const txtComputerChoice = scoreboard.find('.ScoreHistory__list tr').at(2).find('td').at(3).text();
      
      expect( txtComputerChoice ).toEqual( txtPaper );
    });
  });
});