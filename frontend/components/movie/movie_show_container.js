import { connect } from 'react-redux';
import MovieShow from './movieshow'
import {fetchMovie} from '../../actions/movie_actions';


const mapStateToProps = (state, {match}) => {
    const id = match.params.movieId
    const movie = state.movies[id]
    return {
        id,
        movie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovie: (movieId) => dispatch(fetchMovie(movieId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieShow);