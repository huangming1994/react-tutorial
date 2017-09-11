import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactPage from './reactPage'
import ReduxPage from './reduxPage'
import RouterPage from './routerPage'

const routes = [
  {
    path: '/reactpage',
    component: ReactPage,
  },
  {
    path: '/reduxpage',
    component: ReduxPage,
  },
  {
    path: '/routerpage',
    component: RouterPage,
  },
]

const history = createBrowserHistory()

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    // pass the sub-routes down to keep nesting
    <route.component {...props} routes={route.routes}/>
  )}/>
)

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          {
            routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))
          }
        </div>
      </Router>
    )
  }
}
