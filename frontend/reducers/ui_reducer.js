import { combineReducers } from 'redux'
import modalReducer from './modal_reducer';
import emailReducer from './email_reducer';

export default combineReducers({
    email: emailReducer,
    modals: modalReducer
  });