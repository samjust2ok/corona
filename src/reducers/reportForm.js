import { STORE_GENERAL_QUESTIONS,STORE_MEDICAL_INFO,STORE_PERSONAL_INFO,STORE_SYMPTOMS,STORE_TRAVEL_HISTORY } from '../constants/actionTypes';
import { handleActions } from 'redux-actions'
import { produce } from 'immer';


const initialReportFormState = {
    personalInformation: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        gender: '',
        age: '',
        state: ''
    },
    symptoms: {
        hasFever: null,
        feverSeverity: '',
        hasCough: null,
        coughType: '',
        hasRunnyNose: null,
        hasSoreThroat: null,
        hasDifficultyBreathing: null,
        symptomsDescription: ''
    },
    medicalHistory: {
        hasHeartDisease: null,
        diseaseType: '',
        hasCancer: null
    },
    travelHistory:{
        hasTravelled: null,
        countryVisited: '',
        dateArrived: new Date(),   
    },
    generalQuestions:{
        ncdcContacted: null,
        contactTested: null,
        symptomsSeverity: ''
    }
}



export default handleActions({
    [STORE_PERSONAL_INFO]: produce((state,action)=>{
       state.personalInformation = {
           ...state.personalInformation,
           ...action.payload
       }
    }),
    [STORE_SYMPTOMS]:produce((state,action)=>{
        state.symptoms = {
            ...state.symptoms,
            ...action.payload
        }
    }),
    [STORE_TRAVEL_HISTORY]:produce((state,action)=>{
        state.travelHistory = {
            ...state.travelHistory,
            ...action.payload
        }
    }),
    [STORE_MEDICAL_INFO]:produce((state,action)=>{
        state.medicalHistory = {
            ...state.medicalHistory,
            ...action.payload
        }
    }),
    [STORE_GENERAL_QUESTIONS]:produce((state,action)=>{
        state.generalQuestions = {
            ...state.generalQuestions,
            ...action.payload
        }
    })
},
initialReportFormState
) 