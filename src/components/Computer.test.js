import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Computer from './Computer';

describe('Computer', () => {
  const computer = shallow(<Computer />);

  it('renders correctly', () => {
    expect(computer).toMatchSnapshot();
  });
});