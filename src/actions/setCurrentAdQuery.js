import { SET_CURRENT_AD_QUERY } from '../constants'


export function setCurrentAdQuery(adQuery){
    return {
        type: SET_CURRENT_AD_QUERY,
        adQuery: adQuery
    }
}
