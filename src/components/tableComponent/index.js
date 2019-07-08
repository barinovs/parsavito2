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
                            return(<tr key={item.id}>
                                    <td>{item.city}</td>
                                    <td>{item.name}</td>
                                    <td>{item.prices[0].price}</td>
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
