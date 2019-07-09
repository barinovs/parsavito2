import { ACTION_GET_ALL_ADS, ACTION_SET_ADS_IS_LOAD } from '../constants'


const ADS = new Array()

const initialState = {
    records: [],
    filteredRecords: [],
    recordCount: 0,
    adsIsLoad: true,
}

const ads = (state = initialState, action) => {

    const { type, records, recordCount, flag } = action
    switch (type) {
        case ACTION_GET_ALL_ADS: {
            return {...state,
                        records: records,
                        recordCount: recordCount
                    }
        }
    }
    switch (type) {
        case ACTION_SET_ADS_IS_LOAD: {
            return {...state,
                        adsIsLoad: flag
                    }
        }
    }

    return state
}

export default ads
