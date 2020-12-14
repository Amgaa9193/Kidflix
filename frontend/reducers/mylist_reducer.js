import {
    RECEIVE_MYLISTS, 
    RECEIVE_MYLIST,
    REMOVE_MYLIST
} from '../actions/mylist_actions';

const mylistReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_MYLISTS:
            return action.mylists;

        case RECEIVE_MYLIST:
            return {...oldState, [action.mylist.id]: action.mylist}

        case REMOVE_MYLIST:
            const newState = { ...oldState }
            delete newState[action.mylistId]
            return newState
    
        default:
            return oldState;
    }
}

export default mylistReducer;