import { connect } from 'react-redux';
import PasswordForm from './password';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state) => {
    // debugger;
    return {
        pathType: "/signup",
        errors: state.errors.session,
        //get email prop from ui state
        email: state.ui.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    // debugger;
    return { 
        signup: (user) => { 
            // debugger;
            return dispatch(signup(user))
        } 
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordForm);