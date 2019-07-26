import { ACTION_GET_PRICES } from '../constants'


export default function getPrices(url, items){
    return {
        type: ACTION_GET_PRICES,
        url: url,
        items: items
    }
}
