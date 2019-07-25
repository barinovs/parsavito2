import { ACTION_GET_PRICES } from '../constants'


export default function getPrices(url, prices){
    return {
        type: ACTION_GET_PRICES,
        url: url,
        prices: prices
    }
}
