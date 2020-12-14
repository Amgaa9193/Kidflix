import MyListIndex from './mylistindex';
import {connect} from 'react-redux';
import {fetchMyLists, removeMyList} from '../../actions/mylist_actions';

const mapStateToProps = (state) => {
    debugger;
    return {
        mylists: state.mylists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMyLists: () => dispatch(fetchMyLists()),
        removeMyList: (mylistId) => dispatch(removeMyList(mylistId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListIndex);