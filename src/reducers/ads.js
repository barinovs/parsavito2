import { ACTION_GET_ALL_ADS,
         ACTION_SET_ADS_IS_LOAD,
         ACTION_REFRESH_FILTERED_RECORDS
     } from '../constants'


const ADS = new Array()

const initialState = {
    records: [],
    filteredRecords: [],
    recordCount: 0,
    adsIsLoad: true,
}

const ads = (state = initialState, action) => {

    const { type, records, recordCount, flag, filteredRecords } = action
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
    switch (type) {
        case ACTION_REFRESH_FILTERED_RECORDS: {
            return {...state,
                        filteredRecords: filteredRecords
                    }
        }
    }

    return state
}

export default ads
