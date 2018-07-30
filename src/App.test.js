import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('rendering the root component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Apps />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})
