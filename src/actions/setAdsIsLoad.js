import { ACTION_SET_ADS_IS_LOAD } from '../constants'


export function setAdsIsLoad(flag){
    return {
        type: ACTION_SET_ADS_IS_LOAD,
        flag: flag
    }
}
