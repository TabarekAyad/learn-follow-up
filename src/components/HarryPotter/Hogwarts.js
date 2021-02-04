import React, { Component } from 'react';
import HufflePuff from "./houses/HufflePuff";
import whoseHouse from "./houses/HagridsHouse";
import * as GryffFunctions from "./houses/Gryffindor";
//import * as GryffFunctions from "./houses/Gryffindor";

//import {justAnotherFunction as testFunction} from "./houses/Gryffindor";

//I noticed that in the lab they're importing with the .js extensions but we don't. Is this same?


class Hogwarts extends Component {
    render() {
        return (
            <div>
                <HufflePuff />
            </div>
            whoseHouse(),
            /*GryffFunctions.*/colors(),
            /* testFunction(), */
            document.getElementById('root')
        )
    }
}

export default Hogwarts;