import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import uiReducer from './ui_reducer';
import moviesReducer from './movies_reducer';
import genreReducer from './genre_reducer';
import mylistReducer from './mylist_reducer';

const rootReducer = combineReducers({
    entities: entitiesReducer, //has user in it
    movies: moviesReducer, 
    mylists: mylistReducer,
    genres: genreReducer,
    session: sessionReducer,
    errors: errorsReducer, //11.17 has sessionerrors in it
    ui: uiReducer //added ui slace of state to pass the email to password container

})


export default rootReducer; //state shape!!!
