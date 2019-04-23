import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { DisplayComponent } from '../../components'

class Display extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <DisplayComponent currentAdQuery={this.props.currentAdQuery} />
        )
    }

}

const mapStateToProps = (state) => {
    return {
         currentAdQuery: state.adQueries.currentAdQuery.description
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         : bindActionCreators(, dispatch)
//     }
// }
export default connect(mapStateToProps, null)(Display)
