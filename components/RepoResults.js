import React, { Component } from 'react'
import RepoStore from '../stores/Repo'

export default class RepoResults extends React.Component {
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
                    minHeight: '120px',
                    borderBottom: '1px solid #ddd',
                    padding: '10px 0'
                }}>
                    <img style={{
                        width: '100px',
                        height: '100px',
                        float: 'left',
                        marginRight: '10px'
                    }} src={repo.owner.avatar_url} />
                    <h4 style={{
                        marginTop: '0'
                    }}>
                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                    </h4>
                    <h5>Created by: <a href={repo.owner.html_url} target="_blank">{repo.owner.login}</a></h5> 
                    <p style={{
                        fontWeight: '200'
                    }}>
                        {repo.description}
                    </p>
                </li>
            )
        })

        // Container of repos
        return (
            <div>
                <h4 style={{
                    textAlign: 'center',
                    margin: '20px 0'
                }}>
                    { this.state.repo.total_count ? this.state.repo.total_count + ' results': '' }
                </h4>
                <ul className="results" style={{
                    padding: '0',
                    listStyle: 'none',
                }}>
                    {repos}
                </ul>
            </div>
        )
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
}