import { combineReducers } from 'redux'
import ads from './ads'
import adQueries from './adQueries'

const rootReducer = combineReducers({ ads, adQueries })

export default rootReducer
