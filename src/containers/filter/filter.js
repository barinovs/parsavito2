import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { getAllAds, setAdsIsLoad, refreshFilteredRecords, setFilterParams } from '../../actions'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { SelectComponent, AddButtonComponent } from '../../components'
import { getCities } from '../../actions'

import { API_ENDPOINT } from '../../constants'
import { parseQueryString } from '../../helpers'

import './filter.css'

class Filter extends React.Component{
    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.changeItemPerPage = this.changeItemPerPage.bind(this)
        this.setFilter = this.setFilter.bind(this)
        this.changeCity = this.changeCity.bind(this)
        this.changeMinPrice = this.changeMinPrice.bind(this)
        this.changeMaxPrice = this.changeMaxPrice.bind(this)
        this.showFilter = this.showFilter.bind(this)
        this.addSpaceInNumber = this.addSpaceInNumber.bind(this)
        this.changeName = this.changeName.bind(this)

        this.state = {
          show: false,
          description: "",
          adQueryURL: "",
          arrPrices:[],
          cities: [],
          itemPerPage: 30,
          city: "",
          minPrice: '0',
          maxPrice: '0',
          name: ""
        }

    }

    addSpaceInNumber(num) {
        return String(num).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
    }

    componentWillMount() {
        let arrPrices = []
        for (let i=0; i<=5000000; i+=100000) {
            let _obj = {
                value: i,
                text: this.addSpaceInNumber(i)
            }
            arrPrices.push(_obj)
        }

        const { getCities, showModalFilter } = this.props

        const url = API_ENDPOINT + 'getCities.php'

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getCities(response.data)
            this.setState({cities: response.data})
        })

        this.setState({arrPrices, show: showModalFilter})
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    changeItemPerPage(e) {
        const re = /^[0-9\b]+$/;

        if (e.target.value === '' || re.test(e.target.value)) {
           this.setState({itemPerPage: e.target.value})
        }
    }

    changeCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    changeMinPrice(e) {
        this.setState({
            minPrice: e.target.value
        })
    }

    changeMaxPrice(e) {
        this.setState({
            maxPrice: e.target.value
        })
    }

    changeName(e) {
        const { records, filteredRecords, refreshFilteredRecords } = this.props

        const isSearched = searchTerm => item => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
        }

        const _filterRecords = records.filter(isSearched(e.target.value))

        refreshFilteredRecords(_filterRecords)

    }

    setFilter() {
        const { getAllAds, refreshFilteredRecords, setFilterParams, setAdsIsLoad } = this.props
        const { city, itemPerPage, minPrice, maxPrice } = this.state

        setAdsIsLoad(false)

        const parameters = {
            city,
            itemPerPage,
            minPrice,
            maxPrice
        }

        setFilterParams(parameters)

        const queryString = parseQueryString(parameters)

        const url = API_ENDPOINT + 'getData.php' + queryString

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getAllAds(response.data)
            setAdsIsLoad(true),
            refreshFilteredRecords(response.data.records)
        })

        this.setState({
            show: false
        })
    }

    showFilter() {
        this.setState({
            show: true
        })
    }

    render() {
        const { arrPrices, cities, itemPerPage, city, name, minPrice, maxPrice } = this.state
        return(
            <div>
                <Container >
                  <Row>
                    <Col sm>
                            <AddButtonComponent
                                value="Фильтр"
                                onClick={this.showFilter}
                            />

                    </Col>
                    <Col sm>
                        <Row>
                            Город
                        </Row>
                        <Row>
                            {city}
                        </Row>
                    </Col>
                    <Col sm>
                        <Row>
                            Цена
                        </Row>
                        <Row>
                            от {minPrice} до {maxPrice}
                        </Row>
                    </Col>
                    <Col sm>
                        <Row>
                            Название
                        </Row>
                        <Row>
                            <Form.Control
                                placeholder=""
                                onChange={this.changeName}
                            />
                        </Row>
                    </Col>
                  </Row>
                </Container>
                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                      <Modal.Title>Параметры фильтра</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form>
                          <Form.Label>Город</Form.Label>
                              <Form.Control
                                  as="select"
                                  onChange={this.changeCity}
                                  value={city}
                              >
                                  <option value={""}></option>
                                  {
                                      cities.map( (item, idx) =>
                                          <option key={idx} value={item.city}>{item.city}</option>
                                      )
                                  }
                              </Form.Control>


                          <Form.Label>Объявлений на странице</Form.Label>
                          <Form.Control
                              placeholder=""
                              onChange={this.changeItemPerPage}
                              value={itemPerPage}
                          />


                        <Row>
                            <Col><Form.Label>Цена</Form.Label></Col>
                        </Row>
                        <Row>
                          <Col>
                              <SelectComponent
                                  arrPrices={arrPrices}
                                  label="От"
                                  isFirst={true}
                                  changeValue={this.changeMinPrice}
                                  value={minPrice}
                              />
                          </Col>
                          <Col>
                              <SelectComponent
                                  arrPrices={arrPrices}
                                  label="До"
                                  isFirst={false}
                                  changeValue={this.changeMaxPrice}
                                  value={maxPrice}
                              />
                          </Col>
                        </Row>
                      </Form>
                  </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Отмена
                </Button>
                <Button variant="primary" onClick={this.setFilter}>
                  Применить
                </Button>
              </Modal.Footer>
            </Modal>
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         showModalFilter: state.showModalFilter,
         records: state.ads.records,
         filteredRecords: state.ads.filteredRecords,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCities: bindActionCreators(getCities, dispatch),
        getAllAds: bindActionCreators(getAllAds, dispatch),
        setAdsIsLoad: bindActionCreators(setAdsIsLoad, dispatch),
        refreshFilteredRecords: bindActionCreators(refreshFilteredRecords, dispatch),
        setFilterParams: bindActionCreators(setFilterParams, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
