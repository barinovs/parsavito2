import { ACTION_GET_PRICES } from '../constants'


export default function getPrices(id_avito, items){
    return {
        type: ACTION_GET_PRICES,
        id_avito: id_avito,
        items: items
    }
}
