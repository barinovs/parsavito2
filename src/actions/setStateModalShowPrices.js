import { ACTION_SET_STATE_MODAL_SHOW_PRICES } from '../constants'


export default function setStateModalShowPrices(showModal){
    console.log(ACTION_SET_STATE_MODAL_SHOW_PRICES + ' ' + showModal);
    return {
        type: ACTION_SET_STATE_MODAL_SHOW_PRICES,
        showModalPrices: showModal
    }
}
