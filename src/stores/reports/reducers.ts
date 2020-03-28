import { combineReducers } from 'redux'
import {reportReducer} from './reportRedcucer'
import {reportsReducer} from './reportsReducer'

const rootReducer =  combineReducers({
    reportReducer,
    // reportsRedcucer
})

export default rootReducer;