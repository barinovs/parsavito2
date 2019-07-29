import React from 'react'
import PropTypes, { arrayOf, shape, number, string } from 'prop-types'


import './index.css'

function ModalPricesComponent ({items, closePrices}) {
    const divHeight = items.length * 30
    return(
        <div className="modalPrices">
            <table border="1px solid black">
                <tbody>
                {
                    items.map( item => {
                        return <tr className="tr" key={item.id}>
                                    <td> {item.datechange}</td>
                                    <td> {item.price}</td>
                               </tr>
                    })
                }
                </tbody>
            </table>
            <button onClick={closePrices}>Закрыть</button>
       </div>
   )
}

ModalPricesComponent.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id:         PropTypes.number.isRequired,
        price:      PropTypes.string.isRequired,
        dateChange: PropTypes.string.isRequired
    }))

    // items: PropTypes.object

}

ModalPricesComponent.defaultProps = {
    items: [
            {id:"0", price:"Данные не переданы", dateChange:"-"}
        ]

}

export default ModalPricesComponent
