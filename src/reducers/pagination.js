import { ACTION_SET_COUNT_LINKS
     } from '../constants'


const initialState = {
    countLinks: 0
}

const pagination = (state = initialState, action) => {

    const { type, countLinks } = action
    switch (type) {
        case ACTION_SET_COUNT_LINKS: {
            return {...state,
                        countLinks: countLinks
                    }
        }
    }

    return state
}

export default pagination
