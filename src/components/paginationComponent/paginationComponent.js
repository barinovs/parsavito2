import React from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-bootstrap/Pagination'


function PaginationComponent ( {countLinks, page, getAdsByPage, moveFirst, moveLast} ) {
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
        if (parseInt(page) <= 4){
            for (let number = 2; number <= 6; number++) {
                items.push(
                  <Pagination.Item
                      key = {number}
                      active = {number === parseInt(page)}
                      onClick = {getAdsByPage}
                  >
                    {number}
                  </Pagination.Item>
                )
            }
        }
        else if (parseInt(page) > countLinks - 3) {
                for (let number = countLinks - 5; number <= countLinks-1; number++) {
                    items.push(
                      <Pagination.Item
                          key = {number}
                          active = {number === parseInt(page)}
                          onClick = {getAdsByPage}
                      >
                        {number}
                      </Pagination.Item>
                    )
                }
            }
        else if (parseInt(page) > 4) {
            for (let number = parseInt(page) - 2; number <= parseInt(page) + 2; number++) {
                items.push(
                  <Pagination.Item
                      key = {number}
                      active = {number === parseInt(page)}
                      onClick = {getAdsByPage}
                  >
                    {number}
                  </Pagination.Item>
                )
            }
        }

    }

    if (countLinks < 11) {
        return (
            <Pagination>
                <Pagination.First onClick = {moveFirst} />
                <Pagination.Prev />
                    {items}
                <Pagination.Next />
                <Pagination.Last onClick = {moveLast}/>
            </Pagination>
        )
    }else{
        return (
            <Pagination>
                <Pagination.First onClick = {moveFirst}  />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />
                    {items}
                <Pagination.Ellipsis />
                <Pagination.Item>{countLinks}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last onClick = {moveLast} />
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
