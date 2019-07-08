import { ACTION_GET_AD_QUERIES } from '../constants'


export function getAdQueries(records){
    return {
        type: ACTION_GET_AD_QUERIES,
        records: records
    }
}
