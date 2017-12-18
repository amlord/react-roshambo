import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roshambo from './Roshambo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Roshambo />, document.getElementById('roshambo'));
registerServiceWorker();
