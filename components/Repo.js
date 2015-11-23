import alt from '../plugins/alt'
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import SearchRepos from '../actions/SearchRepos'
import RepoStore from '../stores/Repo'

export default class Repo extends React.Component {
  constructor(props) {
    super( props )
    this.state = { repo: {
      total_count: undefined,
    } }
  }

  static getStores() {
	  return [RepoStore];
  }

  static getPropsFromStores() {
    return RepoStore.getState();
  }

  render() {
    return (
    	<div>
        <h4>Found {this.state.repo.total_count } Repos</h4>
        	<input className="search" placeholder="Name of repo"></input>
    		<button className="btn btn-success" onClick={this.handleClick}>Find repos</button>
        <Link to='/'>Back</Link>
    	</div>
    	);
  }

  shouldComponentUpdate ( nextProps, nextState ) {
    return true
  }

  componentWillMount() {
    RepoStore.listen(this.onChange.bind( this ) )
  }

  componentWillUnmount() {
    RepoStore.unlisten(this.onChange.bind( this ) )
  }

  onChange() {
    this.setState(RepoStore.getState())
  }

  handleClick( arg ) {
  	var val = window.document.querySelector( '.search' ).value;
  	SearchRepos.get( val );
  }
}