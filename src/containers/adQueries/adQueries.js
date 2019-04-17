import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { getAdQueries } from '../../actions'
import { API_ENDPOINT } from '../../constants'
import { DropDownComponent } from '../../components'

class AdQueries extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            adQueries: []
        }
    }

    componentDidMount() {
        console.log(API_ENDPOINT + 'getAdsQuery.php')
        const url = API_ENDPOINT + 'getAdsQuery.php'

        axios.get(url, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            this.setState({
                adQueries: response.data
            })
        })
    }

    render() {
        const { adQueries } = this.state
        return(
            <DropDownComponent adQueries={adQueries}/>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         adQueries: state.adQueries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdQueries: bindActionCreators(getAdQueries, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdQueries)
