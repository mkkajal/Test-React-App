/**
 * react, react-dom
 */
import React from 'react'
import ReactDOM from 'react-dom'
/**
 * primereact
 */
import 'primereact/resources/primereact.min.css'
import 'primereact/resources/themes/omega/theme.css'

/**
 *  styles
 */
import './assets/css/style.css';




/**
 * redux, react-redux, redux-thunk, create history
 */
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import thunk from 'redux-thunk'
/**
 * root reducer
 */
import rootReducer from './reducers'
// import rootReducer from './reducers/auth';

/**
 * register service worker
 */
import registerServiceWorker from './registerServiceWorker'
/**
 * create history
 */
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

// const router = routerMiddleware(hashHistory);
import routes from './routes';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

/**
 * create store
 */

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(middleware, thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// Check for token and update application state if required
const token = localStorage.getItem('token');
if (token) {
 
  store.dispatch({ type: "AUTH_SUCCESS" });
}


/**
 * Main component
 */
const Main = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {routes}
      </ConnectedRouter>
    </Provider>
  )
}
/**
 * render Main component
 */
ReactDOM.render(<Main />, document.getElementById('root'))

/**
 * register service worker, for future exploration !!
 */


registerServiceWorker()
