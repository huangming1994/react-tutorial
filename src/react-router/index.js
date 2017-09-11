import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactPage from './reactPage'
import ReduxPage from './reduxPage'
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
          <ul>
            <li><Link to="/">homepage</Link></li>
            <li><Link to="/reactpage">reactPage</Link></li>
            <li><Link to="/reduxpage">reduxPage</Link></li>
          </ul>
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
