/**
|--------------------------------------------------
| Auth Page component
|--------------------------------------------------
*/
import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'


class Auth extends Component {

    render() {
        const {
            isAuthenticated,
            component: Component,
            ...props
          } = this.props
        return (
            <Route
                {...props}
                render={props =>
                    isAuthenticated
                        ? <Component {...props} />
                        : (
                            <Redirect to={{
                                pathname: '/login',
                                state: { from: props.location }
                            }} />
                        )
                }
            />
        )
    }
}
export default Auth