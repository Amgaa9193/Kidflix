import {
    RECEIVE_MYLISTS, 
    RECEIVE_MYLIST,
    REMOVE_MYLIST
} from '../actions/mylist_actions';
import { merge } from 'lodash';

const mylistReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_MYLISTS:
            return action.mylists;

        case RECEIVE_MYLIST:
            return {...oldState, [action.mylist.id]: action.mylist}

        case REMOVE_MYLIST:
            
            // const newState = { ...oldState } wraping the same arr in a new object, in memory still same object as the oldState
            // this way it was changing the state before the action hit the redux store. Logger was showing in the chrome extension. 
            const newState = merge({}, oldState); // this makes complete new object in memory, from lodash library.
            const index = newState.mylists.findIndex(ele => ele.id === action.mylistId);
            newState.mylists.splice(index, 1);
            return newState
    
        default:
            return oldState;
    }
}

export default mylistReducer;