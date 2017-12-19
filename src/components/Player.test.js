import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Player from './Player';

describe('Player', () => {
  const player = shallow(<Player />);

  it('renders correctly', () => {
    expect(player).toMatchSnapshot();
  });
});