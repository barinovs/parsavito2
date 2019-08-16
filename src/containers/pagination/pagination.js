import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { getAllAds, setAdsIsLoad, refreshFilteredRecords, setFilterParams } from '../../actions'

import { PaginationComponent } from '../../components'
import { API_ENDPOINT } from '../../constants'
import {  parseQueryString } from '../../helpers'

class PaginationCont extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            linksCount:0,
            currentLink:0,
            page: 1
        }
        this.getAdsByPage = this.getAdsByPage.bind(this)
    }

    // componentDidMount() {
    //     const { recordCount, filterParams } = this.props
    //     const linksCount = Math.ceil(recordCount / filterParams.itemPerPage)
    //     console.log('linksCount ', linksCount);
    // }

    getAdsByPage(e) {
        const { setAdsIsLoad } = this.props
        setAdsIsLoad(false)
        const { filterParams, getAllAds, refreshFilteredRecords, setFilterParams } = this.props
        const page = e.target.innerText
        filterParams.page = page

        const url = API_ENDPOINT + 'getData.php' + parseQueryString(filterParams)
        console.log(url)

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getAllAds(response.data)
            setAdsIsLoad(true),
            refreshFilteredRecords(response.data.records)
        })

        this.setState({
            page
        })

    }

    render() {
        const { recordCount, filterParams } = this.props
        const { page } = this.state
        const countLinks = Math.ceil(recordCount / filterParams.itemPerPage)
        // const links = []
        // for (let i=1; i<=countLinks; i++ ) {
        //     links.push(API_ENDPOINT)
        // }


        return(
            <PaginationComponent
                countLinks={countLinks}
                getAdsByPage={this.getAdsByPage}
                page={page}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         recordCount: state.ads.recordCount,
         filterParams: state.filter.filterParams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        refreshFilteredRecords: bindActionCreators(refreshFilteredRecords, dispatch),
        setFilterParams: bindActionCreators(setFilterParams, dispatch),
        setAdsIsLoad: bindActionCreators(setAdsIsLoad, dispatch),
        getAllAds: bindActionCreators(getAllAds, dispatch),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaginationCont)
