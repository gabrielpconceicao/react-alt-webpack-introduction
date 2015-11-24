import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import SearchReposActions from '../actions/SearchRepos'

import RepoResults from './RepoResults'

export default class Repo extends React.Component {

    render() {
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
                <RepoResults />
            </div>
        )
    }

    handleClick( arg ) {
        var val = window.document.querySelector( '.search' ).value
        SearchReposActions.get( val )
    }
}