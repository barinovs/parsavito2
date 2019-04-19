import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import axios from 'axios'
import { getAdQueries, setCurrentAdQuery} from '../../actions'
import { API_ENDPOINT } from '../../constants'
import { DropDownComponent, AddButtonComponent } from '../../components'

class AdQueries extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            adQueries: []
        }
        this.newAdQuery = this.newAdQuery.bind(this)
        this.changeAdQuery = this.changeAdQuery.bind(this)
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

    changeAdQuery(sender) {
        const { setCurrentAdQuery } = this.props
        const description = sender.currentTarget.getAttribute("dropdownvalue")
        setCurrentAdQuery(description)

    }

    newAdQuery() {
        console.log('newAdQuery');
    }

    render() {
        const { adQueries } = this.state

        return(
            <div>
                <AddButtonComponent
                    variant = "success"
                    onClick = {this.newAdQuery}
                />
                <DropDownComponent changeAdQuery={this.changeAdQuery} adQueries={adQueries}/>

            </div>
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
        getAdQueries: bindActionCreators(getAdQueries, dispatch),
        setCurrentAdQuery: bindActionCreators(setCurrentAdQuery, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdQueries)
