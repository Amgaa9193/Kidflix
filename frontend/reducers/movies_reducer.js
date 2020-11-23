import {RECEIVE_MOVIES, RECEIVE_MOVIE} from '../actions/movie_actions';

const moviesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_MOVIES:
            return action.movies;

        case RECEIVE_MOVIE:
            const newState = {[action.movie.id]: action.movie};
            return Object.assign({}, oldState, newState);
            // return {[action.movie.id]: action.movie}
    
        default:
            return oldState;
    }
}

export default moviesReducer;