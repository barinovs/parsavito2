import { ACTION_SET_STATE_MODAL_FILTER } from '../constants'


export function setStateModalFilter(showModal){
    console.log(ACTION_SET_STATE_MODAL_FILTER + ' ' + showModal);
    return {
        type: ACTION_SET_STATE_MODAL_FILTER,
        showModal: showModal
    }
}
