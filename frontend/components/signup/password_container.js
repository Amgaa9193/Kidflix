import { connect } from 'react-redux';
import PasswordForm from './password';
import { signup, removeErrors, receiveEmail } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    return {
        pathType: "/signup",
        errors: state.errors.session,
        //get email prop from ui state
        email: state.ui.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        signup: (user) => {  return dispatch(signup(user))} ,
        removeErrors: () => {dispatch(removeErrors())},
        receiveEmail: (email) => dispatch(receiveEmail(email))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);