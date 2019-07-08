import { ACTION_GET_ALL_ADS } from '../constants'


const ADS = new Array()

const initialState = {
    records: [],
    recordCount: 0
}

const ads = (state = initialState, action) => {

    const { type, records, recordCount } = action
    switch (type) {
        case ACTION_GET_ALL_ADS: {
            return {...state,
                        records: records,
                        recordCount: recordCount
                    }
        }
    }
    return state
}

export default ads
