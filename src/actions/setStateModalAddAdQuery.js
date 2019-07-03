import { ACTION_SET_STATE_MODAL_ADD_AD_QUERY } from '../constants'


export function setStateModalAddAdQuery(showModal){
    console.log(ACTION_SET_STATE_MODAL_ADD_AD_QUERY + ' ' + showModal);
    return {
        type: ACTION_SET_STATE_MODAL_ADD_AD_QUERY,
        showModal: showModal
    }
}
