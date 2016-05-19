import { GET_CODE_ONEDRIVE } from '../actions/index';

const INITITAL_STATE = {code: null};

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_CODE_ONEDRIVE:
            return {...state, code: payload.data};
        default:
            return state;
    }
}
