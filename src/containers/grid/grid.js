import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { getAllAds, refreshFilteredRecords, setStateModalShowPrices, getPrices } from '../../actions'

import { TableComponent, PreloaderComponent } from '../../components'
import { API_ENDPOINT } from '../../constants'

class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.state = {records:this.props.records}
        this.getAllAds = this.getAllAds.bind(this)
        this.filterNameChange = this.filterNameChange.bind(this)
        this.showPrices = this.showPrices.bind(this)
    }

    showPrices(e) {
        const { setStateModalShowPrices, showModalPrices, getPrices } = this.props
        const ad_url = e.target.attributes.url.value
        console.log('showPrices', e.target.attributes.url.value)

        setStateModalShowPrices(!showModalPrices)

        // getPrices(url, ['bla', 'blyad'])

        const url = API_ENDPOINT + 'getPrices.php?url=' + ad_url

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getPrices(ad_url, response.data)
        })

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
                        showPrices={this.showPrices}
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
         showModalPrices: state.prices.showModalPrices,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAds: bindActionCreators(getAllAds, dispatch),
        refreshFilteredRecords: bindActionCreators(refreshFilteredRecords, dispatch),
        setStateModalShowPrices: bindActionCreators(setStateModalShowPrices, dispatch),
        getPrices: bindActionCreators(getPrices, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
