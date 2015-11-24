import alt from '../plugins/alt'
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'
import SearchUsersActions from '../actions/SearchUsers'
import UserStore from '../stores/User'

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
                    minHeight: '120px',
                    borderBottom: '1px solid #ddd',
                    padding: '10px 0'
                }}>
                    <img style={{
                        width: '100px',
                        height: '100px',
                        float: 'left',
                        marginRight: '10px'
                    }} src={user.avatar_url} />
                    <h4 style={{
                        marginTop: '0'
                    }}>
                        <a href={user.html_url} target="_blank">{user.login}</a>
                    </h4>
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
                    <h4 style={{
                        textAlign: 'center',
                        margin: '20px 0'
                    }}>
                        { this.state.user.total_count ? this.state.user.total_count + ' results': '' }
                    </h4>
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

    shouldComponentUpdate ( nextProps, nextState ) {
        return true
    }

    componentWillMount() {
        UserStore.listen(this.onChange.bind( this ) )
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange.bind( this ) )
    }

    onChange() {
        this.setState( UserStore.getState() )
    }

    handleClick( arg ) {
        var val = window.document.querySelector( '.search' ).value
        SearchUsersActions.get( val )
    }
}