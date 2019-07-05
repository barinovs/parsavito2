import { ACTION_GET_AD_QUERIES } from '../constants'


export function getAdQueries(records){
    console.log('Передаваемы в экшн строки');
    console.log(records);
    return {
        type: ACTION_GET_AD_QUERIES,
        records: records
    }
}
