import { combineReducers } from 'redux'
import {reportReducer} from './reportRedcucer'
import reportForm from './reportForm'
import appState from './appState'
import user from './user';
import {reportsReducer} from './reportsReducer'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer =  combineReducers({
    reportReducer,
    reportForm,
    appState,
    user
    // reportsRedcucer
})

const persistConfig = {
    key:'covid',
    storage,
    blacklist: ['appState']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export default persistedReducer;