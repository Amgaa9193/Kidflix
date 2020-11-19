import { connect } from 'react-redux';
import Browse from './browse'
import {logout} from '../../actions/session_actions';


const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {logout: () => dispatch(logout())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Browse);