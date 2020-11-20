import {
    postUser,
    deleteSession,
    postSession
} from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const RECEIVE_EMAIL = "RECEIVE_EMAIL"
export const REMOVE_SESSION_ERROR = "REMOVE_SESSION_ERROR"

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = (id) => {
    return {
        type: LOGOUT_CURRENT_USER,
        id
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const removeErrors = () => {
    return {
        type: REMOVE_SESSION_ERROR
    }
}

// this is a ui action creator for email
export const receiveEmail = email => {
    return {
        type: RECEIVE_EMAIL,
        email
    }
}

export const signup = (formUser) => dispatch => (

    postUser(formUser).then(user => dispatch(receiveCurrentUser(user)),
        er => dispatch(receiveErrors(er.responseJSON))
    )
)


export const login = (formUser) => {
    return dispatch => {
        postSession(formUser).then((user) => {
         dispatch(receiveCurrentUser(user))
        },
            er => dispatch(receiveErrors(er.responseJSON))
        )
    }
}

export const logout = () => dispatch => (
    deleteSession().then((id) => dispatch(logoutCurrentUser(id.id)))
)




