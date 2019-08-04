import { ACTION_SET_STATE_MODAL_FILTER, ACTION_GET_CITIES
     } from '../constants'


const initialState = {
    showModalFilter: false,
    cities: []
}

const filter = (state = initialState, action) => {

    const { type, cities, showModalFilter } = action
    switch (type) {
        case ACTION_SET_STATE_MODAL_FILTER: {
            return {...state,
                        showModalFilter: showModalFilter
                    }
        }
    }
    switch (type) {
        case ACTION_GET_CITIES: {
            return {...state,
                        cities: cities
                    }
        }
    }

    return state
}

export default filter
