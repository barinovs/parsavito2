import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'

import { getAllAds, refreshFilteredRecords, setStateModalShowPrices, getPrices } from '../../actions'

import { TableComponent, PreloaderComponent, ModalPricesComponent } from '../../components'
import { API_ENDPOINT, TABLE_HEADERS } from '../../constants'

class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            records:this.props.records,
            url_key: "key",
            id_avito: "key",
            prices:[],
            sortBy: null,
            descending: false
        }
        this.getAllAds = this.getAllAds.bind(this)
        this.showPrices = this.showPrices.bind(this)
        this.closePrices = this.closePrices.bind(this)
        this._sort = this._sort.bind(this)
    }

    showPrices(e) {

        const { setStateModalShowPrices, showModalPrices, getPrices } = this.props
        const ad_url = e.target.attributes.url.value
        const id_avito = e.target.attributes.id_avito.value

        // setStateModalShowPrices(!showModalPrices)
        setStateModalShowPrices(true)

        const statePrices = this.props.prices
        let prices = []
        if (statePrices[id_avito]) {
            console.log("id_avito in " + id_avito)
            prices = statePrices[id_avito]
        }else{
            console.log("id_avito not in " + id_avito);

            const url = API_ENDPOINT + 'getPrices.php?url=' + ad_url

            axios.get(url, {
                headers: { 'Content-Type': 'application/json' }
            })
            .then(response => {
                getPrices(id_avito, response.data)
                this.setState({prices: response.data})
            })
        }

        this.setState({
            id_avito,
            prices
        })


    }

    closePrices() {
        this.props.setStateModalShowPrices(false)
    }

    getAllAds() {

    }

    _sort(e) {
        const { refreshFilteredRecords, filteredRecords } = this.props
        // console.log(e.target.getAttribute('isnumber'));
        const field = e.target.getAttribute('field')
        const isNumber = JSON.parse(e.target.getAttribute('isNumber'))
        const descending = !this.state.descending && field === this.state.sortBy

        const records = filteredRecords.slice()
        records.sort( (a, b) => {
            return !isNumber
                ? descending
                    ? (a[field] < b[field]) ? 1 : -1
                    : (a[field] > b[field]) ? 1 : -1
                : descending
                    ? (parseInt(a[field]) < parseInt(b[field])) ? 1 : -1
                    : (parseInt(a[field]) > parseInt(b[field])) ? 1 : -1
        })
        refreshFilteredRecords(records)
        this.setState({
            sortBy: field,
            descending
        })


    }

    render() {
        const { showModalPrices, adsIsLoad } = this.props
        const { url_key, prices, sortBy, descending } = this.state
        // const prices = [{id:1, price:700, dateChange:'2019-07-10'}, {id:2, price:500, dateChange:'2019-07-20'}]

        const { filteredRecords } = this.props
        return(
            <div>
                {
                    !adsIsLoad
                        && <PreloaderComponent />
                }
                {showModalPrices
                    && <ModalPricesComponent
                            items={prices}
                            closePrices={this.closePrices}
                        />
                }
                <TableComponent
                    tableHeaders={TABLE_HEADERS}
                    records={filteredRecords}
                    showPrices={this.showPrices}
                    _sort={this._sort}
                    descending={descending}
                    sortBy={sortBy}
                />
            </div>
        )
        
    }

}

const mapStateToProps = (state) => {
    return {
         records: state.ads.records,
         recordCount: state.ads.recordCount,
         adsIsLoad: state.ads.adsIsLoad,
         filteredRecords: state.ads.filteredRecords,
         showModalPrices: state.prices.showModalPrices,
         prices: state.prices,
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
