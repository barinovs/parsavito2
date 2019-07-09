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
<<<<<<< HEAD
                    <th>Модель <input type="text" placeholder="Поиск"></input></th>
=======
                    <th>Модель <input type="text"></input></th>
>>>>>>> 10187bfb95ff45903de1ef4512fbafe8075aef77
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
                                    <td><a href={item.url} target="blank">{item.name}</a></td>
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
