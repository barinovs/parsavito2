import {
    ACTION_GET_AD_QUERIES,
    SET_CURRENT_AD_QUERY,
    ACTION_UUU
} from '../constants'


const initialState = {
    records: [],
    currentAdQuery: {
        description: 'Выберите запрос'
    },
    showModal: false
}


const adQueries = (state = initialState, action) => {
    const { type, records, adQuery, showModal } = action
    switch (type) {
        case ACTION_GET_AD_QUERIES: {
            return {...state,
                        records: records
                    }
        }
    }
    switch (type) {
        case SET_CURRENT_AD_QUERY: {
            return {...state,
                        currentAdQuery: adQuery
                    }
        }
    }
    switch (type) {
        case ACTION_UUU: {
            return {...state,
                        showModal: showModal
                    }
        }
    }
    return state
}

export default adQueries
