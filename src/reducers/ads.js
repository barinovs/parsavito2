import { ACTION_GET_ALL_ADS } from '../constants/actionTypes'


const ADS = new Array()

const ads = (state = ADS, action) => {
    const { type, records } = action
    switch (type) {
        case ACTION_GET_ALL_ADS: {
            return {...state,
                        ads: records
                    }
        }
    }
    return state
}

export default ads
