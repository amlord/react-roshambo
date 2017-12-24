import React from 'react';
import ReactDOM from 'react-dom';

// normalisation css
import './normalise.css';
import './main.css';

// overall component shared css
import './index.css';

import Roshambo from './components/Roshambo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Roshambo />, document.getElementById('roshambo'));
registerServiceWorker();
