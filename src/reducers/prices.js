import { ACTION_SET_STATE_MODAL_SHOW_PRICES
     } from '../constants'


const initialState = {
    showModalPrices: false
}

const prices = (state = initialState, action) => {

    const { type, showModalPrices } = action
    switch (type) {
        case ACTION_SET_STATE_MODAL_SHOW_PRICES: {
            return {...state,
                        showModalPrices: showModalPrices
                    }
        }
    }
    return state
}

export default prices
