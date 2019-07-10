import { ACTION_REFRESH_FILTERED_RECORDS } from '../constants'


export function refreshFilteredRecords(records){
    return {
        type: ACTION_REFRESH_FILTERED_RECORDS,
        filteredRecords: records
    }
}
