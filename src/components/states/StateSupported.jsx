import React, { Component } from 'react'

class StateSupported extends Component {
    constructor() {
        super()
    
        this.state = {
             count : 0
        }
    }
    
    increment = () => {
        const newCount = this.state.count + 1
        this.setState({
            count : newCount
        })

    }

    render() {
        return (
            <div onClick = {this.count.increment}>
                {this.state.count}
            </div>
        )
    }
}

export default StateSupported;
