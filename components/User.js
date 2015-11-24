import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import SearchUsersActions from '../actions/SearchUsers'

import UserResults from './UserResults'

export default class User extends React.Component {

    render() {
        return (
            <div>
                <Link to='/'>Back</Link>
                <h4>Find Users</h4>
                <div className="input-group">
                    <input type="text" className="form-control search" placeholder="Name of user" />
                    <span className="input-group-btn">
                        <button className="btn btn-success" onClick={this.handleClick}>Find</button>
                    </span>
                </div>
                <UserResults />
            </div>
        )
    }

    handleClick( arg ) {
        var val = window.document.querySelector( '.search' ).value
        SearchUsersActions.get( val )
    }
}