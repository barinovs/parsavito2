import { combineReducers } from 'redux'
import ads from './ads'
import adQueries from './adQueries'
import filter from './filter'
import prices from './prices'

const rootReducer = combineReducers({ ads, adQueries, filter, prices })

export default rootReducer
