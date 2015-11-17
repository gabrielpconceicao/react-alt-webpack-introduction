import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Repo from '../actions/SearchRepos';

export default class Test extends Component {
	render() {
		return (
			<div className="test">
				<h1> Im here!! </h1>
				<button onClick={this.onCLick}> Click here!!</button>
			</div>
		);
	}

	onCLick(){
		console.log( Repo.findRepos( '3', 'yeahhh!') );
	}
}