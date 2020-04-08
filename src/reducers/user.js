import { STORE_USER } from '../constants/actionTypes';
import { handleAction } from 'redux-actions'



const initialAppState = null;


export default handleAction(STORE_USER,(state,action)=>{
    return action.payload.user;
},initialAppState);
