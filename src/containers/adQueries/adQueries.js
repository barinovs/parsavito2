import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAdQueries } from '../../actions'
import { API_ENDPOINT } from '../../constants'

class AdQueries extends React.Component{
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log(API_ENDPOINT);
    }

    render() {
        return(
            <div>Тут будет комбобокс</div>
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
