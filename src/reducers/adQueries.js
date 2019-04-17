import { ACTION_GET_AD_QUERIES } from '../constants/actionTypes'


const AD_QUERIES = [
    {
        id: 1,
        name: 'Адын'
    },
    {
        id: 2,
        name: 'Дыва'
    },
    {
        id: 3,
        name: 'Тыри'
    }
]

const adQueries = (state = AD_QUERIES, action) => {
    const { type, records } = action
    switch (type) {
        case ACTION_GET_AD_QUERIES: {
            return {...state,
                        adQieries: records
                    }
        }
    }
    return state
}

export default adQueries
