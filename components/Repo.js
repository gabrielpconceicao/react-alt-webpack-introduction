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
        // All repos
        var repos = this.state.repo.items.map( function( repo, id ) {
            return (
                <li key={id} style={{
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '10px'
                }}>
                    <h5>Repo name: {repo.name}</h5>
                    <h6>Created by:</h6> 
                    <img style={{
                        width: '100px',
                        height: '100px'
                    }} src={repo.owner.avatar_url} />
                </li>
            )
        })

        // Container of repos
        return (
            <div>
                <Link to='/'>Back</Link>
                <h4>Find Repos</h4>
                <div className="input-group">
                    <input type="text" className="form-control search" placeholder="Name of repo" />
                    <span className="input-group-btn">
                        <button className="btn btn-success" onClick={this.handleClick}>Find</button>
                    </span>
                </div>
                <div>
                    <h4>{ this.state.repo.total_count ? this.state.repo.total_count + ' results': '' }</h4>
                    <ul className="results" style={{
                        padding: '0',
                        listStyle: 'none',
                    }}>
                        {repos}
                    </ul>
                </div>
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