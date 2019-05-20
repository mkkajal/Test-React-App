/**
|--------------------------------------------------
| Dashboard Page Container
|--------------------------------------------------
*/
import Dashboard from '../components/dashboard';
/**
 * actions, reducers bindings
 */
import { _authFail } from '../actions/auth'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/**
 * map state, actions to props
 */
const mapStateToProps = (state) => {
    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}
const mapActionsToProps = (dispatch) => { return bindActionCreators({ _authFail }, dispatch) }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Dashboard))