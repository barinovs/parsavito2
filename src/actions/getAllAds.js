import { ACTION_GET_ALL_ADS } from '../constants'


export function getAllAds(data){
    console.log(data.records);
    return {
        type: ACTION_GET_ALL_ADS,
        records: data.records,
        recordCount: data.recordCount
    }
}
