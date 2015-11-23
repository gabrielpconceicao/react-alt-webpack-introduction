import alt from '../plugins/alt'
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

  componentWillMount() {
    Repo.listen(this.onChange.bind( this ) )
  }
  componentWillUnmount() {
    Repo.unlisten(this.onChange.bind( this ) )
  }
  onChange() {
    this.setState(Repo.getState())
  }

  handleClick( arg ) {
  	SearchRepos.get();
  }
}