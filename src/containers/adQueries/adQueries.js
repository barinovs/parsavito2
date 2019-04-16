import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import Combobox from '../components/combobox/combobox'

import { getAllAds } from '../../actions'

class AdQueries extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        // !!!! ВОТ ТУТ НЕ ЗАБУДЬ ДОБАВИТЬ НАЗВАНИЕ ФУНКЦИИ !!!!!!!!!!!!!!!!!!!!!!!!!!!
        const { getAllAds } = this.props
        return(
            
            <div> Здесь будет комбобокс </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // adsQuery : state.adsQuery
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAds: bindActionCreators(getAllAds, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdQueries)
