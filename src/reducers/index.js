import { combineReducers } from 'redux'
import ads from './ads'
import adQueries from './adQueries'
import filter from './filter'

const rootReducer = combineReducers({ ads, adQueries, filter })

export default rootReducer
