import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const DisplayComponent = (props) => (
   <div className="currentAdQuery">{props.currentAdQuery}</div>
)

DisplayComponent.propTypes = {

}

DisplayComponent.defaultProps = {

}

export default DisplayComponent
