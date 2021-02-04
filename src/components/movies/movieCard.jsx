import React, { Component } from 'react'

class movieCard extends Component {
    render() {
        return (
            <div>
                <img src={this.props.posterSrc} alt={this.props.title} />
                <h2>{this.props.title}</h2>
                <small>{this.props.genres.join(', ')}</small>
            </div>
        )
    }
}

movieCard.defaultProps = {
    posterSrc: 'http://i.imgur.com/bJw8ndW.png'
}

export default movieCard;