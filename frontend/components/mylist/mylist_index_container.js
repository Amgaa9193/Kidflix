import MyListIndex from './mylistindex';
import {connect} from 'react-redux';
import {fetchMyLists, removeMyList, createMyList} from '../../actions/mylist_actions';
import {fetchMovies} from '../../actions/movie_actions';

const mapStateToProps = (state) => {
    // debugger;
    return {
        movies: state.movies,
        mylists: state.mylists.mylists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyLists: () => dispatch(fetchMyLists()),
        fetchMovies: () => dispatch(fetchMovies()),
        removeMyList: (mylistId) => dispatch(removeMyList(mylistId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListIndex);