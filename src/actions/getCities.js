import { ACTION_GET_CITIES } from '../constants'


export function getCities(cities){
    console.log('ACTION_GET_CITIES ', cities);
    return {
        type: ACTION_GET_CITIES,
        cities: cities
    }
}
