import React, { Component } from 'react'

export default class Card extends Component {

    render() {
        return (
            <div className="card">
                <h3>{this.props.user.name}</h3>
                <p>{this.props.user.username}</p>
                <p>{this.props.user.email}</p>
                <p>{this.props.user.website}</p>
                <p>{this.props.user.company.name}</p>
                <p>{this.props.user.address.city}</p>
            </div>
        )
    }
}
