import alt from '../plugins/alt'
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

export default class User extends React.Component {
    constructor(props) {
        super( props )
    }

    render() {
        return (
            <div>
                <span>toDo</span><br />
                <Link to='/'>Back</Link>
            </div>
        )
    }
}