import React from 'react'
import axios from 'axios'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { API_ENDPOINT } from '../../constants'

class AddAdQueryComponent extends React.Component{
    constructor(props, context) {
      super(props, context);

      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.saveAdQuery = this.saveAdQuery.bind(this);
      this.changeDescription = this.changeDescription.bind(this);
      this.changeAdQueryURL = this.changeAdQueryURL.bind(this);

      this.state = {
        show: true,
        description: "",
        adQueryURL: ""
      };
    }

    handleClose() {
      this.setState({ show: false });
      const { setStateModalAddAdQuery } = this.props
      setStateModalAddAdQuery(false)
    }

    handleShow() {
      this.setState({ show: true });
    }

    changeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }
    changeAdQueryURL(e) {
        this.setState({
            adQueryURL: e.target.value
        })
    }

    saveAdQuery() {
        console.log('saveAdQuery');

        var params = new URLSearchParams();
        params.append('description', this.state.description);
        params.append('adQueryURL', this.state.adQueryURL);

        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: API_ENDPOINT + 'insertAdQuery.php',
            data: params
        })
        .then(function(response) {

        })
        .catch(function (error) {
            console.log(error);
        });

        this.props.setStateModalAddAdQuery(false)

    }

    render() {
        return(
            <div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Добавление нового запроса</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Строка адреса</Form.Label>
                          <Form.Control
                              as="textarea"
                              rows="3"
                              placeholder="https://www.avito.ru/..."
                              onChange={this.changeAdQueryURL}

                          />
                          <Form.Text className="text-muted">
                            Скопируйте текст из адресной строки браузера
                          </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Описание</Form.Label>
                          <Form.Control
                              as="textarea"
                              rows="3"
                              onChange={this.changeDescription}
                          />
                        </Form.Group>
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
export default AddAdQueryComponent
