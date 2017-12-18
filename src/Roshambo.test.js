import React from 'react';
import ReactDOM from 'react-dom';
import Roshambo from './Roshambo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Roshambo />, div);
});
