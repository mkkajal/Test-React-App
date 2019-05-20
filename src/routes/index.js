import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from '../containers/login';
import Auth from '../containers/auth';
import Dashboard from '../containers/dashboard';

export default (
    <div>
        <Switch>
            <Auth exact path="/" component={Dashboard} /> 
            <Route path="/login" component={Login} />
        </Switch>
    </div>
)

// Auth => Dashboard is the protected component