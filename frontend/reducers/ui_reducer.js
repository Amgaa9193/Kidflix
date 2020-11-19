import {RECEIVE_EMAIL} from '../actions/session_actions';

const uiReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        
        case RECEIVE_EMAIL:
            // debugger;
            return {email: action.email}

        default:
            return state;
    }
}

export default uiReducer;