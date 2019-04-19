import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import { FaPlusCircle } from 'react-icons/fa'
import './addButtonComponent.css'


const AddButtonComponent = ({ variant, value, onClick }) => (
    <Button
        variant={variant}
        onClick={onClick}
        className="addButton"> {value} <FaPlusCircle />
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
    value: '',
    onClick: () => {}
}
