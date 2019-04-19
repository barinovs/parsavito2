import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'


import { Grid, AdQueries } from './containers'

class App extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Navbar sticky="top"  bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#home"> Парсер Avito</Navbar.Brand>
                </Navbar>
                <AdQueries />
                <Grid />
            </div>
        )
    }

}

export default App