import {RECEIVE_EMAIL} from '../actions/session_actions';

const emailReducer = (state = {}, action) => {
    

    Object.freeze(state)
    switch (action.type) {
        
        case RECEIVE_EMAIL:
           
            return {email: action.email}

        default:
            return state;
    }
}

export default emailReducer;