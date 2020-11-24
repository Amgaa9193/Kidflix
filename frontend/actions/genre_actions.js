import {
    getGenres,
    getGenre
} from '../util/genre_api_util';

export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";


export const receiveGenres = (genres) => {
    return {
        type: RECEIVE_GENRES,
        genres
    }
};

export const receiveGenre = (genre) => {
    return {
        type: RECEIVE_GENRE,
        genre
    }
};

export const fetchGenres = () => dispatch => (
    getGenres().then(genres => dispatch(receiveGenres(genres)))
);

export const fetchGenre = (id) => dispatch => (
    getGenre(id).then(genre => dispatch(receiveGenre(genre)))
);