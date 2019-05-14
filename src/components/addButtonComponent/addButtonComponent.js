import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
// import { FaPlusCircle } from 'react-icons/fa'
import './addButtonComponent.css'

// import AddAdQueryComponent from '../../components'


const AddButtonComponent = ({ variant, value, onClick }) => (
    <Button
        variant={variant}
        onClick={onClick}
        className="addButton"> {value}
    </Button>

)
export default AddButtonComponent

AddButtonComponent.propTypes = {
    variant: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func
}

AddButtonComponent.defaultProps = {
    variant: 'secondary',
    value: '+',
    onClick: () => {}
}
