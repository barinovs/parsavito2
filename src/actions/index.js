import { ACTION_GET_ALL_ADS } from '../constants/action-types'


export function getAllAds(data, adQueryID) {
  return {
    type: ACTION_GET_ALL_ADS,
    payload: data.records,
    adsCount: data.recordCount,
    adQueryID: adQueryID
  }
}
