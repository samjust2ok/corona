import { createAction } from 'redux-actions';
import { GET_LIVE_CASES,STORE_LIVE_CASES } from '../constants/actionTypes';

//
export const getLiveCases = createAction(GET_LIVE_CASES);
export const storeLiveCases = createAction(STORE_LIVE_CASES);