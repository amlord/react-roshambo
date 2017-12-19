import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Roshambo from './Roshambo';

const app = shallow(<Roshambo />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Roshambo />, div);
});
