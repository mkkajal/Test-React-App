/**
|--------------------------------------------------
| Auth Page Container
|--------------------------------------------------
*/
import Auth from '../components/auth';

/**
 * actions, reducers bindings
 */
import * as AuthActions from '../actions/auth'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

/**
 * map state, actions to props
 */
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}
const mapActionsToProps = (dispatch) => { return bindActionCreators({...AuthActions}, dispatch) }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(Auth))