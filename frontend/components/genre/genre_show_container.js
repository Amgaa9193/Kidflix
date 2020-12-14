import { connect } from 'react-redux';
import GenreShow from './genreshow'
import {fetchGenre} from '../../actions/genre_actions';
import {fetchMovies} from '../../actions/movie_actions';



const mapStateToProps = (state, {match}) => {
    const id = match.params.genreId;
    const genre = state.genres[id]

    return {
       id,
       genre,
       movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenre: (id) => dispatch(fetchGenre(id)),
        fetchMovies: () => dispatch(fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);