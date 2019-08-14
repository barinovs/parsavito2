import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import { SelectComponent, AddButtonComponent } from '../../components'

import './filter.css'

class Filter extends React.Component{
    constructor(props) {
        super(props)
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.changeItemPerPage = this.changeItemPerPage.bind(this)
        this.showFilter = this.showFilter.bind(this)

        this.state = {
          show: false,
          description: "",
          adQueryURL: ""
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

    showFilter() {
        this.setState({
            show: true
        })
    }

    render() {
        const { arrPrices } = this.state
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
                            ...
                        </Row>
                    </Col>
                    <Col sm>
                        <Row>
                            Цена
                        </Row>
                        <Row>
                            от ... до ...
                        </Row>
                    </Col>
                    <Col sm>
                        <Row>
                            Название
                        </Row>
                        <Row>
                            ...
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
            </div>
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
