import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getAllAds } from '../../actions'

class Grid extends React.Component{
    constructor(props) {
        super(props)
        this.getAllAds = this.getAllAds.bind(this)
    }

    getAllAds() {
        
    }

    render() {
        return(
            <div>тут будет грид</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
         ads: state.ads
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAds: bindActionCreators(getAllAds, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Grid)
