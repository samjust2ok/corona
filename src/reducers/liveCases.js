import { STORE_LIVE_CASES } from '../constants/actionTypes';
import { handleActions } from 'redux-actions'
import { produce } from 'immer';


const initialState = {
    nigeria:{

    }
}



export default handleActions({
    [STORE_LIVE_CASES]: produce((state,action)=>{
        let data = action.payload.data
        let property = data.country.toLowerCase()
       state[property] = {
           ...state.property,
           ...data
       }
    }),
},
initialState
) 