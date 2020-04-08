import { createAction } from 'redux-actions';
import { STORE_GENERAL_QUESTIONS,STORE_MEDICAL_INFO,STORE_PERSONAL_INFO,STORE_SYMPTOMS,STORE_TRAVEL_HISTORY } from '../constants/actionTypes';


//Storing Actions
export const storePersonalInfo = createAction(STORE_PERSONAL_INFO);
export const storeGeneralQuestions = createAction(STORE_GENERAL_QUESTIONS);
export const storeMedicalInfo = createAction(STORE_MEDICAL_INFO);
export const storeSymptoms = createAction(STORE_SYMPTOMS);
export const storeTravelHistory = createAction(STORE_TRAVEL_HISTORY);