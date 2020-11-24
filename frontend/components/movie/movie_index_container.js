import { connect } from 'react-redux';
import MovieIndex from './movie_index'
import {logout} from '../../actions/session_actions';
import {fetchMovies, fetchMovie} from '../../actions/movie_actions';


const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovies: () => dispatch(fetchMovies()),
        fetchMovie: (id) => dispatch(fetchMovie(id)),
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieIndex);