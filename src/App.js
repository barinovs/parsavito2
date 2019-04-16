import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Grid from './containers/grid/grid'

class App extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Grid />
            </div>
        )
    }

}

export default App
