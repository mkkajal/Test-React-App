/**
 * export auth Reducers
 */


const auth = (state = 0, action) => {
     switch (action.type) {
        case 'AUTH_SUCCESS':
            return {
                ...action.payload,
                isAuthenticated: true,
            }

        case 'AUTH_FAIL':
            return {
                isAuthenticated: false,
                loginError: action.payload
            }

       
        default:
            return state
    }

}

export default auth