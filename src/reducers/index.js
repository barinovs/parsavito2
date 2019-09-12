import { combineReducers } from 'redux'
import ads from './ads'
import adQueries from './adQueries'
import filter from './filter'
import prices from './prices'
import pagination from './pagination'

const rootReducer = combineReducers({ ads, adQueries, filter, prices, pagination })

export default rootReducer
