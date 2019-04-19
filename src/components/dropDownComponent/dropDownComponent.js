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
    }

    toggle() {
        console.log('Toggle')
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }))

        const url = API_ENDPOINT + 'getAdsQuery.php'

        if (!this.state.dropdownOpen) {

            axios.get(url, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                this.setState({
                    items: response.data
                })
            })
        }
        else {

            // const { getAllAds, filterAds, setAdsNoLoad } = this.props
            //
            // setAdsNoLoad()
            //
            // const params = {
            //     adQueryID: e.currentTarget.getAttribute("id")
            // }
            //
            // const queryString = parseQueryString(params)
            // console.log(API_ENDPOINT + 'getData.php'  + queryString)
            //
            // axios.get(API_ENDPOINT + 'getData.php'  + queryString,
            //           {
            //               headers: { 'Content-Type': 'application/json' }
            //           })
            // .then(response => {
            //     getAllAds(response.data, params.adQueryID)
            //     filterAds(response.data.records)
            // })
            // .catch(error => {
            //     console.log(error);
            // })
        }
    }

    render() {
        const { adQueries, changeAdQuery, currentAdQuery } = this.props
        const { title } = this.state
        return(
            <Dropdown onClick={this.toggle}>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {currentAdQuery}
              </Dropdown.Toggle>


              <Dropdown.Menu>
                {
                    adQueries.map( (item, idx) => {
                        return <Dropdown.Item
                                    key={idx}
                                    dropdownvaluedescription={item.description}
                                    dropdownvalueurl={item.url}
                                    dropdownvalueid={item.id}
                                    onClick={changeAdQuery}
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
