import { ACTION_SET_STATE_MODAL_FILTER, ACTION_GET_CITIES, ACTION_SET_FILTER_PARAMS
     } from '../constants'


const initialState = {
    showModalFilter: false,
    cities: [],
    filterParams: {
        city: '',
        minPrice: 0,
        maxPrice: 0,
        itemPerPage: 30
    }
}

const filter = (state = initialState, action) => {

    const { type, cities, showModalFilter, filterParams } = action
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
    switch (type) {
        case ACTION_SET_FILTER_PARAMS: {
            return {...state,
                        filterParams: filterParams
                    }
        }
    }

    return state
}

export default filter
