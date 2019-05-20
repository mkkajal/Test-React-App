/**
 * Export Actions
 */

import { push } from 'react-router-redux'


export const _authLogin = (props, data) => {
    return (dispatch) => {
        return dispatch()
    }
}

export const _authSuccess = (data) => {
   return (dispatch) => {
        dispatch({
            type: 'AUTH_SUCCESS',
            payload: data
        })
        // - Save the JWT in localStorage
        localStorage.setItem('token', "1234567890abcdefghijklmnopqrstuvwxyz");
       return dispatch(push('/'))
    }

}

export const _authFail = (error) => {
    return (dispatch) => {
        // - Remove the JWT in localStorage
        localStorage.removeItem('token');
        dispatch({
            type: 'AUTH_FAIL',
            payload: error
        })
        return dispatch(push('/login'))
    }

}