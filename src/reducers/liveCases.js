import { STORE_LIVE_CASES } from '../constants/actionTypes';
import { handleActions } from 'redux-actions'
import { produce } from 'immer';


const initialState = {
    nigeria:{

    },
    world: {

    }
}



export default handleActions({
    [STORE_LIVE_CASES]: produce((state,action)=>{
        let {data,place} = action.payload
       state[place] = {
           ...state[place],
           ...data
       }
    }),
},
initialState
) 