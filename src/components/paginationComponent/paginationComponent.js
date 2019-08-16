import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'

function PaginationComponent ( {countLinks, active=3, getAdsByPage} ) {
    let items = []
    for (let number = 1; number <= countLinks; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active} onClick={getAdsByPage}>
          {number}
        </Pagination.Item>
      )
    }
    return (
        <Pagination>{items}</Pagination>
    )
}

// .propTypes = {
//
// }
//
// .defaultProps = {
//
// }

export default PaginationComponent
