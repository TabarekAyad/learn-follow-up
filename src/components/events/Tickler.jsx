import React, { Component } from 'react'

class Tickler extends Component {
    tickle = (event) => {
        console.log("Tee hee");
        console.log(event.type);
        console.log(event.target);
    }
    render() {
        return (
            <div>
                <button onClick = {this.tickle}>Tickle me</button>
            </div>
        )
    }
}

export default Tickler;