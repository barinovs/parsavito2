import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllAds, refreshFilteredRecords } from '../../actions'

import { TableComponent, PreloaderComponent } from '../../components'

class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.state = {records:this.props.records}
        this.getAllAds = this.getAllAds.bind(this)
        this.filterNameChange = this.filterNameChange.bind(this)
    }

    getAllAds() {

    }

    filterNameChange(e) {
        const { records, filteredRecords, refreshFilteredRecords } = this.props

        const isSearched = searchTerm => item => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase())
        }

        const _filterRecords = records.filter(isSearched(e.target.value))
        console.log('e', e);

        refreshFilteredRecords(_filterRecords)

    }

    render() {
        if (!this.props.adsIsLoad) {
            return <PreloaderComponent />
        }else{
            const { filteredRecords } = this.props
            return(
                <div>
                    <TableComponent
                        records={filteredRecords}
                        filterNameChange={this.filterNameChange}
                    />
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
        getAllAds: bindActionCreators(getAllAds, dispatch),
        refreshFilteredRecords: bindActionCreators(refreshFilteredRecords, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
