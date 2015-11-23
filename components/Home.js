import alt from '../plugins/alt'
import React, { Component } from 'react'
import SearchRepos from '../actions/SearchRepos'
import Repo from '../stores/Repo'

export default class Home extends React.Component {
  constructor(props) {
    super( props )
    this.state = { repo: {
      total_count: undefined,
    } }
  }

  static getStores() {
	  return [Repo];
  }

  static getPropsFromStores() {
    return Repo.getState();
  }

  render() {
    return (
    	<div>Found {this.state.repo.total_count } Repos
    		<button onClick={this.handleClick}>Find repos</button>
    	</div>
    	);
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    return true
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