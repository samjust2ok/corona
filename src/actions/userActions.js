import { createAction } from 'redux-actions';
import { STORE_USER } from '../constants/actionTypes';


//Storing Actions
export const storeUser = createAction(STORE_USER);