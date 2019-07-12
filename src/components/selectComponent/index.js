import React from 'react'
import PropTypes from 'prop-types'

import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const SelectComponent = ({ arrPrices, label }) => (
   <div>
       <Form.Label inline="true">{label}</Form.Label>
       <Form.Control inline="true" as="select">
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

SelectComponent.propTypes = {
    label: PropTypes.string,
    arrPrices: PropTypes.array
}

SelectComponent.defaultProps = {
    label: '',
    arrPrices: [{value:0, text:'0'}]
}

export default SelectComponent