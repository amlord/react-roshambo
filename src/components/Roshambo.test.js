import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Roshambo from './Roshambo';

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
});