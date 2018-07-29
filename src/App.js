import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/header'
import Footer from './components/footer'
import Contact from './pages/contact'
import About from './pages/about'

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Router>
					<Switch>
						<Route path="/contact" component={Contact} />
						<Route exact path="/" component={About} />
					</Switch>
				</Router>
				<Footer />
			</div>
		);
	}
}

export default App;
