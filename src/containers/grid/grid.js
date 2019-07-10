import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllAds } from '../../actions'

import { TableComponent, PreloaderComponent } from '../../components'

class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.state = {records:this.props.records}
        this.getAllAds = this.getAllAds.bind(this)
    }

    getAllAds() {

    }

    render() {
        if (!this.props.adsIsLoad) {
            return <PreloaderComponent />
        }else{
            const { filteredRecords } = this.props
            return(
                <div>
                    <TableComponent records={filteredRecords}/>
                </div>
            )
        }
    }

}

const mapStateToProps = (state) => {
    return {
         records: state.ads.records,
         recordCount: state.ads.recordCount,
         adsIsLoad: state.ads.adsIsLoad,
         filteredRecords: state.ads.filteredRecords,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAds: bindActionCreators(getAllAds, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
