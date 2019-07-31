import React from 'react'
import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function SelectComponent({ arrPrices, label, isFirst, changeValue }) {
    let defValue = ''
    // if (!isFirst) {
    //     arrPrices = arrPrices.reverse()
    // }

    return(
       <div>
           <Form.Label inline="true">{label}</Form.Label>
           <Form.Control inline="true" as="select" onChange={changeValue}>
               {

                   arrPrices.map( (item, idx) =>
                       <option
                           value={item.value}
                           key={idx}
                       >
                           {item.text}
                       </option> )
               }

           </Form.Control>
       </div>
   )
}


SelectComponent.propTypes = {
    label: PropTypes.string,
    arrPrices: PropTypes.array,
    isFirst: PropTypes.bool,
    changeValue: PropTypes.func
}

SelectComponent.defaultProps = {
    label: '',
    arrPrices: [{value:0, text:'0'}],
    isFirst: true,
    changeValue: () => {}
}

export default SelectComponent
