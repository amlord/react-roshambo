import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Roshambo from './components/Roshambo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Roshambo />, document.getElementById('roshambo'));
registerServiceWorker();
