import { ACTION_SET_STATE_MODAL_FILTER
     } from '../constants'


const initialState = {
    showModalFilter: false
}

const filter = (state = initialState, action) => {

    const { type } = action
    switch (type) {
        case ACTION_SET_STATE_MODAL_FILTER: {
            return {...state,
                        showModalFilter: showModalFilter
                    }
        }
    }

    return state
}

export default filter
