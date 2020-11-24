import {RECEIVE_GENRES, RECEIVE_GENRE} from '../actions/genre_actions';

const genreReducer = (state = {}, action) => {
    
    Object.freeze(state)
    switch (action.type) {
        
        case RECEIVE_GENRES:
            return action.genres
        case RECEIVE_GENRE:
            return {...state, [action.genre.id]: action.genre };

        default:
            return state;
    }
}

export default genreReducer;