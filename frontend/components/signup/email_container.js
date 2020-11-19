import { connect } from 'react-redux';
import EmailForm from './email'
import {login, receiveEmail} from '../../actions/session_actions';


const mapStateToProps = (state) => {
     (state);
    return { 
        errors: state.errors.session
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(login(user)),
        receiveEmail: (email) => dispatch(receiveEmail(email))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmailForm)