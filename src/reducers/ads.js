import { ACTION_GET_ALL_ADS } from '../constants/action-types'


const initialState = {
  ads: new Array(),
  filteredAds: new Array(),
  // itemPerPage: DEFAULT_ITEM_PER_PAGE,
  itemPerPage: 20,
  adsQuery: new Array(),
  adsIsLoad: true
};

const ads = (state = initialState, action) => {
    const { type, payload, adsCount, adQueryID } = action
    switch (type) {
        case ACTION_GET_ALL_ADS: {
            return {...state,
                        ads: payload,
                        adsCount: parseInt(adsCount),
                        adsIsLoad: true,
                        adQueryID: adQueryID
                    }
        }
    }
    return state
}

export default ads
