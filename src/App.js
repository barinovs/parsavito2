import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Grid, AdQueries } from './containers'

class App extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <AdQueries />
                <Grid />
            </div>
        )
    }

}

export default App
