import Row from './row';
import { connect } from 'react-redux';
import {fetchMyLists, createMyList, removeMyList} from '../../actions/mylist_actions';

const mapStateToProps = (state) => {
    debugger;
    return {
        mylist: state.entities.users.mylistIds
    }
};

const mapDispatchToProps = (dispatch) => {
    debugger;
    return {
        // fetchMyLists: () => dispatch(fetchMyLists()),
        createMyList: (movieId) => dispatch(createMyList(movieId)),
        removeMyList: (mylistId) => dispatch(removeMyList(mylistId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);