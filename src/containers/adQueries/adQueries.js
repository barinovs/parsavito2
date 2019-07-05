import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { getAdQueries,
         setCurrentAdQuery,
         setStateModalAddAdQuery,
         getAllAds } from '../../actions'
import { API_ENDPOINT } from '../../constants'
import { DropDownComponent,
         AddButtonComponent,
         AddAdQueryComponent } from '../../components'
import './adQueries.css'

class AdQueries extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            adQueries: [],
            showModal: false
        }
        this.newAdQuery = this.newAdQuery.bind(this)
        this.changeAdQuery = this.changeAdQuery.bind(this)
        this.dropdownClick = this.dropdownClick.bind(this)
        this.getAdsById = this.getAdsById.bind(this)
    }

    componentDidMount() {

        const { getAdQueries } = this.props

        console.log(API_ENDPOINT + 'getAdsQuery.php')
        const url = API_ENDPOINT + 'getAdsQuery.php'

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getAdQueries(response.data)
        })
    }

    changeAdQuery(sender) {
        const { setCurrentAdQuery } = this.props
        const description = sender.currentTarget.getAttribute("dropdownvaluedescription")
        const url = sender.currentTarget.getAttribute("dropdownvalueurl")
        const id = sender.currentTarget.getAttribute("dropdownvalueid")
        const currentAdQuery = {
            description: description,
            url: url,
            id: id
        }
        setCurrentAdQuery(currentAdQuery)

    }

    dropdownClick(records) {
        const { getAdQueries } = this.props
        const url = API_ENDPOINT + 'getAdsQuery.php'

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getAdQueries(records)
        })
    }

    newAdQuery() {
        const {setStateModalAddAdQuery} = this.props
        console.log('newAdQuery')
        this.setState({
            showModal: !this.state.showModal
        })
        setStateModalAddAdQuery(true)
    }

    getAdsById(id) {

        const { getAllAds } = this.props

        const url = API_ENDPOINT + 'getData.php?ad_query_id='  + id

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            getAllAds(response.data)
        })


    }

    render() {
        const { adQueries } = this.props
        const { currentAdQuery, setStateModalAddAdQuery, showModal } = this.props

        return (
            <div>

                {
                    showModal
                        && <AddAdQueryComponent
                              setStateModalAddAdQuery={setStateModalAddAdQuery}
                           />
                }

                <ul className="menu">
                    <li>
                        <DropDownComponent
                            changeAdQuery={this.changeAdQuery}
                            adQueries={adQueries}
                            currentAdQuery={currentAdQuery.description}
                            dropdownClick={this.dropdownClick}
                            getAdsById={this.getAdsById}
                        />
                    </li>
                    <li>
                        <AddButtonComponent
                            variant = "success"
                            onClick = {this.newAdQuery}
                        />
                    </li>
                </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         adQueries: state.adQueries.records,
         currentAdQuery: state.adQueries.currentAdQuery,
         showModal: state.adQueries.showModal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdQueries: bindActionCreators(getAdQueries, dispatch),
        setCurrentAdQuery: bindActionCreators(setCurrentAdQuery, dispatch),
        setStateModalAddAdQuery: bindActionCreators(setStateModalAddAdQuery, dispatch),
        getAllAds: bindActionCreators(getAllAds, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdQueries)
