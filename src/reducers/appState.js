import { SET_APP_STATE } from '../constants/actionTypes';
import { handleAction } from 'redux-actions'
import { REPORT_CREATION_LOADING, SHOW_REPORT_CREATION_FAILURE, SHOW_REPORT_CREATION_SUCCESS } from '../constants/labels';


const initialAppState = {
    [REPORT_CREATION_LOADING]:false,
    [SHOW_REPORT_CREATION_FAILURE]:false,
    [SHOW_REPORT_CREATION_SUCCESS]:false
}



export default handleAction(SET_APP_STATE,(state,action)=>{
    const {appState,value} = action.payload;
    return {
        ...state,
        [appState]: value
    }
},initialAppState);
