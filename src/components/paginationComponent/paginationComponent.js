import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'

function PaginationComponent ( {countLinks, page, getAdsByPage} ) {
    let items = []
    for (let number = 1; number <= countLinks; number++) {
      items.push(
        <Pagination.Item key={number} active={number === parseInt(page)} onClick={getAdsByPage}>
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
