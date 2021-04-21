import {
    getMyLists,
    postMyList,
    deleteMyList
} from '../util/mylist_api_util';


export const RECEIVE_MYLISTS = "RECEIVE_MYLISTS";
export const RECEIVE_MYLIST = "RECEIVE_MYLIST";
// export const ADD_MYLIST_MOVIE = "ADD_MYLIST_MOVIE";
export const REMOVE_MYLIST = "REMOVE_MYLIST";


const receiveMylists = mylists => {
    return {
        type: RECEIVE_MYLISTS,
        mylists
    }
};

const receiveMylist = mylist => {
    return {
        type: RECEIVE_MYLIST,
        mylist
    }
};


const destroyMyList = mylistId => {
    return {
        type: REMOVE_MYLIST,
        mylistId
    }
};


export const fetchMyLists = () => {
    return dispatch => {
        getMyLists()
        .then(mylists => dispatch(receiveMylists(mylists)))
    }
};


export const createMyList = (mylist) => {
    return dispatch => {
        postMyList(mylist)
        .then(mylist => dispatch(receiveMylist(mylist)))
    }
};


export const removeMyList = (mylistId) => {
    return dispatch => {
        deleteMyList(mylistId)
        .then(() => dispatch(destroyMyList(mylistId)))
    }
};
