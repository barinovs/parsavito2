import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './filter.css'

class Filter extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>Фильтор</div>
        )
    }

}

// const mapStateToProps = (state) => {
//     return {
//          : state.
//     }
// }
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         : bindActionCreators(, dispatch)
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Filter)
export default connect()(Filter)
