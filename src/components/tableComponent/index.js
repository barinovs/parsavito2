import React from 'react'

import Table from 'react-bootstrap/Table'

import './index.css'

class TableComponent extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        const { records, filterNameChange, showPrices, tableHeaders, sortBy, descending } = this.props
        return(
            <Table striped bordered hover variant="dark" className="table-fixed-head">
                <thead onClick={this.props._sort}>
                  <tr>{
                          tableHeaders.map( item => {
                              return <th key={item.field} field={item.field} isnumber={item.isNumber.toString()}>
                              {
                                  (item.field === sortBy)
                                    ? descending
                                        ? item.name + ' \u2193'
                                        : item.name + ' \u2191'
                                    : item.name
                              }
                              </th>

                          })
                      }


                    {/*
                    <th>Город</th>
                    <th>Модель
                        <input
                            type="text"
                            placeholder="Поиск"
                            onChange={filterNameChange}
                        >
                        </input>
                    </th>
                    <th>Цена</th>
                    <th>Телефон</th>
                    <th>Пробег</th>
                    <th>Год выпуска</th>
                    */}
                  </tr>
                </thead>
                <tbody>
                    {
                        records.map( (item, idx) => {
                            return(<tr key={item.id}>
                                    <td>{item.city}</td>
                                    <td>{item.dateAdded}</td>
                                    <td><a href={item.url} target="blank">{item.name}</a></td>
                                    <td
                                        url={item.url}
                                        id_avito={item.id_avito}
                                        onClick={showPrices}
                                    >
                                        {item.price}
                                    </td>
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
