import {
    getMovies,
    getMovie
} from "../util/movie_api_util";

export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE = "RECEIVE_MOVIE";


export const receiveMovies = (movies) => {
    return {
        type: RECEIVE_MOVIES,
        movies
    }
};

export const receiveMovie = (movie) => {
    return {
        type: RECEIVE_MOVIE,
        movie
    }
};

export const fetchMovies = () => dispatch => (
    getMovies().then(movies => dispatch(receiveMovies(movies)))
);

export const fetchMovie = (id) => dispatch => (
    getMovie(id).then(movie => dispatch(receiveMovie(movie)))
);
