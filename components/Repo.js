import alt from '../plugins/alt'
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import SearchReposActions from '../actions/SearchRepos'
import RepoStore from '../stores/Repo'

export default class Repo extends React.Component {
  constructor(props) {
    super( props )

    this.state = {
    	repo: {
    		items: [],
    		total_count: undefined
    	},
    }
  }

  static getStores() {
	  return [RepoStore]
  }

  static getPropsFromStores() {
    return RepoStore.getState()
  }

  render() {
  	/*
  		@teresamorais can you add some style or data? :)
  		you can see all data with this line:
  			console.log( this.state.repo )

  		try and see!
	*/

	// All repos
	var repos = this.state.repo.items.map( function( repo ) {
      return (
        <li>
        	<h3> Repo name </h3><h4>{repo.name}</h4>
        	<h4>Created by </h4> 
        		<img style={{
	        		width: '100px',
	        		heigth: '100px'
	        	}} src={repo.owner.avatar_url}></img>
        </li>
      )
    })

	// Container of repos
    return (
    	<div>
        <h4>Found {this.state.repo.total_count } Repos</h4>
        	<input className="search" placeholder="Name of repo"></input>
    		<button className="btn btn-success" onClick={this.handleClick}>Find repos</button>
    		<Link to='/'>Back</Link>

    		 <ul className="results">
    		 	 {repos}
    		 </ul>
    	</div>
    	)
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
    this.setState( RepoStore.getState() )
  }

  handleClick( arg ) {
  	var val = window.document.querySelector( '.search' ).value
  	SearchReposActions.get( val )
  }
}