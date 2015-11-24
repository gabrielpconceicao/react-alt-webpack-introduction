import alt from '../plugins/alt'
import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router'

export default class Home extends React.Component {
    constructor(props) {
        super( props )
    }

    render() {
        return (
            <div>
                <Link to='repo'> Find repos </Link>
                <Link to='user'> Find users </Link>
            </div>
        );
    }

    shouldComponentUpdate ( nextProps, nextState ) {
        return false
    }
}