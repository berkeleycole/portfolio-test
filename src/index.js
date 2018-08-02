import React from 'react';
import ReactDOM from 'react-dom';
import './resets.css';

import registerServiceWorker from './registerServiceWorker';

// missing import for <App />

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
