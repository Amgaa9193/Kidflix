import {fetchGenres} from '../../actions/genre_actions';
import GenreIndex from './genreindex'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        genres: Object.values(state.genres)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchGenres: () => dispatch(fetchGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreIndex);