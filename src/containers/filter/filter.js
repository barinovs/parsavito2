import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

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
          adQueryURL: ""
        }

    }

    componentWillMount() {
        let arrPrices = []
        for (let i=0; i<=5000000; i+=100000) {
            arrPrices.push(i)
        }
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
        const { arrPrices } = this.state
        return(
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Параметры фильтра</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form>
                      <Form.Label>Город</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>


                      <Form.Label>Объявлений на странице</Form.Label>
                      <Form.Control
                          placeholder=""
                          onChange={this.changeItemPerPage}
                      />

                  <Form.Label>Цена</Form.Label>
                      <Col>
                        <Form.Label inline="true">От</Form.Label>
                        <Form.Control inline="true" as="select">
                            {
                                arrPrices.map( (item, idx) => <option key={idx}>{item}</option> )
                            }

                        </Form.Control>
                      </Col>
                      <Col>
                          123
                      </Col>




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
// const mapDispatchToProps = (dispatch) => {
//     return {
//         : bindActionCreators(, dispatch)
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
export default connect()(Filter)
