import React from 'react'
import { Route, Switch } from 'react-router'
import Loadable from 'react-loadable'
import AppLoader from './common/components/AppLoader'

// Import modules/routes
import PageNotFound from './common/components/PageNotFound'

// Code splitting with dynamic import
// https://reactjs.org/docs/code-splitting.html
const About = Loadable({
  loader: () => import('./about'),
  loading: AppLoader,
})

const Github = Loadable({
  loader: () => import('./github'),
  loading: AppLoader,
})

export default (
  <Switch>
    <Route exact path='/' component={Github} />
    <Route path='/about' component={About} />
    <Route path='*' component={PageNotFound} />
  </Switch>
)
