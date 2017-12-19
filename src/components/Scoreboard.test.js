import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Scoreboard from './Scoreboard';

describe('Scoreboard', () => {
  const scoreboard = shallow(<Scoreboard />);

  it('renders correctly', () => {
    expect(scoreboard).toMatchSnapshot();
  });
});