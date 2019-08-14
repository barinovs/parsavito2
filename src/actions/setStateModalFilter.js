import { ACTION_SET_STATE_MODAL_FILTER } from '../constants'


export function setStateModalFilter(showModalFilter){
    console.log(ACTION_SET_STATE_MODAL_FILTER + ' ' + showModalFilter);
    return {
        type: ACTION_SET_STATE_MODAL_FILTER,
        showModalFilter: showModalFilter
    }
}
