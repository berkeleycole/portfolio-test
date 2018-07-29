import React from 'react';
import ReactDOM from 'react-dom';
import PageTop from './page-top';

describe('rendering the page-top component', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<PageTop />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
})
