import alt from '../plugins/alt'
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

export default class User extends React.Component {
    constructor(props) {
        super( props )

        this.state = {
            user: {
                items: [],
                total_count: undefined
            },
        }
    }

    render() {
        // All users
        var users = this.state.user.items.map( function( user, id ) {
            return (
                <li key={id} style={{
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '10px'
                }}>
                    <a href="{user.html_url}" target="_blank">{user.login}</a>
                    <img style={{
                        width: '100px',
                        height: '100px'
                    }} src={user.avatar_url} />
                </li>
            )
        })

        // Container of users
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
                <div>
                    <h4>{ this.state.user.total_count ? this.state.user.total_count + ' results': '' }</h4>
                    <ul className="results" style={{
                        padding: '0',
                        listStyle: 'none',
                    }}>
                        {users}
                    </ul>
                </div>
            </div>
        )
    }

    handleClick(  ) {
    }
}