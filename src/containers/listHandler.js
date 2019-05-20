/**
|--------------------------------------------------
| ListHandler Page Container
|--------------------------------------------------
*/
import ListHandler from '../components/listHandler';
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
       // tableData: state.user.tableData, // state will from user //reducer
      
    }
}
const mapActionsToProps = (dispatch) => { return bindActionCreators({ ...AuthActions }, dispatch) }

export default withRouter(connect(mapStateToProps, mapActionsToProps)(ListHandler))