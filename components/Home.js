import React, { Component } from 'react'
import SearchRepos from '../actions/SearchRepos'
import Repo from '../stores/Repo'

export default class Home extends React.Component {
  render() {
    return (
    	<div>Hello
    		<button onClick={this.handleClick}>Find repos</button>
    	</div>
    	);
  }

  handleClick( arg ) {
  	console.log( 'init' )
  	SearchRepos.get();
  	//this.setState({data: data});
  }
}