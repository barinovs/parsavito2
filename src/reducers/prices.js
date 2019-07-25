import { ACTION_SET_STATE_MODAL_SHOW_PRICES,
         ACTION_GET_PRICES
     } from '../constants'


const initialState = {
    showModalPrices: true,
    prices: {
        url: '',
        items: [{
            id:0,
            price:"",
            dateChange: ""
        }]
    }
}

const prices = (state = initialState, action) => {

    const { type, showModalPrices, url, prices } = action
    switch (type) {
        case ACTION_SET_STATE_MODAL_SHOW_PRICES: {
            return {...state,
                        showModalPrices: showModalPrices
                    }
        }
    }
    switch (type) {
        case ACTION_GET_PRICES: {
            return {...state,
                        url: url,
                        items: prices
                    }
        }
    }
    return state
}

export default prices
