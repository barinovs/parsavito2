import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'

function PaginationComponent ( {countLinks, page, getAdsByPage} ) {
    let items = []
    if (countLinks < 11) {
        for (let number = 1; number <= countLinks; number++) {
          items.push(
            <Pagination.Item key={number} active={number === parseInt(page)} onClick={getAdsByPage}>
              {number}
            </Pagination.Item>
          )
        }
    }else{
        for (let number = 1; number <= 4; number++) {
            items.push(
              <Pagination.Item key={number+parseInt(page)} active={number+parseInt(page) === parseInt(page)} onClick={getAdsByPage}>
                {number+parseInt(page)}
              </Pagination.Item>
            )
        }
    }


    if (countLinks < 11) {
        return (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                    {items}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        )
    }else{
        return (
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                    {items}
                <Pagination.Ellipsis />
                <Pagination.Item>{countLinks}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        )
    }

}

// .propTypes = {
//
// }
//
// .defaultProps = {
//
// }

export default PaginationComponent
