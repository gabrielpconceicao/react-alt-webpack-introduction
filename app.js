import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';
import Home from './pages/Home';
import Test from './pages/Test';

export default class App extends Component {
	//static propTypes = {};
	render(){
		return (
			<Router>
				<Route path="/" component={Home}></Route>
				<Route path="/test" component={Test}></Route>
			</Router>
		);
	}
}