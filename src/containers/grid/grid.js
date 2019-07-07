import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllAds } from '../../actions'

import { TableComponent } from '../../components'

class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.state = {records:this.props.records}
        this.getAllAds = this.getAllAds.bind(this)
    }

    getAllAds() {

    }

    render() {
        const { records } = this.props
        return(
            <div>
                <TableComponent records={records}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         records: state.ads.records,
         recordCount: state.ads.recordCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAds: bindActionCreators(getAllAds, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
