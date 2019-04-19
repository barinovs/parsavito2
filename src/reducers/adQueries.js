import {
    ACTION_GET_AD_QUERIES,
    SET_CURRENT_AD_QUERY
} from '../constants'


const initialState = {
    records: [],
    currentAdQuery: {
        description: 'Выберите запрос'
    }
}


const adQueries = (state = initialState, action) => {
    const { type, records, adQuery } = action
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
    return state
}

export default adQueries
