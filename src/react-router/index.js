import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactPage from './reactPage'
import ReduxPage from './reduxPage'
import RouterPage from './routerPage'
import HomePage from './homePage'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
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
  <Route exact path={route.path} render={props => (
    <route.component {...props} />
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
