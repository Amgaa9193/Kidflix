import { connect } from 'react-redux';
import SessionForm from './session_form'
import { login, removeErrors } from '../../actions/session_actions'

const mapStateToProps = (state) => {
    return {
        errors: state.errors.session
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        login: (user) => { dispatch(login(user))}, 
        removeErrors: () => {dispatch(removeErrors())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);