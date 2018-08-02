import React from 'react';
import ReactDOM from 'react-dom';
import './resets.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// intentional typo
ReactDOM.render(<Apps />, document.getElementById('root'));
registerServiceWorker();
