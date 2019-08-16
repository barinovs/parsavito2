import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'


import { Grid, AdQueries, Display, Filter, PaginationCont } from './containers'

class App extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <Navbar sticky="top"  bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home"> Парсер Avito</Navbar.Brand>
                    <Navbar.Brand href="#"><Display /></Navbar.Brand>
                </Navbar>
                {/* <AdQueries /> */}
                <Filter />
                <Grid />
                <PaginationCont />
            </div>
        )
    }

}

export default App
