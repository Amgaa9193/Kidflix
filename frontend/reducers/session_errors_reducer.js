import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions'

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {

        case RECEIVE_ERRORS:
            return action.errors;
        // debugger;
        case RECEIVE_CURRENT_USER:
            return []; //setting the errors state to empty array
                    //so logged in user would not see error anymore 

        default:
            return state;
    }
}

export default sessionErrorsReducer