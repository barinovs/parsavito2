import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { SelectComponent } from '../../components'
import { getCities } from '../../actions'

import { API_ENDPOINT } from '../../constants'

import './filter.css'

class Filter extends React.Component{
    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.changeItemPerPage = this.changeItemPerPage.bind(this)

        this.state = {
          show: true,
          description: "",
          adQueryURL: "",
          arrPrices:[],
          cities: []
        }

    }

    componentWillMount() {
        let arrPrices = []
        for (let i=0; i<=5000000; i+=100000) {
            let _obj = {
                value: i,
                text: String(i).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
            }
            arrPrices.push(_obj)
        }

        const { getCities } = this.props

        const url = API_ENDPOINT + 'getCities.php'

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getCities(response.data)
            this.setState({cities: response.data})
        })

        this.setState({arrPrices})
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    changeItemPerPage() {

    }

    render() {
        const { arrPrices, cities } = this.state
        return(
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Параметры фильтра</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Label>Город</Form.Label>
                        <Form.Control as="select">
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
                          />
                      </Col>
                      <Col>
                          <SelectComponent
                              arrPrices={arrPrices}
                              label="До"
                              isFirst={false}
                          />
                      </Col>
                    </Row>




                    {/*
                    <Form.Group controlId="formBasicChecbox">
                      <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    */}
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Отмена
                </Button>
                <Button variant="primary" onClick={this.saveAdQuery}>
                  Сохранить
                </Button>
              </Modal.Footer>
            </Modal>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//          : state.
//     }
// }
//
const mapDispatchToProps = (dispatch) => {
    return {
        getCities: bindActionCreators(getCities, dispatch)
    }
}
export default connect(null, mapDispatchToProps)(Filter)
