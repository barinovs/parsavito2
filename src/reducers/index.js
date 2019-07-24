import { combineReducers } from 'redux'
import ads from './ads'
import adQueries from './adQueries'
import prices from './prices'

const rootReducer = combineReducers({ ads, adQueries, prices })

export default rootReducer
