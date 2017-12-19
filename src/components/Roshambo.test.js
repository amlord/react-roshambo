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
});