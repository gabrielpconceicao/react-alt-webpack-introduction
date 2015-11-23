import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';
import Home from './components/Home';

export default class App extends React.Component {
	render(){
		return (
			<Router>
				<Route path="/" component={Home}></Route>
				
			</Router>
		);
	}
}