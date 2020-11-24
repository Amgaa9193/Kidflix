import { connect } from 'react-redux';
import GenreShow from './genreshow'
import {fetchGenre} from '../../actions/genre_actions';



const mapStateToProps = (state, {match}) => {
    const id = match.params.genreId;
    const genre = state.genres[id]
    return {
       id,
       genre
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenre: (id) => dispatch(fetchGenre(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreShow);