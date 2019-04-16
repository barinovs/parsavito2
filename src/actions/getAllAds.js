import { ACTION_GET_ALL_ADS } from '../constants/actionTypes'


export function getAllAds(records){
    return {
        type: ACTION_GET_ALL_ADS,
        records: records
    }
}
