import React from 'react'

import Table from 'react-bootstrap/Table'

class TableComponent extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { records } = this.props
        return(
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Город</th>
                    <th>Модель</th>
                    <th>Цена</th>
                    <th>Телефон</th>
                    <th>Пробег</th>
                    <th>Год выпуска</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        records.map( (item, idx) => {
                            return(<tr key={idx}>
                                    <td>{item.id}</td>
                                    <td>{item.city}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.phone_number}</td>
                                    <td>{item.mileage}</td>
                                    <td>{item.yearIssue}</td>
                                   </tr>
                                  )
                        })
                    }
                </tbody>
            </Table>
        )
    }

}
export default TableComponent
