import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { PaginationComponent } from '../../components'

class PaginationCont extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            linksCount:0,
            currentLink:0
        }
    }

    componentWillUpdate() {
        const { recordCount, filterParams } = this.props
        const linksCount = Math.ceil(recordCount / filterParams.itemPerPage)
        console.log('linksCount ', linksCount);
    }

    render() {
        return(
            <PaginationComponent />
        )
    }

}

const mapStateToProps = (state) => {
    return {
         recordCount: state.ads.recordCount,
         filterParams: state.filter.filterParams
    }
}
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         : bindActionCreators(, dispatch)
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(PaginationCont)
export default connect(mapStateToProps, null)(PaginationCont)
