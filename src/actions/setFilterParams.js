import { ACTION_SET_FILTER_PARAMS } from '../constants'


export default function setFilterParams(filterParams){
    return {
        type: ACTION_SET_FILTER_PARAMS,
        filterParams: filterParams
    }
}
