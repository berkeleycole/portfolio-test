import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Contact from './pages/contact'
import About from './pages/about'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/contact" component={Contact} />
						<Route path="/" component={About} />
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
