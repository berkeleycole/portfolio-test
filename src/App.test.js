import React from 'react';
import ReactDOM from 'react-dom';
import Apps from './App';

// intentional typo in import

describe('rendering the root component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})
