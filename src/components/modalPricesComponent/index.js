import React from 'react'
import PropTypes, { arrayOf, shape, number, string } from 'prop-types'


import './index.css'

function ModalPricesComponent ({items}) {
    return(
        <div className="modalPrices">
            {
                items.map( item => {
                    return <div className="item" key={item.id}>{item.price}</div>
                })
            }
       </div>
   )
}

// ReactComponent.propTypes = {
//    arrayWithShape: React.PropTypes.arrayOf(React.PropTypes.shape({
//      color: React.PropTypes.string.isRequired,
//      fontSize: React.PropTypes.number.isRequired,
//    })).isRequired,
// }

ModalPricesComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:         PropTypes.number.isRequired,
        price:      PropTypes.string.isRequired,
        dateChange: PropTypes.string.isRequired
    }))

    // items: PropTypes.object

}

ModalPricesComponent.defaultProps = {
    items: {
        "url": [
            {id:0, price:"Данные не переданы", dateChange:"-"}
        ]
    }
}

export default ModalPricesComponent
