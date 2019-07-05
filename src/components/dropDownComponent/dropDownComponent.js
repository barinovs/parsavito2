import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import { API_ENDPOINT } from '../../constants'
import axios from 'axios'


class DropDownComponent extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            dropdownOpen: false,
            title: 'Список запросов'
        }
        this.toggle = this.toggle.bind(this)
        this.onSelect = this.onSelect.bind(this)
    }



    toggle(e) {
        const { getAdQueries } = this.props

        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }))

        const { dropdownClick } = this.props


        // Получение списка запросов
        const url = API_ENDPOINT + 'getAdsQuery.php'

        // if (this.state.dropdownOpen) {

            axios.get(url, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                dropdownClick(response.data)
            })
        // }

        // Получение списка объявлений


    }

    onSelect(event) {
        const adQueryId = event.target.getAttribute('dropdownvalueid')
        

        this.props.getAdsById(adQueryId)

    }

    render() {
        const { adQueries, changeAdQuery, currentAdQuery } = this.props
        const { title } = this.state
        return(
            <Dropdown onClick={this.toggle} >
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentAdQuery}
              </Dropdown.Toggle>


              <Dropdown.Menu>
                {
                    adQueries.map( (item, idx) => {
                        return <Dropdown.Item
                                    eventKey={item.id}
                                    key={item.id}
                                    dropdownvaluedescription={item.description}
                                    dropdownvalueurl={item.url}
                                    dropdownvalueid={item.id}
                                    onClick={changeAdQuery}
                                    onSelect={(eventKey, event) => this.onSelect(event)}
                                >
                                    {item.description}
                                </Dropdown.Item>
                    } )
                }
              </Dropdown.Menu>
            </Dropdown>
        )
    }

}
export default DropDownComponent
